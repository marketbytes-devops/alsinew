fetch('http://localhost:3000/').then(r => r.text()).then(html => {
  const sectionMatch = html.match(/<section[^>]*aria-label="Hero Banner"[^>]*>/);
  console.log('SECTION TAG:', sectionMatch ? sectionMatch[0] : 'NOT FOUND');
  const h1Match = html.match(/<h1[^>]*>/);
  console.log('H1 TAG:', h1Match ? h1Match[0] : 'NOT FOUND');
});
