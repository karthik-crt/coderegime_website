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
            gap: 12px;
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
            font-size: 26px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            padding-left: 14px; /* Centers the icon in the 54px width */
            box-shadow: -2px 4px 15px rgba(0, 0, 0, 0.15);
            overflow: hidden;
            white-space: nowrap;
        }
        
        .cr-floating-social a i {
            min-width: 26px; /* Ensure icon doesn't shrink */
            text-align: center;
        }

        .cr-floating-social a .social-text {
            font-family: 'Outfit', 'Segoe UI', sans-serif;
            font-size: 16px;
            font-weight: 600;
            margin-left: 12px;
            opacity: 0;
            transform: translateX(10px);
            transition: all 0.3s ease;
        }

        /* WhatsApp */
        .cr-floating-social a.whatsapp {
            background: linear-gradient(135deg, #25D366, #128C7E);
        }

        /* Telegram */
        .cr-floating-social a.telegram {
            background: linear-gradient(135deg, #0088cc, #00aaff);
        }

        /* Hover Expansion */
        .cr-floating-social a:hover {
            width: 155px; /* Expands to show text */
        }
        
        .cr-floating-social a.telegram:hover {
            width: 150px;
        }

        .cr-floating-social a:hover .social-text {
            opacity: 1;
            transform: translateX(0);
        }
        
        .cr-floating-social a.whatsapp:hover {
            box-shadow: -4px 8px 25px rgba(37, 211, 102, 0.4);
        }
        .cr-floating-social a.telegram:hover {
            box-shadow: -4px 8px 25px rgba(0, 136, 204, 0.4);
        }

        @media (max-width: 768px) {
            .cr-floating-social a {
                width: 46px;
                height: 46px;
                font-size: 22px;
                padding-left: 12px;
            }
            .cr-floating-social a i {
                min-width: 22px;
            }
            .cr-floating-social a:hover {
                width: 140px;
            }
            .cr-floating-social a.telegram:hover {
                width: 135px;
            }
        }
        </style>
        <div class="cr-floating-social">
            <a href="https://wa.me/918072218602" target="_blank" rel="noopener" class="whatsapp">
                <i class="fab fa-whatsapp"></i>
                <span class="social-text">WhatsApp</span>
            </a>
            <!-- <a href="https://t.me/+919944314416" target="_blank" rel="noopener" class="telegram">
                <i class="fab fa-telegram-plane"></i>
                <span class="social-text">Telegram</span>
            </a> -->
        </div>
    `;
    
    document.body.insertAdjacentHTML("beforeend", floatingBarHTML);
});
