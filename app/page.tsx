import { SearchHeader } from "@/components/search-header"
import { QuickAccess } from "@/components/quick-access"
import { CountryFilter } from "@/components/country-filter"
import { LawyerConsultCard } from "@/components/lawyer-consult-card"
import { NewsList } from "@/components/news-list"
import { TabBar } from "@/components/tab-bar"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] pb-24">
      {/* 顶部搜索区域 */}
      <SearchHeader />
      
      {/* 主要内容区域 */}
      <main className="mx-auto max-w-md">
        {/* 金刚区 - 核心服务快捷入口 */}
        <QuickAccess />
        
        {/* 热门国家/地区筛选 */}
        <CountryFilter />
        
        {/* 在线律师咨询引流卡片 */}
        <LawyerConsultCard />
        
        {/* 动态资讯列表 */}
        <NewsList />
      </main>
      
      {/* 底部导航栏 */}
      <TabBar />
    </div>
  )
}
