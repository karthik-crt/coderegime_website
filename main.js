// Load Header and Footer Dynamically
document.addEventListener("DOMContentLoaded", () => {
    // Load Header
    fetch("header.html")
        .then(res => res.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);

            // Mobile Menu Toggle
            const mobileToggle = document.querySelector(".mobile-toggle");
            const navMenu = document.querySelector(".nav-menu");

            mobileToggle?.addEventListener("click", () => {
                mobileToggle.classList.toggle("active");
                navMenu.classList.toggle("active");
            });

            // Dropdown toggle for mobile
            document.querySelectorAll(".nav-item").forEach(item => {
                item.addEventListener("click", () => {
                    if (window.innerWidth <= 768) {
                        item.classList.toggle("dropdown-open");
                    }
                });
            });
        });

    // Load Footer
    fetch("footer.html")
        .then(res => res.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
});
