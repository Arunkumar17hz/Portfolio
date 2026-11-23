import { readFileSync, writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const imgRoot = 'public/images'
const tpl = readFileSync('static-template.html', 'utf8')

const images = {
  __IMG1__: 'project-01.jpg',
  __IMG2__: 'project-02.jpg',
  __IMG3__: 'project-03.jpg',
  __PROFILE__: 'profile.jpg',
}

let out = tpl
for (const [ph, file] of Object.entries(images)) {
  const b64 = readFileSync(join(imgRoot, file)).toString('base64')
  out = out.split(ph).join(`data:image/jpeg;base64,${b64}`)
}

// Embed resume PDF as a downloadable data URI
const pdf = readFileSync('public/Arun-Kumar-Resume.pdf').toString('base64')
out = out.split('__RESUME__').join(`data:application/pdf;base64,${pdf}`)

mkdirSync('dist-static', { recursive: true })
writeFileSync(join('dist-static', 'index.html'), out)
console.log('Static HTML written:', (out.length / 1024).toFixed(0), 'KB')
console.log('placeholders left:', (out.match(/__(IMG|PROFILE|RESUME)__/g) || []).length)
