const fs = require('fs');
const path = require('path');

function convertFile(filePath, transformer) {
  if (!fs.existsSync(filePath)) return;
  let code = fs.readFileSync(filePath, 'utf8');
  code = transformer(code);
  fs.writeFileSync(filePath, code, 'utf8');
  console.log('Updated: ' + path.relative(path.join(__dirname, '..'), filePath));
}

// 1. Gallery
convertFile(path.join(__dirname, '../src/pages/Gallery/index.jsx'), code => {
  if (!code.startsWith("'use client';")) code = "'use client';\n" + code;
  code = code.replace(/import\s*\{\s*Helmet\s*\}\s*from\s*["']react-helmet-async["'];?\r?\n?/, '');
  code = code.replace(/<Helmet>[\s\S]*?<\/Helmet>/, '');
  return code;
});

// 2. GalleryMain
convertFile(path.join(__dirname, '../src/pages/Gallery/GalleryMain/index.jsx'), code => {
  if (!code.startsWith("'use client';")) code = "'use client';\n" + code;
  code = code.replace(/import\s*\{\s*Link\s*\}\s*from\s*["']react-router-dom["'];?/, 'import Link from "next/link";');
  code = code.replace(/<Link\s+to=/g, '<Link href=');
  return code;
});

// 3. GalleryDedicatedPage
convertFile(path.join(__dirname, '../src/pages/Gallery/DedicatedPage/index.jsx'), code => {
  if (!code.startsWith("'use client';")) code = "'use client';\n" + code;
  code = code.replace(/import\s*\{\s*Helmet\s*\}\s*from\s*["']react-helmet-async["'];?\r?\n?/, '');
  code = code.replace(/import\s*\{\s*useParams\s*\}\s*from\s*["']react-router-dom["'];?/, 'import { useParams } from "next/navigation";');
  code = code.replace(/const\s*\{\s*name:\s*eventName\s*\}\s*=\s*useParams\(\);?/, 'const params = useParams(); const eventName = params?.name;');
  code = code.replace(/<Helmet>[\s\S]*?<\/Helmet>/, '');
  return code;
});

// 4. SpecializedSetup
convertFile(path.join(__dirname, '../src/pages/Services/UiComponents/SpecializedSetup.jsx'), code => {
  if (!code.startsWith("'use client';")) code = "'use client';\n" + code;
  code = code.replace(/import\s*\{\s*Helmet\s*\}\s*from\s*["']react-helmet-async["'];?\r?\n?/, '');
  code = code.replace(/<Helmet>[\s\S]*?<\/Helmet>/, '');
  return code;
});

// 5. SpecializedDedicatedPage
convertFile(path.join(__dirname, '../src/pages/Services/UiComponents/SpecializedDedicatedPage.jsx'), code => {
  if (!code.startsWith("'use client';")) code = "'use client';\n" + code;
  code = code.replace(/import\s*\{\s*Helmet\s*\}\s*from\s*["']react-helmet-async["'];?\r?\n?/, '');
  code = code.replace(/import\s*\{\s*useParams\s*\}\s*from\s*["']react-router-dom["'];?/, 'import { useParams } from "next/navigation";');
  code = code.replace(/const\s*\{\s*link_url\s*\}\s*=\s*useParams\(\);?/, 'const params = useParams(); const link_url = params?.link_url || "";');
  code = code.replace(/<Helmet>[\s\S]*?<\/Helmet>/, '');
  return code;
});

// 6. DedicatedPage
convertFile(path.join(__dirname, '../src/pages/Services/DedicatedPage/index.jsx'), code => {
  if (!code.startsWith("'use client';")) code = "'use client';\n" + code;
  code = code.replace(/import\s*\{\s*Helmet\s*\}\s*from\s*["']react-helmet-async["'];?\r?\n?/, '');
  code = code.replace(/import\s*\{\s*useLocation,\s*useParams\s*\}\s*from\s*["']react-router-dom["'];?/, 'import { useParams } from "next/navigation";');
  code = code.replace(/const\s*\{\s*name:\s*link_url\s*\}\s*=\s*useParams\(\);?/, 'const params = useParams(); const link_url = params?.name || "";');
  code = code.replace(/const\s*\{\s*state\s*\}\s*=\s*useLocation\(\);?/, 'const state = null;');
  code = code.replace(/<Helmet>[\s\S]*?<\/Helmet>/, '');
  return code;
});
