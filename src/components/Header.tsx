'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleDark = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <header className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">软通</span>
            </div>
            <span className="font-bold text-lg text-slate-900 dark:text-white">新闻智能整理器</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">首页</Link>
            <Link href="/news" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">新闻列表</Link>
            <Link href="/timeline" className="text-slate-600 darxt-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">时间线</Link>
            <Link href="/categories" className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">分类</Link>
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
              aria-label="切换暗色模式"
            >
              {darkMode ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              )}
            </button>
          </nav>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="菜单"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="text-slate-600 dark:text-slate-300 hover:text-primary-600">首页</Link>
              <Link href="/news" className="text-slate-600 dark:text-slate-300 hover:text-primary-600">新闻列表</Link>
              <Link href="/timeline" className="text-slate-600 dark:text-slate-300 hover:text-primary-600">时间线</Link>
              <Link href="/categories" className="text-slate-600 dark:text-slate-300 hover:text-primary-600">分类</Link>
              <button onClick={toggleDark} className="text-left text-slate-600 dark:text-slate-300">
                {darkMode ? '☀️ 浅色模式' : '🌙 暗色模式'}
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
