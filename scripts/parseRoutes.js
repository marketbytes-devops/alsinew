const fs = require('fs');

const appCode = fs.readFileSync('D:/alsi/src/App.jsx', 'utf8');

// Match all imports
const importRegex = /import\s+([A-Za-z0-9_]+)\s+from\s+["']\.\/pages\/(LandingPage(?:V1)?\/[A-Za-z0-9_]+)["']/g;
const componentPaths = {};
let match;
while ((match = importRegex.exec(appCode)) !== null) {
  componentPaths[match[1]] = match[2];
}

// Match all route definitions
const routeRegex = /\{\s*path:\s*["']([^"']+)["'],\s*element:\s*<([A-Za-z0-9_]+)\s*\/>\s*\}/g;
const routes = [];
while ((match = routeRegex.exec(appCode)) !== null) {
  const routePath = match[1];
  const comp = match[2];
  if (componentPaths[comp]) {
    routes.push({ routePath, component: comp, file: componentPaths[comp] });
  }
}

console.log('Total landing routes registered in App.jsx:', routes.length);
console.log('Sample routes:', JSON.stringify(routes.slice(0, 5), null, 2));

// Save to routes.json
fs.writeFileSync('scripts/landingRoutes.json', JSON.stringify(routes, null, 2), 'utf8');
console.log('Saved to scripts/landingRoutes.json');
