"use client"

import { ArrowLeft, Eye, EyeOff, User, Scale } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loginType, setLoginType] = useState<"phone" | "password">("phone")
  const [role, setRole] = useState<"user" | "lawyer">("user")
  const [phone, setPhone] = useState("")
  const [code, setCode] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    // 保存登录状态和角色
    localStorage.setItem("isLoggedIn", "true")
    localStorage.setItem("userRole", role)
    router.push("/profile")
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 bg-[#f8fafc] pt-safe-top">
        <div className="flex items-center px-4 py-2.5">
          <Link href="/" className="flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
            <ArrowLeft className="h-4 w-4 text-gray-600" />
          </Link>
        </div>
      </header>

      <div className="px-5 py-6">
        {/* Logo和标题 */}
        <div className="mb-6 text-center">
          <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1a3a5c] to-[#0d2137]">
            <span className="text-xl font-bold text-white">版</span>
          </div>
          <h1 className="mb-1 text-xl font-bold text-gray-900">版权出海服务平台</h1>
          <p className="text-xs text-gray-500">华东师范大学出版社</p>
        </div>

        {/* 角色选择 */}
        <div className="mb-5">
          <p className="mb-2 text-xs font-medium text-gray-700">选择登录身份</p>
          <div className="grid grid-cols-2 gap-2.5">
            <button
              onClick={() => setRole("user")}
              className={`flex items-center gap-2.5 rounded-xl p-3 transition-all ${
                role === "user"
                  ? "bg-[#e8f4fc] ring-2 ring-[#1a3a5c]"
                  : "bg-white ring-1 ring-gray-100"
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                role === "user" ? "bg-[#1a3a5c]" : "bg-gray-100"
              }`}>
                <User className={`h-5 w-5 ${role === "user" ? "text-white" : "text-gray-400"}`} />
              </div>
              <div className="text-left">
                <p className={`text-sm font-medium ${role === "user" ? "text-[#1a3a5c]" : "text-gray-900"}`}>普通用户</p>
                <p className="text-[10px] text-gray-500">查阅法规/提问咨询</p>
              </div>
            </button>
            <button
              onClick={() => setRole("lawyer")}
              className={`flex items-center gap-2.5 rounded-xl p-3 transition-all ${
                role === "lawyer"
                  ? "bg-[#fff7ed] ring-2 ring-[#f59e0b]"
                  : "bg-white ring-1 ring-gray-100"
              }`}
            >
              <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                role === "lawyer" ? "bg-[#f59e0b]" : "bg-gray-100"
              }`}>
                <Scale className={`h-5 w-5 ${role === "lawyer" ? "text-white" : "text-gray-400"}`} />
              </div>
              <div className="text-left">
                <p className={`text-sm font-medium ${role === "lawyer" ? "text-[#f59e0b]" : "text-gray-900"}`}>律师</p>
                <p className="text-[10px] text-gray-500">回复咨询/案例管理</p>
              </div>
            </button>
          </div>
        </div>

        {/* 登录方式切换 */}
        <div className="mb-5 flex rounded-lg bg-gray-100 p-0.5">
          <button
            onClick={() => setLoginType("phone")}
            className={`flex-1 rounded-md py-2 text-xs font-medium transition-all ${
              loginType === "phone"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500"
            }`}
          >
            验证码登录
          </button>
          <button
            onClick={() => setLoginType("password")}
            className={`flex-1 rounded-md py-2 text-xs font-medium transition-all ${
              loginType === "password"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500"
            }`}
          >
            密码登录
          </button>
        </div>

        {/* 登录表单 */}
        <div className="space-y-3">
          {/* 手机号 */}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-700">手机号</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="请输入手机号"
              className="w-full rounded-lg bg-white px-3.5 py-3 text-sm text-gray-900 ring-1 ring-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
            />
          </div>

          {loginType === "phone" ? (
            /* 验证码 */
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-700">验证码</label>
              <div className="flex gap-2.5">
                <input
                  type="text"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  placeholder="请输入验证码"
                  className="flex-1 rounded-lg bg-white px-3.5 py-3 text-sm text-gray-900 ring-1 ring-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                />
                <button className="flex-shrink-0 whitespace-nowrap rounded-lg bg-[#e8f4fc] px-3.5 py-3 text-xs font-medium text-[#1a3a5c]">
                  获取验证码
                </button>
              </div>
            </div>
          ) : (
            /* 密码 */
            <div>
              <label className="mb-1.5 block text-xs font-medium text-gray-700">密码</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="请输入密码"
                  className="w-full rounded-lg bg-white px-3.5 py-3 pr-10 text-sm text-gray-900 ring-1 ring-gray-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1a3a5c]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="mt-1.5 text-right">
                <Link href="/forgot-password" className="text-[11px] text-[#1a3a5c]">
                  忘记密码？
                </Link>
              </div>
            </div>
          )}

          {/* 登录按钮 */}
          <button 
            onClick={handleLogin}
            className={`mt-4 w-full rounded-xl py-3 text-sm font-bold text-white transition-colors ${
              role === "lawyer" 
                ? "bg-[#f59e0b] active:bg-[#d97706]" 
                : "bg-[#1a3a5c] active:bg-[#0d2137]"
            }`}
          >
            {role === "lawyer" ? "律师登录" : "用户登录"}
          </button>
        </div>

        {/* 微信登录 */}
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center text-[11px]">
              <span className="bg-[#f8fafc] px-3 text-gray-400">微信快捷登录</span>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <button 
              onClick={handleLogin}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500"
            >
              <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.045c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.49.49 0 0 1 .176-.553C23.093 18.32 24 16.622 24 14.746c0-3.08-2.822-5.824-7.062-5.888zm-2.636 2.77a.964.964 0 0 1 .966.97.964.964 0 0 1-.966.97.964.964 0 0 1-.966-.97.964.964 0 0 1 .966-.97zm5.073 0c.535 0 .967.434.967.97a.964.964 0 0 1-.967.97.964.964 0 0 1-.966-.97.964.964 0 0 1 .966-.97z"/>
              </svg>
            </button>
          </div>
        </div>

        {/* 注册入口 */}
        <p className="mt-6 text-center text-xs text-gray-500">
          还没有账号？
          <Link href="/register" className="font-medium text-[#1a3a5c]"> 立即注册</Link>
        </p>

        {/* 协议 */}
        <p className="mt-4 text-center text-[10px] text-gray-400">
          登录即表示同意
          <Link href="/profile/privacy" className="text-[#1a3a5c]">《用户协议》</Link>
          和
          <Link href="/profile/privacy" className="text-[#1a3a5c]">《隐私政策》</Link>
        </p>
      </div>
    </div>
  )
}
