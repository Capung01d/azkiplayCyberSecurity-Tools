// Password Protection
const RED_TEAM_KEY = "Red_Team2114";

function authenticate() {
    const inputKey = document.getElementById('accessKey').value;
    const welcomeText = document.querySelector('.welcome-text');
    
    if (inputKey === RED_TEAM_KEY) {
        // Success Animation
        document.body.classList.add('success-auth');
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1500);
    } else {
        // Error Animation
        document.body.classList.add('error-auth');
        setTimeout(() => {
            document.body.classList.remove('error-auth');
            document.getElementById('accessKey').value = '';
            document.getElementById('accessKey').focus();
        }, 1000);
    }
}

// Enter Key Support
document.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        authenticate();
    }
});

// Typing Animation
const typed = new Typed('.typing-demo', {
    strings: [
        'Selamat Datang di Tools Red Team MazkiplayCyberSecurity...',
        'Platform Pentesting Terlengkap untuk Red Team...',
        'Authorized Security Assessment Only...'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    loop: true
});

// Particles Animation
function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
    particle.style.animationDelay = Math.random() * 2 + 's';
    document.querySelector('.particles').appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, 7000);
}

setInterval(createParticle, 300);

// Success/Error Animations
const style = document.createElement('style');
style.textContent = `
    body.success-auth .container { animation: successPulse 1.5s ease-in-out; }
    body.error-auth .container { animation: errorShake 0.5s ease-in-out; }
    @keyframes successPulse {
        0%, 100% { transform: scale(1); filter: hue-rotate(0deg) brightness(1); }
        50% { transform: scale(1.05); filter: hue-rotate(0deg) brightness(1.2); }
    }
    @keyframes errorShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);
