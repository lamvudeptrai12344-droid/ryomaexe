
/* =================================
   RYOMAEXE - JAVASCRIPT
================================= */

// 1. HIỆU ỨNG XUẤT HIỆN KHI CUỘN TRANG

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

cards.forEach((card) => {
    observer.observe(card);
});


// 2. HIỆU ỨNG CUỘN TRANG MƯỢT MÀNG

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        const targetId = link.getAttribute("href");

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 3. CẬP NHẬT NĂM TỰ ĐỘNG

const yearElement = document.querySelector("footer p");

if (yearElement) {
    yearElement.textContent =
        `© ${new Date().getFullYear()} RYOMAEXE. All rights reserved.`;
}


// 4. TƯƠNG TÁC NÚT KHÁM PHÁ KIẾN THỨC

const exploreButton = document.querySelector(".hero-button");

if (exploreButton) {
    exploreButton.addEventListener("click", () => {
        console.log("Welcome to RYOMAEXE!");
    });
}


// 5. HIỆN THÔNG BÁO KHI TẢI TRANG

window.addEventListener("load", () => {
    console.log("RYOMAEXE website loaded successfully.");
});
