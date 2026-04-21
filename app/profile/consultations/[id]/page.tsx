"use client"

export const runtime = "edge";

import { ArrowLeft, Send, Star, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { useState, use } from "react"

const consultationData: Record<string, {
  lawyerName: string
  lawyerFirm: string
  question: string
  status: string
  statusText: string
  date: string
  messages: Array<{ sender: string; content: string; time: string }>
  canRate: boolean
  rated: boolean
}> = {
  "1": {
    lawyerName: "张明远",
    lawyerFirm: "上海正义知识产权律师事务所",
    question: "作品在美国被侵权，如何通过DMCA程序维权？",
    status: "completed",
    statusText: "已完成",
    date: "2024-03-15",
    messages: [
      { sender: "user", content: "张律师您好，我的原创小说在美国一个网站上被盗版了，请问我该如何维权？", time: "2024-03-15 10:00" },
      { sender: "lawyer", content: "您好！针对您的情况，我建议通过DMCA程序进行维权。首先，您需要准备好作品的原创证明材料，包括创作时间、版权登记证书等。", time: "2024-03-15 10:15" },
      { sender: "user", content: "好的，我有在中国进行过版权登记，这个证书在美国有效吗？", time: "2024-03-15 10:20" },
      { sender: "lawyer", content: "中国的版权登记证书可以作为权属证明使用。根据伯尔尼公约，作品在创作完成时自动享有版权保护。您可以向该网站发送DMCA删除通知（Takedown Notice），要求其删除侵权内容。我可以为您起草一份标准的DMCA通知函。", time: "2024-03-15 10:30" },
      { sender: "lawyer", content: "咨询已结束，感谢您使用我们的服务。如有其他问题，欢迎再次咨询。", time: "2024-03-15 11:00" },
    ],
    canRate: true,
    rated: false,
  },
  "2": {
    lawyerName: "李晓华",
    lawyerFirm: "北京华信国际律师事务所",
    question: "游戏出海日本市场需要注意哪些版权问题？",
    status: "completed",
    statusText: "已完成",
    date: "2024-03-12",
    messages: [
      { sender: "user", content: "李律师您好，我们公司准备将一款手游推向日本市场，想了解一下版权方面需要注意什么？", time: "2024-03-12 14:00" },
      { sender: "lawyer", content: "您好！游戏出海日本需要注意以下几点：1. 确保游戏中的美术素材、音乐、剧本等均有完整授权；2. 日本对角色形象保护非常严格，避免与知名IP相似；3. 如有借鉴日本文化元素，注意避免文化争议。", time: "2024-03-12 14:20" },
      { sender: "lawyer", content: "咨询已结束。祝您的游戏出海顺利！", time: "2024-03-12 15:00" },
    ],
    canRate: true,
    rated: true,
  },
  "3": {
    lawyerName: "王思远",
    lawyerFirm: "广州海纳百川律师事务所",
    question: "AI生成的美术素材是否享有版权？",
    status: "replied",
    statusText: "已回复",
    date: "2024-03-10",
    messages: [
      { sender: "user", content: "王律师您好，我用AI工具生成了一些美术素材用于商业项目，请问这些素材我能享有版权吗？", time: "2024-03-10 09:00" },
      { sender: "lawyer", content: "您好！这是一个目前全球范围内都在讨论的热点问题。根据目前美国版权局的立场，纯AI生成的内容不享有版权保护，因为缺乏人类创作的介入。但如果您在生成过程中进行了大量的创意指导、筛选和修改，可能会被认定为享有部分权利。建议您详细记录创作过程中的人工干预部分。", time: "2024-03-10 09:30" },
    ],
    canRate: false,
    rated: false,
  },
  "4": {
    lawyerName: "陈雅琳",
    lawyerFirm: "深圳前海法务律师事务所",
    question: "跨境版权授权合同需要注意哪些条款？",
    status: "pending",
    statusText: "等待回复",
    date: "2024-03-08",
    messages: [
      { sender: "user", content: "陈律师您好，我们公司准备将一部网络小说授权给海外出版商，合同需要注意哪些关键条款？", time: "2024-03-08 16:00" },
    ],
    canRate: false,
    rated: false,
  },
}

export default function ConsultationDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [newMessage, setNewMessage] = useState("")
  const [showRating, setShowRating] = useState(false)
  const [selectedRating, setSelectedRating] = useState(5)
  
  const consultation = consultationData[id] || consultationData["1"]

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // 发送消息逻辑
      setNewMessage("")
    }
  }

  const handleSubmitRating = () => {
    alert("评价提交成功！感谢您的反馈")
    setShowRating(false)
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/profile/consultations" className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <div className="flex-1">
            <h1 className="text-base font-semibold text-foreground">{consultation.lawyerName}</h1>
            <p className="text-xs text-muted-foreground">{consultation.lawyerFirm}</p>
          </div>
          <span
            className={`flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium ${
              consultation.status === "completed"
                ? "bg-blue-100 text-blue-700"
                : consultation.status === "replied"
                ? "bg-green-100 text-green-700"
                : "bg-amber-100 text-amber-700"
            }`}
          >
            {consultation.status === "completed" && <CheckCircle2 className="h-3 w-3" />}
            {consultation.statusText}
          </span>
        </div>
      </header>

      {/* 咨询问题 */}
      <div className="border-b border-border/50 bg-muted/30 px-4 py-3">
        <p className="text-xs text-muted-foreground">咨询问题</p>
        <p className="mt-1 text-sm font-medium text-foreground">{consultation.question}</p>
      </div>

      {/* 消息列表 */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {consultation.messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`max-w-[80%] ${msg.sender === "user" ? "order-2" : "order-1"}`}>
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    msg.sender === "user"
                      ? "rounded-tr-sm bg-primary text-primary-foreground"
                      : "rounded-tl-sm bg-card ring-1 ring-border/50"
                  }`}
                >
                  <p className="text-sm">{msg.content}</p>
                </div>
                <p className={`mt-1 text-[10px] text-muted-foreground ${msg.sender === "user" ? "text-right" : ""}`}>
                  {msg.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 底部操作区 */}
      <div className="border-t border-border/50 bg-card p-4 pb-safe-bottom">
        {consultation.status === "completed" ? (
          consultation.canRate && !consultation.rated ? (
            <button
              onClick={() => setShowRating(true)}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-medium text-primary-foreground"
            >
              <Star className="h-4 w-4" />
              评价律师服务
            </button>
          ) : (
            <div className="flex items-center justify-center gap-2 py-3 text-sm text-muted-foreground">
              <CheckCircle2 className="h-4 w-4" />
              咨询已完成
              {consultation.rated && <span className="text-green-600">（已评价）</span>}
            </div>
          )
        ) : consultation.status === "pending" ? (
          <div className="flex items-center justify-center gap-2 py-3 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            等待律师回复中...
          </div>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="输入您的问题..."
              className="flex-1 rounded-xl bg-muted px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>

      {/* 评价弹窗 */}
      {showRating && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50" onClick={() => setShowRating(false)}>
          <div 
            className="w-full max-w-md rounded-t-2xl bg-card p-6 pb-safe-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="mb-4 text-center text-lg font-semibold text-foreground">评价律师服务</h3>
            
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

            <div className="flex gap-3">
              <button
                onClick={() => setShowRating(false)}
                className="flex-1 rounded-xl bg-muted py-3 text-sm font-medium text-foreground"
              >
                取消
              </button>
              <button
                onClick={handleSubmitRating}
                className="flex-1 rounded-xl bg-primary py-3 text-sm font-medium text-primary-foreground"
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
