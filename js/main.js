// Yi Pune Website - Main JavaScript

// Navbar Component HTML
const NAVBAR_HTML = `<nav class="navbar">
  <div class="navbar-container">
    <a href="/index.html" class="navbar-logo">
      <img src="assets/images/logo.jpg" alt="Yi Pune Logo" class="navbar-logo-img">
    </a>
    
    <button class="navbar-toggle" aria-label="Toggle navigation">
      <span class="navbar-toggle-bar"></span>
      <span class="navbar-toggle-bar"></span>
      <span class="navbar-toggle-bar"></span>
    </button>
    
    <ul class="navbar-menu">
      <li class="navbar-item">
        <a href="/index.html" class="navbar-link">Home</a>
      </li>
      
      <li class="navbar-item navbar-dropdown">
        <a href="/pages/who-we-are.html" class="navbar-link">About</a>
        <ul class="navbar-dropdown-content">
          <li class="navbar-dropdown-item">
            <a href="/pages/who-we-are.html" class="navbar-dropdown-link">Who We Are</a>
          </li>
          <li class="navbar-dropdown-item">
            <a href="/pages/our-journey.html" class="navbar-dropdown-link">Our Journey</a>
          </li>
          <li class="navbar-dropdown-item">
            <a href="/pages/leadership.html" class="navbar-dropdown-link">Our Leadership</a>
          </li>
        </ul>
      </li>
        <li class="navbar-item">
        <a href="/pages/verticals.html" class="navbar-link">Verticals & Initiatives</a>
      </li>

      <li class="navbar-item">
        <a href="/pages/upcoming-events.html" class="navbar-link">Events</a>
      </li>

      <li class="navbar-item">
        <a href="/pages/blogs.html" class="navbar-link">Blog</a>
      </li>

      <li class="navbar-item">
        <a href="/pages/contact.html" class="navbar-link">Contact Us</a>
      </li>
      
      <li class="navbar-item navbar-cta">
        <a href="#join" class="btn btn-primary btn-sm" style="color: var(--color-white);">Join Yi Pune</a>
      </li>
    </ul>
  </div>
</nav>`;

// Footer Component HTML
const FOOTER_HTML = `<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <!-- Column 1: About -->
      <div class="footer-section">
        <div class="footer-logo">
          <img src="assets/images/logo.jpg" alt="Yi Pune Logo" class="footer-logo-img">
        </div>
        <p class="footer-description">
          Young Indians (Yi) Pune is a movement of inspired young leaders contributing to nation building through innovation, entrepreneurship, and social impact initiatives.
        </p>
        <div class="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener" class="footer-social-link" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      
      <!-- Column 2: Quick Links -->
      <div class="footer-section">
        <h3 class="footer-heading">Quick Links</h3>
        <ul class="footer-links">
          <li class="footer-link-item">
            <a href="/pages/who-we-are.html" class="footer-link">Who We Are</a>
          </li>
          <li class="footer-link-item">
            <a href="/pages/leadership.html" class="footer-link">Leadership</a>
          </li>
          <li class="footer-link-item">
            <a href="/pages/upcoming-events.html" class="footer-link">Upcoming Events</a>
          </li>
          <li class="footer-link-item">
            <a href="/pages/blogs.html" class="footer-link">Blog & Insights</a>
          </li>
        </ul>
      </div>
      
      <!-- Column 3: Verticals -->
      <div class="footer-section">
        <h3 class="footer-heading">Our Verticals</h3>
        <ul class="footer-links">
          <li class="footer-link-item">
            <a href="/pages/verticals.html" class="footer-link">Rural Initiatives</a>
          </li>
          <li class="footer-link-item">
            <a href="/pages/verticals.html" class="footer-link">Health & Environment</a>
          </li>
          <li class="footer-link-item">
            <a href="/pages/verticals.html" class="footer-link">Innovation</a>
          </li>
          <li class="footer-link-item">
            <a href="/pages/verticals.html" class="footer-link">Leadership Development</a>
          </li>
          <li class="footer-link-item">
            <a href="/pages/verticals.html" class="footer-link">Nation Building</a>
          </li>
          <li class="footer-link-item">
            <a href="/pages/verticals.html" class="footer-link">Youth Affairs</a>
          </li>
        </ul>
      </div>
      
      <!-- Column 4: Contact -->
      <div class="footer-section">
        <h3 class="footer-heading">Contact Us</h3>
        <div class="footer-contact-item">
          <span class="footer-contact-icon"><i class="fas fa-map-marker-alt"></i></span>
          <span>Yi Pune Chapter<br>CII Pune Office<br>Pune, Maharashtra</span>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon"><i class="fas fa-envelope"></i></span>
          <a href="mailto:info@youngindianspune.com" class="footer-link">info@youngindianspune.com</a>
        </div>
        <div class="footer-contact-item">
          <span class="footer-contact-icon"><i class="fas fa-phone"></i></span>
          <a href="tel:+917057058856" class="footer-link">+917057058856</a>
        </div>
        <div style="margin-top: var(--space-4);">
          <a href="https://youngindians.net/" target="_blank" rel="noopener" class="footer-link" style="font-weight: 600;">Yi National Website →</a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p class="footer-copyright">
        © 2025 Young Indians (Yi) Pune Chapter. All rights reserved.
      </p>
    </div>
  </div>
</footer>

<!-- Back to Top Button -->
<button class="back-to-top" aria-label="Back to top">
  <i class="fas fa-arrow-up"></i>
</button>`;

