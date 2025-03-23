const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const filePath = path.resolve(__dirname, '../docs/index.html');
  const outputPath = path.resolve(__dirname, '../docs/bvbrc-api.pdf');

  if (!fs.existsSync(filePath)) {
    console.error('❌ Redoc HTML not found. Run `npm run docs:html` first.');
    process.exit(1);
  }

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`file://${filePath}`, { waitUntil: 'networkidle0' });
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
  });

  await browser.close();
  console.log(`✅ PDF generated: ${outputPath}`);
})();