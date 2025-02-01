const puppeteer = require('puppeteer')
async function scrapeWebsite () {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(
    'https://app.nansen.ai/tokens?chains=base&chains=ethereum&chains=solana'
  ) 

  const data = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('table tr')) // Select table rows
    return rows.map(row => {
      const columns = Array.from(row.querySelectorAll('td, th')) // Select cells
      return columns.map(col => col.innerText.trim()) // Extract text
    })
  })

  console.log(data) // Print the extracted data

  // Close browser
  await browser.close()
}
scrapeWebsite()
