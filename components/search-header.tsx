"use client"

import { Search, Bell } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function SearchHeader() {
  const [searchFocused, setSearchFocused] = useState(false)

  return (
    <header className="relative">
      {/* 深蓝色背景区域 */}
      <div className="bg-gradient-to-br from-[#1a3a5c] to-[#0d2137] px-5 pb-10 pt-safe-top">
        {/* 顶部标题区 */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
              <span className="text-base font-bold text-white">版</span>
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-wide text-white">版权出海服务平台</h1>
              <p className="mt-0.5 text-xs text-white/60">华东师范大学出版社</p>
            </div>
          </div>
          <Link 
            href="/profile/notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm transition-all active:scale-95"
            aria-label="消息通知"
          >
            <Bell className="h-5 w-5 text-white/90" strokeWidth={1.5} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#f59e0b]" />
          </Link>
        </div>
      </div>

      {/* 悬浮搜索框 - 跨越两个区域 */}
      <div className="absolute left-0 right-0 -bottom-6 px-5">
        <div 
          className={`flex items-center gap-3 rounded-2xl bg-white px-4 py-3.5 shadow-lg shadow-black/8 transition-all duration-200 ${
            searchFocused ? "ring-2 ring-[#f59e0b]/40" : ""
          }`}
        >
          <Search className="h-5 w-5 flex-shrink-0 text-gray-400" strokeWidth={1.5} />
          <input
            type="text"
            placeholder="搜索国家、案例、法规..."
            className="flex-1 bg-transparent text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>
      </div>
    </header>
  )
}
