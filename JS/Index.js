// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Active navigation highlighting
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 80; // adjust based on your navbar height
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector(
      `.nav__menu a[href="#${sectionId}"]`
    );

    if (!navLink) return;

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink.classList.add("active-link");
    } else {
      navLink.classList.remove("active-link");
    }
  });
}

//window.addEventListener("scroll", scrollActive);
//scrollActive();

// Scroll animations
function animateOnScroll() {
  const elements = document.querySelectorAll(
    ".experience-card, .activity-card, .testimonial-card"
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.classList.add("fade-in", "visible");
    }
  });
}

// Parallax effect for hero section
function parallaxEffect() {
  const scrolled = window.pageYOffset;
  const heroImage = document.querySelector(".hero-image");
  if (heroImage) {
    heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
  }
}

(function () {
  const track = document.querySelector(".experience-track");
  const dotsContainer = document.querySelector(".experience-dots");

  if (!track || !dotsContainer) return;

  const cards = Array.from(track.children);
  const cardWidth = cards[0].offsetWidth + 30;

  // Create dots
  cards.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "experience-dot";
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      track.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".experience-dot");

  // Update active dot on scroll
  track.addEventListener("scroll", () => {
    const index = Math.round(track.scrollLeft / cardWidth);
    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  });
})();

(function () {
  const track = document.querySelector(".activities-track");
  const dotsContainer = document.querySelector(".activities-dots");

  if (!track || !dotsContainer) return;

  const cards = Array.from(track.children);
  const cardWidth = cards[0].offsetWidth + 30;

  // Create dots
  cards.forEach((_, index) => {
    const dot = document.createElement("span");
    dot.className = "activities-dot";
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      track.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    });

    dotsContainer.appendChild(dot);
  });

  const dots = dotsContainer.querySelectorAll(".activities-dot");

  // Sync dots on scroll
  track.addEventListener("scroll", () => {
    const index = Math.round(track.scrollLeft / cardWidth);
    dots.forEach((dot) => dot.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  });
})();


(function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
})();


// Mobile menu toggle
function initMobileMenu() {
  const sidebar = document.querySelector(".sidebar");
  const menuToggle = document.createElement("button");
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  menuToggle.className = "mobile-menu-toggle";
  // menuToggle.style.cssText = `
  //       position: fixed;
  //       top: 20px;
  //       left: 20px;
  //       z-index: 1001;
  //       background: var(--accent-color);
  //       color: white;
  //       border: none;
  //       padding: 10px;
  //       border-radius: 5px;
  //       font-size: 18px;
  //       cursor: pointer;
  //       display: none;
  //   `;

  document.body.appendChild(menuToggle);

  // Show toggle button on mobile
  function checkMobile() {
    if (window.innerWidth <= 768) {
      menuToggle.style.display = "block";
    } else {
      menuToggle.style.display = "none";
      sidebar.classList.remove("active");
    }
  }

  menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
  });

  // Close sidebar when clicking outside
  document.addEventListener("click", (e) => {
    if (
      window.innerWidth <= 768 &&
      !sidebar.contains(e.target) &&
      !menuToggle.contains(e.target)
    ) {
      sidebar.classList.remove("active");
    }
  });

  checkMobile();
  //window.addEventListener("resize", checkMobile);
}

// Newsletter subscription
function initNewsletter() {
  const newsletterBtn = document.querySelector(".newsletter-btn");
  const newsletterInput = document.querySelector(".newsletter-input");

  if (newsletterBtn && newsletterInput) {
    newsletterBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = newsletterInput.value.trim();

      if (email && isValidEmail(email)) {
        // Simulate subscription
        newsletterBtn.innerHTML = "Subscribed!";
        newsletterBtn.style.background = "#4CAF50";
        newsletterInput.value = "";

        setTimeout(() => {
          newsletterBtn.innerHTML = "Subscribe";
          newsletterBtn.style.background = "var(--accent-color)";
        }, 3000);
      } else {
        alert("Please enter a valid email address");
      }
    });

    newsletterInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        newsletterBtn.click();
      }
    });
  }
}

// Email validation
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// CTA button interactions
function initCTAButtons() {
  const ctaButtons = document.querySelectorAll(".cta-button");

  ctaButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      // Add ripple effect
      const ripple = document.createElement("span");
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;

      button.style.position = "relative";
      button.style.overflow = "hidden";
      button.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Add ripple animation CSS
const rippleCSS = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;

const style = document.createElement("style");
style.textContent = rippleCSS;
document.head.appendChild(style);

// Activity card hover effects
function initActivityCards() {
  const activityCards = document.querySelectorAll(".activity-card");

  activityCards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1) rotateY(0deg)";
    });
  });
}

// Testimonial card animations
function initTestimonialCards() {
  const testimonialCards = document.querySelectorAll(".testimonial-card");

  testimonialCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;

    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-10px) scale(1.02)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(-5px) scale(1)";
    });
  });
}

// Scroll event listeners
//window.addEventListener("scroll", () => {
//updateActiveNav();
//animateOnScroll();
//parallaxEffect();
//});

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initNewsletter();
  initCTAButtons();
  initActivityCards();
  initTestimonialCards();

  // Initial animations
  setTimeout(() => {
    animateOnScroll();
  }, 100);
});

// Resize event listener
//window.addEventListener("resize", () => {
// Recalculate animations on resize
//animateOnScroll();
//});

// Performance optimization: throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply throttling to scroll events
window.addEventListener(
  "scroll",
  throttle(() => {
    updateActiveNav();
    animateOnScroll();
    parallaxEffect();
  }, 16)
); // ~60fps

// Add loading screen
function initLoadingScreen() {
  const loadingScreen = document.createElement("div");
  loadingScreen.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        ">
            <div style="text-align: center;">
                <i class="fas fa-mountain" style="font-size: 3rem; color: var(--accent-color); margin-bottom: 20px; animation: pulse 1s infinite;"></i>
                <h2 style="color: var(--text-dark); font-weight: 600;">Alpine Adventures</h2>
                <p style="color: var(--text-light); margin-top: 10px;">Loading your winter experience...</p>
            </div>
        </div>
    `;

  document.body.appendChild(loadingScreen);

  window.addEventListener("load", () => {
    setTimeout(() => {
      loadingScreen.style.opacity = "0";
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }, 1000);
  });
}

// Initialize loading screen
initLoadingScreen();
