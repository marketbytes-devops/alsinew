const fs = require('fs');
const path = require('path');

function getActualCasePath(startDir, relPath) {
  const parts = relPath.replace(/\\/g, '/').split('/');
  let current = startDir;

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === '.' || part === '') continue;
    if (part === '..') {
      current = path.dirname(current);
      continue;
    }

    if (!fs.existsSync(current)) return null;

    try {
      const entries = fs.readdirSync(current);
      const matched = entries.find(e => e.toLowerCase() === part.toLowerCase());
      if (matched) {
        current = path.join(current, matched);
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  return current;
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const f of files) {
    if (!f.endsWith('.jsx')) continue;
    const fullPath = path.join(dir, f);
    let code = fs.readFileSync(fullPath, 'utf8');
    let changed = false;

    // Fix imports: import ... from "..."
    code = code.replace(/(import\s+[\s\S]*?from\s+["'])([^"']+)(["'])/g, (fullMatch, prefix, importPath, suffix) => {
      if (importPath.startsWith('.')) {
        const actual = getActualCasePath(path.dirname(fullPath), importPath);
        if (actual) {
          // Recompute relative path with exact casing
          let rel = path.relative(path.dirname(fullPath), actual).replace(/\\/g, '/');
          if (!rel.startsWith('.')) rel = './' + rel;
          if (rel !== importPath) {
            console.log(`[${f}] ${importPath} -> ${rel}`);
            changed = true;
            return prefix + rel + suffix;
          }
        }
      }
      return fullMatch;
    });

    if (changed) {
      fs.writeFileSync(fullPath, code, 'utf8');
    }
  }
}

processDirectory(path.join(__dirname, '../src/views/LandingPage'));
processDirectory(path.join(__dirname, '../src/views/LandingPageV1'));

// Also fix GuideVesselAgencySaudiArabia.jsx if needed
const gvPath = path.join(__dirname, '../src/views/LandingPage/GuideVesselAgencySaudiArabia.jsx');
if (fs.existsSync(gvPath)) {
  let gvCode = fs.readFileSync(gvPath, 'utf8');
  if (!gvCode.startsWith("'use client';")) {
    gvCode = "'use client';\n" + gvCode.replace(/import\s*\{\s*Helmet\s*\}\s*from\s*["']react-helmet-async["'];?\r?\n?/, '').replace(/<Helmet>[\s\S]*?<\/Helmet>/, '');
    fs.writeFileSync(gvPath, gvCode, 'utf8');
    console.log('Fixed GuideVesselAgencySaudiArabia.jsx');
  }
}

console.log('All import casing normalized to disk casing!');
