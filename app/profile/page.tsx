"use client"

import { Settings, ChevronRight, Bookmark, Clock, MessageSquare, FileText, Bell, HelpCircle, Shield, LogOut, RefreshCw, Briefcase } from "lucide-react"
import Link from "next/link"
import { TabBar } from "@/components/tab-bar"
import { useState, useEffect } from "react"

export default function ProfilePage() {
  const [userRole, setUserRole] = useState<"user" | "lawyer">("user")
  const [showRoleSwitch, setShowRoleSwitch] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const role = localStorage.getItem("userRole") as "user" | "lawyer" | null
    const logged = localStorage.getItem("isLoggedIn") === "true"
    if (role) setUserRole(role)
    if (logged) setIsLoggedIn(logged)
  }, [])

  const handleRoleSwitch = (role: "user" | "lawyer") => {
    setUserRole(role)
    localStorage.setItem("userRole", role)
    setShowRoleSwitch(false)
  }

  const handleLogout = () => {
    localStorage.removeItem("userRole")
    localStorage.removeItem("isLoggedIn")
    setIsLoggedIn(false)
    setUserRole("user")
  }

  const userMenuItems = [
    {
      title: "我的服务",
      items: [
        { icon: Bookmark, label: "我的收藏", href: "/profile/favorites", badge: "12" },
        { icon: Clock, label: "浏览历史", href: "/profile/history", badge: null },
        { icon: MessageSquare, label: "咨询记录", href: "/profile/consultations", badge: "3" },
        { icon: FileText, label: "我的文档", href: "/profile/documents", badge: null },
      ],
    },
    {
      title: "消息通知",
      items: [
        { icon: Bell, label: "消息中心", href: "/profile/notifications", badge: "5" },
      ],
    },
    {
      title: "其他",
      items: [
        { icon: HelpCircle, label: "帮助中心", href: "/profile/help", badge: null },
        { icon: Shield, label: "隐私政策", href: "/profile/privacy", badge: null },
      ],
    },
  ]

  const lawyerMenuItems = [
    {
      title: "律师工作台",
      items: [
        { icon: MessageSquare, label: "用户咨询", href: "/profile/lawyer/consultations", badge: "8" },
        { icon: Briefcase, label: "我的案例", href: "/profile/lawyer/cases", badge: null },
        { icon: FileText, label: "专业文章", href: "/profile/lawyer/articles", badge: null },
      ],
    },
    {
      title: "消息通知",
      items: [
        { icon: Bell, label: "消息中心", href: "/profile/notifications", badge: "12" },
      ],
    },
    {
      title: "其他",
      items: [
        { icon: HelpCircle, label: "帮助中心", href: "/profile/help", badge: null },
        { icon: Shield, label: "隐私政策", href: "/profile/privacy", badge: null },
      ],
    },
  ]

  const menuItems = userRole === "lawyer" ? lawyerMenuItems : userMenuItems

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 bg-white pt-safe-top shadow-sm">
        <div className="flex items-center justify-between px-4 py-2.5">
          <h1 className="text-base font-bold text-gray-900">个人中心</h1>
          <Link href="/profile/settings" className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50">
            <Settings className="h-4 w-4 text-gray-500" />
          </Link>
        </div>
      </header>

      {/* 用户信息卡片 */}
      <section className="bg-gradient-to-b from-[#e8f4fc] to-white px-4 py-5">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className={`flex h-14 w-14 items-center justify-center rounded-xl ${userRole === "lawyer" ? "bg-gradient-to-br from-[#f59e0b] to-[#ea580c]" : "bg-gradient-to-br from-[#1a3a5c] to-[#0d2137]"}`}>
              <span className="text-xl font-bold text-white">{userRole === "lawyer" ? "律" : "用"}</span>
            </div>
            {userRole === "lawyer" && (
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#f59e0b] text-[8px] font-bold text-white ring-2 ring-white">V</span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-gray-900 truncate">{userRole === "lawyer" ? "张明远律师" : (isLoggedIn ? "用户" : "游客")}</h2>
              {userRole === "lawyer" && (
                <span className="flex-shrink-0 rounded bg-[#f59e0b]/10 px-1.5 py-0.5 text-[10px] font-medium text-[#f59e0b]">认证律师</span>
              )}
            </div>
            <p className="mt-0.5 text-xs text-gray-500 truncate">{userRole === "lawyer" ? "上海正义知识产权律师事务所" : (isLoggedIn ? "欢迎使用版权出海服务" : "登录后享受更多服务")}</p>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {/* 切换角色按钮 - 始终显示 */}
            <button
              onClick={() => setShowRoleSwitch(true)}
              className="flex items-center gap-1 rounded-lg bg-gray-100 px-2.5 py-1.5 text-[11px] font-medium text-gray-600"
            >
              <RefreshCw className="h-3 w-3" />
              切换
            </button>
            {!isLoggedIn && (
              <Link
                href="/login"
                className="rounded-lg bg-[#1a3a5c] px-3 py-1.5 text-xs font-medium text-white"
              >
                登录
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* 角色切换弹窗 */}
      {showRoleSwitch && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40" onClick={() => setShowRoleSwitch(false)}>
          <div className="w-full max-w-md rounded-t-2xl bg-white p-4 pb-safe-bottom" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 text-center">
              <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-gray-200" />
              <h3 className="text-base font-bold text-gray-900">切换身份</h3>
              <p className="mt-0.5 text-xs text-gray-500">选择您要使用的身份</p>
            </div>
            <div className="space-y-2">
              <button
                onClick={() => handleRoleSwitch("user")}
                className={`flex w-full items-center gap-3 rounded-xl p-3 transition-all ${userRole === "user" ? "bg-[#e8f4fc] ring-2 ring-[#1a3a5c]" : "bg-gray-50"}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1a3a5c] to-[#0d2137]">
                  <span className="text-sm font-bold text-white">用</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-gray-900">普通用户</p>
                  <p className="text-[11px] text-gray-500">浏览法规、咨询律师</p>
                </div>
                {userRole === "user" && (
                  <span className="rounded bg-[#1a3a5c] px-1.5 py-0.5 text-[10px] font-bold text-white">当前</span>
                )}
              </button>
              <button
                onClick={() => handleRoleSwitch("lawyer")}
                className={`flex w-full items-center gap-3 rounded-xl p-3 transition-all ${userRole === "lawyer" ? "bg-[#fff7ed] ring-2 ring-[#f59e0b]" : "bg-gray-50"}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#ea580c]">
                  <span className="text-sm font-bold text-white">律</span>
                </div>
                <div className="flex-1 text-left">
                  <p className="text-sm font-medium text-gray-900">律师身份</p>
                  <p className="text-[11px] text-gray-500">回复咨询、管理案例</p>
                </div>
                {userRole === "lawyer" && (
                  <span className="rounded bg-[#f59e0b] px-1.5 py-0.5 text-[10px] font-bold text-white">当前</span>
                )}
              </button>
            </div>
            <button
              onClick={() => setShowRoleSwitch(false)}
              className="mt-3 w-full rounded-xl bg-gray-100 py-3 text-sm font-medium text-gray-600"
            >
              取消
            </button>
          </div>
        </div>
      )}

      {/* 统计数据 */}
      <section className="border-b border-gray-100 bg-white px-4 py-3">
        <div className="grid grid-cols-4 gap-2">
          {userRole === "lawyer" ? (
            [
              { label: "待回复", value: "8" },
              { label: "已完成", value: "156" },
              { label: "好评率", value: "98%" },
              { label: "文章", value: "12" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-lg font-bold text-gray-900">{item.value}</p>
                <p className="text-[10px] text-gray-500">{item.label}</p>
              </div>
            ))
          ) : (
            [
              { label: "收藏", value: "12" },
              { label: "浏览", value: "86" },
              { label: "咨询", value: "3" },
              { label: "文档", value: "5" },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <p className="text-lg font-bold text-gray-900">{item.value}</p>
                <p className="text-[10px] text-gray-500">{item.label}</p>
              </div>
            ))
          )}
        </div>
      </section>

      {/* 菜单列表 */}
      {menuItems.map((section) => (
        <section key={section.title} className="border-b border-gray-100 bg-white px-4 py-3">
          <h3 className="mb-2 text-[11px] font-medium text-gray-400">{section.title}</h3>
          <div className="space-y-1.5">
            {section.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center justify-between rounded-lg bg-gray-50 p-3"
              >
                <div className="flex items-center gap-2.5">
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${userRole === "lawyer" && section.title === "律师工作台" ? "bg-[#fff7ed]" : "bg-[#e8f4fc]"}`}>
                    <item.icon className={`h-4 w-4 ${userRole === "lawyer" && section.title === "律师工作台" ? "text-[#f59e0b]" : "text-[#1a3a5c]"}`} />
                  </div>
                  <span className="text-sm text-gray-800">{item.label}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold text-white ${userRole === "lawyer" && section.title === "律师工作台" ? "bg-[#f59e0b]" : "bg-[#1a3a5c]"}`}>
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className="h-4 w-4 text-gray-300" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}

      {/* 退出登录 */}
      {isLoggedIn && (
        <section className="px-4 py-4">
          <button 
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-1.5 rounded-xl bg-red-50 py-3 text-sm font-medium text-red-500"
          >
            <LogOut className="h-4 w-4" />
            退出登录
          </button>
        </section>
      )}

      <TabBar />
    </div>
  )
}
