import Link from "next/link"
import { siteConfig } from "@/lib/config"

export default function Footer() {
  return (
    <footer className="border-t py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} {siteConfig.title}. 保留所有权利。
            </p>
          </div>
          <div className="flex gap-6">
            {Object.entries(siteConfig.footer_links).map(([name, url]) => (
              <Link key={name} href={url as string} className="text-sm text-gray-500 hover:text-gray-700">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
