import fs from 'fs/promises'
import path from 'path'

const videoListModule = await import('./lib/utils/json-lists.js')
const outputDir = './public/assets/json'

async function main() {
  await fs.mkdir(outputDir, { recursive: true })

  // Only export keys (filter out __esModule and default if present)
  for (const key of Object.keys(videoListModule)) {
    if (key === 'default' || key === '__esModule') continue
    const filePath = path.join(outputDir, `${key}.json`)
    await fs.writeFile(filePath, JSON.stringify(videoListModule[key], null, 2))
    console.log(`Wrote ${filePath}`)
  }
}

main().catch(console.error)
