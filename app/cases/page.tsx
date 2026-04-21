"use client"

import { ArrowLeft, Search, Filter, Globe, ChevronRight, Scale, Calendar, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const caseTypes = [
  { id: "all", name: "全部类型" },
  { id: "copyright", name: "版权侵权" },
  { id: "trademark", name: "商标纠纷" },
  { id: "patent", name: "专利侵权" },
  { id: "unfair", name: "不正当竞争" },
]

const cases = [
  {
    id: 1,
    title: "Viacom v. YouTube 版权侵权案",
    country: "美国",
    countryFlag: "🇺🇸",
    type: "版权侵权",
    court: "美国联邦第二巡回上诉法院",
    year: "2012",
    result: "被告胜诉",
    resultType: "defense",
    summary: "本案确立了网络平台「安全港」原则的重要判例，明确了DMCA通知与删除程序对平台责任的影响...",
    isHot: true,
    views: 2856,
  },
  {
    id: 2,
    title: "华为诉三星专利侵权案",
    country: "中国",
    countryFlag: "🇨🇳",
    type: "专利侵权",
    court: "深圳市中级人民法院",
    year: "2018",
    result: "原告胜诉",
    resultType: "plaintiff",
    summary: "涉及4G标准必要专利侵权，法院判令三星公司停止侵权并赔偿经济损失8000万元...",
    isHot: true,
    views: 1923,
  },
  {
    id: 3,
    title: "任天堂诉MariCar商标侵权案",
    country: "日本",
    countryFlag: "🇯🇵",
    type: "商标纠纷",
    court: "东京地方法院",
    year: "2020",
    result: "原告胜诉",
    resultType: "plaintiff",
    summary: "涉及「马里奥赛车」形象和商标的商业使用，法院认定被告构成商标侵权和不正当竞争...",
    isHot: false,
    views: 1245,
  },
  {
    id: 4,
    title: "Oracle v. Google API版权案",
    country: "美国",
    countryFlag: "🇺🇸",
    type: "版权侵权",
    court: "美国最高法院",
    year: "2021",
    result: "被告胜诉",
    resultType: "defense",
    summary: "涉及Java API的版权保护和合理使用问题，最高法院裁定Google对Java API的使用构成合理使用...",
    isHot: true,
    views: 3421,
  },
]

export default function CasesPage() {
  const [selectedType, setSelectedType] = useState("all")

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="flex-1 text-lg font-semibold text-foreground">典型案例</h1>
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <Filter className="h-5 w-5 text-foreground" />
          </button>
        </div>

        {/* 搜索框 */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索案例名称或关键词"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </div>

        {/* 类型筛选 */}
        <div className="scrollbar-hide flex gap-2 overflow-x-auto px-4 pb-3">
          {caseTypes.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedType(item.id)}
              className={`flex-shrink-0 rounded-full px-3 py-1.5 text-sm transition-all ${
                selectedType === item.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </header>

      {/* 案例列表 */}
      <section className="px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="h-4 w-4 text-primary" />
            <h2 className="text-sm font-semibold text-foreground">案例库</h2>
          </div>
          <span className="text-xs text-muted-foreground">共{cases.length}个案例</span>
        </div>

        <div className="space-y-3">
          {cases.map((caseItem) => (
            <Link
              key={caseItem.id}
              href={`/cases/${caseItem.id}`}
              className="group block rounded-xl bg-card p-4 shadow-sm ring-1 ring-border/50 transition-all active:scale-[0.99] active:bg-muted/30"
            >
              <div className="mb-2 flex items-start justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base">{caseItem.countryFlag}</span>
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                    {caseItem.type}
                  </span>
                  <span className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${
                    caseItem.resultType === "plaintiff" 
                      ? "bg-green-100 text-green-700" 
                      : "bg-blue-100 text-blue-700"
                  }`}>
                    {caseItem.result}
                  </span>
                  {caseItem.isHot && (
                    <span className="rounded bg-accent/10 px-1.5 py-0.5 text-[10px] font-medium text-accent">
                      热门
                    </span>
                  )}
                </div>
                <ChevronRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
              </div>

              <h3 className="mb-2 text-sm font-medium text-foreground">{caseItem.title}</h3>
              <p className="mb-3 line-clamp-2 text-xs text-muted-foreground">{caseItem.summary}</p>

              <div className="flex items-center justify-between text-[10px] text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Globe className="h-3 w-3" />
                    <span>{caseItem.court}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{caseItem.year}年</span>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <TrendingUp className="h-3 w-3" />
                  <span>{caseItem.views}次浏览</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
