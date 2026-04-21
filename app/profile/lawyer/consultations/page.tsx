"use client"

import { ArrowLeft, MessageSquare, Clock, User, CheckCircle, AlertCircle, Send } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const consultations = [
  {
    id: 1,
    user: "张先生",
    avatar: "张",
    title: "作品在美国被侵权如何维权？",
    content: "我公司的原创游戏在美国App Store被侵权复制，请问应该如何进行维权？需要准备哪些材料？",
    status: "pending",
    statusLabel: "待回复",
    time: "10分钟前",
    country: "美国",
    category: "版权侵权",
  },
  {
    id: 2,
    user: "李女士",
    avatar: "李",
    title: "日本版权登记流程咨询",
    content: "我们计划将公司的动漫IP授权给日本公司，需要在日本进行版权登记吗？具体流程是怎样的？",
    status: "pending",
    statusLabel: "待回复",
    time: "30分钟前",
    country: "日本",
    category: "版权登记",
  },
  {
    id: 3,
    user: "王总",
    avatar: "王",
    title: "欧盟GDPR与版权保护",
    content: "我们的数字内容平台计划进入欧盟市场，请问GDPR对版权保护有什么特殊要求？",
    status: "replied",
    statusLabel: "已回复",
    time: "2小时前",
    country: "欧盟",
    category: "合规咨询",
  },
  {
    id: 4,
    user: "陈经理",
    avatar: "陈",
    title: "AI生成内容版权归属",
    content: "我们公司使用AI生成了一批商业插画，请问这些作品在海外市场的版权归属如何界定？",
    status: "completed",
    statusLabel: "已完成",
    time: "昨天",
    country: "全球",
    category: "AI版权",
  },
]

export default function LawyerConsultationsPage() {
  const [activeTab, setActiveTab] = useState<"pending" | "replied" | "completed">("pending")

  const filteredConsultations = consultations.filter((c) => {
    if (activeTab === "pending") return c.status === "pending"
    if (activeTab === "replied") return c.status === "replied"
    return c.status === "completed"
  })

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-6">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-5 py-3">
          <Link href="/profile" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 transition-colors active:bg-gray-100">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <h1 className="flex-1 text-lg font-bold text-gray-900">用户咨询</h1>
        </div>

        {/* 标签切换 */}
        <div className="flex gap-1 px-5 pb-3">
          {[
            { key: "pending", label: "待回复", count: 2 },
            { key: "replied", label: "已回复", count: 1 },
            { key: "completed", label: "已完成", count: 1 },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key as typeof activeTab)}
              className={`flex-1 rounded-xl py-2.5 text-sm font-medium transition-all ${
                activeTab === tab.key
                  ? "bg-[#f59e0b] text-white"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {tab.label}
              {tab.count > 0 && (
                <span className={`ml-1 rounded-full px-1.5 py-0.5 text-[10px] ${
                  activeTab === tab.key ? "bg-white/20" : "bg-gray-200"
                }`}>
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </header>

      {/* 咨询列表 */}
      <div className="space-y-3 p-5">
        {filteredConsultations.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <MessageSquare className="mb-3 h-12 w-12 text-gray-300" />
            <p className="text-sm text-gray-400">暂无咨询记录</p>
          </div>
        ) : (
          filteredConsultations.map((item) => (
            <Link
              key={item.id}
              href={`/profile/lawyer/consultations/${item.id}`}
              className="block rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100 transition-all active:scale-[0.99]"
            >
              <div className="mb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a3a5c] to-[#0d2137]">
                    <span className="text-sm font-bold text-white">{item.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{item.user}</p>
                    <div className="mt-0.5 flex items-center gap-2">
                      <span className="whitespace-nowrap rounded-md bg-[#e8f4fc] px-1.5 py-0.5 text-[10px] font-medium text-[#1a3a5c]">{item.country}</span>
                      <span className="whitespace-nowrap rounded-md bg-[#fff7ed] px-1.5 py-0.5 text-[10px] font-medium text-[#f59e0b]">{item.category}</span>
                    </div>
                  </div>
                </div>
                <span className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-1 text-[10px] font-semibold ${
                  item.status === "pending" 
                    ? "bg-orange-100 text-orange-600" 
                    : item.status === "replied" 
                    ? "bg-blue-100 text-blue-600" 
                    : "bg-green-100 text-green-600"
                }`}>
                  {item.status === "pending" && <AlertCircle className="h-3 w-3" />}
                  {item.status === "replied" && <Send className="h-3 w-3" />}
                  {item.status === "completed" && <CheckCircle className="h-3 w-3" />}
                  {item.statusLabel}
                </span>
              </div>

              <h3 className="mb-2 font-semibold text-gray-900">{item.title}</h3>
              <p className="mb-3 line-clamp-2 text-sm leading-relaxed text-gray-500">{item.content}</p>

              <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                <div className="flex items-center gap-1 text-gray-400">
                  <Clock className="h-3.5 w-3.5" />
                  <span className="text-xs">{item.time}</span>
                </div>
                {item.status === "pending" && (
                  <span className="text-xs font-medium text-[#f59e0b]">点击回复</span>
                )}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
