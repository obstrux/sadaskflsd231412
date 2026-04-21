"use client"

import { Scale, FileText, BookOpen, AlertTriangle } from "lucide-react"
import Link from "next/link"

const quickAccessItems = [
  {
    icon: Scale,
    label: "法律法规",
    description: "各国核心法律",
    href: "/laws",
    iconBg: "bg-[#e8f4fc]",
    iconColor: "text-[#1a3a5c]",
  },
  {
    icon: FileText,
    label: "典型案例",
    description: "判例精选分析",
    href: "/cases",
    iconBg: "bg-[#fff7ed]",
    iconColor: "text-[#ea580c]",
  },
  {
    icon: BookOpen,
    label: "实务指引",
    description: "登记维权指南",
    href: "/guides",
    iconBg: "bg-[#f0f9ff]",
    iconColor: "text-[#0369a1]",
  },
  {
    icon: AlertTriangle,
    label: "风险预警",
    description: "合规风险提示",
    href: "/alerts",
    iconBg: "bg-[#fef3c7]",
    iconColor: "text-[#b45309]",
  },
]

export function QuickAccess() {
  return (
    <section className="px-5 pb-5 pt-10">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-base font-bold text-gray-900">核心服务</h2>
        <span className="text-xs text-gray-400">知识产权法律服务</span>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {quickAccessItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="group flex flex-col items-center"
          >
            <div 
              className={`mb-3 flex h-14 w-14 items-center justify-center rounded-2xl ${item.iconBg} transition-transform duration-200 active:scale-95`}
            >
              <item.icon className={`h-6 w-6 ${item.iconColor}`} strokeWidth={1.5} />
            </div>
            <span className="text-center text-xs font-semibold text-gray-800">{item.label}</span>
            <span className="mt-1 text-center text-[11px] leading-tight text-gray-400">{item.description}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
