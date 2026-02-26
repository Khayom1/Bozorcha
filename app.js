// Маълумоти маҳсулот
const products = [
    { id: 1, name: "Свитери кӯдакона", price: 50, category: "Либосҳо" },
    { id: 2, name: "Шими ҷинс", price: 120, category: "Либосҳо" },
    { id: 3, name: "Кепкаи LA", price: 45, category: "Либосҳо" }
];

let cartCount = 0;

// Функсияи илова ба сабад
function addToCart(name) {
    cartCount++;
    document.querySelector('.nav-item:nth-child(3)').innerHTML = `🛒<br>Сабад (${cartCount})`;
    alert(name + " ба сабад илова шуд!");
}

// Функсияи ҷустуҷӯ
document.querySelector('.search-container input').addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.product-title').innerText.toLowerCase();
        if(title.includes(term)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});
