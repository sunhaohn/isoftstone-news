'use client'

import { useState } from 'react'
import { CATEGORIES, Category, NewsArticle } from '@/lib/types'
import { getAllNews } from '@/lib/utils'

export default function AdminPage() {
  const existingNews = getAllNews()
  const [newsList, setNewsList] = useState<NewsArticle[]>(existingNews)
  const [editing, setEditing] = useState(false)
  const [form, setForm] = useState({
    title: '',
    summary: '',
    content: '',
    category: 'AI与大模型' as Category,
    tags: '',
    date: new Date().toISOString().split('T')[0],
    source: '软通动力官网',
  })
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newArticle: NewsArticle = {
      id: String(newsList.length + 1),
      title: form.title,
      summary: form.summary,
      content: form.content,
      category: form.category,
      tags: form.tags.split(',').map(t => t.trim()).filter(Boolean),
      date: form.date,
      source: form.source,
    }
    setNewsList([newArticle, ...newsList])
    setMessage(`已添加新闻: "${form.title}"`)
    setForm({
      title: '',
      summary: '',
      content: '',
      category: 'AI与大模型',
      tags: '',
      date: new Date().toISOString().split('T')[0],
      source: '软通动力官网',
    })
    setTimeout(() => setMessage(''), 3000)
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">新闻管理</h1>
      <p className="text-slate-600 dark:text-slate-400">添加、编辑软通动力新闻内容</p>

      {message && (
        <div className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-3 rounded-lg">
          {message}
        </div>
      )}

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">添加新闻</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">标题</label>
            <input
              type="text"
              required
              value={form.title}
              onChange={e => setForm({...form, title: e.target.value})}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="输入新闻标题"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">摘要</label>
            <textarea
              required
              value={form.summary}
              onChange={e => setForm({...form, summary: e.target.value})}
              rows={2}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="输入新闻摘要"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">正文内容</label>
            <textarea
              required
              value={form.content}
              onChange={e => setForm({...form, content: e.target.value})}
              rows={5}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              placeholder="输入新闻正文（段落间用空行分隔）"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">分类</label>
              <select
                value={form.category}
                onChange={e => setForm({...form, category: e.target.value as Category})}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
              >
                {CATEGORIES.map(cat => (
                  <option key={cat.name} value={cat.name}>{cat.icon} {cat.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">日期</label>
              <input
                type="date"
                value={form.date}
                onChange={e => setForm({...form, date: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">来源</label>
              <input
                type="text"
                value={form.source}
                onChange={e => setForm({...form, source: e.target.value})}
                className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
                placeholder="新闻来源"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">标签（逗号分隔）</label>
            <input
              type="text"
              value={form.tags}
              onChange={e => setForm({...form, tags: e.target.value})}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
              placeholder="AI, 大模型, 合作"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            添加新闻
          </button>
        </form>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">已有新闻 ({newsList.length} 篇)</h2>
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {newsList.map(article => (
            <div key={article.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-slate-900 dark:text-white truncate">{article.title}</h3>
                <p className="text-xs text-slate-500">{article.date} · {article.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
