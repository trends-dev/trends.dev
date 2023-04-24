import { fileURLToPath } from 'url'
import { join, resolve } from 'pathe'
import fs from 'fs-extra'
import { $fetch } from 'ohmyfetch'

const docsDir = resolve(fileURLToPath(import.meta.url), '../../..')
const pathContributors = resolve(docsDir, '.vitepress/scripts/sponsor-info.json')
const dirAvatars = resolve(docsDir, 'src/public/avatars/')
const dirSponsors = resolve(docsDir, 'src/public/sponsors/')

let contributors: {name:string,url:string}[] = []

async function download(url: string, fileName: string) {
  if (fs.existsSync(fileName))
    return
  // eslint-disable-next-line no-console
  console.log('downloading', fileName)
  try {
    const image = await $fetch(url, { responseType: 'arrayBuffer' })
    await fs.writeFile(fileName, Buffer.from(image))
  }
  catch {}
}

async function fetchAvatars() {
  await fs.ensureDir(dirAvatars)
  contributors = JSON.parse(await fs.readFile(pathContributors, { encoding: 'utf-8' }))
  await Promise.all(contributors.map(item => download(item.url, join(dirAvatars, `${item.name}.png`))))
}

fetchAvatars()
