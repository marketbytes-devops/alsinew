const fs = require('fs');
const path = require('path');

const landingImagesDir = path.join(__dirname, '../src/assets/images/Landing');
const diskEntries = fs.readdirSync(landingImagesDir);
// Map lowercase to actual disk name
const diskMap = {};
diskEntries.forEach(entry => {
  diskMap[entry.toLowerCase()] = entry;
});

function fixFolderImports(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  files.forEach(file => {
    if (!file.endsWith('.jsx')) return;
    const filePath = path.join(dirPath, file);
    let code = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    // Add use client
    if (!code.startsWith("'use client';")) {
      code = "'use client';\n" + code;
      changed = true;
    }

    // Remove Helmet import
    if (code.includes('react-helmet-async')) {
      code = code.replace(/import\s*\{\s*Helmet\s*\}\s*from\s*["']react-helmet-async["'];?\r?\n?/, '');
      changed = true;
    }

    // Remove Helmet JSX block
    if (code.includes('<Helmet>')) {
      code = code.replace(/<Helmet>[\s\S]*?<\/Helmet>/, '');
      changed = true;
    }

    // Fix Landing image import path casings
    // Matches: "../../assets/images/Landing/SOME_FOLDER/SOME_FILE.webp"
    code = code.replace(/(\.\.\/\.\.\/assets\/images\/Landing\/)([^/'"]+)(\/[^'"]+)/g, (fullMatch, prefix, folder, rest) => {
      const lower = folder.toLowerCase();
      if (diskMap[lower] && diskMap[lower] !== folder) {
        console.log(`Fixing casing in ${file}: ${folder} -> ${diskMap[lower]}`);
        changed = true;
        return prefix + diskMap[lower] + rest;
      }
      return fullMatch;
    });

    if (changed) {
      fs.writeFileSync(filePath, code, 'utf8');
      fixedCount++;
    }
  });

  console.log(`Updated ${fixedCount} files in ${path.basename(dirPath)}`);
}

fixFolderImports(path.join(__dirname, '../src/views/LandingPage'));
fixFolderImports(path.join(__dirname, '../src/views/LandingPageV1'));
