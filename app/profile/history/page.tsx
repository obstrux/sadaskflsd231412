"use client"

import { ArrowLeft, Scale, FileText, BookOpen, ChevronRight, Trash2, Clock } from "lucide-react"
import Link from "next/link"

const historyGroups = [
  {
    date: "今天",
    items: [
      {
        id: 1,
        type: "law",
        icon: Scale,
        title: "美国数字千年版权法（DMCA）",
        subtitle: "美国 · 著作权法",
        href: "/laws/1",
        time: "14:30",
      },
      {
        id: 2,
        type: "case",
        icon: FileText,
        title: "Viacom v. YouTube 版权侵权案",
        subtitle: "美国 · 2012年",
        href: "/cases/1",
        time: "11:20",
      },
    ],
  },
  {
    date: "昨天",
    items: [
      {
        id: 3,
        type: "guide",
        icon: BookOpen,
        title: "美国版权登记全流程指南",
        subtitle: "版权登记 · 15分钟阅读",
        href: "/guides/1",
        time: "18:45",
      },
    ],
  },
]

export default function HistoryPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/profile" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="flex-1 text-lg font-semibold text-foreground">浏览历史</h1>
          <button className="flex items-center gap-1 text-sm text-destructive">
            <Trash2 className="h-4 w-4" />
            清空
          </button>
        </div>
      </header>

      {/* 历史记录列表 */}
      {historyGroups.map((group) => (
        <section key={group.date} className="border-b border-border/50 px-4 py-4">
          <h3 className="mb-3 text-xs font-medium text-muted-foreground">{group.date}</h3>
          <div className="space-y-3">
            {group.items.map((item) => (
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
                <div className="flex flex-col items-end gap-1">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {item.time}
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
