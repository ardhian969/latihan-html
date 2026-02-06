// PAGE NAVIGATION
function nextPage(pageNumber) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById('page' + pageNumber).classList.add('active');
}

// LOVE BACKGROUND ANIMATION
const loveContainer = document.getElementById("love-container");

function createLove() {
    const love = document.createElement("div");
    love.classList.add("love");

    // bentuk love lebih soft
    love.innerHTML = "💙";

    love.style.left = Math.random() * 100 + "vw";
    love.style.fontSize = (14 + Math.random() * 22) + "px";
    love.style.animationDuration = (6 + Math.random() * 4) + "s";

    loveContainer.appendChild(love);

    setTimeout(() => {
        love.remove();
    }, 10000);
}

// jalan di semua halaman
setInterval(createLove, 600);
