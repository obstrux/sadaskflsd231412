"use client"

import { ArrowLeft, Search, AlertTriangle, ChevronRight, Globe, Clock, Bell } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const riskLevels = [
  { id: "all", name: "全部等级", color: "bg-muted text-muted-foreground" },
  { id: "high", name: "高风险", color: "bg-red-100 text-red-700" },
  { id: "medium", name: "中风险", color: "bg-amber-100 text-amber-700" },
  { id: "low", name: "低风险", color: "bg-green-100 text-green-700" },
]

const alerts = [
  {
    id: 1,
    title: "欧盟数字服务法(DSA)正式实施",
    level: "high",
    levelText: "高风险",
    region: "欧盟",
    regionFlag: "🇪🇺",
    category: "合规预警",
    date: "2024-03-15",
    summary: "DSA对大型平台提出更严格的内容审核和透明度要求，未合规企业将面临高额罚款...",
    affectedIndustries: ["内容平台", "电商平台", "社交媒体"],
    isNew: true,
  },
  {
    id: 2,
    title: "美国版权局AI生成内容登记新政策",
    level: "medium",
    levelText: "中风险",
    region: "美国",
    regionFlag: "🇺🇸",
    category: "政策变化",
    date: "2024-03-12",
    summary: "美国版权局明确AI生成内容的版权登记要求，纯AI生成内容不予登记保护...",
    affectedIndustries: ["AI行业", "内容创作", "游戏开发"],
    isNew: true,
  },
  {
    id: 3,
    title: "日本著作权法修正案通过",
    level: "medium",
    levelText: "中风险",
    region: "日本",
    regionFlag: "🇯🇵",
    category: "法规更新",
    date: "2024-03-10",
    summary: "新修正案扩大了版权侵权的刑事责任范围，加大对盗版行为的处罚力度...",
    affectedIndustries: ["动漫游戏", "出版行业", "流媒体"],
    isNew: false,
  },
  {
    id: 4,
    title: "韩国OTT平台版权费用上涨",
    level: "low",
    levelText: "低风险",
    region: "韩国",
    regionFlag: "🇰🇷",
    category: "市场动态",
    date: "2024-03-08",
    summary: "韩国主要版权方提高OTT平台授权费用，可能影响中国内容出海成本...",
    affectedIndustries: ["流媒体", "影视制作"],
    isNew: false,
  },
  {
    id: 5,
    title: "东南亚多国加强数字版权保护",
    level: "medium",
    levelText: "中风险",
    region: "东南亚",
    regionFlag: "🌏",
    category: "政策变化",
    date: "2024-03-05",
    summary: "新加坡、泰国、越南等国相继出台数字版权保护新规，加强网络侵权打击力度...",
    affectedIndustries: ["电商平台", "游戏行业", "数字出版"],
    isNew: false,
  },
]

export default function AlertsPage() {
  const [selectedLevel, setSelectedLevel] = useState("all")

  const filteredAlerts = selectedLevel === "all" 
    ? alerts 
    : alerts.filter(alert => alert.level === selectedLevel)

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="flex-1 text-lg font-semibold text-foreground">风险预警</h1>
          <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors active:bg-muted/70">
            <Bell className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* 搜索框 */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索预警内容"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </div>

        {/* 风险等级筛选 */}
        <div className="scrollbar-hide flex gap-2 overflow-x-auto px-4 pb-3">
          {riskLevels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`flex-shrink-0 rounded-lg px-3 py-1.5 text-sm transition-all ${
                selectedLevel === level.id
                  ? "bg-primary text-primary-foreground"
                  : level.color
              }`}
            >
              {level.name}
            </button>
          ))}
        </div>
      </header>

      {/* 预警列表 */}
      <section className="px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-4 w-4 text-amber-500" />
            <h2 className="text-sm font-semibold text-foreground">最新预警</h2>
          </div>
          <span className="text-xs text-muted-foreground">共{filteredAlerts.length}条</span>
        </div>

        <div className="space-y-3">
          {filteredAlerts.map((alert) => (
            <Link
              key={alert.id}
              href={`/alerts/${alert.id}`}
              className="group block rounded-xl bg-card p-4 shadow-sm ring-1 ring-border/50 transition-all active:scale-[0.99] active:bg-muted/30"
            >
              <div className="mb-2 flex items-start justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base">{alert.regionFlag}</span>
                  <span className={`rounded-md px-1.5 py-0.5 text-[10px] font-medium ${
                    alert.level === "high" 
                      ? "bg-red-100 text-red-700"
                      : alert.level === "medium"
                      ? "bg-amber-100 text-amber-700"
                      : "bg-green-100 text-green-700"
                  }`}>
                    {alert.levelText}
                  </span>
                  <span className="rounded-md bg-muted px-1.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {alert.category}
                  </span>
                  {alert.isNew && (
                    <span className="rounded-md bg-accent px-1.5 py-0.5 text-[10px] font-bold text-white">
                      新
                    </span>
                  )}
                </div>
                <ChevronRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
              </div>

              <h3 className="mb-2 text-sm font-medium text-foreground">{alert.title}</h3>
              <p className="mb-3 line-clamp-2 text-xs text-muted-foreground">{alert.summary}</p>

              <div className="mb-2 flex flex-wrap gap-1">
                {alert.affectedIndustries.map((industry) => (
                  <span key={industry} className="rounded-md bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
                    {industry}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
                <Globe className="h-3 w-3" />
                <span>{alert.region}</span>
                <span className="mx-1">·</span>
                <Clock className="h-3 w-3" />
                <span>{alert.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
