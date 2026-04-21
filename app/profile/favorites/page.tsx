"use client"

import { ArrowLeft, Scale, FileText, BookOpen, ChevronRight, Trash2 } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const categories = [
  { id: "all", name: "全部" },
  { id: "laws", name: "法规" },
  { id: "cases", name: "案例" },
  { id: "guides", name: "指引" },
]

const favorites = [
  {
    id: 1,
    type: "law",
    icon: Scale,
    title: "美国数字千年版权法（DMCA）",
    subtitle: "美国 · 著作权法",
    href: "/laws/1",
    date: "2024-03-10",
  },
  {
    id: 2,
    type: "case",
    icon: FileText,
    title: "Viacom v. YouTube 版权侵权案",
    subtitle: "美国 · 2012年",
    href: "/cases/1",
    date: "2024-03-08",
  },
  {
    id: 3,
    type: "guide",
    icon: BookOpen,
    title: "美国版权登记全流程指南",
    subtitle: "版权登记 · 15分钟阅读",
    href: "/guides/1",
    date: "2024-03-05",
  },
]

export default function FavoritesPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/profile" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="flex-1 text-lg font-semibold text-foreground">我的收藏</h1>
          <button className="text-sm text-primary">管理</button>
        </div>

        {/* 分类筛选 */}
        <div className="scrollbar-hide flex gap-2 overflow-x-auto px-4 pb-3">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`flex-shrink-0 rounded-full px-3 py-1.5 text-sm transition-all ${
                selectedCategory === cat.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </header>

      {/* 收藏列表 */}
      <section className="px-4 py-4">
        <div className="space-y-3">
          {favorites.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex items-center gap-3 rounded-xl bg-card p-4 ring-1 ring-border/50 transition-all active:scale-[0.99] active:bg-muted/30"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-sm font-medium text-foreground">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-lg p-2 text-muted-foreground transition-colors active:bg-muted">
                  <Trash2 className="h-4 w-4" />
                </button>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {favorites.length === 0 && (
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-muted">
            <Scale className="h-10 w-10 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground">暂无收藏内容</p>
        </div>
      )}
    </div>
  )
}
