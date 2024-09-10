import fs from 'fs/promises'
import path from 'path'

const directoryPath = './public/assets/bg-images'
const outputJsPath = './public/assets/bg-images/bg-image-list.js'

function formatLabel(name) {
  return name.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())
}

async function generateBgImgList() {
  try {
    const files = await fs.readdir(directoryPath)

    // Filter by jpg files
    const sourceFiles = files.filter((file) => path.extname(file).toLowerCase() === '.jpg')

    const images = sourceFiles.map((file) => {
      const name = path.parse(file).name
      return {
        value: name,
        label: formatLabel(name),
      }
    })

    // Generate JS file with unquoted keys, single-quoted values, and trailing comma
    const outputJsFile = `export const bgImageNames = [\n  ${images
      .map((icon) => `{ value: '${icon.value}', label: '${icon.label}' }`)
      .join(',\n  ')},\n]\n`

    await fs.writeFile(outputJsPath, outputJsFile)
  } catch (err) {
    console.error('Error processing the files:', err)
  }
}

generateBgImgList()
