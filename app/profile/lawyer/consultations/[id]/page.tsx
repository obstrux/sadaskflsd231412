"use client"

export const runtime = "edge";

import { ArrowLeft, Send, User, Clock, CheckCircle, Flag, FileText } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const consultation = {
  id: 1,
  user: "张先生",
  avatar: "张",
  title: "作品在美国被侵权如何维权？",
  content: "我公司的原创游戏在美国App Store被侵权复制，请问应该如何进行维权？需要准备哪些材料？\n\n具体情况是这样的：我们去年发布的一款休闲游戏，最近发现有一款名称和玩法都非常相似的游戏在美国区上架，而且还有一定的下载量。\n\n请问律师：\n1. 这种情况是否构成侵权？\n2. 我们应该如何收集证据？\n3. 维权的具体流程是怎样的？\n4. 大概需要多长时间和费用？",
  status: "pending",
  time: "2024-03-15 10:30",
  country: "美国",
  category: "版权侵权",
  attachments: ["游戏截图对比.pdf", "原创证明.docx"],
}

const messages = [
  {
    id: 1,
    type: "user",
    content: "我公司的原创游戏在美国App Store被侵权复制，请问应该如何进行维权？需要准备哪些材料？\n\n具体情况是这样的：我们去年发布的一款休闲游戏，最近发现有一款名称和玩法都非常相似的游戏在美国区上架。",
    time: "10:30",
  },
]

export default function LawyerConsultationDetailPage() {
  const [reply, setReply] = useState("")
  const [showEndDialog, setShowEndDialog] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  const handleSendReply = () => {
    if (reply.trim()) {
      // 发送回复
      alert("回复已发送")
      setReply("")
    }
  }

  const handleEndConsultation = () => {
    setIsCompleted(true)
    setShowEndDialog(false)
    alert("咨询已结束，用户可以对您进行评价")
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#f8fafc]">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-5 py-3">
          <Link href="/profile/lawyer/consultations" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 transition-colors active:bg-gray-100">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <div className="flex-1">
            <h1 className="text-base font-bold text-gray-900">{consultation.user}的咨询</h1>
            <p className="text-xs text-gray-500">{consultation.time}</p>
          </div>
          {!isCompleted && (
            <button
              onClick={() => setShowEndDialog(true)}
              className="rounded-xl bg-green-500 px-3 py-2 text-xs font-semibold text-white transition-colors active:bg-green-600"
            >
              结束咨询
            </button>
          )}
        </div>
      </header>

      {/* 咨询信息卡片 */}
      <div className="border-b border-gray-100 bg-white p-5">
        <div className="mb-3 flex items-center gap-2">
          <span className="whitespace-nowrap rounded-md bg-[#e8f4fc] px-2 py-0.5 text-xs font-medium text-[#1a3a5c]">{consultation.country}</span>
          <span className="whitespace-nowrap rounded-md bg-[#fff7ed] px-2 py-0.5 text-xs font-medium text-[#f59e0b]">{consultation.category}</span>
          {isCompleted && (
            <span className="flex items-center gap-1 whitespace-nowrap rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-600">
              <CheckCircle className="h-3 w-3" />
              已完成
            </span>
          )}
        </div>
        <h2 className="mb-3 text-base font-bold text-gray-900">{consultation.title}</h2>
        
        {/* 附件 */}
        {consultation.attachments.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {consultation.attachments.map((file, index) => (
              <div key={index} className="flex items-center gap-1.5 rounded-lg bg-gray-50 px-2.5 py-1.5">
                <FileText className="h-3.5 w-3.5 text-gray-400" />
                <span className="text-xs text-gray-600">{file}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 消息区域 */}
      <div className="flex-1 space-y-4 p-5">
        {/* 用户消息 */}
        <div className="flex gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a3a5c] to-[#0d2137]">
            <span className="text-sm font-bold text-white">{consultation.avatar}</span>
          </div>
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="font-semibold text-gray-900">{consultation.user}</span>
              <span className="text-xs text-gray-400">10:30</span>
            </div>
            <div className="rounded-2xl rounded-tl-none bg-white p-4 shadow-sm ring-1 ring-gray-100">
              <p className="whitespace-pre-line text-sm leading-relaxed text-gray-700">{consultation.content}</p>
            </div>
          </div>
        </div>

        {/* 律师回复示例 */}
        <div className="flex flex-row-reverse gap-3">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#ea580c]">
            <span className="text-sm font-bold text-white">律</span>
          </div>
          <div className="flex-1">
            <div className="mb-1 flex flex-row-reverse items-center gap-2">
              <span className="font-semibold text-gray-900">张明远律师</span>
              <span className="text-xs text-gray-400">10:45</span>
            </div>
            <div className="rounded-2xl rounded-tr-none bg-[#1a3a5c] p-4 text-white shadow-sm">
              <p className="whitespace-pre-line text-sm leading-relaxed">您好，根据您描述的情况，这很可能构成版权侵权。针对您的问题，我逐一解答：

1. 如果对方游戏在玩法、界面、名称等方面与您的原创游戏高度相似，很可能构成侵权。

2. 建议您收集以下证据：
   - 两款游戏的截图、视频对比
   - 您的原创作品的著作权登记证书
   - 发布时间的证明材料

3. 在美国，您可以先向App Store提交DMCA投诉，要求下架侵权应用。

如需进一步帮助，我可以为您提供详细的维权方案。</p>
            </div>
          </div>
        </div>
      </div>

      {/* 结束咨询弹窗 */}
      {showEndDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-5" onClick={() => setShowEndDialog(false)}>
          <div className="w-full max-w-sm rounded-2xl bg-white p-5" onClick={(e) => e.stopPropagation()}>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900">确认结束咨询？</h3>
                <p className="text-sm text-gray-500">结束后用户可以对您进行评价</p>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowEndDialog(false)}
                className="flex-1 rounded-xl bg-gray-100 py-3 text-sm font-semibold text-gray-600 transition-colors active:bg-gray-200"
              >
                取消
              </button>
              <button
                onClick={handleEndConsultation}
                className="flex-1 rounded-xl bg-green-500 py-3 text-sm font-semibold text-white transition-colors active:bg-green-600"
              >
                确认结束
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 底部回复框 */}
      {!isCompleted && (
        <div className="sticky bottom-0 border-t border-gray-100 bg-white p-4 pb-safe-bottom">
          <div className="flex items-end gap-3">
            <textarea
              value={reply}
              onChange={(e) => setReply(e.target.value)}
              placeholder="输入您的回复..."
              className="max-h-32 min-h-[44px] flex-1 resize-none rounded-xl bg-gray-50 px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f59e0b]/40"
              rows={1}
            />
            <button
              onClick={handleSendReply}
              disabled={!reply.trim()}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f59e0b] text-white transition-all active:scale-95 disabled:opacity-50"
            >
              <Send className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

      {/* 咨询已完成提示 */}
      {isCompleted && (
        <div className="border-t border-gray-100 bg-green-50 p-4 pb-safe-bottom text-center">
          <p className="text-sm text-green-700">咨询已结束，等待用户评价</p>
        </div>
      )}
    </div>
  )
}
