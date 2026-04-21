"use client"

import { ArrowLeft, FileText, Download, Trash2, Eye, Calendar, HardDrive } from "lucide-react"
import Link from "next/link"

const documents = [
  {
    id: 1,
    name: "游戏出海版权合规白皮书.pdf",
    size: "2.5MB",
    date: "2024-03-15",
    type: "PDF",
  },
  {
    id: 2,
    name: "DMCA维权通知模板.docx",
    size: "156KB",
    date: "2024-03-12",
    type: "Word",
  },
  {
    id: 3,
    name: "美国版权登记申请表.pdf",
    size: "1.2MB",
    date: "2024-03-10",
    type: "PDF",
  },
  {
    id: 4,
    name: "咨询记录-张明远律师.pdf",
    size: "856KB",
    date: "2024-03-08",
    type: "PDF",
  },
]

export default function DocumentsPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/profile" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="flex-1 text-lg font-semibold text-foreground">我的文档</h1>
          <button className="text-sm text-primary">管理</button>
        </div>
      </header>

      {/* 存储空间 */}
      <section className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-primary/10 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <HardDrive className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground">已用空间</p>
            <div className="mt-1 h-2 w-full rounded-full bg-muted">
              <div className="h-2 w-1/4 rounded-full bg-primary" />
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-bold text-foreground">4.7MB</p>
            <p className="text-[10px] text-muted-foreground">/ 100MB</p>
          </div>
        </div>
      </section>

      {/* 文档列表 */}
      <section className="px-4 py-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-foreground">全部文档</h2>
          <span className="text-xs text-muted-foreground">{documents.length}个文件</span>
        </div>

        <div className="space-y-3">
          {documents.map((doc) => (
            <div
              key={doc.id}
              className="rounded-xl bg-card p-4 ring-1 ring-border/50"
            >
              <div className="mb-3 flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="mb-1 text-sm font-medium text-foreground">{doc.name}</h3>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span>{doc.size}</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {doc.date}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-muted py-2 text-xs font-medium text-foreground transition-colors active:bg-muted/70">
                  <Eye className="h-3.5 w-3.5" />
                  预览
                </button>
                <button className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary/10 py-2 text-xs font-medium text-primary transition-colors active:bg-primary/20">
                  <Download className="h-3.5 w-3.5" />
                  下载
                </button>
                <button className="flex items-center justify-center rounded-lg bg-destructive/10 px-3 py-2 text-destructive transition-colors active:bg-destructive/20">
                  <Trash2 className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
