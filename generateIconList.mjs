import fs from 'fs/promises'
import path from 'path'

const directoryPath = './public/assets/font-awesome'
const outputJsPath = './public/assets/font-awesome/icon-list.js'

function formatLabel(name) {
  return name.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase())
}

async function generateIconLists() {
  try {
    const files = await fs.readdir(directoryPath)

    // Filter by svg files
    const svgFiles = files.filter((file) => path.extname(file).toLowerCase() === '.svg')

    const icons = svgFiles.map((file) => {
      const name = path.parse(file).name
      return {
        value: name,
        label: formatLabel(name),
      }
    })

    // Generate JS file
    const outputJsFile = `export const iconNames = [\n  ${icons.map((icon) => JSON.stringify(icon)).join(',\n  ')}\n];`
    await fs.writeFile(outputJsPath, outputJsFile)
  } catch (err) {
    console.error('Error processing the files:', err)
  }
}

generateIconLists()
