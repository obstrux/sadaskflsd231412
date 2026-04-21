"use client"

import { ArrowLeft, FileText, Clock, CheckCircle, Eye } from "lucide-react"
import Link from "next/link"

const cases = [
  {
    id: 1,
    title: "某游戏公司美国版权侵权维权案",
    client: "某知名游戏公司",
    country: "美国",
    category: "版权侵权",
    status: "已结案",
    result: "胜诉",
    date: "2024-02",
    views: 1256,
  },
  {
    id: 2,
    title: "跨境音乐版权授权纠纷调解案",
    client: "某音乐平台",
    country: "欧盟",
    category: "版权授权",
    status: "已结案",
    result: "调解成功",
    date: "2024-01",
    views: 892,
  },
  {
    id: 3,
    title: "AI生成作品版权归属咨询案",
    client: "某科技公司",
    country: "全球",
    category: "AI版权",
    status: "进行中",
    result: "-",
    date: "2024-03",
    views: 2341,
  },
]

export default function LawyerCasesPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-6">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-5 py-3">
          <Link href="/profile" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 transition-colors active:bg-gray-100">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <h1 className="flex-1 text-lg font-bold text-gray-900">我的案例</h1>
        </div>
      </header>

      {/* 案例列表 */}
      <div className="space-y-3 p-5">
        {cases.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-gray-100"
          >
            <div className="mb-3 flex items-start justify-between">
              <div className="flex flex-wrap items-center gap-2">
                <span className="whitespace-nowrap rounded-md bg-[#e8f4fc] px-2 py-0.5 text-xs font-medium text-[#1a3a5c]">{item.country}</span>
                <span className="whitespace-nowrap rounded-md bg-[#fff7ed] px-2 py-0.5 text-xs font-medium text-[#f59e0b]">{item.category}</span>
              </div>
              <span className={`flex items-center gap-1 whitespace-nowrap rounded-lg px-2 py-1 text-[10px] font-semibold ${
                item.status === "已结案" ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
              }`}>
                {item.status === "已结案" && <CheckCircle className="h-3 w-3" />}
                {item.status}
              </span>
            </div>

            <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
            <p className="mb-3 text-sm text-gray-500">委托方：{item.client}</p>

            <div className="flex items-center justify-between border-t border-gray-100 pt-3">
              <div className="flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{item.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-3.5 w-3.5" />
                  <span>{item.views}</span>
                </div>
              </div>
              {item.status === "已结案" && (
                <span className={`text-xs font-semibold ${item.result === "胜诉" ? "text-green-600" : "text-blue-600"}`}>
                  {item.result}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
