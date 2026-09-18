document.addEventListener("DOMContentLoaded", function () {
    // ─────────────────────────────────────────────
    // Centralized Footer Loader
    // ─────────────────────────────────────────────
    /* CANONICAL_FOOTER_START */
    const canonicalFooterHTML = `<footer class="cr-footer">
  <div class="cr-footer__inner">

    <!-- TOP GRID -->
    <div class="cr-footer__grid">

      <!-- Column 1: Brand -->
      <div class="cr-footer__col">
        <h3>Code Regime</h3>
        <p class="cr-footer__desc">
          Code Regime Technologies is a leading software development company delivering innovative web,
          mobile, and
          enterprise solutions, as well as a ready-made clone script product. We help businesses grow with
          scalable
          technology, custom applications, and reliable digital transformation services.
        </p>
        <div class="cr-footer__social-icons">
          <a href="https://www.linkedin.com/company/coderegime/" target="_blank" rel="noopener" aria-label="LinkedIn">
            <img src="/images/linkedin.png" alt="LinkedIn Icon" width="24" height="24">
          </a>
          <a href="https://x.com/RegimeCode" target="_blank" rel="noopener" aria-label="Twitter / X">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://www.instagram.com/coderegimetechnologies/" target="_blank" rel="noopener"
            aria-label="Instagram">
            <img src="/images/instagram.png" alt="Instagram Icon" width="24" height="24">
          </a>
          <a href="https://www.facebook.com/Coderegimetech/" target="_blank" rel="noopener" aria-label="Facebook">
            <img src="/images/facebook.png" alt="Facebook Icon" width="24" height="24">
          </a>
          <a href="https://www.threads.net/@coderegimetechnologies" target="_blank" rel="noopener" aria-label="Threads">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.472 12.01v-.017c.03-3.579.879-6.43 2.525-8.482C5.845 1.205 8.6.024 12.18 0h.014c2.746.02 5.043.725 6.826 2.098 1.677 1.29 2.858 3.13 3.509 5.467l-2.04.569c-1.104-3.96-3.898-5.984-8.304-6.015-2.91.022-5.11.936-6.54 2.717C4.307 6.504 3.616 8.914 3.589 12c.027 3.086.718 5.496 2.057 7.164 1.43 1.781 3.631 2.695 6.54 2.717 2.623-.02 4.358-.631 5.8-2.045 1.647-1.613 1.618-3.593 1.09-4.798-.31-.71-.873-1.3-1.634-1.75-.192 1.352-.622 2.446-1.284 3.272-.886 1.102-2.14 1.704-3.73 1.79-1.202.065-2.361-.218-3.259-.801-1.063-.689-1.785-1.74-1.752-2.964-.065-1.19.408-2.285 1.33-3.082.88-.76 2.119-1.207 3.583-1.291a13.853 13.853 0 013.02.142c-.126-.742-.375-1.332-.74-1.8-.365-.468-.702-.84-1.685-.84-1.201 0-2.07.24-2.595.717-.35.318-.537.727-.612 1.157l-1.968-.35c.186-1.018.714-1.86 1.517-2.528C8.976 5.073 10.205 4.81 11.618 4.81c.6 0 1.118.058 1.621.18.914.22 1.629.544 2.157 1.008.914.805 1.405 1.868 1.405 3.177 0 .5-.043.998-.129 1.487.85.513 1.511 1.201 1.9 2.016.543 1.14.465 2.715-.263 4.13-1.094 2.132-3.344 3.174-6.895 3.194z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Column 2: Useful Links -->
      <div class="cr-footer__col">
        <h3>Useful Links</h3>
        <ul class="cr-footer__list">
          <li><a href="/about-us/">About Us</a></li>
          <li><a href="/Portfolio/">Portfolio</a></li>
          <li><a href="/contact-us/">Contact Us</a></li>
        </ul>
      </div>

      <!-- Column 3: Services -->
      <div class="cr-footer__col">
        <h3>Services</h3>
        <ul class="cr-footer__list">
          <li><a href="/blockchain-development-services/">Blockchain Development</a></li>
          <li><a href="/mobile-app-development/">Mobile App Development</a></li>
          <li><a href="/ios-app-development/">iOS App Development</a></li>
          <li><a href="/flutter-app-development/">Flutter Development</a></li>
          <li><a href="/android-app-development/">Android App Development</a></li>
          <li><a href="/web-app-development/">Web App Development</a></li>
          <li><a href="/enterprise-app-development/">Enterprise App Development</a></li>
        </ul>
      </div>

      <!-- Column 4: Products -->
      <div class="cr-footer__col">
        <h3>Products</h3>
        <ul class="cr-footer__list">
          <li><a href="/uber-clone/">CabRegime - Uber Clone</a></li>
          <li><a href="/ubereats-clone/">FoodRegime - Ubereats clone</a></li>
          <li><a href="/uber-for-handyman-app/">HandymanRegime - Uber for Handman</a></li>
          <li><a href="/fintech-app-development/">Fintech App</a></li>
          <li><a href="/flight-booking-app/">Flight Booking App</a></li>
        </ul>
      </div>

      <!-- Column 5: Legal -->
      <div class="cr-footer__col">
        <h3>Legal</h3>
        <ul class="cr-footer__list">
          <li><a href="/privacy-policy/">Privacy Policy</a></li>
          <li><a href="/refund-policy/">Refund Policy</a></li>
          <li><a href="/security-policy/">Support</a></li>
          <li><a href="/disclaimer/">Disclaimer</a></li>
        </ul>
      </div>

      <!-- Column 6: Contact Us -->
      <div class="cr-footer__col">
        <h3>Get in touch</h3>
        <ul class="cr-footer__contact-list">
          <li>
            <div class="cr-footer__contact-icon">
              <i class="fab fa-whatsapp"></i>
            </div>
            <div class="cr-footer__contact-text">
              <strong>WhatsApp</strong>
              <a href="https://wa.me/918072218602">+91 80722 18602</a>
            </div>
          </li>
          <li>
            <div class="cr-footer__contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
            </div>
            <div class="cr-footer__contact-text">
              <strong>Phone</strong>
              <a href="tel:+918072218602">+91 80722 18602</a>
            </div>
          </li>
          <li>
            <div class="cr-footer__contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
            </div>
            <div class="cr-footer__contact-text">
              <strong>Address</strong>
              74, 75 HDFC Bank Building,<br>
              2nd floor, Kamarajar Salai,<br>
              Madurai, Tamil Nadu – 625009
            </div>
          </li>
          <li>
            <div class="cr-footer__contact-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div class="cr-footer__contact-text">
              <strong>Business Enquiry</strong>
              <a href="mailto:sales@coderegimetechnologies.com" target="_blank"
                aria-label="sales@coderegimetechnologies.com"
                rel="noopener"><span>sales@coderegimetechnologies.com</span>
              </a>
            </div>
          </li>
        </ul>
      </div>

    </div><!-- /grid -->

    <hr class="cr-footer__divider">

    <!-- BOTTOM ROW -->
    <div class="cr-footer__bottom">
      <div class="cr-footer__disclaimer">
        <p class="cr-footer__disclaimer-title">Disclaimer</p>
        <p>The terms Uber, UberEats, Grubhub, DoorDash, and Foodora are used strictly for marketing and
          illustrative
          purposes. Code Regime Technologies is in no way affiliated with, endorsed by, or connected to
          any of the
          listed companies. We entirely own the custom source code and design of our products, and we
          do not use any
          of their proprietary intellectual property.</p>
      </div>
    </div><!-- /bottom -->
    <hr class="cr-footer__divider">
    <p class="cr-footer__copyright">
      © Copyright <span id="year"></span>, All Rights Reserved by Code Regime Technologies.
    </p>
  </div><!-- /inner -->
</footer>`;
    /* CANONICAL_FOOTER_END */

    const siteFooterPlaceholder = document.getElementById("site-footer") || 
                                  document.getElementById("cr-footer-placeholder") || 
                                  document.querySelector("site-footer");

    if (siteFooterPlaceholder) {
        siteFooterPlaceholder.outerHTML = canonicalFooterHTML;
    }

    // Inject SweetAlert2 dynamically
    if (typeof Swal === 'undefined') {
        const swalScript = document.createElement('script');
        swalScript.src = 'https://cdn.jsdelivr.net/npm/sweetalert2@11';
        document.head.appendChild(swalScript);
    }

    // Update copyright year
    document.querySelectorAll("#year, .footer-year").forEach(span => {
        span.textContent = new Date().getFullYear();
    });

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
                  <p><span class="icon whatsapp"><i class="fab fa-whatsapp"></i></span> <a href="https://wa.me/918072218602" target="_blank" rel="noopener">+91 8072218602</a></p>
                  <p><span class="icon email"><i class="fas fa-envelope"></i></span> <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@coderegimetechnologies.com" target="_blank" rel="noopener"><span style="white-space: nowrap; font-size: 14px;">sales@coderegimetechnologies.com</span></a></p>
                  <p><span class="icon mobile"><i class="fas fa-mobile-alt"></i></span> <a href="tel:+918072218602" target="_blank" rel="noopener">+91 8072218602</a></p>
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
                        
                        if (window.bootstrap) {
                            const modalEl = document.getElementById("contactPopup");
                            if (modalEl) {
                                const modal = bootstrap.Modal.getInstance(modalEl);
                                if (modal) modal.hide();
                            }
                        }
                        contactPopupForm.reset();
                        window.location.href = '/thank-you/';
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
