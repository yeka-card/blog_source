// 网站配置文件
export const siteConfig = {
  // 网站标题和描述
  title: "野卡",
  subtitle: "wildcard官网，一分钟轻松订阅ChatGPT等海外线上服务",

  // 网站 Logo
  logo: "/images/w-logo.png", // 使用已上传的logo

  // 导航菜单
  menu: {
    首页: "/",
    标签: "/tags",
  },

  // 英雄区域配置
  hero: {
    title: "野卡",
    subtitle: "一分钟注册，轻松订阅海外线上服务",
    buttons: [
      {
        text: "前往官网",
        url: "https://yeka.ai/i/D4X7JXA7",
        type: "primary",
      },
      {
        text: "常见问题",
        url: "https://yeka.ai/faq",
        type: "secondary",
      },
    ],
  },

  // 是否显示"查看更多文章"按钮
  show_more_posts: true,

  // 页脚链接
  footer_links: {
    关于我们: "/about",
    联系方式: "/contact",
    隐私政策: "/privacy",
    服务条款: "/terms",
  },

  // 是否显示文章导航（上一篇/下一篇）
  show_post_nav: true,

  // 自定义脚本
  scripts: ["/js/main.js"],
}
