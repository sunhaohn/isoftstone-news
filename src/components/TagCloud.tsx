import Link from 'next/link'

export default function TagCloud({ tags }: { tags: { name: string; count: number }[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.slice(0, 20).map(tag => (
        <Link
          key={tag.name}
          href={`/news?tag=${encodeURIComponent(tag.name)}`}
          className="inline-flex items-center px-3 py-1 bg-slate-100 dark:bg-slate-700 hover:bg-primary-100 dark:hover:bg-primary-900 text-slate-700 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-300 rounded-full text-sm transition-colors"
        >
          #{tag.name}
          <span className="ml-1.5 text-xs text-slate-400">({tag.count})</span>
        </Link>
      ))}
    </div>
  )
}
