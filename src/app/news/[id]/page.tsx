import { getAllNews, getNewsById, formatDate } from '@/lib/utils'
import { CATEGORIES } from '@/lib/types'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return getAllNews().map(n => ({ id: n.id }))
}

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const article = getNewsById(params.id)
  if (!article) notFound()

  const cat = CATEGORIES.find(c => c.name === article.category)
  const relatedNews = getAllNews()
    .filter(n => n.id !== article.id && n.category === article.category)
    .slice(0, 3)

  return (
    <div className="max-w-4xl mx-auto">
      <Link href="/news" className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 mb-6">
        <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        返回列表
      </Link>

      <article className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${cat?.color}`}>
            {cat?.icon} {article.category}
          </span>
          <span className="text-sm text-slate-500">{formatDate(article.date)}</span>
          <span className="text-sm text-slate-400">来源: {article.source}</span>
        </div>

        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">{article.title}</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 border-l-4 border-primary-500 pl-4">{article.summary}</p>

        <div className="prose dark:prose-invert max-w-none">
          {article.content.split('\n\n').map((p, i) => (
            <p key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">{p}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
          {article.tags.map(tag => (
            <Link
              key={tag}
              href={`/news?tag=${encodeURIComponent(tag)}`}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full text-sm hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </article>

      {relatedNews.length > 0 && (
        <section className="mt-8">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">相关新闻</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {relatedNews.map(n => (
              <Link key={n.id} href={`/news/${n.id}`} className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:border-primary-300 transition-colors">
                <h3 className="font-medium text-sm text-slate-900 dark:text-white line-clamp-2">{n.title}</h3>
                <p className="text-xs text-slate-500 mt-2">{n.date}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
