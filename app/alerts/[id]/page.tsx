"use client"

export const runtime = "edge";

import { ArrowLeft, Share2, Bell, Globe, Calendar, AlertTriangle, CheckCircle2, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function AlertDetailPage() {
  const alert = {
    title: "欧盟数字服务法(DSA)正式实施",
    level: "high",
    levelText: "高风险",
    region: "欧盟",
    regionFlag: "🇪🇺",
    category: "合规预警",
    date: "2024-03-15",
    effectiveDate: "2024-02-17",
    source: "欧盟委员会",
    affectedIndustries: ["内容平台", "电商平台", "社交媒体", "搜索引擎"],
    summary: "欧盟数字服务法(DSA)已于2024年2月17日对所有数字服务提供商全面生效。该法规对大型平台提出更严格的内容审核和透明度要求，未合规企业将面临最高全球年营业额6%的罚款。",
    background: "DSA是欧盟数字战略的核心立法之一，旨在为数字服务建立统一的监管框架。该法规于2022年通过，经过过渡期后现已全面实施。",
    keyRequirements: [
      "建立有效的违法内容通知和处理机制",
      "提供透明的内容审核报告",
      "禁止针对未成年人的定向广告",
      "允许用户选择退出推荐算法",
      "对超大型平台进行独立审计",
    ],
    risks: [
      {
        title: "高额罚款风险",
        description: "违规企业将面临最高全球年营业额6%的罚款，严重情况下可被禁止在欧盟运营。",
      },
      {
        title: "运营成本增加",
        description: "需要投入大量资源建立合规团队、技术系统和审核流程。",
      },
      {
        title: "业务模式调整",
        description: "部分依赖定向广告的商业模式可能需要根本性调整。",
      },
    ],
    recommendations: [
      "尽快完成DSA合规评估，识别差距",
      "建立或升级内容审核系统",
      "制定透明度报告机制",
      "调整广告投放策略，特别是针对未成年人的部分",
      "咨询专业律师制定合规方案",
    ],
    relatedLaws: [
      { id: 2, title: "欧盟数字单一市场版权指令" },
    ],
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/alerts" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
              <Bell className="h-5 w-5 text-foreground" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
              <Share2 className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* 预警头部 */}
      <section className="border-b border-border/50 bg-gradient-to-b from-red-500/5 to-transparent px-4 py-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <span className="text-2xl">{alert.regionFlag}</span>
          <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-700">
            {alert.levelText}
          </span>
          <span className="rounded-full bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground">
            {alert.category}
          </span>
        </div>
        <h1 className="mb-3 text-xl font-bold text-foreground">{alert.title}</h1>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2 rounded-lg bg-card px-3 py-2 ring-1 ring-border/50">
            <Globe className="h-4 w-4 text-primary" />
            <div>
              <p className="text-[10px] text-muted-foreground">发布来源</p>
              <p className="text-xs font-medium text-foreground">{alert.source}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-card px-3 py-2 ring-1 ring-border/50">
            <Calendar className="h-4 w-4 text-primary" />
            <div>
              <p className="text-[10px] text-muted-foreground">生效日期</p>
              <p className="text-xs font-medium text-foreground">{alert.effectiveDate}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 受影响行业 */}
      <section className="border-b border-border/50 px-4 py-4">
        <h2 className="mb-3 text-sm font-semibold text-foreground">受影响行业</h2>
        <div className="flex flex-wrap gap-2">
          {alert.affectedIndustries.map((industry) => (
            <span key={industry} className="rounded-full bg-red-100 px-3 py-1.5 text-sm font-medium text-red-700">
              {industry}
            </span>
          ))}
        </div>
      </section>

      {/* 预警摘要 */}
      <section className="border-b border-border/50 px-4 py-4">
        <h2 className="mb-3 text-sm font-semibold text-foreground">预警摘要</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{alert.summary}</p>
      </section>

      {/* 背景说明 */}
      <section className="border-b border-border/50 px-4 py-4">
        <h2 className="mb-3 text-sm font-semibold text-foreground">背景说明</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">{alert.background}</p>
      </section>

      {/* 核心要求 */}
      <section className="border-b border-border/50 px-4 py-4">
        <h2 className="mb-3 text-sm font-semibold text-foreground">核心要求</h2>
        <div className="space-y-2">
          {alert.keyRequirements.map((req, index) => (
            <div key={index} className="flex items-start gap-2 rounded-lg bg-card p-3 ring-1 ring-border/50">
              <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {index + 1}
              </span>
              <span className="text-sm text-foreground">{req}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 风险分析 */}
      <section className="border-b border-border/50 px-4 py-4">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          风险分析
        </h2>
        <div className="space-y-2">
          {alert.risks.map((risk, index) => (
            <div key={index} className="rounded-xl bg-red-50 p-4">
              <h3 className="mb-1 text-sm font-semibold text-red-800">{risk.title}</h3>
              <p className="text-xs text-red-700">{risk.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 应对建议 */}
      <section className="border-b border-border/50 px-4 py-4">
        <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          应对建议
        </h2>
        <div className="space-y-2">
          {alert.recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-2 rounded-lg bg-green-50 p-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
              <span className="text-sm text-green-800">{rec}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 相关法规 */}
      <section className="px-4 py-4">
        <h2 className="mb-3 text-sm font-semibold text-foreground">相关法规</h2>
        <div className="space-y-2">
          {alert.relatedLaws.map((law) => (
            <Link
              key={law.id}
              href={`/laws/${law.id}`}
              className="flex items-center justify-between rounded-xl bg-card p-4 ring-1 ring-border/50 transition-colors active:bg-muted/30"
            >
              <span className="text-sm font-medium text-foreground">{law.title}</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>

      {/* 底部操作栏 */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border/50 bg-card/95 px-4 py-3 pb-safe-bottom backdrop-blur-lg">
        <div className="flex gap-3">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-muted py-3 text-sm font-medium text-foreground transition-colors active:bg-muted/70">
            <Bell className="h-4 w-4" />
            订阅更新
          </button>
          <Link
            href="/consult"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-medium text-primary-foreground transition-colors active:bg-primary/90"
          >
            咨询律师
          </Link>
        </div>
      </div>
    </div>
  )
}
