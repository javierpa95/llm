import { getAllNews, CATEGORY_EMOJIS } from '../data/news'

function getCategoryClass(category: string): string {
  switch (category) {
    case 'modelos': return 'bg-purple-100 text-purple-700'
    case 'hardware': return 'bg-amber-100 text-amber-700'
    case 'investigación': return 'bg-blue-100 text-blue-700'
    case 'industria': return 'bg-green-100 text-green-700'
    default: return 'bg-neutral-100 text-neutral-700'
  }
}

export async function GET() {
  const allNews = getAllNews()
  
  const news = allNews.map(n => ({
    slug: n.slug,
    title: n.title,
    date: n.date,
    source: n.source,
    category: n.category,
    summary: n.summary,
    categoryEmoji: CATEGORY_EMOJIS[n.category] || '📄',
    categoryClass: getCategoryClass(n.category),
  }))

  return new Response(JSON.stringify(news, null, 2), {
    headers: { 'Content-Type': 'application/json' },
  })
}
