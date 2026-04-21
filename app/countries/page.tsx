"use client"

import { ArrowLeft, Search, ChevronRight } from "lucide-react"
import Link from "next/link"
import { TabBar } from "@/components/tab-bar"

const regions = [
  {
    name: "北美洲",
    countries: [
      { code: "us", name: "美国", flag: "🇺🇸", lawCount: 12 },
      { code: "ca", name: "加拿大", flag: "🇨🇦", lawCount: 6 },
    ],
  },
  {
    name: "欧洲",
    countries: [
      { code: "eu", name: "欧盟", flag: "🇪🇺", lawCount: 15 },
      { code: "gb", name: "英国", flag: "🇬🇧", lawCount: 8 },
      { code: "de", name: "德国", flag: "🇩🇪", lawCount: 7 },
      { code: "fr", name: "法国", flag: "🇫🇷", lawCount: 6 },
    ],
  },
  {
    name: "亚洲",
    countries: [
      { code: "jp", name: "日本", flag: "🇯🇵", lawCount: 10 },
      { code: "kr", name: "韩国", flag: "🇰🇷", lawCount: 8 },
      { code: "sg", name: "新加坡", flag: "🇸🇬", lawCount: 5 },
      { code: "hk", name: "中国香港", flag: "🇭🇰", lawCount: 4 },
    ],
  },
  {
    name: "大洋洲",
    countries: [
      { code: "au", name: "澳大利亚", flag: "🇦🇺", lawCount: 6 },
      { code: "nz", name: "新西兰", flag: "🇳🇿", lawCount: 4 },
    ],
  },
]

export default function CountriesPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="flex-1 text-lg font-semibold text-foreground">全部国家/地区</h1>
        </div>

        {/* 搜索框 */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索国家或地区"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </div>
      </header>

      {/* 按洲分组的国家列表 */}
      {regions.map((region) => (
        <section key={region.name} className="border-b border-border/50 px-4 py-4">
          <h2 className="mb-3 text-sm font-semibold text-muted-foreground">{region.name}</h2>
          <div className="grid grid-cols-2 gap-2">
            {region.countries.map((country) => (
              <Link
                key={country.code}
                href={`/country/${country.code}`}
                className="flex items-center justify-between rounded-xl bg-card p-3 ring-1 ring-border/50 transition-colors active:bg-muted/30"
              >
                <div className="flex items-center gap-2">
                  <span className="text-xl">{country.flag}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{country.name}</p>
                    <p className="text-[10px] text-muted-foreground">{country.lawCount}部法规</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </section>
      ))}

      <TabBar />
    </div>
  )
}
