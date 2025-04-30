document.addEventListener("DOMContentLoaded", () => {
  // 平滑滚动
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

  // 响应式导航菜单
  const createMobileMenu = () => {
    if (window.innerWidth <= 768) {
      const nav = document.querySelector(".nav")
      if (nav && !document.querySelector(".mobile-menu-toggle")) {
        const toggle = document.createElement("button")
        toggle.className = "mobile-menu-toggle"
        toggle.innerHTML = "<span></span><span></span><span></span>"

        const headerInner = document.querySelector(".header-inner")
        headerInner.appendChild(toggle)

        toggle.addEventListener("click", () => {
          nav.classList.toggle("active")
          toggle.classList.toggle("active")
        })
      }
    }
  }

  createMobileMenu()
  window.addEventListener("resize", createMobileMenu)
})
