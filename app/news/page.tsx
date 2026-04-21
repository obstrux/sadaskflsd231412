"use client"

import { ArrowLeft, Search, ChevronRight, Clock, Bookmark, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const newsCategories = [
  { id: "all", name: "全部" },
  { id: "training", name: "培训研讨" },
  { id: "achievement", name: "成果指引" },
  { id: "policy", name: "政策解读" },
  { id: "industry", name: "行业动态" },
]

const newsItems = [
  {
    id: 1,
    type: "培训研讨",
    typeColor: "bg-blue-100 text-blue-700",
    title: "2024跨境版权保护实务研讨会即将召开",
    summary: "本次研讨会将邀请中美两国知名知识产权专家，围绕数字版权跨境保护最新动态进行深度探讨...",
    date: "2024-03-15",
    isHot: true,
    views: 2856,
  },
  {
    id: 2,
    type: "成果指引",
    typeColor: "bg-emerald-100 text-emerald-700",
    title: "《游戏出海版权合规白皮书》正式发布",
    summary: "详细梳理了主要海外市场的游戏版权法律要点，为国内游戏企业出海提供全面指引...",
    date: "2024-03-12",
    isHot: false,
    views: 1923,
  },
  {
    id: 3,
    type: "培训研讨",
    typeColor: "bg-blue-100 text-blue-700",
    title: "AI生成内容版权归属线上课程开放报名",
    summary: "系统讲解各国对AI生成内容的版权保护态度与最新立法动向，帮助企业规避潜在风险...",
    date: "2024-03-10",
    isHot: false,
    views: 1567,
  },
  {
    id: 4,
    type: "成果指引",
    typeColor: "bg-emerald-100 text-emerald-700",
    title: "欧盟数字服务法(DSA)合规要点解读",
    summary: "针对内容平台运营商的版权责任新规进行全面解析，助力中国企业欧盟市场合规运营...",
    date: "2024-03-08",
    isHot: true,
    views: 3124,
  },
  {
    id: 5,
    type: "政策解读",
    typeColor: "bg-violet-100 text-violet-700",
    title: "美国版权局2024年度工作重点发布",
    summary: "关注AI版权、孤儿作品、版权小额索赔等议题，对中国企业海外布局具有重要参考价值...",
    date: "2024-03-05",
    isHot: false,
    views: 1245,
  },
  {
    id: 6,
    type: "行业动态",
    typeColor: "bg-amber-100 text-amber-700",
    title: "多家中国游戏公司在美遭遇版权诉讼",
    summary: "近期多款国产游戏在美国被指控侵犯版权，涉及美术素材、游戏机制等多个方面...",
    date: "2024-03-01",
    isHot: true,
    views: 4521,
  },
]

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="flex-1 text-lg font-semibold text-foreground">动态资讯</h1>
        </div>

        {/* 搜索框 */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索资讯标题或关键词"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </div>

        {/* 分类筛选 */}
        <div className="scrollbar-hide flex gap-2 overflow-x-auto px-4 pb-3">
          {newsCategories.map((cat) => (
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

      {/* 资讯列表 */}
      <section className="px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-accent" />
            <h2 className="text-sm font-semibold text-foreground">最新资讯</h2>
          </div>
          <span className="text-xs text-muted-foreground">共{newsItems.length}条</span>
        </div>

        <div className="space-y-3">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="group flex gap-3 rounded-xl bg-card p-3 shadow-sm ring-1 ring-border/50 transition-all active:scale-[0.99] active:bg-muted/30"
            >
              {/* 图片占位 */}
              <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-primary/5">
                <div className="flex h-full w-full items-center justify-center">
                  <Bookmark className="h-8 w-8 text-primary/30" />
                </div>
                {item.isHot && (
                  <span className="absolute left-1 top-1 rounded bg-accent px-1.5 py-0.5 text-[8px] font-bold text-white">
                    热门
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col justify-between py-0.5">
                <div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${item.typeColor}`}>
                      {item.type}
                    </span>
                  </div>
                  <h3 className="line-clamp-2 text-sm font-medium leading-snug text-foreground">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    <span className="text-[10px]">{item.date}</span>
                  </div>
                  <span className="text-[10px] text-muted-foreground">{item.views}阅读</span>
                </div>
              </div>
              
              <ChevronRight className="h-4 w-4 flex-shrink-0 self-center text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
