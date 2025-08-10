// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      const offsetTop = target.offsetTop - 70 // Account for fixed nav
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  })
})

// Mobile menu toggle
const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
const navMenu = document.querySelector(".nav-menu")

if (mobileMenuToggle && navMenu) {
  mobileMenuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active")
    this.classList.toggle("active")
  })
}

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    mobileMenuToggle.classList.remove("active")
  })
})

// Navigation scroll effect
window.addEventListener("scroll", () => {
  const nav = document.querySelector(".nav")
  if (window.scrollY > 50) {
    nav.style.background = "rgba(255, 255, 255, 0.98)"
    nav.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
  } else {
    nav.style.background = "rgba(255, 255, 255, 0.95)"
    nav.style.boxShadow = "none"
  }
})

// Active navigation link highlighting
function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100
    const sectionHeight = section.offsetHeight
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
}

window.addEventListener("scroll", updateActiveNavLink)
window.addEventListener("load", updateActiveNavLink)

// Tab functionality for tech stack
const tabButtons = document.querySelectorAll(".tab-button")
const tabPanels = document.querySelectorAll(".tab-panel")

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetTab = button.getAttribute("data-tab")

    // Remove active class from all buttons and panels
    tabButtons.forEach((btn) => btn.classList.remove("active"))
    tabPanels.forEach((panel) => panel.classList.remove("active"))

    // Add active class to clicked button and corresponding panel
    button.classList.add("active")
    document.getElementById(`tab-${targetTab}`).classList.add("active")
  })
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(`
    .personal-card,
    .info-card,
    .about-card,
    .capabilities-card,
    .skill-card,
    .experience-card,
    .project-card,
    .contact-card,
    .tech-stack-tabs
  `)

  animatedElements.forEach((el) => {
    el.classList.add("fade-in")
    observer.observe(el)
  })
})

// Typing effect for hero title (optional)
function typeWriter(element, text, speed = 100) {
  let i = 0
  element.innerHTML = ""

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i)
      i++
      setTimeout(type, speed)
    }
  }

  type()
}

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Add scroll to top button (optional)
const scrollToTopBtn = document.createElement("button")
scrollToTopBtn.innerHTML = "↑"
scrollToTopBtn.className = "scroll-to-top"
scrollToTopBtn.style.cssText = `
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #3b82f6;
  color: white;
  border: none;
  font-size: 20px;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
`

scrollToTopBtn.addEventListener("click", scrollToTop)
document.body.appendChild(scrollToTopBtn)

// Show/hide scroll to top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.style.opacity = "1"
    scrollToTopBtn.style.visibility = "visible"
  } else {
    scrollToTopBtn.style.opacity = "0"
    scrollToTopBtn.style.visibility = "hidden"
  }
})

// Hover effects for project links
document.querySelectorAll(".project-link").forEach((link) => {
  link.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-2px)"
  })

  link.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0)"
  })
})

// Smooth reveal animations for sections
const revealElements = document.querySelectorAll(".section-title, .hero-title, .hero-subtitle")
revealElements.forEach((el) => {
  el.classList.add("fade-in")
  observer.observe(el)
})

// Initialize page
document.addEventListener("DOMContentLoaded", () => {
  // Set initial active nav link
  updateActiveNavLink()

  // Add loading class to body
  document.body.classList.add("loaded")
})

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Apply debounce to scroll handlers
const debouncedScrollHandler = debounce(() => {
  updateActiveNavLink()
}, 10)

window.addEventListener("scroll", debouncedScrollHandler)
