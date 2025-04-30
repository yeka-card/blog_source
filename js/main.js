document.addEventListener("DOMContentLoaded", () => {
  // 添加平滑滚动效果
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()

      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // 添加移动端菜单切换功能
  const createMobileMenu = () => {
    const header = document.querySelector(".header")
    if (!header) return

    const nav = header.querySelector(".main-nav")
    if (!nav) return

    const mobileMenuButton = document.createElement("button")
    mobileMenuButton.className = "mobile-menu-button"
    mobileMenuButton.innerHTML = "<span></span><span></span><span></span>"

    header.querySelector(".container").insertBefore(mobileMenuButton, nav)

    mobileMenuButton.addEventListener("click", () => {
      nav.classList.toggle("active")
      mobileMenuButton.classList.toggle("active")
    })
  }

  // 检查窗口宽度，如果是移动设备则创建移动菜单
  const checkMobileMenu = () => {
    if (window.innerWidth <= 768) {
      createMobileMenu()
    }
  }

  checkMobileMenu()

  // 监听窗口大小变化
  window.addEventListener("resize", () => {
    checkMobileMenu()
  })
})
