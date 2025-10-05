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

// Check if Spline viewer loads successfully
setTimeout(() => {
    const splineViewer = document.querySelector('spline-viewer');
    const fallback = document.getElementById('fallback-3d');
    
    if (splineViewer && splineViewer.shadowRoot && splineViewer.shadowRoot.children.length === 0) {
        // Spline viewer failed to load, show fallback
        splineViewer.style.display = 'none';
        fallback.style.display = 'block';
        initFallback3D();
    }
}, 5000);

function initFallback3D() {
    // No fallback 3D cube - keep it clean and professional
    const container = document.getElementById('fallback-3d');
    if (container) {
        container.style.display = 'none';
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
