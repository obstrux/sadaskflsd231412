"use client"

import { Search, Filter, Globe, ChevronRight, BookOpen, FileText, Scale } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { TabBar } from "@/components/tab-bar"

const countries = [
  { id: "all", name: "全部", flag: "🌍" },
  { id: "us", name: "美国", flag: "🇺🇸" },
  { id: "eu", name: "欧盟", flag: "🇪🇺" },
  { id: "jp", name: "日本", flag: "🇯🇵" },
  { id: "kr", name: "韩国", flag: "🇰🇷" },
  { id: "uk", name: "英国", flag: "🇬🇧" },
]

const lawCategories = [
  { id: "copyright", name: "著作权法", icon: BookOpen, count: 45 },
  { id: "trademark", name: "商标法", icon: Scale, count: 32 },
  { id: "patent", name: "专利法", icon: FileText, count: 28 },
]

const laws = [
  {
    id: 1,
    title: "美国数字千年版权法（DMCA）",
    country: "美国",
    countryFlag: "🇺🇸",
    category: "著作权法",
    updateDate: "2024-01-15",
    summary: "规定网络服务提供商的版权侵权责任限制及免责条款，是数字版权保护的核心法律...",
    isHot: true,
  },
  {
    id: 2,
    title: "欧盟数字单一市场版权指令",
    country: "欧盟",
    countryFlag: "🇪🇺",
    category: "著作权法",
    updateDate: "2024-02-20",
    summary: "针对数字环境中的版权保护进行全面规定，包括平台责任、新闻内容授权等...",
    isHot: true,
  },
  {
    id: 3,
    title: "日本著作权法",
    country: "日本",
    countryFlag: "🇯🇵",
    category: "著作权法",
    updateDate: "2024-01-08",
    summary: "日本版权保护的基础性法律，涵盖作品的定义、权利归属、保护期限等核心内容...",
    isHot: false,
  },
  {
    id: 4,
    title: "韩国著作权法修正案",
    country: "韩国",
    countryFlag: "🇰🇷",
    category: "著作权法",
    updateDate: "2024-03-01",
    summary: "最新修正案加强了对网络盗版的打击力度，新增人工智能生成内容的相关规定...",
    isHot: false,
  },
  {
    id: 5,
    title: "英国版权、设计和专利法",
    country: "英国",
    countryFlag: "🇬🇧",
    category: "著作权法",
    updateDate: "2024-02-10",
    summary: "英国知识产权保护的综合性法律，脱欧后进行了多项本地化修订...",
    isHot: false,
  },
]

export default function LawsPage() {
  const [selectedCountry, setSelectedCountry] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-5 py-3">
          <h1 className="flex-1 text-lg font-bold text-gray-900">法规库</h1>
          <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 transition-colors active:bg-gray-100">
            <Filter className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* 搜索框 */}
        <div className="px-5 pb-3">
          <div className="flex items-center gap-3 rounded-xl bg-gray-50 px-4 py-2.5">
            <Search className="h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="搜索法律法规名称或关键词"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* 国家筛选 */}
        <div className="flex gap-2 overflow-x-auto px-5 pb-3 scrollbar-hide">
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => setSelectedCountry(country.id)}
              className={`flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium transition-all ${
                selectedCountry === country.id
                  ? "bg-[#1a3a5c] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              <span>{country.flag}</span>
              <span>{country.name}</span>
            </button>
          ))}
        </div>
      </header>

      {/* 分类统计 */}
      <section className="border-b border-gray-100 bg-white px-5 py-4">
        <div className="grid grid-cols-3 gap-3">
          {lawCategories.map((cat) => (
            <button key={cat.id} className="flex flex-col items-center gap-2 rounded-xl bg-gray-50 p-4 transition-colors active:bg-gray-100">
              <cat.icon className="h-6 w-6 text-[#1a3a5c]" />
              <span className="text-xs font-semibold text-gray-800">{cat.name}</span>
              <span className="text-[10px] text-gray-500">{cat.count}部</span>
            </button>
          ))}
        </div>
      </section>

      {/* 法规列表 */}
      <section className="px-5 py-4">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-gray-900">法规列表</h2>
          <span className="text-xs text-gray-500">共{laws.length}部</span>
        </div>

        <div className="space-y-3">
          {laws.map((law) => (
            <Link
              key={law.id}
              href={`/laws/${law.id}`}
              className="group block rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all active:scale-[0.99]"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-base">{law.countryFlag}</span>
                  <span className="whitespace-nowrap rounded-md bg-[#e8f4fc] px-2 py-0.5 text-[10px] font-medium text-[#1a3a5c]">
                    {law.category}
                  </span>
                  {law.isHot && (
                    <span className="whitespace-nowrap rounded-md bg-[#fff7ed] px-2 py-0.5 text-[10px] font-medium text-[#f59e0b]">
                      热门
                    </span>
                  )}
                </div>
                <ChevronRight className="h-5 w-5 flex-shrink-0 text-gray-300" />
              </div>
              <h3 className="mb-2 font-semibold text-gray-900">{law.title}</h3>
              <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-500">{law.summary}</p>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Globe className="h-3.5 w-3.5" />
                <span>{law.country}</span>
                <span className="mx-1">·</span>
                <span>更新于 {law.updateDate}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <TabBar />
    </div>
  )
}
