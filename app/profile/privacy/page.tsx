"use client"

import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pb-20">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border/50 bg-card/95 pt-safe-top backdrop-blur-lg">
        <div className="flex items-center gap-3 px-4 py-3">
          <Link href="/profile" className="flex h-9 w-9 items-center justify-center rounded-full bg-muted transition-colors active:bg-muted/70">
            <ArrowLeft className="h-5 w-5 text-foreground" />
          </Link>
          <h1 className="text-lg font-semibold text-foreground">隐私政策</h1>
        </div>
      </header>

      {/* 内容 */}
      <article className="px-4 py-5">
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <p className="text-xs text-muted-foreground">更新日期：2024年3月1日</p>
          
          <h2 className="mt-6 text-base font-semibold text-foreground">一、引言</h2>
          <p>
            版权出海服务平台（以下简称「本平台」）由华东师范大学出版社运营。我们非常重视用户的隐私保护，本隐私政策旨在向您说明我们如何收集、使用、存储和保护您的个人信息。
          </p>

          <h2 className="mt-6 text-base font-semibold text-foreground">二、信息收集</h2>
          <p>我们可能收集以下类型的信息：</p>
          <ul className="list-disc pl-4">
            <li>账号信息：手机号码、邮箱地址</li>
            <li>身份信息：姓名、所属单位</li>
            <li>使用信息：浏览记录、搜索记录、咨询记录</li>
            <li>设备信息：设备型号、操作系统版本</li>
          </ul>

          <h2 className="mt-6 text-base font-semibold text-foreground">三、信息使用</h2>
          <p>我们收集的信息将用于：</p>
          <ul className="list-disc pl-4">
            <li>提供、维护和改进我们的服务</li>
            <li>处理您的咨询请求和订单</li>
            <li>向您发送服务通知和更新</li>
            <li>进行数据分析以改善用户体验</li>
          </ul>

          <h2 className="mt-6 text-base font-semibold text-foreground">四、信息保护</h2>
          <p>
            我们采用业界标准的安全措施保护您的个人信息，包括数据加密、访问控制和安全审计。我们的服务器部署在中国境内的安全数据中心。
          </p>

          <h2 className="mt-6 text-base font-semibold text-foreground">五、信息共享</h2>
          <p>
            除非获得您的明确同意，我们不会向第三方共享您的个人信息，但以下情况除外：
          </p>
          <ul className="list-disc pl-4">
            <li>为完成您请求的服务所必需</li>
            <li>根据法律法规的要求</li>
            <li>保护本平台及用户的合法权益</li>
          </ul>

          <h2 className="mt-6 text-base font-semibold text-foreground">六、您的权利</h2>
          <p>您有权：</p>
          <ul className="list-disc pl-4">
            <li>访问和更新您的个人信息</li>
            <li>删除您的账号和相关数据</li>
            <li>撤回您的授权同意</li>
            <li>获取您的个人信息副本</li>
          </ul>

          <h2 className="mt-6 text-base font-semibold text-foreground">七、联系我们</h2>
          <p>
            如果您对本隐私政策有任何疑问，请通过以下方式联系我们：
          </p>
          <p>
            邮箱：privacy@ecnupress.com.cn<br />
            地址：上海市普陀区中山北路3663号
          </p>
        </div>
      </article>
    </div>
  )
}
