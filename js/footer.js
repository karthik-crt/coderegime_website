document.addEventListener("DOMContentLoaded", function () {
    // Inject SweetAlert2 dynamically
    if (typeof Swal === 'undefined') {
        const swalScript = document.createElement('script');
        swalScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
        document.head.appendChild(swalScript);
    }

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
            align-items: flex-end;
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

        /* Mail */
        .cr-floating-social a.mail {
            background: linear-gradient(135deg, #FF416C, #FF4B2B);
        }

        /* Calendly */
        .cr-floating-social a.calendly {
            background: linear-gradient(135deg, #006BFF, #0044CC);
        }

        /* Hover Expansion */
        .cr-floating-social a:hover {
            width: 155px; /* Default fallback */
        }
        
        .cr-floating-social a.whatsapp:hover {
            width: 160px;
        }

        .cr-floating-social a.telegram:hover {
            width: 150px;
        }

        .cr-floating-social a.mail:hover {
            width: 110px;
        }

        .cr-floating-social a.calendly:hover {
            width: 145px;
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
        .cr-floating-social a.mail:hover {
            box-shadow: -4px 8px 25px rgba(255, 75, 43, 0.4);
        }
        .cr-floating-social a.calendly:hover {
            box-shadow: -4px 8px 25px rgba(0, 107, 255, 0.4);
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
            .cr-floating-social a.whatsapp:hover {
                width: 140px;
            }
            .cr-floating-social a.telegram:hover {
                width: 135px;
            }
            .cr-floating-social a.mail:hover {
                width: 105px;
            }
            .cr-floating-social a.calendly:hover {
                width: 130px;
            }
        }
        </style>
        <div class="cr-floating-social">
            <a href="https://wa.me/918072218602" target="_blank" rel="noopener" class="whatsapp">
                <i class="fab fa-whatsapp"></i>
                <span class="social-text">WhatsApp</span>
            </a>
            <a href="https://t.me/+919944314416" target="_blank" rel="noopener" class="telegram">
                <i class="fab fa-telegram-plane"></i>
                <span class="social-text">Telegram</span>
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@coderegimetechnologies.com" target="_blank" rel="noopener" class="mail">
                <i class="fas fa-envelope"></i>
                <span class="social-text">Mail</span>
            </a>
            <a href="https://calendly.com/" target="_blank" rel="noopener" class="calendly">
                <i class="far fa-calendar-alt"></i>
                <span class="social-text">Calendly</span>
            </a>
        </div>
    `;
    
    document.body.insertAdjacentHTML("beforeend", floatingBarHTML);

    // Auto-show Contact Modal
    (function initContactModal() {
        if (typeof window.bootstrap === 'undefined') return;

        const contactModalHTML = `
    <div class="modal fade" id="contactPopup" tabindex="-1" aria-labelledby="contactPopupLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="left-side col-lg-5 col-md-12 col-sm-12">
                <div class="contact-info">
                  <p><span class="icon whatsapp"><i class="fab fa-whatsapp"></i></span> +91 8072218602</p>
                  <p><span class="icon email"><i class="fas fa-envelope"></i></span> <span style="white-space: nowrap; font-size: 14px;">sales@coderegimetechnologies.com</span></p>
                  <p><span class="icon mobile"><i class="fas fa-mobile-alt"></i></span> +91 9994212402</p>
                </div>
              </div>
              <div class="right-side col-lg-7 col-md-12 col-sm-12">
                <h5 class="modal-title" id="contactPopupLabel">Get A Free Project Consultation</h5>
                <form>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <label for="name" class="form-label">Name</label>
                      <input type="text" class="form-control" id="name" placeholder="Your Name">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <label for="email" class="form-label">Email</label>
                      <input type="email" class="form-control" id="email" placeholder="Your Email">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <label for="country" class="form-label">Country</label>
                      <input type="text" class="form-control" id="country" placeholder="Your Country">
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <label for="mobile" class="form-label">Mobile</label>
                      <input type="text" class="form-control" id="mobile" placeholder="Your Mobile">
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <label for="service" class="form-label">Select Product/Service</label>
                      <select class="form-select" id="service">
                        <option value="">Select...</option>
                        <option value="service1">Mobile App Services</option>
                        <option value="service2">Web App Services</option>
                        <option value="service3">Blockchain Services</option>
                        <option value="service4">Clone Scrpits</option>
                      </select>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12">
                      <label for="requirements" class="form-label">Write your requirements in detail</label>
                      <textarea class="form-control" id="requirements" rows="3"></textarea>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
    
    // Only inject if it doesn't already exist on the page (e.g. from header.html on some pages)
    if (!document.getElementById("contactPopup")) {
        document.body.insertAdjacentHTML("beforeend", contactModalHTML);
    }

    // Auto-show Contact Modal after 6.5 seconds (without sessionStorage check for now for testing)
    setTimeout(() => {
        const contactPopup = document.getElementById("contactPopup");
        console.log("Checking for contactPopup in footer.js:", contactPopup);
        
        if (contactPopup) {
            if (typeof window.bootstrap !== 'undefined') {
                const modal = new bootstrap.Modal(contactPopup);
                modal.show();
            }
        }
    }, 6500);

    // Form submission logic for the modal
    const contactPopupForm = document.querySelector("#contactPopup form");
    if (contactPopupForm) {
        contactPopupForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const fname = contactPopupForm.querySelector("#name") ? contactPopupForm.querySelector("#name").value.trim() : '';
            const email = contactPopupForm.querySelector("#email") ? contactPopupForm.querySelector("#email").value.trim() : '';
            const country = contactPopupForm.querySelector("#country") ? contactPopupForm.querySelector("#country").value.trim() : '';
            const phone = contactPopupForm.querySelector("#mobile") ? contactPopupForm.querySelector("#mobile").value.trim() : '';
            
            const serviceEl = contactPopupForm.querySelector("#service");
            const service = serviceEl ? serviceEl.options[serviceEl.selectedIndex].text : '';
            
            const requirements = contactPopupForm.querySelector("#requirements");
            const message = requirements ? requirements.value.trim() : '';

            if (!fname || !email || !message) {
                Swal.fire({
                    icon: 'warning',
                    title: 'Missing Fields',
                    text: 'Please fill in Name, Email, and Requirements.'
                });
                return;
            }

            const submitBtn = contactPopupForm.querySelector('button[type="submit"]');
            const originalBtnHTML = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = 'Sending...';

            const templateParams = {
                fname: fname,
                lname: ' ', // Keep empty or space to avoid spam triggers in subject lines
                email: email,
                user_email: email,
                phone: phone || 'Not Specified',
                company: country ? 'Country: ' + country : 'Not Specified',
                budget: 'Not Specified',
                service: service || 'Not Specified',
                message: message
            };

            function sendEmail() {
                emailjs.init('mtyXCsYdD3ElJGNum');
                const SERVICE_ID = 'service_cht9xji';
                const INTERNAL_TEMPLATE_ID = 'template_uqoo9yi';
                const THANKYOU_TEMPLATE_ID = 'template_qv65elf';
                
                emailjs.send(SERVICE_ID, INTERNAL_TEMPLATE_ID, templateParams)
                    .then(() => {
                        return emailjs.send(SERVICE_ID, THANKYOU_TEMPLATE_ID, templateParams);
                    })
                    .then(() => {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalBtnHTML;
                        Swal.fire({
                            icon: 'success',
                            title: 'Success!',
                            text: 'Thank you! Your message has been sent successfully.'
                        });
                        
                        if (window.bootstrap) {
                            const modalEl = document.getElementById("contactPopup");
                            const modal = bootstrap.Modal.getInstance(modalEl);
                            if (modal) modal.hide();
                        }
                        
                        contactPopupForm.reset();
                    })
                    .catch(err => {
                        submitBtn.disabled = false;
                        submitBtn.innerHTML = originalBtnHTML;
                        console.error('EmailJS Error:', err);
                        Swal.fire({
                            icon: 'error',
                            title: 'Error!',
                            text: 'Failed to send message. Please try again.\n\nError: ' + (err.text || err)
                        });
                    });
            }

            if (typeof emailjs !== 'undefined') {
                sendEmail();
            } else {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
                script.onload = sendEmail;
                document.head.appendChild(script);
            }
        });
    }
    })();

    // ─────────────────────────────────────────────
    // Custom Robot Tawk.to Chat Button
    // ─────────────────────────────────────────────

    const tawkButtonHTML = `
        <style>
            #custom-tawk-button {
                position: fixed;
                right: 20px;
                bottom: 20px;
                width: 90px;
                height: 90px;
                padding: 0;
                border: none;
                background: transparent;
                cursor: pointer;
                z-index: 999999;
                animation: tawk-float 3s ease-in-out infinite;
            }

            #custom-tawk-button img {
                width: 100%;
                height: 100%;
                object-fit: contain;
                display: block;
                transition: transform 0.25s ease;
            }

            #custom-tawk-button:hover img {
                transform: scale(1.1);
            }

            #custom-tawk-button:active img {
                transform: scale(0.95);
            }

            @keyframes tawk-float {
                0%, 100% {
                    transform: translateY(0);
                }

                50% {
                    transform: translateY(-6px);
                }
            }

            @media (max-width: 768px) {
                #custom-tawk-button {
                    width: 70px;
                    height: 70px;
                    right: 15px;
                    bottom: 15px;
                }
            }
        </style>

        <button
            id="custom-tawk-button"
            type="button"
            aria-label="Open Chat"
        >
            <img
                src="/images/robot.webp"
                alt="Chat with us"
            >
        </button>
    `;

    document.body.insertAdjacentHTML("beforeend", tawkButtonHTML);

    const button = document.getElementById("custom-tawk-button");

    // Hide Tawk default launcher when Tawk is ready
    function hideTawkWidget() {
        if (
            window.Tawk_API &&
            typeof window.Tawk_API.hideWidget === "function"
        ) {
            window.Tawk_API.hideWidget();
        }
    }

    // Tawk API
    window.Tawk_API = window.Tawk_API || {};

    window.Tawk_API.onLoad = function () {
        hideTawkWidget();
    };

    // Custom robot click
    button.addEventListener("click", function () {
        if (
            window.Tawk_API &&
            typeof window.Tawk_API.toggle === "function"
        ) {
            window.Tawk_API.toggle();
        } else {
            console.log("Tawk.to is not loaded yet.");
        }
    });

});
