"use client"

import { Search, Filter, Star, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { TabBar } from "@/components/tab-bar"

const specialties = ["全部", "版权保护", "商标注册", "游戏出海", "AI版权", "跨境授权"]

const lawyers = [
  {
    id: 1,
    name: "张明远",
    title: "高级合伙人",
    firm: "上海正义知识产权律师事务所",
    specialty: ["版权保护", "跨境授权"],
    rating: 4.9,
    cases: 156,
    responseTime: "5分钟",
    intro: "专注跨境知识产权法律服务15年",
    isOnline: true,
  },
  {
    id: 2,
    name: "李晓华",
    title: "合伙人",
    firm: "上海浦江涉外律师事务所",
    specialty: ["商标注册", "版权保护"],
    rating: 4.8,
    cases: 203,
    responseTime: "10分钟",
    intro: "擅长跨国商标注册与版权纠纷",
    isOnline: true,
  },
  {
    id: 3,
    name: "王思远",
    title: "资深律师",
    firm: "上海明德知识产权律师事务所",
    specialty: ["游戏出海", "版权保护"],
    rating: 4.7,
    cases: 128,
    responseTime: "15分钟",
    intro: "游戏行业出海法律服务专家",
    isOnline: false,
  },
  {
    id: 4,
    name: "陈雅琳",
    title: "合伙人",
    firm: "上海汇智涉外律师事务所",
    specialty: ["AI版权", "跨境授权"],
    rating: 4.9,
    cases: 89,
    responseTime: "10分钟",
    intro: "专注AI生成内容版权研究",
    isOnline: true,
  },
  {
    id: 5,
    name: "刘志强",
    title: "高级律师",
    firm: "上海博雅知识产权律师事务所",
    specialty: ["版权保护", "商标注册"],
    rating: 4.6,
    cases: 178,
    responseTime: "20分钟",
    intro: "精通中美两国知识产权法律",
    isOnline: false,
  },
  {
    id: 6,
    name: "赵婷婷",
    title: "资深律师",
    firm: "上海恒信涉外律师事务所",
    specialty: ["游戏出海", "AI版权"],
    rating: 4.8,
    cases: 95,
    responseTime: "15分钟",
    intro: "数字内容出海合规专家",
    isOnline: true,
  },
]

export default function LawyersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeSpecialty, setActiveSpecialty] = useState("全部")

  const filteredLawyers = lawyers.filter((lawyer) => {
    const matchesSearch = lawyer.name.includes(searchQuery) || 
                          lawyer.firm.includes(searchQuery) ||
                          lawyer.specialty.some(s => s.includes(searchQuery))
    const matchesSpecialty = activeSpecialty === "全部" || 
                             lawyer.specialty.includes(activeSpecialty)
    return matchesSearch && matchesSpecialty
  })

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 bg-white pt-safe-top shadow-sm">
        <div className="flex items-center gap-3 px-4 py-2.5">
          <h1 className="flex-1 text-base font-bold text-gray-900">律师库</h1>
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50">
            <Filter className="h-4 w-4 text-gray-500" />
          </button>
        </div>

        {/* 搜索框 */}
        <div className="px-4 pb-2.5">
          <div className="flex items-center gap-2.5 rounded-lg bg-gray-50 px-3 py-2">
            <Search className="h-4 w-4 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索律师、律所..."
              className="flex-1 bg-transparent text-xs text-gray-800 placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div>

        {/* 专业领域筛选 */}
        <div className="flex gap-1.5 overflow-x-auto px-4 pb-2.5 scrollbar-hide">
          {specialties.map((s) => (
            <button
              key={s}
              onClick={() => setActiveSpecialty(s)}
              className={`flex-shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-medium transition-colors ${
                activeSpecialty === s
                  ? "bg-[#1a3a5c] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </header>

      {/* 律师列表 */}
      <div className="space-y-2.5 p-4">
        {filteredLawyers.map((lawyer) => (
          <Link
            key={lawyer.id}
            href={`/lawyers/${lawyer.id}`}
            className="block rounded-xl bg-white p-3 shadow-sm transition-all active:scale-[0.99]"
          >
            <div className="flex gap-3">
              {/* 头像 */}
              <div className="relative flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a3a5c] to-[#0d2137]">
                  <span className="text-base font-bold text-white">{lawyer.name[0]}</span>
                </div>
                {lawyer.isOnline && (
                  <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                )}
              </div>

              {/* 信息 */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-gray-900">{lawyer.name}</h3>
                  <span className="flex-shrink-0 whitespace-nowrap rounded bg-[#e8f4fc] px-1.5 py-0.5 text-[10px] text-[#1a3a5c]">{lawyer.title}</span>
                </div>
                <p className="mt-0.5 truncate text-[11px] text-gray-500">{lawyer.firm}</p>
                
                <div className="mt-1.5 flex flex-wrap gap-1">
                  {lawyer.specialty.map((s) => (
                    <span key={s} className="flex-shrink-0 whitespace-nowrap rounded bg-[#fff7ed] px-1.5 py-0.5 text-[10px] text-[#f59e0b]">
                      {s}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex items-center gap-2 text-[10px]">
                  <div className="flex items-center gap-0.5">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="font-medium text-gray-700">{lawyer.rating}</span>
                  </div>
                  <span className="text-gray-200">|</span>
                  <span className="text-gray-500">{lawyer.cases}次服务</span>
                  <span className="text-gray-200">|</span>
                  <div className="flex items-center gap-0.5">
                    <Clock className="h-3 w-3 text-green-500" />
                    <span className="text-green-600">{lawyer.responseTime}</span>
                  </div>
                </div>
              </div>

              <ChevronRight className="h-4 w-4 flex-shrink-0 self-center text-gray-300" />
            </div>
          </Link>
        ))}
      </div>

      <TabBar />
    </div>
  )
}
