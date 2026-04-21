"use client"

export const runtime = "edge";

import { ArrowLeft, Share2, Bookmark, Clock, Eye, User, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function NewsDetailPage() {
  const news = {
    id: 1,
    type: "培训研讨",
    typeColor: "bg-blue-100 text-blue-700",
    title: "2024跨境版权保护实务研讨会即将召开",
    date: "2024-03-15",
    author: "版权出海服务团队",
    views: 2856,
    content: `
      <p>由华东师范大学出版社主办的"2024跨境版权保护实务研讨会"将于2024年4月15日在上海举行。本次研讨会将邀请来自中美两国的知名知识产权专家学者，围绕数字版权跨境保护的最新动态进行深度探讨。</p>
      
      <h3>研讨会主题</h3>
      <p>本次研讨会将聚焦以下核心议题：</p>
      <ul>
        <li>数字版权跨境保护的法律框架与实践</li>
        <li>AI生成内容的版权归属与保护策略</li>
        <li>游戏、影视内容出海的版权合规要点</li>
        <li>DMCA与DSA框架下的平台责任与应对</li>
      </ul>
      
      <h3>邀请嘉宾</h3>
      <p>本次研讨会将邀请包括：</p>
      <ul>
        <li>美国版权局资深官员</li>
        <li>中国国家版权局相关负责人</li>
        <li>国际知名律所知识产权合伙人</li>
        <li>头部游戏、影视企业法务负责人</li>
      </ul>
      
      <h3>参会方式</h3>
      <p>研讨会采用线上线下相结合的方式进行。线下参会名额有限，请尽早报名。线上直播将对所有注册用户免费开放。</p>
      
      <p>报名截止日期：2024年4月10日</p>
    `,
    relatedNews: [
      { id: 2, title: "《游戏出海版权合规白皮书》正式发布" },
      { id: 3, title: "AI生成内容版权归属线上课程开放报名" },
    ],
  }

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/news" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <div className="flex items-center gap-2">
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
              <Bookmark className="h-5 w-5 text-foreground" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
              <Share2 className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
      </header>

      {/* 文章头部 */}
      <section className="border-b border-border/50 bg-card px-4 py-5">
        <span className={`mb-3 inline-block rounded px-2 py-0.5 text-xs font-medium ${news.typeColor}`}>
          {news.type}
        </span>
        <h1 className="mb-4 text-xl font-bold leading-tight text-foreground">{news.title}</h1>
        
        <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <User className="h-3.5 w-3.5" />
            <span>{news.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{news.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            <span>{news.views}次阅读</span>
          </div>
        </div>
      </section>

      {/* 文章内容 */}
      <article className="border-b border-border/50 px-4 py-5">
        <div 
          className="prose prose-sm max-w-none text-foreground prose-headings:mt-6 prose-headings:mb-3 prose-headings:text-base prose-headings:font-semibold prose-p:my-3 prose-p:leading-relaxed prose-p:text-muted-foreground prose-ul:my-3 prose-ul:text-muted-foreground prose-li:my-1"
          dangerouslySetInnerHTML={{ __html: news.content }}
        />
      </article>

      {/* 相关资讯 */}
      <section className="px-4 py-5">
        <h2 className="mb-3 text-base font-semibold text-foreground">相关资讯</h2>
        <div className="space-y-2">
          {news.relatedNews.map((item) => (
            <Link
              key={item.id}
              href={`/news/${item.id}`}
              className="flex items-center justify-between rounded-xl bg-card p-4 ring-1 ring-border/50 transition-colors active:bg-muted/30"
            >
              <span className="text-sm font-medium text-foreground">{item.title}</span>
              <ChevronRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
            </Link>
          ))}
        </div>
      </section>

      {/* 底部操作栏 */}
      <div className="fixed bottom-0 left-0 right-0 border-t border-border/50 bg-card/95 px-4 py-3 pb-safe-bottom backdrop-blur-lg">
        <div className="flex gap-3">
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-muted py-3 text-sm font-medium text-foreground transition-colors active:bg-muted/70">
            <Bookmark className="h-4 w-4" />
            收藏
          </button>
          <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-medium text-primary-foreground transition-colors active:bg-primary/90">
            <Share2 className="h-4 w-4" />
            分享
          </button>
        </div>
      </div>
    </div>
  )
}
