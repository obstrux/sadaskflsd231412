"use client"

import { ArrowLeft, Bell, MessageCircle, AlertTriangle, FileText, CheckCheck } from "lucide-react"
import Link from "next/link"

const notifications = [
  {
    id: 1,
    type: "reply",
    icon: MessageCircle,
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    title: "律师已回复您的咨询",
    content: "张明远律师已回复您关于「DMCA维权」的咨询，点击查看详情",
    date: "2024-03-15 14:30",
    isRead: false,
    href: "/profile/consultations/1",
  },
  {
    id: 2,
    type: "alert",
    icon: AlertTriangle,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    title: "新风险预警",
    content: "欧盟数字服务法(DSA)正式实施，请关注合规要求",
    date: "2024-03-15 10:00",
    isRead: false,
    href: "/alerts/1",
  },
  {
    id: 3,
    type: "update",
    icon: FileText,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: "法规更新",
    content: "《美国数字千年版权法》相关内容已更新，点击查看变更",
    date: "2024-03-14 09:00",
    isRead: true,
    href: "/laws/1",
  },
  {
    id: 4,
    type: "system",
    icon: Bell,
    iconBg: "bg-muted",
    iconColor: "text-muted-foreground",
    title: "系统通知",
    content: "您收藏的「游戏出海版权合规白皮书」已更新最新版本",
    date: "2024-03-13 16:00",
    isRead: true,
    href: "/guides/2",
  },
]

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/profile" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="flex-1 text-lg font-semibold text-foreground">消息中心</h1>
          <button className="flex items-center gap-1 text-sm text-primary">
            <CheckCheck className="h-4 w-4" />
            全部已读
          </button>
        </div>
      </header>

      {/* 通知列表 */}
      <section className="px-4 py-4">
        <div className="space-y-3">
          {notifications.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`group block rounded-xl p-4 ring-1 ring-border/50 transition-all active:scale-[0.99] ${
                item.isRead ? "bg-card" : "bg-primary/5"
              }`}
            >
              <div className="flex gap-3">
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${item.iconBg}`}>
                  <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
                    {!item.isRead && (
                      <span className="h-2 w-2 rounded-full bg-accent" />
                    )}
                  </div>
                  <p className="mb-2 text-xs text-muted-foreground">{item.content}</p>
                  <p className="text-[10px] text-muted-foreground">{item.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
