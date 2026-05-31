import Link from 'next/link'
import { NewsArticle, CATEGORIES } from '@/lib/types'

export default function NewsCard({ article }: { article: NewsArticle }) {
  const cat = CATEGORIES.find(c => c.name === article.category)

  return (
    <Link href={`/news/${article.id}`} className="block group">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 p-6 hover:shadow-md hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-200">
        <div className="flex items-center justify-between mb-3">
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${cat?.color || 'bg-gray-100 text-gray-800'}`}>
            {cat?.icon} {article.category}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400">{article.date}</span>
        </div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 mb-3">
          {article.summary}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {article.tags.slice(0, 3).map(tag => (
            <span key={tag} className="inline-block px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
