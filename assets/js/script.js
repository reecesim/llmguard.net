// ===========================
// Smooth Scrolling
// ===========================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    // Close mobile menu if open
    const mobileMenu = document.querySelector(".mobile-menu");
    if (mobileMenu.classList.contains("active")) {
      mobileMenu.classList.remove("active");
    }

    // Scroll to target
    if (targetId === "#install") {
      // If it's the install link, we can scroll to the CTA section
      const target = document.querySelector(".cta-section");
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else if (targetId !== "#") {
      const target = document.querySelector(targetId);
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  });
});

// ===========================
// Mobile Menu Toggle
// ===========================

const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (mobileMenuToggle && mobileMenu) {
  mobileMenuToggle.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");

    // Animate hamburger icon
    const spans = this.querySelectorAll("span");
    if (mobileMenu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
    } else {
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideMenu = mobileMenu.contains(event.target);
    const isClickOnToggle = mobileMenuToggle.contains(event.target);

    if (
      !isClickInsideMenu &&
      !isClickOnToggle &&
      mobileMenu.classList.contains("active")
    ) {
      mobileMenu.classList.remove("active");

      const spans = mobileMenuToggle.querySelectorAll("span");
      spans[0].style.transform = "none";
      spans[1].style.opacity = "1";
      spans[2].style.transform = "none";
    }
  });
}

// ===========================
// Header Shadow on Scroll
// ===========================

const header = document.querySelector(".header");
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 10) {
    header.style.boxShadow =
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)";
  } else {
    header.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
  }

  lastScrollTop = scrollTop;
});

// ===========================
// Fade In Animation on Scroll
// ===========================

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards and feature cards
document.addEventListener("DOMContentLoaded", function () {
  const animateElements = document.querySelectorAll(
    ".card, .feature-card, .step, .testimonial-card, .faq-item"
  );

  animateElements.forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
});

// ===========================
// Install Button Click Tracking (Optional)
// ===========================

const installButtons = document.querySelectorAll(
  'a[href*="chrome.google.com"]'
);

installButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // You can add analytics tracking here
    console.log("Install button clicked");

    // Example: Google Analytics event
    // gtag('event', 'click', {
    //     'event_category': 'CTA',
    //     'event_label': 'Install Extension'
    // });
  });
});

// ===========================
// Console Message (Optional)
// ===========================

console.log(
  "%c🛡️ LLM Guard",
  "font-size: 20px; font-weight: bold; color: #2563eb;"
);
console.log(
  "%cProtect yourself from accidental AI data leaks",
  "font-size: 14px; color: #6b7280;"
);
console.log(
  "%cInstall the free Chrome extension: https://llmguard.net/",
  "font-size: 12px; color: #9ca3af;"
);

// ===========================
// Early Access Modal
// ===========================

const modal = document.getElementById("earlyAccessModalContainer");
const modalTrigger = document.getElementById("earlyAccessModal");
const modalClose = document.querySelector(".modal-close");

// Open modal when clicking the early access link
if (modalTrigger) {
  modalTrigger.addEventListener("click", function (e) {
    e.preventDefault();
    modal.classList.add("active");
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  });
}

// Close modal when clicking the X
if (modalClose) {
  modalClose.addEventListener("click", function () {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  });
}

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});

// Close modal with Escape key
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.classList.contains("active")) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
});
