"use client"

import { ChevronRight } from "lucide-react"
import Link from "next/link"

const countries = [
  { code: "US", name: "美国", flag: "🇺🇸" },
  { code: "EU", name: "欧盟", flag: "🇪🇺" },
  { code: "JP", name: "日本", flag: "🇯🇵" },
  { code: "KR", name: "韩国", flag: "🇰🇷" },
  { code: "GB", name: "英国", flag: "🇬🇧" },
  { code: "DE", name: "德国", flag: "🇩🇪" },
]

export function CountryFilter() {
  return (
    <section className="px-5 py-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-base font-bold text-gray-900">热门国家/地区</h2>
        <Link 
          href="/countries" 
          className="flex items-center gap-0.5 text-xs font-medium text-[#1a3a5c] transition-colors active:opacity-70"
        >
          全部
          <ChevronRight className="h-4 w-4" />
        </Link>
      </div>
      
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {countries.map((country) => (
          <Link
            key={country.code}
            href={`/country/${country.code.toLowerCase()}`}
            className="flex flex-shrink-0 items-center gap-2.5 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-gray-100 transition-all duration-200 active:scale-95"
          >
            <span className="text-xl">{country.flag}</span>
            <span className="whitespace-nowrap text-sm font-medium text-gray-800">{country.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
