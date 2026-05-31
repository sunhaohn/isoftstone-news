import { getNewsGroupedByDate, formatDate } from '@/lib/utils'
import { CATEGORIES } from '@/lib/types'
import Link from 'next/link'

export default function TimelinePage() {
  const grouped = getNewsGroupedByDate()
  const dates = Array.from(grouped.keys())

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">新闻时间线</h1>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-700"></div>
        <div className="space-y-8">
          {dates.map(date => (
            <div key={date} className="relative pl-12">
              <div className="absolute left-2.5 w-3 h-3 bg-primary-500 rounded-full border-2 border-white dark:border-slate-900"></div>
              <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-3">{formatDate(date)}</div>
              <div className="space-y-3">
                {grouped.get(date)!.map(article => {
                  const cat = CATEGORIES.find(c => c.name === article.category)
                  return (
                    <Link key={article.id} href={`/news/${article.id}`} className="block bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors">
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${cat?.color}`}>{cat?.icon} {article.category}</span>
                      </div>
                      <h3 className="font-medium text-slate-900 dark:text-white">{article.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">{article.summary}</p>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
