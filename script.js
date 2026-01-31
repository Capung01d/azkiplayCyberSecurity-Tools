// =====================================================
// MAZKIPLAYCYBERSECURITY v2.1 - FULL API PRODUCTION
// Sego Megono Cyber Security - Red Team Suite
// =====================================================

// ⚠️ GANTI API KEYS INI DENGAN KEY KAMU!
const API_CONFIG = {
    ABSTRACT_PHONE: '23ed5b5d4b6f407495cea0dce6aa140a&phone=14152007986',  // Dari abstractapi.com
    ABSTRACT_EMAIL: 'fa6b55dfb18f4e5fbbea2aabd8bcb6d5&email=holqinaleavodkabilla@gmail.com',  // Dari abstractapi.com  
    OPENAI_KEY: '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',         // Dari openai.com
    team: 'Sego Megono Cyber Security'
};

// AUTH CHECK
if (localStorage.getItem('mazkiplayAuth') !== 'granted') {
    window.location.href = 'index.html';
}

// LAUNCHER UTAMA
window.launchTool = async function(tool) {
    console.log(`🚀 [${new Date().toLocaleString('id-ID')}] ${tool.toUpperCase()} LAUNCHED`);
    
    const modals = {
        phone: phoneIntelModal,
        email: emailReputationModal,
        social: socialOSINTModal,
        domain: domainReconModal,
        ai: aiPentestModal
    };
    
    if (modals[tool]) {
        modals[tool]();
    } else {
        showComingSoon(tool);
    }
};

// MODAL PHONE INTEL (FULL API)
function phoneIntelModal() {
    const modal = `
    <div id="phoneModal" class="modal-overlay">
        <div class="modal-container blue-modal">
            <div class="modal-header">
                <h2><i class="fas fa-mobile-alt"></i> Phone Intel +62</h2>
                <button onclick="closeModal('phoneModal')">×</button>
            </div>
            <div class="modal-body">
                <input id="phoneNumber" placeholder="+6281234567890" class="input-field">
                <button onclick="scanPhoneNumber()" class="btn-primary full-width">
                    <i class="fas fa-search"></i> SCAN NOW
                </button>
                <div id="phoneResult" class="result-box hidden"></div>
            </div>
        </div>
    </div>`;
    
    document.body.insertAdjacentHTML('beforeend', modal);
}

// API CALL PHONE - REAL ABSTRACTAPI
window.scanPhoneNumber = async function() {
    const phone = document.getElementById('phoneNumber').value;
    if (!phone || !phone.startsWith('+62')) {
        alert('❌ Format: +62xxxxxxxxxx');
        return;
    }
    
    const resultDiv = document.getElementById('phoneResult');
    resultDiv.innerHTML = '<div class="loading">🔄 Scanning...</div>';
    resultDiv.classList.remove('hidden');
    
    try {
        // GANTI DENGAN REAL API CALL
        const response = await fetch(`https://phonevalidation.abstractapi.com/v1/?api_key=${API_CONFIG.ABSTRACT_PHONE}&phone=${phone}`);
        const data = await response.json();
        
        resultDiv.innerHTML = `
            <h4>✅ HASIL SCAN:</h4>
            <pre>${JSON.stringify(data, null, 2)}</pre>
            <button onclick="downloadPDF('phone', this.parentElement)" class="btn-success mt-4">
                📥 Download PDF Report
            </button>
        `;
        
        console.table(data);
    } catch (error) {
        resultDiv.innerHTML = `<div class="error">❌ ${error.message}</div>`;
    }
};

// EMAIL REPUTATION MODAL
function emailReputationModal() {
    const modal = `
    <div id="emailModal" class="modal-overlay">
        <div class="modal-container cyan-modal">
            <div class="modal-header">
                <h2><i class="fas fa-envelope"></i> Email Reputation</h2>
                <button onclick="closeModal('emailModal')">×</button>
            </div>
            <div class="modal-body">
                <input id="emailInput" placeholder="target@example.com" class="input-field">
                <button onclick="checkEmailReputation()" class="btn-primary full-width">
                    <i class="fas fa-chart-line"></i> CHECK SCORE
                </button>
                <div id="emailResult" class="result-box hidden"></div>
            </div>
        </div>
    </div>`;
    document.body.insertAdjacentHTML('beforeend', modal);
}

// UTILITY FUNCTIONS
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.remove();
}

function showComingSoon(tool) {
    alert(`🔥 ${tool.toUpperCase()} coming soon!\n\nConsole log recorded:\n${new Date().toLocaleString('id-ID')}`);
}

function downloadPDF(tool, resultElement) {
    const data = {
        tool: tool,
        timestamp: new Date().toLocaleString('id-ID'),
        team: API_CONFIG.team,
        result: resultElement.innerText
    };
    
    // Simple PDF generation (real jsPDF bisa ditambah)
    const pdfContent = `MazkiplayCyberSecurity Report\n\n${JSON.stringify(data, null, 2)}`;
    const blob = new Blob([pdfContent], {type: 'text/plain'});
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mazkiplay_${tool}_${Date.now()}.txt`;
    a.click();
}

// EVENT LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    console.log('✅ Mazkiplay v2.1 LIVE - All systems ready');
    console.log('🔑 API Config:', API_CONFIG);
});
