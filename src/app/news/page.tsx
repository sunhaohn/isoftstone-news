'use client'

import { useState, useMemo } from 'react'
import NewsCard from '@/components/NewsCard'
import SearchBar from '@/components/SearchBar'
import CategoryFilter from '@/components/CategoryFilter'
import { getAllNews, searchNews, getNewsByCategory } from '@/lib/utils'
import { Category } from '@/lib/types'

export default function NewsListPage() {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null)

  const filteredNews = useMemo(() => {
    let results = getAllNews()
    if (query) {
      results = searchNews(query)
    }
    if (selectedCategory) {
      results = results.filter(n => n.category === selectedCategory)
    }
    return results
  }, [query, selectedCategory])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">新闻列表</h1>
      <SearchBar onSearch={setQuery} />
      <CategoryFilter selected={selectedCategory} onSelect={setSelectedCategory} />
      <p className="text-sm text-slate-500">共 {filteredNews.length} 篇新闻</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredNews.map(article => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
      {filteredNews.length === 0 && (
        <div className="text-center py-12 text-slate-500">
          没有找到匹配的新闻
        </div>
      )}
    </div>
  )
}
