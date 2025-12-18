// Simple Puppeteer-based scraper to collect image URLs from a BMW page.
// Usage (from project root):
//   node scrape-bmw-images.mjs > bmw-image-urls.json
//
// NOTE: This is a generic scraper – you can change the `TARGET_URL` and
// tweak the filtering logic below to narrow down which images you keep.

import puppeteer from 'puppeteer';

// TODO: Replace with the exact BMW URL you want to scrape
const TARGET_URL =
  'https://www.bmwusa.com/vehicles/all-vehicles.html'; // example placeholder

async function scrapeImages() {
  const browser = await puppeteer.launch({
    headless: 'new'
  });

  try {
    const page = await browser.newPage();
    await page.goto(TARGET_URL, {
      waitUntil: 'networkidle2',
      timeout: 120_000
    });

    // Give BMW’s frontend a bit of extra time to hydrate / lazy-load content.
    // Using waitFor with a timeout here because older Puppeteer (1.x) does not
    // support page.waitForTimeout.
    await page.waitFor(5000);

    const imageUrls = await page.evaluate(() => {
      const srcs = Array.from(document.querySelectorAll('img'))
        .map((img) => img.src || img.getAttribute('data-src') || '')
        .filter(Boolean);

      // Basic filtering: keep https URLs and skip obvious 1x1 / sprite / data URLs
      return Array.from(
        new Set(
          srcs.filter(
            (src) =>
              src.startsWith('http') &&
              !src.includes('data:image') &&
              !src.toLowerCase().includes('sprite') &&
              !src.toLowerCase().includes('icon')
          )
        )
      );
    });

    // Print as JSON so you can redirect into a file
    console.log(JSON.stringify({ url: TARGET_URL, images: imageUrls }, null, 2));
  } finally {
    await browser.close();
  }
}

scrapeImages().catch((err) => {
  console.error('Error while scraping images:', err);
  process.exit(1);
});


