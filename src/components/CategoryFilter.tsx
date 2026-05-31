'use client'

import { Category, CATEGORIES } from '@/lib/types'

export default function CategoryFilter({ 
  selected, 
  onSelect 
}: { 
  selected: Category | null
  onSelect: (cat: Category | null) => void 
}) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
          selected === null
            ? 'bg-primary-600 text-white'
            : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
        }`}
      >
    全部
      </button>
      {CATEGORIES.map(cat => (
        <button
          key={cat.name}
          onClick={() => onSelect(cat.name)}
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            selected === cat.name
              ? 'bg-primary-600 text-white'
              : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
          }`}
        >
          {cat.icon} {cat.name}
        </button>
      ))}
    </div>
  )
}
