"use client"

import { ArrowLeft, FileText, Clock, Eye, ThumbsUp, Plus } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "游戏出海版权保护完全指南",
    summary: "详细解析游戏企业出海过程中需要注意的版权法律问题...",
    status: "已发布",
    date: "2024-03-10",
    views: 3256,
    likes: 128,
  },
  {
    id: 2,
    title: "美国DMCA避风港规则适用解析",
    summary: "深入分析DMCA避风港规则的适用条件与实务操作要点...",
    status: "已发布",
    date: "2024-02-28",
    views: 2891,
    likes: 96,
  },
  {
    id: 3,
    title: "AI生成内容的版权保护困境与出路",
    summary: "探讨各国对AI生成内容版权保护的立法态度与司法实践...",
    status: "草稿",
    date: "2024-03-15",
    views: 0,
    likes: 0,
  },
]

export default function LawyerArticlesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-5 py-3">
          <Link href="/profile" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 transition-colors active:bg-gray-100">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <h1 className="flex-1 text-lg font-bold text-gray-900">专业文章</h1>
        </div>
      </header>

      {/* 文章列表 */}
      <div className="space-y-3 p-5">
        {articles.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100"
          >
            <div className="mb-3 flex items-start justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f4fc]">
                <FileText className="h-5 w-5 text-[#1a3a5c]" />
              </div>
              <span className={`whitespace-nowrap rounded-lg px-2 py-1 text-[10px] font-semibold ${
                item.status === "已发布" ? "bg-green-100 text-green-600" : "bg-gray-100 text-gray-600"
              }`}>
                {item.status}
              </span>
            </div>

            <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
            <p className="mb-3 line-clamp-2 text-sm text-gray-500">{item.summary}</p>

            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Clock className="h-3.5 w-3.5" />
                <span>{item.date}</span>
              </div>
              {item.status === "已发布" && (
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Eye className="h-3.5 w-3.5" />
                    <span>{item.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ThumbsUp className="h-3.5 w-3.5" />
                    <span>{item.likes}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 新建文章按钮 */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white/95 p-5 pb-safe-bottom backdrop-blur-lg">
        <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#1a3a5c] py-4 text-base font-bold text-white transition-all active:scale-[0.98]">
          <Plus className="h-5 w-5" />
          撰写新文章
        </button>
      </div>
    </div>
  )
}
