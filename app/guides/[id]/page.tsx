"use client"

export const runtime = "edge";

import { ArrowLeft, Share2, Bookmark, BookOpen, Calendar, FileText, X, Download, Eye, ChevronDown, Clock } from "lucide-react"
import Link from "next/link"
import { useState, use } from "react"

const guideData = {
  1: {
    title: "美国版权登记全流程指南",
    category: "版权登记",
    region: "美国",
    regionFlag: "🇺🇸",
    author: "版权出海服务团队",
    updateDate: "2024-03-10",
    readTime: "15分钟",
    fileType: "PDF",
    fileSize: "3.2 MB",
    pages: 28,
    downloads: 2156,
    isPremium: true,
    previewContent: `
美国版权登记全流程指南

━━━━━━━━━━━━━━━━━━━━━━

一、概述

美国版权登记是保护知识产权的重要手段。本指南将详细介绍在美国进行版权登记的完整流程、所需材料以及注意事项。

二、版权登记的必要性

1. 确立权利证明
版权登记证书是版权归属的初步证据，在侵权诉讼中具有重要作用。

2. 诉讼前提条件
根据美国法律，版权人必须在起诉侵权前完成版权登记。

3. 获得法定赔偿
只有在侵权行为发生前或发生后3个月内完成登记，版权人才能主张法定赔偿和律师费。

三、登记前的准备工作

1. 确定作品类型
- 文学作品（小说、诗歌、文章等）
- 音乐作品（词曲、录音等）
- 视觉艺术作品（绘画、摄影等）
- 视听作品（电影、视频等）

2. 确定权利归属...

━━━━━━━━━━━━━━━━━━━━━━
以上为精华内容摘要（约占全文20%）
完整指南共28页，包含详细操作步骤
━━━━━━━━━━━━━━━━━━━━━━
    `,
    tableOfContents: [
      { chapter: "一", title: "概述", pages: "1-3" },
      { chapter: "二", title: "登记必要性", pages: "4-6" },
      { chapter: "三", title: "准备工作", pages: "7-12" },
      { chapter: "四", title: "在线申请流程", pages: "13-20" },
      { chapter: "五", title: "常见问题解答", pages: "21-28" },
    ],
    relatedGuides: [
      { id: 2, title: "DMCA通知与删除程序操作指南" },
    ],
  },
}

export default function GuideDetailPage({ params }: { params: Promise<{ id: string }> }) {
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
  
  const guide = guideData[Number(id) as keyof typeof guideData] || guideData[1]

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
          <Link href="/guides" className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-50">
            <ArrowLeft className="h-4 w-4 text-gray-600" />
          </Link>
          <span className="text-sm font-medium text-gray-900">指南详情</span>
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
          <div className="flex h-14 w-11 flex-shrink-0 flex-col items-center justify-center rounded-lg bg-gradient-to-b from-violet-500 to-violet-600 shadow-md">
            <BookOpen className="h-5 w-5 text-white" />
            <span className="mt-0.5 text-[8px] font-bold text-white">{guide.fileType}</span>
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-1">
              <span className="text-lg">{guide.regionFlag}</span>
              <span className="rounded bg-violet-50 px-1.5 py-0.5 text-[10px] font-medium text-violet-600">{guide.category}</span>
              {guide.isPremium && (
                <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] font-medium text-amber-600">精华版</span>
              )}
            </div>
            <h1 className="text-sm font-bold text-gray-900 leading-snug">{guide.title}</h1>
            <p className="mt-0.5 text-xs text-gray-500">{guide.author}</p>
          </div>
        </div>

        {/* 文档元信息 */}
        <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              阅读{guide.readTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {guide.updateDate}
            </span>
          </div>
          <span>{guide.fileSize} | {guide.pages}页</span>
        </div>

        {/* 下载统计 */}
        <div className="mt-3 flex items-center gap-4 text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Download className="h-3 w-3" />
            {guide.downloads}次下载
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
            {guide.tableOfContents.map((item, index) => (
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

      {/* 文档预览区 */}
      <section className="mx-4 mt-3 overflow-hidden rounded-xl bg-white shadow-sm">
        <div className="border-b border-gray-100 px-4 py-3">
          <span className="text-xs font-medium text-gray-900">内容预览</span>
          <span className="ml-2 text-xs text-gray-400">（精华内容约占全文20%）</span>
        </div>
        
        <div className="relative">
          <div className="bg-[#fffef8] px-6 py-5 font-serif text-sm leading-relaxed text-gray-800">
            <pre className="whitespace-pre-wrap font-serif">{guide.previewContent}</pre>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/95 to-transparent" />
          
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

      {/* 相关指南 */}
      <section className="mx-4 mt-3 rounded-xl bg-white p-4 shadow-sm">
        <h2 className="mb-3 text-sm font-medium text-gray-900">相关指南</h2>
        <div className="space-y-2">
          {guide.relatedGuides.map((item) => (
            <Link
              key={item.id}
              href={`/guides/${item.id}`}
              className="flex items-center justify-between rounded-lg bg-gray-50 p-3 transition-colors active:bg-gray-100"
            >
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-gray-400" />
                <span className="text-xs font-medium text-gray-900">{item.title}</span>
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
              请填写以下信息，我们的专业团队将尽快与您联系，为您提供完整版操作指南。
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
