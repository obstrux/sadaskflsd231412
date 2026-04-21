"use client"

import { Scale } from "lucide-react"
import Link from "next/link"

export function LawyerConsultCard() {
  return (
    <section className="px-5 py-4">
      <Link
        href="/lawyers"
        className="group relative block overflow-hidden rounded-2xl bg-gradient-to-r from-[#f8fafc] to-white p-5 shadow-sm ring-1 ring-gray-100 transition-all duration-200 active:scale-[0.99]"
      >
        {/* 背景装饰 - 淡色法律图标水印 */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-[0.04]">
          <Scale className="h-32 w-32 text-[#1a3a5c]" strokeWidth={1} />
        </div>
        
        <div className="relative flex items-center justify-between gap-4">
          {/* 左侧文案 */}
          <div className="flex-1">
            <h3 className="text-base font-bold text-gray-800">遇到版权问题？</h3>
            <p className="mt-1 text-sm text-gray-500">
              专业律师团队 48小时内极速解答
            </p>
          </div>
          
          {/* 右侧CTA按钮 */}
          <button className="flex-shrink-0 rounded-full bg-[#1a3a5c] px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 active:scale-95 active:bg-[#0d2137]">
            免费咨询
          </button>
        </div>
      </Link>
    </section>
  )
}
