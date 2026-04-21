"use client"

export const runtime = "edge";

import { ArrowLeft, Search, BookOpen, FileText, Scale, AlertTriangle, ChevronRight } from "lucide-react"
import Link from "next/link"
import { use } from "react"

const countryData: Record<string, {
  name: string
  flag: string
  fullName: string
  description: string
  laws: Array<{ id: number; title: string; category: string }>
  cases: Array<{ id: number; title: string; year: string }>
  alerts: Array<{ id: number; title: string; level: string }>
}> = {
  us: {
    name: "美国",
    flag: "🇺🇸",
    fullName: "美利坚合众国",
    description: "美国是全球最大的版权输出国之一，拥有完善的知识产权保护体系，包括DMCA等重要法规。",
    laws: [
      { id: 1, title: "数字千年版权法（DMCA）", category: "著作权法" },
      { id: 2, title: "版权法（Title 17）", category: "著作权法" },
      { id: 3, title: "兰哈姆法（商标法）", category: "商标法" },
    ],
    cases: [
      { id: 1, title: "Viacom v. YouTube案", year: "2010" },
      { id: 2, title: "Capitol Records v. Thomas案", year: "2012" },
    ],
    alerts: [
      { id: 2, title: "美国版权局AI生成内容登记新政策", level: "medium" },
    ],
  },
  eu: {
    name: "欧盟",
    flag: "🇪🇺",
    fullName: "欧洲联盟",
    description: "欧盟通过统一的版权指令协调成员国的知识产权保护，近年来在数字版权领域推出多项重要立法。",
    laws: [
      { id: 2, title: "数字单一市场版权指令", category: "著作权法" },
      { id: 4, title: "数字服务法（DSA）", category: "数字监管" },
    ],
    cases: [
      { id: 3, title: "CJEU音乐版权裁决", year: "2023" },
    ],
    alerts: [
      { id: 1, title: "欧盟数字服务法(DSA)正式实施", level: "high" },
    ],
  },
  jp: {
    name: "日本",
    flag: "🇯🇵",
    fullName: "日本国",
    description: "日本是亚洲最重要的版权市场之一，在动漫、游戏等领域拥有独特的版权保护实践。",
    laws: [
      { id: 3, title: "日本著作权法", category: "著作权法" },
      { id: 5, title: "日本商标法", category: "商标法" },
    ],
    cases: [
      { id: 4, title: "任天堂 v. MariCar案", year: "2020" },
    ],
    alerts: [
      { id: 3, title: "日本著作权法修正案通过", level: "medium" },
    ],
  },
  kr: {
    name: "韩国",
    flag: "🇰🇷",
    fullName: "大韩民国",
    description: "韩国在K-pop、韩剧等文化产业的推动下，建立了较为完善的版权保护体系。",
    laws: [
      { id: 4, title: "韩国著作权法修正案", category: "著作权法" },
    ],
    cases: [
      { id: 5, title: "SM娱乐版权纠纷案", year: "2022" },
    ],
    alerts: [
      { id: 4, title: "韩国OTT平台版权费用上涨", level: "low" },
    ],
  },
  gb: {
    name: "英国",
    flag: "🇬🇧",
    fullName: "大不列颠及北爱尔兰联合王国",
    description: "英国脱欧后建立了独立的版权保护体系，在普通法传统下有着丰富的版权判例法。",
    laws: [
      { id: 5, title: "版权、设计和专利法", category: "著作权法" },
    ],
    cases: [
      { id: 6, title: "Sheeran v. Sami案", year: "2023" },
    ],
    alerts: [],
  },
  de: {
    name: "德国",
    flag: "🇩🇪",
    fullName: "德意志联邦共和国",
    description: "德国作为欧盟最大经济体，在版权保护方面有着严格的执法标准和丰富的司法实践。",
    laws: [
      { id: 6, title: "德国著作权法（UrhG）", category: "著作权法" },
    ],
    cases: [
      { id: 7, title: "YouTube版权过滤案", year: "2022" },
    ],
    alerts: [],
  },
}

