"use client"

export const runtime = "edge";

import { ArrowLeft, Star, Clock, MessageCircle, Award, Building } from "lucide-react"
import Link from "next/link"

const lawyer = {
  id: 1,
  name: "张明远",
  title: "高级合伙人",
  firm: "上海正义知识产权律师事务所",
  specialty: ["版权保护", "跨境授权", "商标注册"],
  rating: 4.9,
  cases: 156,
  responseTime: "5分钟",
  experience: "15年",
  intro: "张明远律师是国内知名的跨境知识产权法律专家，专注于版权保护、跨境授权及涉外知识产权诉讼领域。",
  education: "北京大学法学院 法学硕士",
  languages: ["中文", "英文", "日文"],
  isOnline: true,
  services: [
    { name: "版权登记咨询", desc: "各国版权登记流程" },
    { name: "侵权维权", desc: "跨境版权侵权代理" },
    { name: "授权合同", desc: "版权授权合同审查" },
    { name: "合规咨询", desc: "出海合规风险评估" },
  ],
  recentCases: [
    { title: "某游戏公司美国版权侵权维权案", result: "胜诉", year: "2024" },
    { title: "跨境音乐版权授权纠纷调解案", result: "调解成功", year: "2024" },
    { title: "某影视公司欧盟版权登记案", result: "成功登记", year: "2023" },
  ],
}

export default function LawyerDetailPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 bg-white pt-safe-top shadow-sm">
        <div className="flex items-center gap-3 px-4 py-2.5">
          <Link href="/lawyers" className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50">
            <ArrowLeft className="h-4 w-4 text-gray-600" />
          </Link>
          <h1 className="flex-1 text-base font-bold text-gray-900">律师详情</h1>
        </div>
      </header>

      {/* 律师信息卡片 */}
      <section className="bg-white px-4 py-4">
        <div className="flex gap-3">
          <div className="relative flex-shrink-0">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a3a5c] to-[#0d2137]">
              <span className="text-xl font-bold text-white">{lawyer.name[0]}</span>
            </div>
            {lawyer.isOnline && (
              <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-green-500" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <h2 className="text-base font-bold text-gray-900">{lawyer.name}</h2>
              <span className="flex-shrink-0 whitespace-nowrap rounded bg-[#e8f4fc] px-1.5 py-0.5 text-[10px] text-[#1a3a5c]">{lawyer.title}</span>
            </div>
            <p className="mt-0.5 text-xs text-gray-500 truncate">{lawyer.firm}</p>
            <div className="mt-1.5 flex flex-wrap gap-1">
              {lawyer.specialty.map((s) => (
                <span key={s} className="flex-shrink-0 whitespace-nowrap rounded bg-[#fff7ed] px-1.5 py-0.5 text-[10px] text-[#f59e0b]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 数据统计 */}
        <div className="mt-4 grid grid-cols-4 gap-2">
          <div className="rounded-lg bg-gray-50 py-2 text-center">
            <div className="flex items-center justify-center gap-0.5">
              <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
              <span className="text-sm font-bold text-gray-900">{lawyer.rating}</span>
            </div>
            <span className="text-[10px] text-gray-500">评分</span>
          </div>
          <div className="rounded-lg bg-gray-50 py-2 text-center">
            <p className="text-sm font-bold text-gray-900">{lawyer.cases}</p>
            <span className="text-[10px] text-gray-500">服务次数</span>
          </div>
          <div className="rounded-lg bg-gray-50 py-2 text-center">
            <p className="text-sm font-bold text-gray-900">{lawyer.experience}</p>
            <span className="text-[10px] text-gray-500">从业经验</span>
          </div>
          <div className="rounded-lg bg-gray-50 py-2 text-center">
            <div className="flex items-center justify-center gap-0.5">
              <Clock className="h-3 w-3 text-green-500" />
              <span className="text-sm font-bold text-green-600">{lawyer.responseTime}</span>
            </div>
            <span className="text-[10px] text-gray-500">响应</span>
          </div>
        </div>
      </section>

      {/* 个人简介 */}
      <section className="mt-2 bg-white px-4 py-4">
        <h3 className="mb-2 text-sm font-bold text-gray-900">个人简介</h3>
        <p className="text-xs leading-relaxed text-gray-600">{lawyer.intro}</p>
        <div className="mt-3 space-y-1.5">
          <div className="flex items-center gap-2">
            <Award className="h-3.5 w-3.5 text-gray-400" />
            <span className="text-xs text-gray-600">{lawyer.education}</span>
          </div>
          <div className="flex items-center gap-2">
            <Building className="h-3.5 w-3.5 text-gray-400" />
            <span className="text-xs text-gray-600">语言：{lawyer.languages.join("、")}</span>
          </div>
        </div>
      </section>

      {/* 服务项目 */}
      <section className="mt-2 bg-white px-4 py-4">
        <h3 className="mb-2 text-sm font-bold text-gray-900">服务项目</h3>
        <div className="grid grid-cols-2 gap-2">
          {lawyer.services.map((service) => (
            <div key={service.name} className="rounded-lg bg-gray-50 p-2.5">
              <p className="text-xs font-medium text-gray-900">{service.name}</p>
              <p className="mt-0.5 text-[10px] text-gray-500">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 代表案例 */}
      <section className="mt-2 bg-white px-4 py-4">
        <h3 className="mb-2 text-sm font-bold text-gray-900">代表案例</h3>
        <div className="space-y-2">
          {lawyer.recentCases.map((c, index) => (
            <div key={index} className="flex items-center justify-between rounded-lg bg-gray-50 p-2.5">
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-gray-900 truncate">{c.title}</p>
                <p className="text-[10px] text-gray-500">{c.year}年</p>
              </div>
              <span className="ml-2 flex-shrink-0 whitespace-nowrap rounded bg-green-100 px-1.5 py-0.5 text-[10px] text-green-600">{c.result}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 底部操作栏 */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white px-4 py-3 pb-safe-bottom">
        <Link
          href={`/consult?lawyer=${lawyer.id}`}
          className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#f59e0b] py-3 text-sm font-bold text-white shadow-lg shadow-[#f59e0b]/20"
        >
          <MessageCircle className="h-4 w-4" />
          立即咨询（免费）
        </Link>
      </div>
    </div>
  )
}
