// Security Layer 1: Code Obfuscation
(function() {
    'use strict';
    
    // Light anti-debugging protection (less aggressive)
    let devtools = {open: false, orientation: null};
    setInterval(function() {
        // Only trigger on very obvious devtools usage
        if (window.outerHeight - window.innerHeight > 200 || window.outerWidth - window.innerWidth > 200) {
            if (!devtools.open) {
                devtools.open = true;
                // Just show a warning instead of blocking everything
                console.warn('Developer tools detected - please respect the portfolio');
            }
        }
    }, 1000);

    // Prevent right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
        return false;
    });

    // Prevent F12, Ctrl+Shift+I, Ctrl+U
    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') || 
            (e.ctrlKey && e.key === 'u')) {
            e.preventDefault();
            return false;
        }
    });

    // Show navigation when page loads
    window.addEventListener('load', () => {
        setTimeout(() => {
            const nav = document.querySelector('.navigation');
            if (nav) nav.classList.add('visible');
        }, 1000);
        
        // Auto-transition timing
        initWelcomeTiming();
    });
})();

// Welcome timing functionality
function initWelcomeTiming() {
    let hasScrolled = false;
    let welcomeTimer = null;
    let modelTimer = null;
    
    // Listen for scroll events
    window.addEventListener('scroll', () => {
        if (!hasScrolled) {
            hasScrolled = true;
            // User scrolled, go to main portfolio immediately
            clearTimeout(welcomeTimer);
            clearTimeout(modelTimer);
            window.location.href = '../index.html';
        }
    });
    
    // Listen for click events
    document.addEventListener('click', () => {
        if (!hasScrolled) {
            hasScrolled = true;
            // User clicked, go to main portfolio immediately
            clearTimeout(welcomeTimer);
            clearTimeout(modelTimer);
            window.location.href = '../index.html';
        }
    });
    
    // Auto-transition to 3D model after 20 seconds
    welcomeTimer = setTimeout(() => {
        if (!hasScrolled) {
            // Show 3D model (it's already visible)
            console.log('Auto-transitioning to 3D model');
            
            // Auto-transition to profile after another 20 seconds
            modelTimer = setTimeout(() => {
                if (!hasScrolled) {
                    window.location.href = '../index.html';
                }
            }, 20000); // 20 seconds
        }
    }, 20000); // 20 seconds
}

// Security Layer 2: Secure API Management
(function() {
    'use strict';
    
    // Encrypted API endpoint (obfuscated)
    const secureEndpoint = btoa('aHR0cHM6Ly9wcm9kLnNwbGluZS5kZXNpZ24v').split('').reverse().join('');
    const decodedEndpoint = atob(secureEndpoint.split('').reverse().join(''));
    
    // Rate limiting protection
    let requestCount = 0;
    const maxRequests = 10;
    const timeWindow = 60000; // 1 minute
    
    function checkRateLimit() {
        if (requestCount >= maxRequests) {
            console.warn('Rate limit exceeded');
            return false;
        }
        requestCount++;
        setTimeout(() => requestCount--, timeWindow);
        return true;
    }
    
    // Enhanced Spline loading detection with security
    function checkSplineViewer() {
        if (!checkRateLimit()) return;
        
        const splineViewer = document.querySelector('spline-viewer');
        const fallback = document.getElementById('fallback-3d');
        
        if (!splineViewer) {
            if (fallback) {
                fallback.style.display = 'block';
                initFallback3D();
            }
            return;
        }
        
        // Relaxed security: Allow GitHub Pages and common domains
        const blockedDomains = ['malicious.com', 'hacker.com', 'phishing.com'];
        const currentDomain = window.location.hostname;
        
        // Only block obviously malicious domains
        if (blockedDomains.some(domain => currentDomain.includes(domain))) {
            console.warn('Blocked domain access');
            if (fallback) {
                fallback.style.display = 'block';
                initFallback3D();
            }
            return;
        }
        
        // Check if we're on GitHub Pages (HTTPS)
        const isGitHubPages = window.location.hostname.includes('github.io');
        
        // More patient loading detection for Spline
        const checkTimeout = isGitHubPages ? 15000 : 10000; // Give Spline more time
        
        setTimeout(() => {
            const hasContent = splineViewer.shadowRoot && 
                              splineViewer.shadowRoot.children.length > 0;
            
            if (!hasContent) {
                console.log('Spline check failed after timeout - showing fallback');
                splineViewer.style.display = 'none';
                if (fallback) {
                    fallback.style.display = 'block';
                    initFallback3D();
                }
            } else {
                console.log('3D content loaded successfully');
            }
        }, checkTimeout);
    }
    
    // Expose function globally
    window.checkSplineViewer = checkSplineViewer;
})();

