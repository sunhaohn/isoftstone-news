import { getCategoriesWithCount, getNewsByCategory } from '@/lib/utils'
import Link from 'next/link'

export default function CategoriesPage() {
  const categories = getCategoriesWithCount()

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">新闻分类</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map(cat => {
          const articles = getNewsByCategory(cat.name)
          return (
            <div key={cat.name} className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {cat.icon} {cat.name}
                </h2>
                <span className="text-sm text-slate-500">{cat.count} 篇</span>
              </div>
              <div className="space-y-3">
                {articles.slice(0, 3).map(article => (
                  <Link key={article.id} href={`/news/${article.id}`} className="block hover:text-primary-600 transition-colors">
                    <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 line-clamp-1">{article.title}</h3>
                    <p className="text-xs text-slate-400 mt-0.5">{article.date}</p>
                  </Link>
                ))}
              </div>
              <Link href={`/news?category=${encodeURIComponent(cat.name)}`} className="inline-block mt-4 text-sm text-primary-600 hover:text-primary-700">
                查看全部 &rarr;
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
