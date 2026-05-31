export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              软通新闻智能整理器 &copy; 2025
            </p>
            <p className="text-slate-500 dark:text-slate-500 text-xs mt-1">
              数据来源：软通动力官网及公开媒体报道
            </p>
          </div>
          <div className="text-slate-500 dark:text-slate-500 text-xs">
            基于 Next.js + Tailwind CSS 构建
          </div>
        </div>
      </div>
    </footer>
  )
}
