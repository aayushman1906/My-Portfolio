// Enhanced Mobile Menu Functionality
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

console.log('menuBtn:', menuBtn);
console.log('navLinks:', navLinks);

// Toggle mobile menu
function toggleMobileMenu() {
    console.log('Hamburger clicked!');
    const isActive = navLinks.classList.contains('active');
    
    if (isActive) {
        navLinks.classList.remove('active');
        menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        navLinks.classList.add('active');
        menuBtn.innerHTML = '<i class="fas fa-times"></i>';
    }
}

// Event listeners for mobile menu
menuBtn.addEventListener('click', toggleMobileMenu);

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    if (!navbar.contains(e.target) && navLinks.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Close mobile menu on window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 767 && navLinks.classList.contains('active')) {
        toggleMobileMenu();
    }
});

// Enhanced Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            // Close mobile menu if open
            if (window.innerWidth <= 767 && navLinks.classList.contains('active')) {
                toggleMobileMenu();
            }
            
            // Smooth scroll to target
            const headerOffset = 80; // Account for fixed navbar
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Simple Formspree Contact Form Handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Get form data
        const formData = new FormData(this);
        const name = formData.get('name')?.trim();
        const email = formData.get('email')?.trim();
        const message = formData.get('message')?.trim();
        
        // Validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            e.preventDefault();
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showNotification('Please enter a valid email address', 'error');
            e.preventDefault();
            return;
        }
        
        // Show loading state
        const submitBtn = this.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnLoading = submitBtn.querySelector('.btn-loading');
        
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline';
        submitBtn.disabled = true;
        
        // Form will submit normally to Formspree
        // No additional JavaScript needed!
        
        // Show success message after a short delay
        setTimeout(() => {
            showNotification('Thank you for your message! I will get back to you soon.', 'success');
        }, 1000);
    });
}

// Notification System
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#4CAF50' : type === 'error' ? '#f44336' : '#2196F3'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        font-family: 'Poppins', sans-serif;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Enhanced Navbar Scroll Effect
let lastScroll = 0;
let scrollTimeout;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    // Clear existing timeout
    clearTimeout(scrollTimeout);
    
    // Add scroll class for styling
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Hide/show navbar on scroll (only on mobile)
    if (window.innerWidth <= 767) {
        if (currentScroll <= 0) {
            navbar.style.transform = 'translateY(0)';
            return;
        }
        
        if (currentScroll > lastScroll && currentScroll > 100) {
            // Scrolling down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up - show navbar
            navbar.style.transform = 'translateY(0)';
        }
    }
    
    lastScroll = currentScroll;
    
    // Set timeout to show navbar after scrolling stops
    scrollTimeout = setTimeout(() => {
        navbar.style.transform = 'translateY(0)';
    }, 1000);
});

// Enhanced Intersection Observer for Animations
const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Add staggered animation for grid items
            if (entry.target.classList.contains('skills-grid') || 
                entry.target.classList.contains('projects-grid')) {
                const items = entry.target.children;
                Array.from(items).forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('animate-in');
                    }, index * 100);
                });
            }
        }
    });
}, observerOptions);

// Observe all sections and animated elements
document.querySelectorAll('section, .fade-in-section, .skill-card, .project-card').forEach(element => {
    observer.observe(element);
});

// Touch Support for Mobile Devices
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartY - touchEndY;
    
    // Swipe up to show navbar, swipe down to hide (only on mobile)
    if (window.innerWidth <= 767 && Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - show navbar
            navbar.style.transform = 'translateY(0)';
        } else {
            // Swipe down - hide navbar
            navbar.style.transform = 'translateY(-100%)';
        }
    }
}

// Performance Optimization: Debounced scroll handler
function debounce(func, wait) {
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

// Optimized scroll progress indicator
const scrollProgress = document.getElementById('scrollProgress');
if (scrollProgress) {
    const updateScrollProgress = debounce(() => {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.offsetHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        scrollProgress.style.width = scrollPercent + '%';
    }, 10);
    
    window.addEventListener('scroll', updateScrollProgress);
}

// Back to Top Button Enhancement
const backToTop = document.getElementById('backToTop');
if (backToTop) {
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
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

// Keyboard Navigation Support
document.addEventListener('keydown', function(e) {
    // Escape key to close mobile menu
    if (e.key === 'Escape' && navLinks.classList.contains('active')) {
        toggleMobileMenu();
    }
    
    // Enter key for form submission
    if (e.key === 'Enter' && e.target.matches('input, textarea')) {
        const form = e.target.closest('form');
        if (form && form.checkValidity()) {
            form.dispatchEvent(new Event('submit'));
        }
    }
});

// Preload Critical Images
function preloadImages() {
    const criticalImages = [
        'profile.jpg',
        'img2.png',
        'logo.jpg'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    preloadImages();
    
    // Add loading animation
    const loadingAnimation = document.getElementById('loadingAnimation');
    if (loadingAnimation) {
        setTimeout(() => {
            loadingAnimation.classList.add('hidden');
            setTimeout(() => {
                loadingAnimation.style.display = 'none';
            }, 300);
        }, 500);
    }
    
    // Initialize tooltips for skill cards
    document.querySelectorAll('.skill-card').forEach(card => {
        const title = card.querySelector('h3').textContent;
        card.setAttribute('title', title);
    });
});

// Add CSS for enhanced animations
const style = document.createElement('style');
style.textContent = `
    .notification-content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        line-height: 1;
    }
    
    .navbar.scrolled {
        background: rgba(10, 22, 38, 0.98);
        backdrop-filter: blur(12px);
    }
    
    .skill-card.animate-in,
    .project-card.animate-in {
        animation: slideInUp 0.6s ease forwards;
    }
    
    @keyframes slideInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    /* Enhanced mobile menu animations */
    .nav-links {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    .nav-links.active {
        transform: translateY(0) scaleY(1);
        opacity: 1;
    }
    
    /* Touch feedback for mobile */
    @media (hover: none) and (pointer: coarse) {
        .btn:active,
        .skill-card:active,
        .project-card:active,
        .social-links a:active {
            transform: scale(0.95);
        }
    }
    
    /* Contact form loading state */
    .btn-loading {
        display: none;
    }
    
    .btn:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
`;
document.head.appendChild(style);
