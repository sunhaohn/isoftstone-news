import Link from 'next/link'
import NewsCard from '@/components/NewsCard'
import Statistics from '@/components/Statistics'
import TagCloud from '@/components/TagCloud'
import { getAllNews, getAllTags, getCategoriesWithCount } from '@/lib/utils'

export default function HomePage() {
  const news = getAllNews()
  const tags = getAllTags()
  const categories = getCategoriesWithCount()
  const latestNews = news.slice(0, 6)

  return (
    <div className="space-y-8">
      <section className="text-center py-8">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
          软通新闻智能整理器
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          汇聚软通动力近30天新闻动态，智能分类、时间线展示、关键词搜索
        </p>
      </section>

      <Statistics />

      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">最新动态</h2>
          <Link href="/news" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
            查看全部 &rarr;
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {latestNews.map(article => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">分类概览</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {categories.map(cat => (
              <Link
                key={cat.name}
                href={`/news?category=${encodeURIComponent(cat.name)}`}
                className="bg-white dark:bg-slate-800 rounded-lg p-4 border border-slate-200 dark:border-slate-700 hover:border-primary-300 dark:hover:border-primary-600 transition-colors text-center"
              >
                <div className="text-2xl mb-1">{cat.icon}</div>
                <div className="text-sm font-medium text-slate-700 dark:text-slate-300">{cat.name}</div>
                <div className="text-xs text-slate-500 mt-1">{cat.count} 篇</div>
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">热门标签</h2>
          <TagCloud tags={tags} />
        </div>
      </section>
    </div>
  )
}
