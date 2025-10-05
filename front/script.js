// Show navigation when page loads
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.navigation').classList.add('visible');
    }, 1000);
    
    // Auto-transition timing
    initWelcomeTiming();
});

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

// Enhanced Spline loading detection for GitHub Pages
function checkSplineViewer() {
    const splineViewer = document.querySelector('spline-viewer');
    const fallback = document.getElementById('fallback-3d');
    
    if (!splineViewer) {
        console.log('Spline viewer not found, showing fallback');
        if (fallback) {
            fallback.style.display = 'block';
            initFallback3D();
        }
        return;
    }
    
    // Check if we're on GitHub Pages (HTTPS)
    const isGitHubPages = window.location.hostname.includes('github.io');
    
    // For GitHub Pages, use a more aggressive fallback detection
    if (isGitHubPages) {
        // Check if the viewer has loaded content after a longer delay
        setTimeout(() => {
            const hasContent = splineViewer.shadowRoot && 
                              splineViewer.shadowRoot.children.length > 0 &&
                              splineViewer.offsetHeight > 0;
            
            if (!hasContent) {
                console.log('Spline viewer failed to load on GitHub Pages, showing fallback');
                splineViewer.style.display = 'none';
                if (fallback) {
                    fallback.style.display = 'block';
                    initFallback3D();
                }
            } else {
                console.log('Spline viewer loaded successfully on GitHub Pages');
            }
        }, 8000); // Longer timeout for GitHub Pages
    } else {
        // Regular detection for local development
        setTimeout(() => {
            const hasContent = splineViewer.shadowRoot && 
                              splineViewer.shadowRoot.children.length > 0;
            
            if (!hasContent) {
                console.log('Spline viewer failed to load, showing fallback');
                splineViewer.style.display = 'none';
                if (fallback) {
                    fallback.style.display = 'block';
                    initFallback3D();
                }
            } else {
                console.log('Spline viewer loaded successfully');
            }
        }, 5000);
    }
}

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
