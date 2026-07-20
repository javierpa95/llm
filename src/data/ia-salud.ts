import fs from 'fs'
import path from 'path'

export interface IaSaludEntry {
  slug: string
  title: string
  date: string
  summary: string
  readingTime: string
  tags: string[]
  /** Artículos cubiertos en esta entrada */
  articles: IaSaludArticle[]
  content: string
}

export interface IaSaludArticle {
  title: string
  authors: string
  journal: string
  year: number
  pmid: string
  doi: string
  /** Categoría clínica/técnica */
  category: 'endocrino' | 'cardiologia' | 'oncologia' | 'radiologia' | 'salud-digital' | 'nlp-clinico' | 'etica-gdpr' | 'general'
}

const entriesDir = path.resolve(process.cwd(), 'ia-salud/published')

function parseFrontmatter(filePath: string): { slug: string; data: Record<string, any>; body: string } | null {
  const content = fs.readFileSync(filePath, 'utf-8')
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!fmMatch) return null

  const fmLines = fmMatch[1].split('\n')
  const body = fmMatch[2].trim()
  const data: Record<string, any> = {}

  let currentKey = ''
  let currentArray: string[] = []

  for (const line of fmLines) {
    // Check if this is a list item (starts with - and we're in an array context)
    if (line.match(/^\s+-\s+/) && currentKey) {
      const item = line.replace(/^\s+-\s+/, '').trim().replace(/^"|"$/g, '')
      currentArray.push(item)
      continue
    }

    // If we were collecting an array, save it
    if (currentArray.length > 0) {
      data[currentKey] = currentArray
      currentArray = []
      currentKey = ''
    }

    const colonIdx = line.indexOf(':')
    if (colonIdx === -1) continue
    const key = line.substring(0, colonIdx).trim()
    let val: any = line.substring(colonIdx + 1).trim().replace(/^"|"$/g, '')

    if (val.startsWith('[') && val.endsWith(']')) {
      val = val.slice(1, -1).split(',').map((t: string) => t.trim().replace(/^"|"$/g, ''))
    } else if (val === '' || val === '[]') {
      // Empty array - start collecting
      currentKey = key
      currentArray = []
      continue
    }
    if (!isNaN(Number(val)) && val !== '') {
      val = Number(val)
    }
    if (val === 'true') val = true
    if (val === 'false') val = false

    data[key] = val
    currentKey = key
  }

  // Save any remaining array
  if (currentArray.length > 0) {
    data[currentKey] = currentArray
  }

  const slug = path.basename(filePath).replace('.md', '')
  return { slug, data, body }
}

/** Parsea el bloque `articles` del frontmatter (multi-línea YAML) */
function parseArticles(raw: any): IaSaludArticle[] {
  if (!raw) return []
  // Si es un array, cada elemento es un string con formato "title | authors | journal | year | pmid | doi | category"
  if (Array.isArray(raw)) {
    return raw.map((line: string) => {
      const parts = line.split('|').map((s: string) => s.trim())
      return {
        title: parts[0] || '',
        authors: parts[1] || '',
        journal: parts[2] || '',
        year: parseInt(parts[3]) || 2026,
        pmid: parts[4] || '',
        doi: parts[5] || '',
        category: (parts[6] || 'general') as IaSaludArticle['category'],
      }
    })
  }
  return []
}

export function getAllEntries(): IaSaludEntry[] {
  try {
    if (!fs.existsSync(entriesDir)) return []

    const files = fs.readdirSync(entriesDir)
      .filter((f: string) => f.endsWith('.md') && f !== 'index.md')
      .sort()
      .reverse()

    const entries: IaSaludEntry[] = []

    for (const file of files) {
      const parsed = parseFrontmatter(path.join(entriesDir, file))
      if (!parsed) continue

      entries.push({
        slug: parsed.slug,
        title: parsed.data.title || '',
        date: parsed.data.date || '',
        summary: parsed.data.summary || '',
        readingTime: parsed.data.reading_time || '',
        tags: Array.isArray(parsed.data.tags) ? parsed.data.tags : [],
        articles: parseArticles(parsed.data.articles),
        content: parsed.body,
      })
    }

    entries.sort((a, b) => b.date.localeCompare(a.date))
    return entries
  } catch {
    return []
  }
}

export function getLatestEntries(count: number = 3): IaSaludEntry[] {
  return getAllEntries().slice(0, count)
}

export function getEntryBySlug(slug: string): IaSaludEntry | undefined {
  return getAllEntries().find(e => e.slug === slug)
}

export const CATEGORY_INFO: Record<string, { label: string; emoji: string; color: string }> = {
  endocrino:    { label: 'Endocrino',    emoji: '🫀',  color: 'bg-red-100 text-red-700' },
  cardiologia:  { label: 'Cardiología',  emoji: '❤️',  color: 'bg-rose-100 text-rose-700' },
  oncologia:    { label: 'Oncología',    emoji: '🎗️',  color: 'bg-purple-100 text-purple-700' },
  radiologia:   { label: 'Radiología',   emoji: '🔬',  color: 'bg-blue-100 text-blue-700' },
  'salud-digital': { label: 'Salud Digital', emoji: '📱', color: 'bg-cyan-100 text-cyan-700' },
  'nlp-clinico': { label: 'NLP Clínico', emoji: '📝', color: 'bg-indigo-100 text-indigo-700' },
  'etica-gdpr': { label: 'Ética y GDPR', emoji: '⚖️',  color: 'bg-amber-100 text-amber-700' },
  general:     { label: 'General',       emoji: '🧠',  color: 'bg-neutral-100 text-neutral-700' },
}

// ─── Wikilinks entre entradas ───

let _slugCache: Record<string, string> | null = null

function _buildSlugCache(): Record<string, string> {
  if (!_slugCache) {
    _slugCache = {}
    try {
      const all = getAllEntries()
      for (const e of all) {
        _slugCache[e.slug] = e.title
      }
    } catch { /* fallback */ }
  }
  return _slugCache
}

export function resolveWikilinks(content: string): string {
  const slugs = _buildSlugCache()

  content = content.replace(
    /\[\[([^\[\]]+?)\|([^\[\]]+?)\]\]/g,
    (_match, slug, text) => {
      slug = slug.trim()
      const title = slugs[slug]
      if (!title) return _match
      return `[${text.trim()}](${makeUrl(slug)})`
    }
  )

  content = content.replace(/\[\[([^\[\]]+?)\]\]/g, (_match, slug) => {
    slug = slug.trim()
    const title = slugs[slug]
    if (!title) return _match
    return `[${title}](${makeUrl(slug)})`
  })

  return content
}

function makeUrl(slug: string): string {
  return `/ia-salud/${slug}`
}
