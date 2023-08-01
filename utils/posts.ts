import { Post } from '@/models'
import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const BLOG_FOLDER = path.join(process.cwd(), 'blog')

export async function getPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(BLOG_FOLDER)
  console.log('fileNames', fileNames)

  const posts: Post[] = []
  for (const fileName of fileNames) {
    const filePath = path.join(BLOG_FOLDER, fileName)
    const fileContent = fs.readFileSync(filePath, 'utf-8')

    const { data, excerpt, content } = matter(fileContent, { excerpt_separator: '<!-- truncate-->' })
    posts.push({
      id: fileName,
      slug: data.slug,
      title: data.title,
      author: {
        name: data.author,
        title: data.author_title,
        profileUrl: data.author_url,
        avatarUrl: data.author_image_url
      },
      tagList: data.tags,
      publishedDate: data.date,
      description: excerpt || '',
      mdContent: content
    })
  }

  return posts
}
