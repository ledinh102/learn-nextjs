import path from 'path'
import fs from 'fs'
import matter from 'gray-matter'

const BLOG_FOLDER = path.join(process.cwd(), 'blog')

export async function getPosts() {
  const fileNames = fs.readdirSync(BLOG_FOLDER)
  console.log('fileNames', fileNames)

  for (const fileName of fileNames) {
    const filePath = path.join(BLOG_FOLDER, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const matterResult = matter(fileContent, { excerpt_separator: '<!-- truncate-->' })
    console.log('matterResult', matterResult)
  }

  return []
}