// Initialize Spline viewer detection
document.addEventListener('DOMContentLoaded', checkSplineViewer);

// Also check on window load as backup
window.addEventListener('load', checkSplineViewer);

function initFallback3D() {
    // Create an elegant fallback for GitHub Pages
    const container = document.getElementById('fallback-3d');
    if (container) {
        container.innerHTML = `
            <div style="
                width: 100%; 
                height: 100%; 
                background: radial-gradient(ellipse at center, #1a1a2e 0%, #16213e 50%, #0f0f23 100%);
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                overflow: hidden;
            ">
                <!-- Animated particles -->
                <div style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background-image: 
                        radial-gradient(2px 2px at 20px 30px, rgba(255,255,255,0.3), transparent),
                        radial-gradient(2px 2px at 40px 70px, rgba(100,255,218,0.4), transparent),
                        radial-gradient(1px 1px at 90px 40px, rgba(255,255,255,0.2), transparent),
                        radial-gradient(1px 1px at 130px 80px, rgba(100,255,218,0.3), transparent);
                    background-repeat: repeat;
                    background-size: 150px 100px;
                    animation: twinkle 10s linear infinite;
                "></div>
                
                <!-- Central geometric element -->
                <div style="
                    width: 300px;
                    height: 300px;
                    border: 2px solid rgba(100,255,218,0.3);
                    border-radius: 50%;
                    position: relative;
                    animation: rotate 30s linear infinite;
                ">
                    <div style="
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 6px;
                        height: 6px;
                        background: #64ffda;
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        box-shadow: 0 0 30px #64ffda, 0 0 60px #64ffda;
                    "></div>
                    
                    <!-- Orbiting elements -->
                    <div style="
                        position: absolute;
                        top: 20px;
                        left: 50%;
                        width: 3px;
                        height: 3px;
                        background: rgba(255,255,255,0.6);
                        border-radius: 50%;
                        transform: translateX(-50%);
                        box-shadow: 0 0 10px rgba(255,255,255,0.5);
                    "></div>
                    <div style="
                        position: absolute;
                        bottom: 20px;
                        left: 50%;
                        width: 3px;
                        height: 3px;
                        background: rgba(255,255,255,0.6);
                        border-radius: 50%;
                        transform: translateX(-50%);
                        box-shadow: 0 0 10px rgba(255,255,255,0.5);
                    "></div>
                    <div style="
                        position: absolute;
                        top: 50%;
                        left: 20px;
                        width: 3px;
                        height: 3px;
                        background: rgba(255,255,255,0.6);
                        border-radius: 50%;
                        transform: translateY(-50%);
                        box-shadow: 0 0 10px rgba(255,255,255,0.5);
                    "></div>
                    <div style="
                        position: absolute;
                        top: 50%;
                        right: 20px;
                        width: 3px;
                        height: 3px;
                        background: rgba(255,255,255,0.6);
                        border-radius: 50%;
                        transform: translateY(-50%);
                        box-shadow: 0 0 10px rgba(255,255,255,0.5);
                    "></div>
                </div>
                
                <!-- Floating elements -->
                <div style="
                    position: absolute;
                    top: 20%;
                    left: 10%;
                    width: 4px;
                    height: 4px;
                    background: rgba(100,255,218,0.5);
                    border-radius: 50%;
                    animation: float 6s ease-in-out infinite;
                "></div>
                <div style="
                    position: absolute;
                    top: 70%;
                    right: 15%;
                    width: 3px;
                    height: 3px;
                    background: rgba(255,255,255,0.4);
                    border-radius: 50%;
                    animation: float 8s ease-in-out infinite reverse;
                "></div>
                <div style="
                    position: absolute;
                    bottom: 30%;
                    left: 20%;
                    width: 2px;
                    height: 2px;
                    background: rgba(100,255,218,0.6);
                    border-radius: 50%;
                    animation: float 7s ease-in-out infinite;
                "></div>
            </div>
            <style>
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes twinkle {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            </style>
        `;
        container.style.display = 'block';
    }
}

// No 3D cube animation needed - clean and professional

// Smooth scroll to main portfolio
document.querySelector('.scroll-indicator').addEventListener('click', () => {
    window.location.href = '../index.html';
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault();
        window.location.href = '../index.html';
    }
});
