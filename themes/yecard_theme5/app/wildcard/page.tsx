import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WildcardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b py-4 bg-white">
        <div className="container mx-auto px-4 flex justify-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-red-500 flex items-center justify-center">
              <span className="text-white text-xs">数</span>
            </div>
            <span className="text-lg font-medium">数字指南</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image src="/images/w-logo.png" alt="W Logo" width={80} height={80} className="inline-block" />
            <h1 className="text-5xl font-bold">野卡</h1>
          </div>
          <p className="text-xl mb-8 text-gray-600">一分钟注册，轻松订阅海外线上服务</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              前往官网
            </Button>
            <Button size="lg" variant="outline" className="bg-gray-800 text-white hover:bg-gray-700 border-0">
              常见问题
            </Button>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">注册与开卡</h3>
              <p className="text-gray-600">
                访问野卡官方网站，输入手机号码并完成实名认证，随后点击选自己的套餐进行开通，平台提供了多种套餐选择，用户可以根据自身需求灵活选用。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">充值与支付</h3>
              <p className="text-gray-600">
                支持支付宝或USDT转账等方式进行充值，充值后即可使用虚拟信用卡进行各样支付。在订阅页面输入Wildcard卡片信息，即可轻松完成支付流程。
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-4">绑定与管理</h3>
              <p className="text-gray-600">
                用户可以将Wildcard虚拟信用卡绑定到常用的支付平台或软件上，方便日后快速支付。同时，平台提供了完善的卡片管理功能，用户可以随时查看交易记录、修改卡片设置等。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
