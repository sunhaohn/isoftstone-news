import { getCategoriesWithCount, getAllNews, getAllTags } from '@/lib/utils'

export default function Statistics() {
  const news = getAllNews()
  const categories = getCategoriesWithCount()
  const tags = getAllTags()

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 text-center">
        <div className="text-3xl font-bold text-primary-600">{news.length}</div>
        <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">新闻总数</div>
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 text-center">
        <div className="text-3xl font-bold text-accent-600">{categories.length}</div>
        <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">新闻分类</div>
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 text-center">
        <div className="text-3xl font-bold text-orange-500">{tags.length}</div>
        <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">标签数量</div>
      </div>
      <div className="bg-white dark:bg-slate-800 rounded-xl p-4 border border-slate-200 dark:border-slate-700 text-center">
        <div className="text-3xl font-bold text-purple-500">30</div>
        <div className="text-sm text-slate-500 dark:text-slate-400 mt-1">覆盖天数</div>
      </div>
    </div>
  )
}
