// Функсияи гузариш байни саҳифаҳо
function navTo(pageId, element) {
    // 1. Пинҳон кардани ҳамаи саҳифаҳо
    const pages = document.querySelectorAll('.page');
    pages.forEach(p => {
        p.style.display = 'none';
        p.classList.remove('active');
    });

    // 2. Намоиши саҳифаи интихобшуда
    const targetPage = document.getElementById(pageId);
    targetPage.style.display = 'block';
    targetPage.classList.add('active');

    // 3. Тағири ҳолати тугмаҳои навигатсия
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
}

// Функсияи воридшавӣ
function handleAuth() {
    document.getElementById('auth-screen').style.display = 'none';
    document.getElementById('profile-content').style.display = 'block';
}
