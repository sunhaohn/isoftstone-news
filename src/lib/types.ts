export interface NewsArticle {
  id: string
  title: string
  summary: string
  content: string
  category: Category
  tags: string[]
  date: string
  source: string
  imageUrl?: string
}

export type Category =
  | 'AI与大模型'
  | '数字化转型'
  | '合作签约'
  | '企业动态'
  | '财务业绩'
  | '国际化'
  | '产品发布'
  | '行业洞察'

export interface CategoryInfo {
  name: Category
  icon: string
  color: string
  count?: number
}

export const CATEGORIES: CategoryInfo[] = [
  { name: 'AI与大模型', icon: '🤖', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' },
  { name: '数字化转型', icon: '🔄', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' },
  { name: '合作签约', icon: '🤝', color: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' },
  { name: '企业动态', icon: '📢', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' },
  { name: '财务业绩', icon: '📊', color: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' },
  { name: '国际化', icon: '🌍', color: 'bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200' },
  { name: '产品发布', icon: '🚀', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' },
  { name: '行业洞察', icon: '💡', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' },
]
