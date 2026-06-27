import fs from 'fs'
import path from 'path'

export interface NewsItem {
  slug: string
  title: string
  date: string
  source: string
  sourceUrl: string
  category: string
  summary: string
  readingTime: string
  tags: string[]
  content: string
}

const newsDir = path.resolve(process.cwd(), 'noticias/published')

function parseFrontmatter(filePath: string): { slug: string; data: Record<string, any>; body: string } | null {
  const content = fs.readFileSync(filePath, 'utf-8')
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!fmMatch) return null

  const fmLines = fmMatch[1].split('\n')
  const body = fmMatch[2].trim()
  const data: Record<string, any> = {}

  for (const line of fmLines) {
    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.substring(0, colonIdx).trim()
    let val: any = line.substring(colonIdx + 1).trim().replace(/^"|"$/g, '')

    // Detectar arrays: [item1, item2]
    if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map((t: string) => t.trim().replace(/^"|"$/g, ''))
    }
    // Detectar números
    if (!isNaN(Number(val)) && val !== '') {
      val = Number(val)
    }
    // Booleans
    if (val === 'true') val = true
    if (val === 'false') val = false

    data[key] = val
  }

  const slug = path.basename(filePath).replace('.md', '')
  return { slug, data, body }
}

export function getAllNews(): NewsItem[] {
  try {
    if (!fs.existsSync(newsDir)) return []
    
    const files = fs.readdirSync(newsDir)
      .filter(f => f.endsWith('.md') && f !== 'index.md')
      .sort()
      .reverse()

    const news: NewsItem[] = []

    for (const file of files) {
      const parsed = parseFrontmatter(path.join(newsDir, file))
      if (!parsed) continue
      
      news.push({
        slug: parsed.slug,
        title: parsed.data.title || '',
        date: parsed.data.date || '',
        source: parsed.data.source || '',
        sourceUrl: parsed.data.source_url || '',
        category: parsed.data.category || '',
        summary: parsed.data.summary || '',
        readingTime: parsed.data.reading_time || '',
        tags: Array.isArray(parsed.data.tags) ? parsed.data.tags : [],
        content: parsed.body,
      })
    }

    news.sort((a, b) => b.date.localeCompare(a.date))
    return news
  } catch {
    return []
  }
}

export function getLatestNews(count: number = 3): NewsItem[] {
  return getAllNews().slice(0, count)
}

export function getNewsBySlug(slug: string): NewsItem | undefined {
  return getAllNews().find(n => n.slug === slug)
}

export const CATEGORY_EMOJIS: Record<string, string> = {
  modelos: '🧠',
  hardware: '🔌',
  investigación: '🔬',
  industria: '🏢',
  herramientas: '🛠️',
}
