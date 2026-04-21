"use client"

import { ArrowLeft, Search, BookOpen, ChevronRight, FileText, Shield, Globe, Clock, Users } from "lucide-react"
import Link from "next/link"

const guideCategories = [
  { id: "register", name: "版权登记", icon: FileText, count: 12 },
  { id: "protect", name: "维权指南", icon: Shield, count: 8 },
  { id: "overseas", name: "出海指引", icon: Globe, count: 15 },
]

const guides = [
  {
    id: 1,
    title: "美国版权登记全流程指南",
    category: "版权登记",
    region: "美国",
    regionFlag: "🇺🇸",
    readTime: "15分钟",
    views: 3256,
    summary: "详细介绍在美国版权局（USCO）进行版权登记的完整流程，包括申请材料准备、在线提交、费用支付及后续跟进...",
    updateDate: "2024-03-10",
    isRecommended: true,
  },
  {
    id: 2,
    title: "游戏出海版权保护实务要点",
    category: "出海指引",
    region: "综合",
    regionFlag: "🌍",
    readTime: "20分钟",
    views: 2841,
    summary: "从游戏代码、美术资源、音乐音效等多维度分析游戏出海过程中的版权保护策略和常见风险...",
    updateDate: "2024-03-08",
    isRecommended: true,
  },
  {
    id: 3,
    title: "欧盟GDPR与版权合规指南",
    category: "出海指引",
    region: "欧盟",
    regionFlag: "🇪🇺",
    readTime: "25分钟",
    views: 1956,
    summary: "解析欧盟GDPR法规对内容平台的影响，以及如何在保护用户隐私的同时维护版权权益...",
    updateDate: "2024-03-05",
    isRecommended: false,
  },
  {
    id: 4,
    title: "日本著作权登记与维权指南",
    category: "版权登记",
    region: "日本",
    regionFlag: "🇯🇵",
    readTime: "18分钟",
    views: 1523,
    summary: "介绍日本著作权登记制度的特点，以及发生侵权时的维权途径和诉讼策略...",
    updateDate: "2024-03-01",
    isRecommended: false,
  },
  {
    id: 5,
    title: "DMCA通知与删除程序操作指南",
    category: "维权指南",
    region: "美国",
    regionFlag: "🇺🇸",
    readTime: "12分钟",
    views: 2134,
    summary: "详解如何向美国网络平台发送DMCA侵权通知，包括通知格式、必要内容、发送方式及后续处理...",
    updateDate: "2024-02-28",
    isRecommended: true,
  },
]

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="flex-1 text-lg font-semibold text-foreground">实务指引</h1>
        </div>

        {/* 搜索框 */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索指南标题或关键词"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </div>
      </header>

      {/* 分类入口 */}
      <section className="border-b border-border/50 bg-card px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          {guideCategories.map((cat) => (
            <button
              key={cat.id}
              className="flex flex-col items-center gap-2 rounded-xl bg-muted/50 p-3 transition-colors active:bg-muted"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <cat.icon className="h-5 w-5 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">{cat.name}</span>
              <span className="text-[10px] text-muted-foreground">{cat.count}篇</span>
            </button>
          ))}
        </div>
      </section>

      {/* 指南列表 */}
      <section className="px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold text-foreground">全部指南</h2>
          </div>
          <span className="text-xs text-muted-foreground">共{guides.length}篇</span>
        </div>

        <div className="space-y-3">
          {guides.map((guide) => (
            <Link
              key={guide.id}
              href={`/guides/${guide.id}`}
              className="group block rounded-xl bg-card p-4 shadow-sm ring-1 ring-border/50 transition-all active:scale-[0.99] active:bg-muted/30"
            >
              <div className="mb-2 flex items-start justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base">{guide.regionFlag}</span>
                  <span className="rounded bg-violet-100 px-1.5 py-0.5 text-[10px] font-medium text-violet-700">
                    {guide.category}
                  </span>
                  {guide.isRecommended && (
                    <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-medium text-accent">
                      推荐
                    </span>
                  )}
                </div>
                <ChevronRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
              </div>

              <h3 className="mb-2 text-sm font-medium text-foreground">{guide.title}</h3>
              <p className="mb-3 line-clamp-2 text-xs text-muted-foreground">{guide.summary}</p>

              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>阅读{guide.readTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{guide.views}人阅读</span>
                  </div>
                </div>
                <span>更新于 {guide.updateDate}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
