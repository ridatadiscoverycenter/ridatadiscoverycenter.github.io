const sass = require('sass')
const fs = require('fs')
const path = require('path')
const CleanCSS = require('clean-css')

const srcDir = 'src'
const outputDir = 'public/css'

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

function compileSassFile(inputFile, outputFile) {
  try {
    const result = sass.compile(path.join(srcDir, inputFile), {
      sourceMap: true,
      style: 'expanded',
      loadPaths: ['node_modules', 'src'],
    })

    // Minify CSS
    const minified = new CleanCSS({ sourceMap: true }).minify(result.css)

    // Write minified CSS
    fs.writeFileSync(path.join(outputDir, outputFile), minified.styles)

    // Write source map if available
    if (minified.sourceMap) {
      fs.writeFileSync(
        path.join(outputDir, outputFile + '.map'),
        minified.sourceMap.toString(),
      )
    }

    console.log(`✓ Compiled ${inputFile} -> ${outputFile}`)
  } catch (error) {
    console.error(`✗ Error compiling ${inputFile}:`, error.message)
    process.exit(1)
  }
}

// Compile both CSS files
compileSassFile('styles/app.sass', 'app.css')
compileSassFile('styles/app-dark.sass', 'app-dark.css')

console.log('CSS compilation completed successfully!')
