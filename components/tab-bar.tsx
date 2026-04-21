"use client"

import { Home, BookMarked, Users, User } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const tabs = [
  {
    id: "home",
    label: "首页",
    icon: Home,
    href: "/",
  },
  {
    id: "laws",
    label: "法规库",
    icon: BookMarked,
    href: "/laws",
  },
  {
    id: "lawyers",
    label: "律师库",
    icon: Users,
    href: "/lawyers",
  },
  {
    id: "profile",
    label: "我的",
    icon: User,
    href: "/profile",
  },
]

export function TabBar() {
  const pathname = usePathname()

  const getActiveTab = () => {
    if (pathname === "/") return "home"
    if (pathname.startsWith("/laws")) return "laws"
    if (pathname.startsWith("/lawyers")) return "lawyers"
    if (pathname.startsWith("/profile")) return "profile"
    return "home"
  }

  const activeTab = getActiveTab()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-100 bg-white/95 backdrop-blur-lg pb-safe-bottom">
      <div className="mx-auto flex max-w-md items-center justify-around px-4 py-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <Link
              key={tab.id}
              href={tab.href}
              className={`relative flex flex-1 flex-col items-center gap-1 rounded-xl py-2 transition-all duration-200 ${
                isActive ? "text-[#1a3a5c]" : "text-gray-400"
              }`}
            >
              {isActive && (
                <span className="absolute -top-2 left-1/2 h-1 w-6 -translate-x-1/2 rounded-full bg-[#f59e0b]" />
              )}
              <tab.icon
                className={`h-5 w-5 transition-transform duration-200 ${
                  isActive ? "scale-110" : ""
                }`}
                strokeWidth={isActive ? 2 : 1.5}
              />
              <span className={`text-[10px] ${isActive ? "font-bold" : "font-medium"}`}>
                {tab.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
