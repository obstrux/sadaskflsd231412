"use client"

import { ArrowLeft, ChevronRight, Bell, Globe, Shield, Trash2, Moon, Volume2 } from "lucide-react"
import Link from "next/link"

const settingsGroups = [
  {
    title: "通知设置",
    items: [
      { icon: Bell, label: "消息通知", type: "toggle", value: true },
      { icon: Volume2, label: "声音提醒", type: "toggle", value: false },
    ],
  },
  {
    title: "通用设置",
    items: [
      { icon: Globe, label: "语言", type: "link", value: "简体中文" },
      { icon: Moon, label: "深色模式", type: "toggle", value: false },
    ],
  },
  {
    title: "隐私与安全",
    items: [
      { icon: Shield, label: "账号安全", type: "link" },
      { icon: Trash2, label: "清除缓存", type: "link", value: "12.5MB" },
    ],
  },
]

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/profile" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">设置</h1>
        </div>
      </header>

      {/* 设置列表 */}
      {settingsGroups.map((group) => (
        <section key={group.title} className="border-b border-border/50 px-4 py-4">
          <h3 className="mb-2 text-xs font-medium text-muted-foreground">{group.title}</h3>
          <div className="space-y-1">
            {group.items.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between rounded-xl bg-card p-3"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{item.label}</span>
                </div>
                {item.type === "toggle" ? (
                  <button
                    className={`h-6 w-11 rounded-full transition-colors ${
                      item.value ? "bg-primary" : "bg-muted"
                    }`}
                  >
                    <span
                      className={`block h-5 w-5 rounded-full bg-white shadow-sm transition-transform ${
                        item.value ? "translate-x-5" : "translate-x-0.5"
                      }`}
                    />
                  </button>
                ) : (
                  <div className="flex items-center gap-1">
                    {item.value && (
                      <span className="text-xs text-muted-foreground">{item.value}</span>
                    )}
                    <ChevronRight className="h-4 w-4 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* 版本信息 */}
      <div className="px-4 py-8 text-center">
        <p className="text-xs text-muted-foreground">版权出海服务平台 v1.0.0</p>
        <p className="mt-1 text-[10px] text-muted-foreground">华东师范大学出版社</p>
      </div>
    </div>
  )
}
