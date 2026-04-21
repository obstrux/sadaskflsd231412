"use client"

import { ArrowLeft, MessageCircle, ChevronRight, Clock, CheckCircle2, AlertCircle, Star } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const consultations = [
  {
    id: 1,
    lawyerName: "张明远",
    lawyerFirm: "上海正义知识产权律师事务所",
    question: "作品在美国被侵权，如何通过DMCA程序维权？",
    status: "completed",
    statusText: "已完成",
    date: "2024-03-15",
    unread: false,
    canRate: true,
    rated: false,
  },
  {
    id: 2,
    lawyerName: "李晓华",
    lawyerFirm: "北京华信国际律师事务所",
    question: "游戏出海日本市场需要注意哪些版权问题？",
    status: "completed",
    statusText: "已完成",
    date: "2024-03-12",
    unread: false,
    canRate: true,
    rated: true,
    rating: 5,
  },
  {
    id: 3,
    lawyerName: "王思远",
    lawyerFirm: "广州海纳百川律师事务所",
    question: "AI生成的美术素材是否享有版权？",
    status: "replied",
    statusText: "已回复",
    date: "2024-03-10",
    unread: true,
    canRate: false,
    rated: false,
  },
  {
    id: 4,
    lawyerName: "陈雅琳",
    lawyerFirm: "深圳前海法务律师事务所",
    question: "跨境版权授权合同需要注意哪些条款？",
    status: "pending",
    statusText: "等待回复",
    date: "2024-03-08",
    unread: false,
    canRate: false,
    rated: false,
  },
]

export default function ConsultationsPage() {
  const [ratingModal, setRatingModal] = useState<number | null>(null)
  const [selectedRating, setSelectedRating] = useState(5)
  const [ratingComment, setRatingComment] = useState("")

  const handleSubmitRating = () => {
    // 提交评价
    setRatingModal(null)
    setSelectedRating(5)
    setRatingComment("")
    alert("评价提交成功！感谢您的反馈")
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/profile" className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">咨询记录</h1>
        </div>
      </header>

      {/* 状态提示 */}
      <section className="border-b border-border/50 bg-muted/30 px-4 py-3">
        <p className="text-xs text-muted-foreground">
          咨询完成后（由律师结束咨询），您可以对律师的服务进行评价
        </p>
      </section>

      {/* 咨询列表 */}
      <section className="px-4 py-4">
        <div className="space-y-3">
          {consultations.map((item) => (
            <div
              key={item.id}
              className="rounded-xl bg-card p-4 ring-1 ring-border/50"
            >
              <Link
                href={`/profile/consultations/${item.id}`}
                className="block transition-all active:scale-[0.99] active:bg-muted/30"
              >
                <div className="mb-3 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                        <span className="text-sm font-bold text-primary">{item.lawyerName[0]}</span>
                      </div>
                      {item.unread && (
                        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-accent" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{item.lawyerName}</p>
                      <p className="text-xs text-muted-foreground">{item.lawyerFirm}</p>
                    </div>
                  </div>
                  <span
                    className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium ${
                      item.status === "completed"
                        ? "bg-blue-100 text-blue-700"
                        : item.status === "replied"
                        ? "bg-green-100 text-green-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {item.status === "completed" ? (
                      <CheckCircle2 className="h-3 w-3" />
                    ) : item.status === "replied" ? (
                      <MessageCircle className="h-3 w-3" />
                    ) : (
                      <AlertCircle className="h-3 w-3" />
                    )}
                    {item.statusText}
                  </span>
                </div>

                <p className="mb-3 line-clamp-2 text-sm text-foreground">{item.question}</p>

                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{item.date}</span>
                  </div>
                  <ChevronRight className="h-4 w-4" />
                </div>
              </Link>

              {/* 评价区域 */}
              {item.canRate && (
                <div className="mt-3 border-t border-border/50 pt-3">
                  {item.rated ? (
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-xs text-muted-foreground">您的评价：</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star
                              key={star}
                              className={`h-4 w-4 ${
                                star <= (item.rating || 0)
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-muted-foreground"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-green-600">已评价</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => setRatingModal(item.id)}
                      className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-primary/10 py-2 text-xs font-medium text-primary transition-colors active:bg-primary/20"
                    >
                      <Star className="h-4 w-4" />
                      评价律师服务
                    </button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 发起新咨询 */}
      <div className="fixed bottom-20 left-0 right-0 px-4 pb-safe-bottom">
        <Link
          href="/consult"
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-colors active:bg-primary/90"
        >
          <MessageCircle className="h-5 w-5" />
          发起新咨询（免费）
        </Link>
      </div>

      {/* 评价弹窗 */}
      {ratingModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50" onClick={() => setRatingModal(null)}>
          <div 
            className="w-full max-w-md rounded-t-2xl bg-card p-6 pb-safe-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-center text-lg font-semibold text-foreground">评价律师服务</h3>
            
            {/* 星级评分 */}
            <div className="mb-4 flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setSelectedRating(star)}
                  className="p-1"
                >
                  <Star
                    className={`h-8 w-8 transition-colors ${
                      star <= selectedRating
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground"
                    }`}
                  />
                </button>
              ))}
            </div>
            <p className="mb-4 text-center text-sm text-muted-foreground">
              {selectedRating === 5 ? "非常满意" : 
               selectedRating === 4 ? "满意" : 
               selectedRating === 3 ? "一般" : 
               selectedRating === 2 ? "不满意" : "非常不满意"}
            </p>

            {/* 评价内容 */}
            <textarea
              value={ratingComment}
              onChange={(e) => setRatingComment(e.target.value)}
              placeholder="请输入您的评价内容（选填）"
              className="mb-4 h-24 w-full rounded-xl bg-muted p-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />

            {/* 操作按钮 */}
            <div className="flex gap-3">
              <button
                onClick={() => setRatingModal(null)}
                className="flex-1 rounded-xl bg-muted py-3 text-sm font-medium text-foreground transition-colors active:bg-muted/70"
              >
                取消
              </button>
              <button
                onClick={handleSubmitRating}
                className="flex-1 rounded-xl bg-primary py-3 text-sm font-medium text-primary-foreground transition-colors active:bg-primary/90"
              >
                提交评价
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
