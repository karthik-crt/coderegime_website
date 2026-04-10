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

// Toggle Pricing Table Visibility
const togglePricingButton = document.getElementById("togglePricing");
const pricingTable = document.getElementById("pricingTable");

if (togglePricingButton && pricingTable) {
    togglePricingButton.addEventListener("click", () => {
        pricingTable.classList.toggle("hidden");
        const icon = togglePricingButton.querySelector("i");
        const span = togglePricingButton.querySelector("span");

        if (pricingTable.classList.contains("hidden")) {
            span.textContent = "View Full Pricing Details";
            icon.classList.replace("fa-chevron-up", "fa-chevron-down");
        } else {
            span.textContent = "Hide Pricing Details";
            icon.classList.replace("fa-chevron-down", "fa-chevron-up");
        }
    });
}
