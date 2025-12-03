// Basic protection - only right-click prevention
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});

// GSAP ScrollTrigger and Animation Scripts
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Initialize when page loads
window.addEventListener('load', () => {
    initAnimations();
    showNavigation();
    animateSkillLevels();
    initSmoothScrolling();
    initProfessionalEffects();
});

// Initialize immediately for better performance
document.addEventListener('DOMContentLoaded', () => {
    initSmoothScrolling();
});

// Star background removed for cleaner look

// Initialize all animations
function initAnimations() {
    // Section headers animation
    gsap.utils.toArray('.section-header').forEach(header => {
        gsap.fromTo(header, 
            { 
                opacity: 0, 
                y: 50,
                filter: 'blur(4px)'
            },
            {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: header,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
    
    // Word-by-word animation for titles
    gsap.utils.toArray('.word').forEach((word, index) => {
        gsap.fromTo(word, 
            { 
                opacity: 0, 
                y: 30,
                filter: 'blur(4px)'
            },
            {
                opacity: 1,
                y: 0,
                filter: 'blur(0px)',
                duration: 0.3,
                delay: index * 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: word.closest('.scroll-reveal'),
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
    
    // Profile image animation - fast and smooth
    gsap.fromTo('.profile-image', 
        { 
            scale: 0.9, 
            opacity: 0,
            y: 20
        },
        { 
            scale: 1, 
            opacity: 1,
            y: 0,
            duration: 0.5, 
            delay: 0.1, 
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.profile-image',
                start: 'top 95%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Detail items animation - fast and synchronized
    gsap.fromTo('.detail-item', 
        { 
            opacity: 0, 
            y: 20,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.4,
            stagger: 0.05,
            delay: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.profile-details',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Skill cards stagger animation - fast and smooth
    gsap.fromTo('.skill-card', 
        { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.skills-grid',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Tech tags animation - very fast
    gsap.fromTo('.tech-tag', 
        { 
            opacity: 0, 
            scale: 0.9,
            y: 15
        },
        {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.02,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.tech-tags',
                start: 'top 95%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Project cards animation - fast and smooth
    gsap.fromTo('.project-card', 
        { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.projects-grid',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Category stats animation - smoother
    gsap.fromTo('.category-stat', 
        { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.category-stats',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Contact items animation - smoother
    gsap.fromTo('.contact-item', 
        { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.contact-info',
                start: 'top 90%',
                toggleActions: 'play none none reverse'
            }
        }
    );
    
    // Business info animation - smoother
    gsap.fromTo('.business-info', 
        { 
            opacity: 0, 
            y: 30,
            scale: 0.95
        },
        {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
                trigger: '.business-info',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            }
        }
    );
}

// Animate skill level bars - smoother
function animateSkillLevels() {
    gsap.utils.toArray('.level-fill').forEach(levelFill => {
        const level = levelFill.getAttribute('data-level');
        
        gsap.fromTo(levelFill, 
            { width: '0%' },
            {
                width: level + '%',
                duration: 1.2,
                ease: "power2.out",
                delay: 0.3,
                scrollTrigger: {
                    trigger: levelFill.closest('.skill-card'),
                    start: 'top 90%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Show navigation with animation
function showNavigation() {
    gsap.fromTo('.navigation', 
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.3 }
    );
}

// Initialize professional effects
function initProfessionalEffects() {
    // No parallax scrolling - keep space background fixed
    // This maintains the immersive space experience

    // Enhanced hover effects
    document.querySelectorAll('.skill-card, .project-card, .contact-item').forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                scale: 1.02,
                y: -5,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                scale: 1,
                y: 0,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });

    // Smooth reveal animations - faster for contact section
    gsap.utils.toArray('.scroll-reveal').forEach((element, index) => {
        const isContactSection = element.closest('#contact');
        gsap.fromTo(element, 
            { 
                opacity: 0, 
                y: 50,
                scale: 0.95
            },
            {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: isContactSection ? 0.3 : 0.8,
                delay: isContactSection ? 0 : index * 0.05,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: element,
                    start: isContactSection ? 'top 90%' : 'top 85%',
                    toggleActions: 'play none none reverse'
                }
            }
        );
    });
}

// Initialize smooth scrolling
function initSmoothScrolling() {
    // Enhanced smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 0.8,
                    scrollTo: {
                        y: target,
                        offsetY: 80
                    },
                    ease: "power2.out"
                });
            }
        });
    });
    
    // Update active navigation on scroll
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navigation a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Add hover effects for skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
            scale: 1.05, 
            y: -10,
            duration: 0.3, 
            ease: "power2.out" 
        });
        
        // Animate icon container
        const iconContainer = card.querySelector('.icon-placeholder');
        gsap.to(iconContainer, {
            rotation: 360,
            scale: 1.1,
            duration: 0.5,
            ease: "back.out(1.7)"
        });
        
        // Animate icon image
        const iconImg = card.querySelector('.skill-icon-img');
        gsap.to(iconImg, {
            scale: 1.2,
            rotation: -360,
            duration: 0.5,
            ease: "back.out(1.7)"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
            scale: 1, 
            y: 0,
            duration: 0.3, 
            ease: "power2.out" 
        });
        
        // Reset icon container
        const iconContainer = card.querySelector('.icon-placeholder');
        gsap.to(iconContainer, {
            rotation: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
        
        // Reset icon image
        const iconImg = card.querySelector('.skill-icon-img');
        gsap.to(iconImg, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Add hover effects for project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, { 
            scale: 1.02, 
            y: -5,
            duration: 0.3, 
            ease: "power2.out" 
        });
        
        // Animate icon
        const icon = card.querySelector('.project-icon');
        gsap.to(icon, {
            scale: 1.1,
            rotation: 5,
            duration: 0.3,
            ease: "power2.out"
        });
    });
    
    card.addEventListener('mouseleave', () => {
        gsap.to(card, { 
            scale: 1, 
            y: 0,
            duration: 0.3, 
            ease: "power2.out" 
        });
        
        // Reset icon
        const icon = card.querySelector('.project-icon');
        gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Add hover effects for tech tags
document.querySelectorAll('.tech-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        gsap.to(tag, { 
            scale: 1.1, 
            y: -3,
            duration: 0.2, 
            ease: "power2.out" 
        });
    });
    
    tag.addEventListener('mouseleave', () => {
        gsap.to(tag, { 
            scale: 1, 
            y: 0,
            duration: 0.2, 
            ease: "power2.out" 
        });
    });
});

// Add hover effects for contact items
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        gsap.to(item, { 
            scale: 1.02, 
            y: -5,
            duration: 0.3, 
            ease: "power2.out" 
        });
    });
    
    item.addEventListener('mouseleave', () => {
        gsap.to(item, { 
            scale: 1, 
            y: 0,
            duration: 0.3, 
            ease: "power2.out" 
        });
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    const sections = ['profile', 'skills', 'projects', 'contact'];
    const currentSection = getCurrentSection();
    const currentIndex = sections.indexOf(currentSection);
    
    if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        if (currentIndex < sections.length - 1) {
            document.getElementById(sections[currentIndex + 1]).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
    
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentIndex > 0) {
            document.getElementById(sections[currentIndex - 1]).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Get current section based on scroll position
function getCurrentSection() {
    const sections = document.querySelectorAll('.section');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });
    return current;
}

// Enhanced scroll effects - keep space background fixed
window.addEventListener('scroll', () => {
    // Space background stays fixed - no movement
    // This creates the immersive space experience
});

// Add typing effect for profile name
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    setTimeout(type, 1000);
}

// Add CSS for active navigation
const navStyle = document.createElement('style');
navStyle.textContent = `
    .navigation a.active {
        color: #ffffff !important;
    }
    .navigation a.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(navStyle);
