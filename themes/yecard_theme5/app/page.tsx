import Image from "next/image"
import Link from "next/link"
import { Search, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { siteConfig } from "@/lib/config"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 border-r p-6 flex flex-col">
        <div className="mb-6">
          <Image src="/placeholder.svg?height=50&width=50" alt="DiSnail Logo" width={50} height={50} className="mb-4" />
          <h2 className="text-2xl font-semibold text-gray-800">DiSnail</h2>
          <p className="text-sm text-gray-600 mt-2">DiSnail的Github技术博客</p>
        </div>

        <nav className="mt-8">
          <ul className="flex space-x-4 text-gray-600">
            {Object.entries(siteConfig.menu).map(([name, url]) => (
              <li key={name}>
                <Link href={url as string} className="hover:text-blue-500">
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto">
          <Link href="https://github.com">
            <div className="text-gray-400 hover:text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </div>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Search Bar */}
        <div className="flex items-center justify-center mb-8">
          <div className="relative w-full max-w-xl">
            <Input
              type="text"
              placeholder="search blog posts..."
              className="w-full rounded-full border-gray-300 pl-4 pr-10 py-2"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
          </div>

          <Button className="ml-4 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center">
            <Upload className="h-4 w-4 mr-2" />
            <span>拖拽文件上传</span>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src={siteConfig.logo || "/placeholder.svg"}
              alt="W Logo"
              width={60}
              height={60}
              className="inline-block"
            />
            <h1 className="text-4xl font-bold">{siteConfig.hero.title.replace("W", "")}</h1>
          </div>
          <p className="text-xl text-gray-600 mb-6">{siteConfig.hero.subtitle}</p>
          <div className="flex justify-center gap-4">
            {siteConfig.hero.buttons.map((button, index) => (
              <Link key={index} href={button.url}>
                <Button
                  className={
                    button.type === "primary"
                      ? "bg-purple-600 hover:bg-purple-700"
                      : "bg-gray-800 text-white hover:bg-gray-700 border-0"
                  }
                >
                  {button.text}
                </Button>
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="space-y-12">
          {/* Post 1 */}
          <article className="border-b pb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              <Link href="/post/winstep-nexus">Winstep Nexus官方正版下载 - Winstep net官网</Link>
            </h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>2025-03-28</span>
              <span className="mx-2">•</span>
              <span className="text-gray-600 bg-gray-100 px-2 py-0.5 rounded">notice</span>
            </div>
            <p className="text-gray-700 mb-4">
              Winstep Nexus是一个功能强大且外观华丽的桌面应用程序启动器（dock），它可以用来替代传统的 Windows
              任务栏，提供更高效、更美观的桌面管理体验。
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Winstep Nexus 下载渠道</h3>
            <p className="text-gray-700 mb-2">
              Winstep Nexus的官网地址：
              <Link href="/post/winstep-nexus" className="text-blue-500 ml-2">
                Read More
              </Link>
            </p>
          </article>

          {/* Post 2 */}
          <article className="border-b pb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              <Link href="/post/wildcard">WildCard官网 - 野卡虚拟信用卡使用指南</Link>
            </h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>2025-03-27</span>
              <span className="mx-2">•</span>
              <span className="text-gray-600 bg-gray-100 px-2 py-0.5 rounded">notice</span>
            </div>
            <p className="text-gray-700 mb-4">
              现在AI真的是非常普遍了，像Deepseek、cursor、gpt、claude和豆包之类的工具非常盛行，代替了很多繁杂的工作，简化了流程，在一定程度上改变了我们工作的方式。
            </p>
            <p className="text-gray-700 mb-4">
              那之前像我们使用gpt、claude的时候每次订阅、充值都需要用别的APP或者找人代充，非常麻烦。但最近我发现了一个非常方便的方式，就是办一张虚拟信用卡——WildCard（野卡）。
            </p>
            <p className="text-gray-700 mb-2">
              &lt;...
              <Link href="/post/wildcard" className="text-blue-500 ml-2">
                Read More
              </Link>
            </p>
          </article>

          {/* Post 3 */}
          <article className="pb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              <Link href="/post/dev-cpp">Dev-C++官方下载 - 获取C/C++开发环境</Link>
            </h2>
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <span>2025-01-08</span>
              <span className="mx-2">•</span>
              <span className="text-gray-600 bg-gray-100 px-2 py-0.5 rounded">notice</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