export default function CountryPage({ params }: { params: Promise<{ code: string }> }) {
  const { code } = use(params)
  const country = countryData[code.toLowerCase()] || countryData.us

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="flex-1 text-lg font-semibold text-foreground">{country.name}</h1>
        </div>

        {/* 搜索框 */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder={`搜索${country.name}相关法规、案例`}
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </div>
      </header>

      {/* 国家信息 */}
      <section className="border-b border-border/50 bg-gradient-to-b from-primary/5 to-transparent px-4 py-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{country.flag}</span>
          <div>
            <h2 className="text-xl font-bold text-foreground">{country.name}</h2>
            <p className="text-sm text-muted-foreground">{country.fullName}</p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{country.description}</p>
      </section>

      {/* 快捷统计 */}
      <section className="border-b border-border/50 px-4 py-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col items-center gap-1 rounded-xl bg-card p-3 ring-1 ring-border/50">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold text-foreground">{country.laws.length}</span>
            <span className="text-[10px] text-muted-foreground">部法规</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-xl bg-card p-3 ring-1 ring-border/50">
            <Scale className="h-5 w-5 text-primary" />
            <span className="text-lg font-bold text-foreground">{country.cases.length}</span>
            <span className="text-[10px] text-muted-foreground">个案例</span>
          </div>
          <div className="flex flex-col items-center gap-1 rounded-xl bg-card p-3 ring-1 ring-border/50">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <span className="text-lg font-bold text-foreground">{country.alerts.length}</span>
            <span className="text-[10px] text-muted-foreground">条预警</span>
          </div>
        </div>
      </section>

      {/* 相关法规 */}
      <section className="border-b border-border/50 px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <BookOpen className="h-4 w-4 text-primary" />
            相关法规
          </h3>
          <Link href="/laws" className="text-xs text-primary flex items-center gap-0.5">
            查看全部
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="space-y-2">
          {country.laws.map((law) => (
            <Link
              key={law.id}
              href={`/laws/${law.id}`}
              className="flex items-center justify-between rounded-xl bg-card p-3 ring-1 ring-border/50 transition-colors active:bg-muted/30"
            >
              <div>
                <p className="text-sm font-medium text-foreground">{law.title}</p>
                <p className="text-xs text-muted-foreground">{law.category}</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>

      {/* 典型案例 */}
      <section className="border-b border-border/50 px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Scale className="h-4 w-4 text-primary" />
            典型案例
          </h3>
          <Link href="/cases" className="text-xs text-primary flex items-center gap-0.5">
            查看全部
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="space-y-2">
          {country.cases.map((caseItem) => (
            <Link
              key={caseItem.id}
              href={`/cases/${caseItem.id}`}
              className="flex items-center justify-between rounded-xl bg-card p-3 ring-1 ring-border/50 transition-colors active:bg-muted/30"
            >
              <div>
                <p className="text-sm font-medium text-foreground">{caseItem.title}</p>
                <p className="text-xs text-muted-foreground">{caseItem.year}年</p>
              </div>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>

      {/* 风险预警 */}
      {country.alerts.length > 0 && (
        <section className="px-4 py-4">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-semibold text-foreground flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-amber-500" />
              风险预警
            </h3>
            <Link href="/alerts" className="text-xs text-primary flex items-center gap-0.5">
              查看全部
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="space-y-2">
            {country.alerts.map((alert) => (
              <Link
                key={alert.id}
                href={`/alerts/${alert.id}`}
                className="flex items-center justify-between rounded-xl bg-card p-3 ring-1 ring-border/50 transition-colors active:bg-muted/30"
              >
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${
                    alert.level === 'high' ? 'bg-red-500' : 
                    alert.level === 'medium' ? 'bg-amber-500' : 'bg-green-500'
                  }`} />
                  <p className="text-sm font-medium text-foreground">{alert.title}</p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