// Load Navbar Component
function loadNavbar() {
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    // Determine if we're on homepage or in pages folder
    const isHomepage = window.location.pathname.endsWith('index.html') || 
                       window.location.pathname === '/' ||
                       window.location.pathname.includes('/index.html') ||
                       window.location.pathname === '';
    const basePath = isHomepage ? './' : '../';
    
    // Create navbar HTML with corrected paths
    let navbar = NAVBAR_HTML;
    
    // Replace absolute paths with relative paths
    navbar = navbar.replace(/href="\/pages\//g, `href="${isHomepage ? './' : '../'}pages/`);
    navbar = navbar.replace(/href="\/(?!pages)/g, isHomepage ? 'href="./' : 'href="../');
    navbar = navbar.replace(/src="assets\//g, `src="${basePath}assets/`);
    
    navbarContainer.innerHTML = navbar;
    console.log('[Navbar] ✓ Loaded successfully');
    console.log('[Navbar] Is homepage:', isHomepage, 'Base path:', basePath);
  } else {
    console.warn('[Navbar] ✗ Container not found in DOM');
  }
}

// Load Footer Component
function loadFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) {
    // Determine if we're on homepage or in pages folder
    const isHomepage = window.location.pathname.endsWith('index.html') || 
                       window.location.pathname === '/' ||
                       window.location.pathname.includes('/index.html') ||
                       window.location.pathname === '';
    const basePath = isHomepage ? './' : '../';
    
    // Create footer HTML with corrected paths
    let footer = FOOTER_HTML;
    
    // Replace absolute paths with relative paths
    footer = footer.replace(/href="\/pages\//g, `href="${isHomepage ? './' : '../'}pages/`);
    footer = footer.replace(/href="\/(?!pages)/g, isHomepage ? 'href="./' : 'href="../');
    footer = footer.replace(/src="assets\//g, `src="${basePath}assets/`);
    
    footerContainer.innerHTML = footer;
    console.log('[Footer] ✓ Loaded successfully');
  } else {
    console.warn('[Footer] ✗ Container not found in DOM');
  }
}

// Load Components and Reinitialize
function loadComponents() {
  loadNavbar();
  loadFooter();
  // Reinitialize navigation after components are loaded
  setTimeout(() => {
    if (document.querySelector('.navbar')) {
      initMobileNav();
      initNavbarScroll();
      setActiveNavLink();
      initBackToTop();
    }
  }, 100);
}

// Mobile Navigation Toggle
function initMobileNav() {
  const navToggle = document.querySelector('.navbar-toggle');
  const navMenu = document.querySelector('.navbar-menu');
  const navDropdowns = document.querySelectorAll('.navbar-dropdown > .navbar-link');
  const navItems = document.querySelectorAll('.navbar-item');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.navbar') && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    // Handle dropdowns in mobile
    navDropdowns.forEach(link => {
      link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1023) {
          e.preventDefault();
          const parent = link.parentElement;
          parent.classList.toggle('active');
        }
      });
    });

    // Close menu when a regular link is clicked
    document.querySelectorAll('.navbar-link:not(.navbar-dropdown > .navbar-link)').forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 1023) {
          navToggle.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.style.overflow = '';
        }
      });
    });
  }
}

// Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('navbar-scrolled');
      } else {
        navbar.classList.remove('navbar-scrolled');
      }
    });
  }
}

// Smooth Scroll for Anchor Links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '') return;
      
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offsetTop = target.offsetTop - 70; // Account for fixed navbar
        
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        const navMenu = document.querySelector('.navbar-menu');
        const navToggle = document.querySelector('.navbar-toggle');
        if (navMenu && navMenu.classList.contains('active')) {
          navMenu.classList.remove('active');
          navToggle.classList.remove('active');
          document.body.style.overflow = '';
        }
      }
    });
  });
}

// Scroll Animation
function initScrollAnimation() {
  const elements = document.querySelectorAll('.scroll-animate');
  
  if (elements.length === 0) return;
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  });

  elements.forEach(element => {
    observer.observe(element);
  });
}

// Back to Top Button
function initBackToTop() {
  const backToTop = document.querySelector('.back-to-top');
  
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
}

// Active Navigation Link
function setActiveNavLink() {
  const currentPath = window.location.pathname;
  const currentFile = currentPath.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar-link');
  
  navLinks.forEach(link => {
    const linkHref = link.getAttribute('href');
    if (!linkHref) return;
    
    try {
      const linkPath = new URL(linkHref, window.location.href).pathname;
      const linkFile = linkPath.split('/').pop();
      
      // Match if files are the same or if both are index
      if ((linkFile === currentFile) || 
          (currentFile === 'index.html' && (linkFile === 'index.html' || linkHref === './'))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    } catch (e) {
      console.warn('Error parsing link:', linkHref);
    }
  });
}

// Form Validation
function initFormValidation() {
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      
      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          input.classList.add('error');
          showError(input, 'This field is required');
        } else {
          input.classList.remove('error');
          removeError(input);
        }
        
        // Email validation
        if (input.type === 'email' && input.value) {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(input.value)) {
            isValid = false;
            input.classList.add('error');
            showError(input, 'Please enter a valid email');
          }
        }
        
        // Phone validation
        if (input.type === 'tel' && input.value) {
          const phoneRegex = /^[0-9]{10}$/;
          if (!phoneRegex.test(input.value.replace(/\s/g, ''))) {
            isValid = false;
            input.classList.add('error');
            showError(input, 'Please enter a valid phone number');
          }
        }
      });
      
      if (isValid) {
        // Form is valid, submit it
        console.log('Form is valid, submitting...');
        // You can add actual form submission logic here
        showSuccessMessage(form);
      }
    });
    
    // Remove error on input
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        removeError(input);
      });
    });
  });
}

function showError(input, message) {
  removeError(input);
  const error = document.createElement('div');
  error.className = 'form-error';
  error.style.color = 'var(--color-error)';
  error.style.fontSize = 'var(--text-sm)';
  error.style.marginTop = 'var(--space-1)';
  error.textContent = message;
  input.parentElement.appendChild(error);
}

function removeError(input) {
  const error = input.parentElement.querySelector('.form-error');
  if (error) {
    error.remove();
  }
}

function showSuccessMessage(form) {
  const success = document.createElement('div');
  success.className = 'form-success';
  success.style.backgroundColor = 'var(--color-success)';
  success.style.color = 'var(--color-white)';
  success.style.padding = 'var(--space-4)';
  success.style.borderRadius = 'var(--radius-base)';
  success.style.marginTop = 'var(--space-4)';
  success.textContent = 'Thank you! Your submission has been received.';
  form.appendChild(success);
  
  form.reset();
  
  setTimeout(() => {
    success.remove();
  }, 5000);
}

// Counter Animation (for stats)
function initCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');
  
  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-count'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current) + (counter.getAttribute('data-suffix') || '');
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target + (counter.getAttribute('data-suffix') || '');
      }
    };
    
    updateCounter();
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        entry.target.classList.add('counted');
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });
  
  counters.forEach(counter => {
    observer.observe(counter);
  });
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', async () => {
  // Load components from files
  await loadComponents();
  
  // Initialize remaining functions
  initSmoothScroll();
  initScrollAnimation();
  initFormValidation();
  initCounterAnimation();
});

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 1023) {
      const navMenu = document.querySelector('.navbar-menu');
      const navToggle = document.querySelector('.navbar-toggle');
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        document.body.style.overflow = '';
      }
    }
  }, 250);
});
