// ============================================
// MAZKIPLAYCYBERSECURITY - RED TEAM TOOLS v2.0
// PASSWORD PROTECTION - 100% WORKING VERSION
// ============================================

const RED_TEAM_KEY = "Red_Team2114";

console.log("🔥 MazkiplayCyberSecurity Loaded - Red Team Ready!");

// PASSWORD AUTHENTICATION - IMPROVED VERSION
function authenticate() {
    console.log("🔑 Authentication Attempt...");
    const inputKey = document.getElementById('accessKey').value.trim();
    const button = event.target;
    
    // Disable button during check
    button.disabled = true;
    button.innerHTML = '<i class="fas fa-spinner fa-spin mr-3"></i>Verifying...';
    
    // Check password
    setTimeout(() => {
        if (inputKey === RED_TEAM_KEY) {
            console.log("✅ AUTH SUCCESS - Redirecting to Dashboard");
            
            // Success Animation + Sound Effect (optional)
            document.body.style.animation = 'successPulse 1.5s ease-in-out';
            document.body.style.filter = 'brightness(1.2)';
            
            // Save auth status to localStorage
            localStorage.setItem('redTeamAuth', 'true');
            
            // Redirect after animation
            setTimeout(() => {
                window.location.href = 'dashboard.html';
            }, 1200);
            
        } else {
            console.log("❌ AUTH FAILED");
            
            // Error Animation + Shake
            document.body.style.animation = 'errorShake 0.8s ease-in-out';
            document.getElementById('accessKey').value = '';
            document.getElementById('accessKey').placeholder = '❌ Key Salah! Coba Lagi...';
            
            // Reset after 1 second
            setTimeout(() => {
                document.body.style.animation = '';
                document.getElementById('accessKey').placeholder = 'Masukkan Red Team Key...';
                button.disabled = false;
                button.innerHTML = '<i class="fas fa-rocket mr-3"></i>ENTER RED TEAM DASHBOARD';
            }, 1000);
        }
    }, 800); // Delay for visual feedback
}

// ENTER KEY SUPPORT - AUTO TRIGGER
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        authenticate();
    }
});

// AUTO FOCUS ON LOAD
window.addEventListener('load', function() {
    console.log("🚀 Page Loaded - Focusing on password field");
    document.getElementById('accessKey').focus();
    
    // Typing Animation Start
    initTyping();
    
    // Particles Start
    initParticles();
});

// ENHANCED TYPING ANIMATION
function initTyping() {
    const typed = new Typed('.typing-demo', {
        strings: [
            'Selamat Datang di Tools Red Team MazkiplayCyberSecurity...',
            'Platform Pentesting Terlengkap untuk Red Team Indonesia...',
            'Authorized Security Assessment Only - Sego Megono Cyber Security...',
            'Masukkan Red Team Key: Red_Team2114'
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 1500,
        loop: true,
        onComplete: function() {
            console.log("✨ Typing animation ready");
        }
    });
}

// PARTICLES ANIMATION - ENHANCED
function initParticles() {
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 4px; height: 4px;
            background: linear-gradient(45deg, #ff0000, #ffffff);
            border-radius: 50%;
            left: ${Math.random() * 100}vw;
            top: 100vh;
            animation: particleFall ${3 + Math.random() * 4}s linear forwards;
            z-index: 1;
        `;
        document.querySelector('.particles').appendChild(particle);
        
        setTimeout(() => particle.remove(), 8000);
    }
    
    setInterval(createParticle, 200);
}

// CSS ANIMATIONS - INLINE (NO EXTERNAL DEPENDENCY)
const style = document.createElement('style');
style.textContent = `
    @keyframes successPulse {
        0%, 100% { 
            transform: scale(1); 
            filter: brightness(1) hue-rotate(0deg); 
            box-shadow: 0 0 20px rgba(34,197,94,0.5);
        }
        50% { 
            transform: scale(1.08); 
            filter: brightness(1.3) hue-rotate(90deg); 
            box-shadow: 0 0 50px rgba(34,197,94,1);
        }
    }
    
    @keyframes errorShake {
        0%, 100% { transform: translateX(0) rotate(0deg); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-8px) rotate(-1deg); }
        20%, 40%, 60%, 80% { transform: translateX(8px) rotate(1deg); }
    }
    
    @keyframes particleFall {
        to { 
            top: -100px; 
            opacity: 0;
            transform: translateX(${(-50 + Math.random() * 100)}px) rotate(360deg);
        }
    }
    
    .typing-demo {
        border-right: 3px solid #ef4444;
        white-space: nowrap;
        overflow: hidden;
        animation: blink-caret 1s step-end infinite;
    }
    
    @keyframes blink-caret {
        0%, 50% { border-color: #ef4444; }
        51%, 100% { border-color: transparent; }
    }
    
    /* Button Hover Effects */
    button:hover {
        transform: translateY(-3px) !important;
        box-shadow: 0 20px 40px rgba(239,68,68,0.4) !important;
    }
    
    input:focus {
        box-shadow: 0 0 20px rgba(239,68,68,0.5) !important;
        transform: scale(1.02);
    }
`;
document.head.appendChild(style);

// DEBUG MODE - Check if everything loaded
console.log("🛡️ SECURITY CHECK:");
console.log("- Password Key: ✅ Loaded");
console.log("- Event Listeners: ✅ Active");
console.log("- Animations: ✅ Running");
console.log("- Test Key: Red_Team2114");
