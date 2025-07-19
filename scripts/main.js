// Main JavaScript file for Russian Logistics Website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality when DOM is loaded
    initMobileNavigation();
    initWebPSupport();
    initLazyLoading();
    initSmoothScrolling();
    initFormValidation();
    preloadCriticalImages();
});

// Mobile Navigation Toggle
function initMobileNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || mobileMenu.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// WebP Support Detection
function initWebPSupport() {
    function supportsWebP(callback) {
        const webP = new Image();
        webP.onload = webP.onerror = function () {
            callback(webP.height === 2);
        };
        webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }

    // Apply WebP support class
    supportsWebP(function(supported) {
        document.documentElement.classList.add(supported ? 'webp-support' : 'no-webp');
    });
}

// Enhanced Lazy Loading for Images
function initLazyLoading() {
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const image = entry.target;
                    
                    // Add loaded class for animation
                    image.classList.add('loaded');
                    
                    // Stop observing this image
                    observer.unobserve(image);
                }
            });
        }, {
            rootMargin: '50px 0px', // Start loading 50px before entering viewport
            threshold: 0.1
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => img.classList.add('loaded'));
    }
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                e.preventDefault();
                
                const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Preload Critical Images
function preloadCriticalImages() {
    const criticalImages = [
        'images/hero-logistics-russia.webp',
        'images/hero-logistics-russia.jpg', // Fallback
        'images/ftl-truck-illustration.webp',
        'images/ltl-consolidated-cargo.webp',
        'images/logo.png'
    ];
    
    criticalImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
}

// Form Validation Functions
function initFormValidation() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(event) {
    event.preventDefault();
    
    if (validateForm()) {
        // If validation passes, you can submit the form
        // For now, we'll show a success message
        showSuccessMessage();
        // Uncomment the next line to actually submit the form
        // event.target.submit();
    }
}

function validateForm() {
    // Get form elements
    const name = document.getElementById('name')?.value.trim() || '';
    const phone = document.getElementById('phone')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';
    const privacyCheckbox = document.getElementById('privacy-policy');
    
    // Clear previous error messages
    clearErrorMessages();
    
    let isValid = true;
    
    // Validate name
    if (name === '') {
        showError('name', 'Name is required');
        isValid = false;
    }
    
    // Validate contact information (at least one required)
    if (phone === '' && email === '') {
        showError('phone', 'Please provide either phone number or email');
        showError('email', 'Please provide either phone number or email');
        isValid = false;
    }
    
    // Validate email format if provided
    if (email !== '' && !isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate phone format if provided (basic Russian phone validation)
    if (phone !== '' && !isValidPhone(phone)) {
        showError('phone', 'Please enter a valid phone number');
        isValid = false;
    }
    
    // Validate message
    if (message === '') {
        showError('message', 'Message is required');
        isValid = false;
    }
    
    // Validate privacy policy checkbox
    if (privacyCheckbox && !privacyCheckbox.checked) {
        showError('privacy-policy', 'You must agree to the Privacy Policy');
        alert('Please agree to the Privacy Policy to continue.');
        isValid = false;
    }
    
    return isValid;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    // Basic phone validation for Russian numbers
    const phoneRegex = /^(\+7|7|8)?[\s\-]?\(?[0-9]{3}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return phoneRegex.test(phone);
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;
    
    // Add error class to field
    field.classList.add('error');
    
    // Create and add error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    
    // Insert error message after the field
    field.parentNode.appendChild(errorDiv);
}

function clearErrorMessages() {
    // Remove error messages
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.remove());
    
    // Remove error classes
    const errorFields = document.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
}

function showSuccessMessage() {
    // Create success message
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.style.cssText = `
        background: #d4edda;
        color: #155724;
        padding: 15px;
        border-radius: 8px;
        margin: 20px 0;
        border: 1px solid #c3e6cb;
        text-align: center;
        font-weight: 600;
    `;
    successDiv.textContent = 'Thank you for your message! We will contact you soon.';
    
    // Insert success message at the top of the form
    const form = document.getElementById('contact-form');
    if (form) {
        form.insertBefore(successDiv, form.firstChild);
        
        // Scroll to success message
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Reset form
        form.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
}

// Navbar scroll effect
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;
    
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add shadow when scrolled
        if (scrollTop > 50) {
            navbar.style.boxShadow = '0 2px 20px rgba(46, 134, 171, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(46, 134, 171, 0.1)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Initialize navbar scroll effect
document.addEventListener('DOMContentLoaded', initNavbarScrollEffect);

// Contact method click tracking (for analytics)
function trackContactClick(method) {
    // You can implement analytics tracking here
    console.log(`Contact method clicked: ${method}`);
    
    // Example: Google Analytics event tracking
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', 'contact_click', {
    //         'contact_method': method
    //     });
    // }
}

// Add click tracking to contact methods
document.addEventListener('DOMContentLoaded', function() {
    const contactMethods = document.querySelectorAll('.contact-method');
    contactMethods.forEach(method => {
        method.addEventListener('click', function() {
            const methodType = this.querySelector('span')?.textContent || 'unknown';
            trackContactClick(methodType);
        });
    });
});

// Intersection Observer for animations
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.service-card, .benefit-item');
    
    if ('IntersectionObserver' in window) {
        const animationObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            animationObserver.observe(el);
        });
    }
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', initScrollAnimations);

// Performance monitoring
function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', function() {
        if ('performance' in window) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Page load time: ${loadTime}ms`);
            
            // You can send this data to analytics
            // Example: Google Analytics custom metric
            // if (typeof gtag !== 'undefined') {
            //     gtag('event', 'timing_complete', {
            //         'name': 'load',
            //         'value': Math.round(loadTime)
            //     });
            // }
        }
    });
}

// Initialize performance monitoring
initPerformanceMonitoring();

// Utility function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Handle UTM parameters for analytics
function handleUTMParameters() {
    const utmSource = getQueryParam('utm_source');
    const utmMedium = getQueryParam('utm_medium');
    const utmCampaign = getQueryParam('utm_campaign');
    
    if (utmSource || utmMedium || utmCampaign) {
        console.log('UTM Parameters detected:', {
            source: utmSource,
            medium: utmMedium,
            campaign: utmCampaign
        });
        
        // Store UTM parameters in sessionStorage for form submission
        sessionStorage.setItem('utm_data', JSON.stringify({
            source: utmSource,
            medium: utmMedium,
            campaign: utmCampaign
        }));
    }
}

// Initialize UTM handling
document.addEventListener('DOMContentLoaded', handleUTMParameters);

// Export functions for use in other scripts if needed
window.LogisticsWebsite = {
    validateForm,
    showError,
    clearErrorMessages,
    trackContactClick,
    getQueryParam
};