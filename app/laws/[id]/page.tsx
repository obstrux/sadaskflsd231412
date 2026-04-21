"use client"

export const runtime = "edge";

import { ArrowLeft, Share2, Bookmark, Globe, Calendar, FileText, X, Download, Eye, ChevronDown } from "lucide-react"
import Link from "next/link"
import { useState, use } from "react"

const lawData = {
  1: {
    title: "美国数字千年版权法（DMCA）",
    fullTitle: "Digital Millennium Copyright Act",
    country: "美国",
    countryFlag: "🇺🇸",
    category: "著作权法",
    publishDate: "1998-10-28",
    updateDate: "2024-01-15",
    effectiveDate: "2000-10-28",
    source: "美国国会",
    fileType: "PDF",
    fileSize: "2.4 MB",
    pages: 68,
    downloads: 1256,
    isPremium: true,
    // 精华内容（展示约20%）
    previewContent: `
第一章 总则

第1201条 技术保护措施的规避

(a) 违反行为
(1) 任何人不得规避用于有效控制访问受本编保护作品的技术措施。

(2) 下列情况除外：
(A) 非营利性图书馆、档案馆或教育机构为确定是否要获取作品复制件而进行的规避行为；
(B) 用于加密研究目的的规避行为；
(C) 用于安全测试目的的规避行为。

第1202条 版权管理信息的完整性

(a) 虚假版权管理信息
任何人不得故意以欺骗为目的，提供虚假的版权管理信息，或传播、进口用于传播明知含有虚假版权管理信息的作品。

(b) 删除或更改版权管理信息
任何人不得在没有版权人授权的情况下，故意删除或更改任何版权管理信息...

━━━━━━━━━━━━━━━━━━━━━━
以上为精华内容摘要（约占全文20%）
完整法规原文共68页，包含详细条款解读
━━━━━━━━━━━━━━━━━━━━━━
    `,
    // 目录结构
    tableOfContents: [
      { chapter: "第一章", title: "技术保护措施", pages: "1-15" },
      { chapter: "第二章", title: "网络服务提供商责任限制", pages: "16-32" },
      { chapter: "第三章", title: "在线侵权责任", pages: "33-45" },
      { chapter: "第四章", title: "临时复制豁免", pages: "46-52" },
      { chapter: "第五章", title: "船舶设计保护", pages: "53-68" },
    ],
    relatedCases: [
      { id: 1, title: "Viacom v. YouTube案", year: "2010" },
      { id: 2, title: "Capitol Records v. Thomas案", year: "2012" },
    ],
  },
}

