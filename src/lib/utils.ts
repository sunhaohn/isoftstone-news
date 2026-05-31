import { NewsArticle, Category, CATEGORIES, CategoryInfo } from './types'
import newsData from '../data/news.json'

export function getAllNews(): NewsArticle[] {
  return (newsData as NewsArticle[]).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
}

export function getNewsById(id: string): NewsArticle | undefined {
  return (newsData as NewsArticle[]).find((n) => n.id === id)
}

export function getNewsByCategory(category: Category): NewsArticle[] {
  return getAllNews().filter((n) => n.category === category)
}

export function getNewsByTag(tag: string): NewsArticle[] {
  return getAllNews().filter((n) => n.tags.includes(tag))
}

export function searchNews(query: string): NewsArticle[] {
  const q = query.toLowerCase()
  return getAllNews().filter(
    (n) =>
      n.title.toLowerCase().includes(q) ||
      n.summary.toLowerCase().includes(q) ||
      n.content.toLowerCase().includes(q) ||
      n.tags.some((t) => t.toLowerCase().includes(q))
  )
}

export function getAllTags(): { name: string; count: number }[] {
  const tagMap = new Map<string, number>()
  const news = getAllNews()
  news.forEach((n) => {
    n.tags.forEach((t) => {
      tagMap.set(t, (tagMap.get(t) || 0) + 1)
    })
  })
  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

export function getCategoriesWithCount(): CategoryInfo[] {
  const news = getAllNews()
  return CATEGORIES.map((cat) => ({
    ...cat,
    count: news.filter((n) => n.category === cat.name).length,
  }))
}

export function getNewsGroupedByDate(): Map<string, NewsArticle[]> {
  const news = getAllNews()
  const grouped = new Map<string, NewsArticle[]>()
  news.forEach((n) => {
    const date = n.date
    if (!grouped.has(date)) {
      grouped.set(date, [])
    }
    grouped.get(date)!.push(n)
  })
  return grouped
}

export function formatDate(dateStr: string): string {
  const date = new Date(dateStr)
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function getRelativeDate(dateStr: string): string {
  const now = new Date()
  const date = new Date(dateStr)
  const diff = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24))
  if (diff === 0) return '今天'
  if (diff === 1) return '昨天'
  if (diff < 7) return `${diff}天前`
  if (diff < 30) return `${Math.floor(diff / 7)}周前`
  return `${Math.floor(diff / 30)}个月前`
}
