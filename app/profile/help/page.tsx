"use client"

import { ArrowLeft, ChevronRight, Search, MessageCircle, Phone, Mail, FileQuestion, Shield, CreditCard, BookOpen } from "lucide-react"
import Link from "next/link"

const helpCategories = [
  {
    icon: FileQuestion,
    title: "常见问题",
    description: "查看用户最常询问的问题",
    href: "/profile/help/faq",
  },
  {
    icon: BookOpen,
    title: "使用指南",
    description: "了解如何使用平台功能",
    href: "/profile/help/guide",
  },
  {
    icon: Shield,
    title: "账号安全",
    description: "账号保护与安全设置",
    href: "/profile/help/security",
  },
  {
    icon: CreditCard,
    title: "支付与会员",
    description: "订阅、支付相关问题",
    href: "/profile/help/payment",
  },
]

const hotQuestions = [
  "如何进行在线律师咨询？",
  "如何收藏法规或案例？",
  "如何开通专业版会员？",
  "如何修改登录密码？",
  "咨询费用如何计算？",
]

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-background pb-32">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/profile" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">帮助中心</h1>
        </div>

        {/* 搜索框 */}
        <div className="px-4 pb-3">
          <div className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="搜索问题"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
          </div>
        </div>
      </header>

      {/* 帮助分类 */}
      <section className="border-b border-border/50 px-4 py-4">
        <h2 className="mb-3 text-sm font-semibold text-foreground">帮助分类</h2>
        <div className="grid grid-cols-2 gap-3">
          {helpCategories.map((cat) => (
            <Link
              key={cat.title}
              href={cat.href}
              className="flex items-center gap-3 rounded-xl bg-card p-3 ring-1 ring-border/50 transition-colors active:bg-muted/30"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <cat.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{cat.title}</p>
                <p className="text-[10px] text-muted-foreground">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 热门问题 */}
      <section className="border-b border-border/50 px-4 py-4">
        <h2 className="mb-3 text-sm font-semibold text-foreground">热门问题</h2>
        <div className="space-y-2">
          {hotQuestions.map((q, index) => (
            <button
              key={index}
              className="flex w-full items-center justify-between rounded-xl bg-card p-3 ring-1 ring-border/50 transition-colors active:bg-muted/30"
            >
              <span className="text-sm text-foreground">{q}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </button>
          ))}
        </div>
      </section>

      {/* 联系客服 */}
      <section className="px-4 py-4">
        <h2 className="mb-3 text-sm font-semibold text-foreground">联系我们</h2>
        <div className="space-y-3">
          <button className="flex w-full items-center gap-3 rounded-xl bg-card p-4 ring-1 ring-border/50 transition-colors active:bg-muted/30">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
              <MessageCircle className="h-5 w-5 text-green-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-foreground">在线客服</p>
              <p className="text-xs text-muted-foreground">工作日 9:00-18:00</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
          
          <button className="flex w-full items-center gap-3 rounded-xl bg-card p-4 ring-1 ring-border/50 transition-colors active:bg-muted/30">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <Phone className="h-5 w-5 text-blue-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-foreground">客服热线</p>
              <p className="text-xs text-muted-foreground">400-XXX-XXXX</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
          
          <button className="flex w-full items-center gap-3 rounded-xl bg-card p-4 ring-1 ring-border/50 transition-colors active:bg-muted/30">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100">
              <Mail className="h-5 w-5 text-amber-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-sm font-medium text-foreground">邮件反馈</p>
              <p className="text-xs text-muted-foreground">support@copyright.com</p>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </section>
    </div>
  )
}
