document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Add Floating Social Bar
    const floatingBarHTML = `
        <style>
        .cr-floating-social {
            position: fixed;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 10px;
            z-index: 9999;
        }

        .cr-floating-social a {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            width: 54px;
            height: 54px;
            border-radius: 27px 0 0 27px;
            color: #fff;
            text-decoration: none;
            font-size: 24px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            transform: translateX(27px); /* Hide half of the container off-screen */
            padding-left: 12px; /* Position the icon so it's partially cut off when hidden */
            box-shadow: -2px 4px 15px rgba(0, 0, 0, 0.2);
        }

        /* WhatsApp */
        .cr-floating-social a.whatsapp {
            background: linear-gradient(135deg, #25D366, #128C7E);
        }

        /* Telegram */
        .cr-floating-social a.telegram {
            background: linear-gradient(135deg, #0088cc, #00aaff);
        }

        .cr-floating-social a:hover {
            transform: translateX(0); /* Slide out to show the full icon */
        }
        
        .cr-floating-social a.whatsapp:hover {
            box-shadow: -4px 8px 25px rgba(37, 211, 102, 0.4);
        }
        .cr-floating-social a.telegram:hover {
            box-shadow: -4px 8px 25px rgba(0, 136, 204, 0.4);
        }

        /* Tooltips */
        .cr-floating-social a::after {
            content: attr(data-tooltip);
            position: absolute;
            right: 65px;
            background: rgba(0, 0, 0, 0.85);
            color: #fff;
            font-size: 13px;
            font-family: 'Outfit', 'Segoe UI', sans-serif;
            padding: 6px 12px;
            border-radius: 6px;
            white-space: nowrap;
            opacity: 0;
            visibility: hidden;
            transform: translateX(10px);
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
            pointer-events: none;
        }

        .cr-floating-social a:hover::after {
            opacity: 1;
            visibility: visible;
            transform: translateX(0);
        }
        
        @media (max-width: 768px) {
            .cr-floating-social a {
                width: 44px;
                height: 44px;
                font-size: 20px;
                transform: translateX(22px);
                padding-left: 10px;
            }
            .cr-floating-social a:hover {
                transform: translateX(0);
            }
            .cr-floating-social a::after {
                display: none;
            }
        }
        </style>
        <div class="cr-floating-social">
            <a href="https://wa.me/918072218602" target="_blank" rel="noopener" class="whatsapp" data-tooltip="WhatsApp Us">
                <i class="fab fa-whatsapp"></i>
            </a>
            <!-- <a href="https://t.me/+919944314416" target="_blank" rel="noopener" class="telegram" data-tooltip="Join Telegram">
                <i class="fab fa-telegram-plane"></i>
            </a> -->
        </div>
    `;
    
    document.body.insertAdjacentHTML("beforeend", floatingBarHTML);
});