export default function LawDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const [showRequestForm, setShowRequestForm] = useState(false)
  const [showToc, setShowToc] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    purpose: "",
  })
  
  const law = lawData[Number(id) as keyof typeof lawData] || lawData[1]

  const handleSubmitRequest = () => {
    alert("申请已提交！我们的工作人员将尽快与您联系。")
    setShowRequestForm(false)
    setFormData({ name: "", company: "", email: "", phone: "", purpose: "" })
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] pb-24">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 bg-white pt-safe-top shadow-sm">
        <div className="flex items-center justify-between px-4 py-2.5">
          <Link href="/laws" className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50">
            <ArrowLeft className="h-4 w-4 text-gray-600" />
          </Link>
          <span className="text-sm font-medium text-gray-900">法规详情</span>
          <div className="flex items-center gap-1.5">
            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50">
              <Bookmark className="h-4 w-4 text-gray-600" />
            </button>
            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50">
              <Share2 className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>
      </header>

      {/* 文档信息卡片 */}
      <section className="mx-4 mt-4 rounded-xl bg-white p-4 shadow-sm">
        <div className="flex gap-3">
          {/* 文档图标 */}
          <div className="flex h-14 w-11 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-gradient-to-b from-red-500 to-red-600 shadow-md">
            <FileText className="h-5 w-5 text-white" />
            <span className="mt-0.5 text-[8px] font-bold text-white">{law.fileType}</span>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-lg">{law.countryFlag}</span>
              <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium text-blue-600">{law.category}</span>
              {law.isPremium && (
                <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-medium text-amber-600">精华版</span>
              )}
            </div>
            <h1 className="text-sm font-bold text-gray-900 leading-snug">{law.title}</h1>
            <p className="mt-0.5 text-xs text-gray-500 truncate">{law.fullTitle}</p>
          </div>
        </div>

        {/* 文档元信息 */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Globe className="h-3 w-3" />
              {law.source}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {law.effectiveDate}
            </span>
          </div>
          <span>{law.fileSize} | {law.pages}页</span>
        </div>

        {/* 下载和阅读统计 */}
        <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            {law.downloads}次下载
          </span>
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            在线预览
          </span>
        </div>
      </section>

      {/* 目录 */}
      <section className="mx-4 mt-3 rounded-xl bg-white shadow-sm">
        <button 
          onClick={() => setShowToc(!showToc)}
          className="flex w-full items-center justify-between p-4"
        >
          <span className="text-sm font-medium text-gray-900">目录</span>
          <ChevronDown className={`h-4 w-4 text-gray-400 transition-transform ${showToc ? 'rotate-180' : ''}`} />
        </button>
        {showToc && (
          <div className="border-t border-gray-100 px-4 pb-4">
            {law.tableOfContents.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">{item.chapter}</span>
                  <span className="text-xs text-gray-700">{item.title}</span>
                </div>
                <span className="text-xs text-gray-400">{item.pages}</span>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 文档预览区 - 百度文库风格 */}
      <section className="mx-4 mt-3 overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="border-b border-gray-100 px-4 py-3">
          <span className="text-xs font-medium text-gray-900">文档预览</span>
          <span className="ml-2 text-xs text-gray-400">（精华内容约占全文20%）</span>
        </div>
        
        {/* 模拟文档页面 */}
        <div className="relative">
          {/* 文档内容 */}
          <div className="bg-[#fffef8] px-6 py-5 font-serif text-sm leading-relaxed text-gray-800">
            <pre className="whitespace-pre-wrap font-serif">{law.previewContent}</pre>
          </div>
          
          {/* 渐变遮罩 */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent" />
          
          {/* 获取完整版按钮 */}
          <div className="absolute bottom-4 left-0 right-0 flex flex-col items-center">
            <div className="mb-2 rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-500">
              剩余 80% 内容需申请查看
            </div>
            <button
              onClick={() => setShowRequestForm(true)}
              className="rounded-full bg-[#1a3a5c] px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-all active:scale-95"
            >
              申请获取完整版
            </button>
          </div>
        </div>
      </section>

      {/* 相关案例 */}
      <section className="mx-4 mt-3 rounded-xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-sm font-medium text-gray-900">相关案例</h2>
        <div className="space-y-2">
          {law.relatedCases.map((caseItem) => (
            <Link
              key={caseItem.id}
              href={`/cases/${caseItem.id}`}
              className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors active:bg-gray-100"
            >
              <div>
                <p className="text-xs font-medium text-gray-900">{caseItem.title}</p>
                <p className="text-[10px] text-gray-500">{caseItem.year}年</p>
              </div>
              <ArrowLeft className="h-3.5 w-3.5 rotate-180 text-gray-400" />
            </Link>
          ))}
        </div>
      </section>

      {/* 底部操作栏 */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-100 bg-white px-4 py-3 pb-safe-bottom">
        <div className="flex gap-3">
          <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gray-100 py-2.5 text-xs font-medium text-gray-700">
            <Bookmark className="h-4 w-4" />
            收藏
          </button>
          <Link
            href="/lawyers"
            className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#1a3a5c] py-2.5 text-xs font-medium text-white"
          >
            咨询律师
          </Link>
        </div>
      </div>

      {/* 完整版申请表单弹窗 */}
      {showRequestForm && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50" onClick={() => setShowRequestForm(false)}>
          <div 
            className="max-h-[85vh] w-full max-w-md overflow-y-auto rounded-t-2xl bg-white p-5 pb-safe-bottom"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base font-bold text-gray-900">申请完整版内容</h3>
              <button
                onClick={() => setShowRequestForm(false)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100"
              >
                <X className="h-4 w-4 text-gray-500" />
              </button>
            </div>

            <p className="mb-4 text-xs text-gray-500 leading-relaxed">
              请填写以下信息，我们的专业团队将尽快与您联系，为您提供完整版法规内容及专业解读服务。
            </p>

            <div className="space-y-3">
              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  姓名 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="请输入您的姓名"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a3a5c] focus:outline-none focus:ring-1 focus:ring-[#1a3a5c]"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  公司/机构名称
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="请输入公司或机构名称"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a3a5c] focus:outline-none focus:ring-1 focus:ring-[#1a3a5c]"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  联系邮箱 <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="请输入您的邮箱"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a3a5c] focus:outline-none focus:ring-1 focus:ring-[#1a3a5c]"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  联系电话 <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="请输入您的联系电话"
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a3a5c] focus:outline-none focus:ring-1 focus:ring-[#1a3a5c]"
                />
              </div>

              <div>
                <label className="mb-1 block text-xs font-medium text-gray-700">
                  申请说明
                </label>
                <textarea
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  placeholder="请简要说明您的需求（选填）"
                  rows={3}
                  className="w-full rounded-lg border border-gray-200 bg-gray-50 px-3 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 focus:border-[#1a3a5c] focus:outline-none focus:ring-1 focus:ring-[#1a3a5c]"
                />
              </div>
            </div>

            <button
              onClick={handleSubmitRequest}
              disabled={!formData.name || !formData.email || !formData.phone}
              className="mt-5 w-full rounded-xl bg-[#1a3a5c] py-3 text-sm font-medium text-white transition-colors active:bg-[#0d2137] disabled:opacity-50"
            >
              提交申请
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
