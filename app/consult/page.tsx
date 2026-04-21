"use client"

import { ArrowLeft, MessageCircle, Clock, Shield, Users, Star, ChevronRight, FileText, HelpCircle, Send, Check } from "lucide-react"
import Link from "next/link"
import { useState, Suspense } from "react"
import { useSearchParams } from "next/navigation"

const commonQuestions = [
  "作品在海外被侵权如何维权？",
  "如何在美国进行版权登记？",
  "AI生成内容的版权归属问题",
  "游戏出海需要注意哪些版权问题？",
  "如何应对DMCA侵权通知？",
  "跨境版权授权需要注意什么？",
]

const lawyers = [
  {
    id: 1,
    name: "张明远",
    specialty: "版权保护",
    firm: "上海正义知识产权律师事务所",
    rating: 4.9,
    cases: 156,
    responseTime: "5分钟内",
  },
  {
    id: 2,
    name: "李晓华",
    specialty: "商标注册",
    firm: "上海浦江涉外律师事务所",
    rating: 4.8,
    cases: 203,
    responseTime: "10分钟内",
  },
  {
    id: 3,
    name: "王思远",
    specialty: "游戏出海",
    firm: "上海明德知识产权律师事务所",
    rating: 4.7,
    cases: 128,
    responseTime: "15分钟内",
  },
  {
    id: 4,
    name: "陈雅琳",
    specialty: "AI版权",
    firm: "上海汇智涉外律师事务所",
    rating: 4.9,
    cases: 89,
    responseTime: "10分钟内",
  },
]

