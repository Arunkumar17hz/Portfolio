import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { join } from 'path'

const dir = 'dist-single'
const html = readFileSync(join(dir, 'index.html'), 'utf8')

// Inline project images
const imgs = readdirSync(join(dir, 'images'))
let out = html
for (const f of imgs) {
  const buf = readFileSync(join(dir, 'images', f))
  const b64 = buf.toString('base64')
  const mime = f.endsWith('.png') ? 'image/png' : 'image/jpeg'
  const dataUri = `data:${mime};base64,${b64}`
  out = out.split(`./images/${f}`).join(dataUri)
}

// Inline favicon
const svg = readFileSync(join(dir, 'favicon.svg')).toString('base64')
out = out.split('./favicon.svg').join(`data:image/svg+xml;base64,${svg}`)

writeFileSync(join(dir, 'index.html'), out)
console.log('Inlined', imgs.length, 'images + favicon. New size:', out.length, 'bytes')
