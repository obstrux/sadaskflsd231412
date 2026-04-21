"use client"

import { Clock, ChevronRight, Bookmark, TrendingUp } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    type: "培训研讨",
    typeColor: "bg-[#e8f4fc] text-[#1a3a5c]",
    title: "2024跨境版权保护实务研讨会即将召开",
    summary: "本次研讨会将邀请中美两国知名知识产权专家，围绕数字版权跨境保护最新动态进行深度探讨...",
    date: "2024-03-15",
    isHot: true,
  },
  {
    id: 2,
    type: "成果指引",
    typeColor: "bg-[#fff7ed] text-[#ea580c]",
    title: "《游戏出海版权合规白皮书》正式发布",
    summary: "详细梳理了主要海外市场的游戏版权法律要点，为国内游戏企业出海提供全面指引...",
    date: "2024-03-12",
    isHot: false,
  },
  {
    id: 3,
    type: "培训研讨",
    typeColor: "bg-[#e8f4fc] text-[#1a3a5c]",
    title: "AI生成内容版权归属线上课程开放报名",
    summary: "系统讲解各国对AI生成内容的版权保护态度与最新立法动向，帮助企业规避潜在风险...",
    date: "2024-03-10",
    isHot: false,
  },
  {
    id: 4,
    type: "成果指引",
    typeColor: "bg-[#fff7ed] text-[#ea580c]",
    title: "欧盟数字服务法(DSA)合规要点解读",
    summary: "针对内容平台运营商的版权责任新规进行全面解析，助力中国企业欧盟市场合规运营...",
    date: "2024-03-08",
    isHot: true,
  },
]

export function NewsList() {
  return (
    <section className="px-5 py-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h2 className="text-base font-bold text-gray-900">动态资讯</h2>
          <span className="flex items-center gap-1 rounded-full bg-[#fff7ed] px-2 py-0.5">
            <TrendingUp className="h-3 w-3 text-[#f59e0b]" />
            <span className="text-[10px] font-semibold text-[#f59e0b]">最新</span>
          </span>
        </div>
        <Link 
          href="/news" 
          className="flex items-center gap-0.5 text-xs font-medium text-[#1a3a5c] transition-colors active:opacity-70"
        >
          查看全部
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="space-y-3">
        {newsItems.map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="group flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all duration-200 active:scale-[0.99]"
          >
            {/* 图片占位 */}
            <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-gradient-to-br from-[#e8f4fc] to-[#f0f9ff]">
              <div className="flex h-full w-full items-center justify-center">
                <Bookmark className="h-8 w-8 text-[#1a3a5c]/20" />
              </div>
              {item.isHot && (
                <span className="absolute left-1 top-1 rounded-md bg-[#f59e0b] px-1.5 py-0.5 text-[8px] font-bold text-white">
                  热门
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col justify-between py-0.5">
              <div>
                <div className="mb-2">
                  <span className={`inline-block whitespace-nowrap rounded-md px-2 py-0.5 text-[10px] font-semibold ${item.typeColor}`}>
                    {item.type}
                  </span>
                </div>
                <h3 className="line-clamp-2 text-sm font-semibold leading-snug text-gray-800">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center gap-1 text-gray-400">
                <Clock className="h-3 w-3" />
                <span className="text-[10px]">{item.date}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