function ConsultContent() {
  const searchParams = useSearchParams()
  const lawyerIdFromUrl = searchParams.get("lawyer")
  
  const [selectedLawyer, setSelectedLawyer] = useState<number | null>(
    lawyerIdFromUrl ? parseInt(lawyerIdFromUrl) : null
  )
  const [question, setQuestion] = useState("")
  const [showLawyerPicker, setShowLawyerPicker] = useState(false)

  const selectedLawyerData = lawyers.find(l => l.id === selectedLawyer)

  const handleSubmit = () => {
    if (question.trim() && selectedLawyer) {
      alert(`咨询已提交给${selectedLawyerData?.name}律师，请等待回复！`)
    } else if (!selectedLawyer) {
      setShowLawyerPicker(true)
    }
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] pb-32">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-gray-100 bg-white/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-5 py-3">
          <Link href="/" className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 transition-colors active:bg-gray-100">
            <ArrowLeft className="h-5 w-5 text-gray-600" />
          </Link>
          <h1 className="flex-1 text-lg font-bold text-gray-900">在线律师咨询</h1>
        </div>
      </header>

      {/* 服务保障 */}
      <section className="border-b border-gray-100 bg-gradient-to-r from-[#e8f4fc] to-[#f0f9ff] px-5 py-4">
        <div className="flex items-center justify-around">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-[#1a3a5c]" />
            <span className="whitespace-nowrap text-xs font-medium text-gray-700">专业认证</span>
          </div>
          <div className="h-4 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#1a3a5c]" />
            <span className="whitespace-nowrap text-xs font-medium text-gray-700">快速响应</span>
          </div>
          <div className="h-4 w-px bg-gray-200" />
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-[#1a3a5c]" />
            <span className="whitespace-nowrap text-xs font-medium text-gray-700">免费咨询</span>
          </div>
        </div>
      </section>

      {/* 选择律师 */}
      <section className="border-b border-gray-100 bg-white px-5 py-5">
        <h2 className="mb-4 text-base font-bold text-gray-900">选择咨询律师 <span className="text-red-500">*</span></h2>
        
        {selectedLawyerData ? (
          <div 
            onClick={() => setShowLawyerPicker(true)}
            className="flex items-center gap-4 rounded-2xl bg-[#e8f4fc] p-4 ring-2 ring-[#1a3a5c]/20"
          >
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a3a5c] to-[#0d2137]">
                <span className="text-xl font-bold text-white">{selectedLawyerData.name[0]}</span>
              </div>
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 ring-2 ring-white">
                <Check className="h-3 w-3 text-white" />
              </span>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="font-bold text-gray-900">{selectedLawyerData.name}</p>
                <span className="whitespace-nowrap rounded-md bg-[#fff7ed] px-1.5 py-0.5 text-[10px] font-medium text-[#f59e0b]">{selectedLawyerData.specialty}</span>
              </div>
              <p className="mt-0.5 text-xs text-gray-500">{selectedLawyerData.firm}</p>
              <div className="mt-1 flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span className="text-xs font-medium text-gray-700">{selectedLawyerData.rating}</span>
                </div>
                <span className="text-xs text-gray-400">|</span>
                <span className="text-xs text-green-600">{selectedLawyerData.responseTime}响应</span>
              </div>
            </div>
            <ChevronRight className="h-5 w-5 text-gray-400" />
          </div>
        ) : (
          <button
            onClick={() => setShowLawyerPicker(true)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 py-6 transition-colors active:bg-gray-100"
          >
            <Users className="h-5 w-5 text-gray-400" />
            <span className="font-medium text-gray-500">点击选择律师</span>
          </button>
        )}
      </section>

      {/* 问题描述 */}
      <section className="border-b border-gray-100 bg-white px-5 py-5">
        <h2 className="mb-4 text-base font-bold text-gray-900">描述您的问题</h2>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="请详细描述您的法律问题，包括涉及的国家/地区、作品类型、侵权情况等信息，律师将尽快为您解答..."
          className="h-36 w-full rounded-2xl bg-gray-50 p-4 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]/20"
        />
        <div className="mt-3 flex items-center justify-between">
          <button className="flex items-center gap-1.5 text-xs font-medium text-[#1a3a5c]">
            <FileText className="h-4 w-4" />
            上传相关文件
          </button>
          <span className="text-xs text-gray-400">{question.length}/1000</span>
        </div>
      </section>

      {/* 常见问题 */}
      <section className="bg-white px-5 py-5">
        <h2 className="mb-4 flex items-center gap-2 text-base font-bold text-gray-900">
          <HelpCircle className="h-5 w-5 text-[#f59e0b]" />
          常见问题
        </h2>
        <div className="flex flex-wrap gap-2">
          {commonQuestions.map((q, index) => (
            <button
              key={index}
              onClick={() => setQuestion(q)}
              className="whitespace-nowrap rounded-xl bg-gray-50 px-3 py-2 text-xs font-medium text-gray-600 transition-colors active:bg-[#e8f4fc] active:text-[#1a3a5c]"
            >
              {q}
            </button>
          ))}
        </div>
      </section>

      {/* 律师选择弹窗 */}
      {showLawyerPicker && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40" onClick={() => setShowLawyerPicker(false)}>
          <div className="max-h-[80vh] w-full max-w-md overflow-hidden rounded-t-3xl bg-white" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 border-b border-gray-100 bg-white p-5">
              <div className="mx-auto mb-3 h-1 w-10 rounded-full bg-gray-200" />
              <h3 className="text-center text-lg font-bold text-gray-900">选择咨询律师</h3>
              <p className="mt-1 text-center text-sm text-gray-500">选择您想要咨询的专业律师</p>
            </div>
            <div className="max-h-[60vh] space-y-3 overflow-y-auto p-5 pb-safe-bottom">
              {lawyers.map((lawyer) => (
                <button
                  key={lawyer.id}
                  onClick={() => { setSelectedLawyer(lawyer.id); setShowLawyerPicker(false) }}
                  className={`flex w-full items-center gap-4 rounded-2xl p-4 text-left transition-all ${
                    selectedLawyer === lawyer.id 
                      ? "bg-[#e8f4fc] ring-2 ring-[#1a3a5c]" 
                      : "bg-gray-50"
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a3a5c] to-[#0d2137]">
                    <span className="text-lg font-bold text-white">{lawyer.name[0]}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-gray-900">{lawyer.name}</p>
                      <span className="whitespace-nowrap rounded-md bg-[#fff7ed] px-1.5 py-0.5 text-[10px] font-medium text-[#f59e0b]">{lawyer.specialty}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-gray-500">{lawyer.firm}</p>
                    <div className="mt-1 flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        <span className="text-xs text-gray-700">{lawyer.rating}</span>
                      </div>
                      <span className="text-xs text-gray-400">已服务 {lawyer.cases} 次</span>
                    </div>
                  </div>
                  {selectedLawyer === lawyer.id && (
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1a3a5c]">
                      <Check className="h-4 w-4 text-white" />
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 底部操作栏 */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white/95 px-5 py-4 pb-safe-bottom backdrop-blur-lg">
        <button
          onClick={handleSubmit}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f59e0b] py-4 text-base font-bold text-white shadow-lg shadow-[#f59e0b]/30 transition-all active:scale-[0.98] disabled:opacity-50"
          disabled={!question.trim()}
        >
          <Send className="h-5 w-5" />
          {selectedLawyer ? "提交咨询（免费）" : "选择律师并提交"}
        </button>
      </div>
    </div>
  )
}

export default function ConsultPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center bg-[#f8fafc]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#1a3a5c] border-t-transparent"></div>
      </div>
    }>
      <ConsultContent />
    </Suspense>
  )
}
