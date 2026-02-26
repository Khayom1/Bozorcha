// 1. ИДОРАКУНИИ САҲИФАҲО (NAVIGATION)
function navTo(pageId, element) {
    // Пинҳон кардани ҳамаи саҳифаҳо
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Фаъол кардани саҳифаи интихобшуда
    document.getElementById(pageId).classList.add('active');

    // Навсозии намуди тугмаҳои навигатсия
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
}

// 2. СИСТЕМАИ АВТОРИЗАТСИЯ (LOGIC)
function handleAuth() {
    const phone = document.getElementById('user-phone').value;
    
    if (phone.length >= 9) {
        // Симулятсияи воридшавӣ
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('profile-content').style.display = 'block';
        
        // Захира кардани ҳолати вуруд дар браузер
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userPhone', phone);
    } else {
        alert("Лутфан рақами телефонро дуруст ворид кунед (9 рақам).");
    }
}

// 3. ГУЗАРИШ БАЙНИ ХАРИДОР ВА ФУРӮШАНДА (ROLE SWITCHER)
let currentRole = 'buyer';

function toggleRole() {
    const knob = document.getElementById('role-knob');
    const buyerDash = document.getElementById('buyer-dashboard');
    const sellerDash = document.getElementById('seller-dashboard');

    if (currentRole === 'buyer') {
        knob.style.left = '108px'; // Ҳаракат ба тарафи рост
        buyerDash.style.display = 'none';
        sellerDash.style.display = 'block';
        currentRole = 'seller';
    } else {
        knob.style.left = '3px'; // Ҳаракат ба тарафи чап
        buyerDash.style.display = 'block';
        sellerDash.style.display = 'none';
        currentRole = 'buyer';
    }
}

// 4. САНҶИШИ ҲОЛАТҲО ҲАНГОМИ БОРГУЗОРИИ САЙТ
window.onload = () => {
    if (localStorage.getItem('isLoggedIn') === 'true') {
        if (document.getElementById('auth-screen')) {
            document.getElementById('auth-screen').style.display = 'none';
            document.getElementById('profile-content').style.display = 'block';
        }
    }
};
