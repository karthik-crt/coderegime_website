(function() {
    // --- Create and Inject Modal HTML ---
    const modalHTML = `
    <div class="contact-modal-overlay" id="demoModalOverlay">
        <div class="contact-modal-container">
            <button class="contact-modal-close" id="closeDemoModal">
                <i class="fas fa-times"></i>
            </button>

            <!-- Sidebar (Desktop only) -->
            <div class="contact-modal-sidebar">
                <div class="sidebar-content">
                    <h2>Let's build <br>something <br><span>amazing</span></h2>
                    <p style="color: white; margin-top: 20px;">Get a personalized walk-through of our solution and see how we can help your business grow.</p>
                </div>

                <div class="sidebar-info">
                    <div class="info-item">
                        <div class="icon"><i class="fab fa-whatsapp"></i></div>
                        <div class="text">
                            <h4>WhatsApp</h4>
                            <p style="color: white;">+91 80722 18602</p>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="icon"><i class="fas fa-envelope"></i></div>
                        <div class="text">
                            <h4>Email Us</h4>
                            <p style="color: white;">sales@coderegimetechnologies.com</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Form Area -->
            <div class="contact-modal-form-wrap">
                <div class="form-header">
                    <h3>Request a Free Demo</h3>
                    <p>Fill in the form below and we'll reach out within 24 hours.</p>
                </div>

                <div id="modal-form-body">
                    <div class="modal-form-grid">
                        <div class="modal-form-group">
                            <label>First Name <span>*</span></label>
                            <input type="text" id="modal-fname" placeholder="John" required>
                        </div>
                        <div class="modal-form-group">
                            <label>Last Name <span>*</span></label>
                            <input type="text" id="modal-lname" placeholder="Doe" required>
                        </div>
                        <div class="modal-form-group">
                            <label>Email Address <span>*</span></label>
                            <input type="email" id="modal-email" placeholder="john@company.com" required>
                        </div>
                        <div class="modal-form-group">
                            <label>Phone Number</label>
                            <input type="tel" id="modal-phone" placeholder="+1 (555) 000-0000">
                        </div>
                        <div class="modal-form-group">
                            <label>Budget Range</label>
                            <select id="modal-budget">
                                <option value="" disabled selected>Select budget</option>
                                <option>Under $5,000</option>
                                <option>$5,000 – $15,000</option>
                                <option>$15,000 – $50,000</option>
                                <option>$50,000 – $100,000</option>
                                <option>$100,000+</option>
                            </select>
                        </div>
                        <div class="modal-form-group">
                            <label>Product Required <span>*</span></label>
                            <select id="modal-service">
                                <option value="" disabled selected>Select a product</option>
                                <option>FoodRegime - UberEats clone</option>
                                <option>CabRegime - Uber Clone</option>
                                <option>HandymanRegime - Uber for Handyman</option>
                                <option>Insurance</option>
                                <option>Flight Booking</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div class="modal-form-group full-width">
                            <label>Project Details <span>*</span></label>
                            <textarea id="modal-message" placeholder="Tell us about your project — timeline, goals, tech stack preferences…"></textarea>
                        </div>

                        <div class="modal-form-group full-width" style="flex-direction: row; align-items: flex-start; gap: 10px;">
                            <input type="checkbox" id="modal-agree" style="width: 18px; height: 18px; cursor: pointer; margin-top: 3px;">
                            <label for="modal-agree" style="font-weight: 500; font-size: 0.8rem; line-height: 1.4; cursor: pointer;">
                                I agree to the <a href="javascript:void(0)" style="color: var(--modal-blue); text-decoration: none; font-weight: 700;">Privacy Policy</a> and <a href="javascript:void(0)" style="color: var(--modal-blue); text-decoration: none; font-weight: 700;">Terms of Service</a>.
                            </label>
                        </div>
                    </div>

                    <div class="modal-form-footer">
                        <button class="modal-submit-btn" id="modalSubmitBtn">
                            Send Request <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>

                <!-- Success Screen -->
                <div class="modal-success-screen" id="modalSuccessScreen">
                    <div class="success-icon-wrap">
                        <i class="fas fa-check-circle"></i>
                    </div>
                    <h3>Demo Request Sent!</h3>
                    <p>Thank you for reaching out. Our team will contact you shortly to schedule your personalized demo.</p>
                    <button class="modal-submit-btn" style="margin-top: 30px; width: auto; padding: 12px 30px;" onclick="document.getElementById('demoModalOverlay').classList.remove('active')">
                        Got it
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    // --- Modal Logic ---
    const overlay = document.getElementById('demoModalOverlay');
    const closeBtn = document.getElementById('closeDemoModal');
    const demoBtns = document.querySelectorAll('a[href="#demo"]');
    const submitBtn = document.getElementById('modalSubmitBtn');
    const formBody = document.getElementById('modal-form-body');
    const successScreen = document.getElementById('modalSuccessScreen');

    const openModal = (e) => {
        if(e) e.preventDefault();
        
        // Reset modal state
        const modalContainer = document.querySelector('.contact-modal-container');
        modalContainer.classList.remove('success-active');
        formBody.style.display = 'block';
        successScreen.style.display = 'none';
        
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    };

    demoBtns.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    closeBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', (e) => {
        if(e.target === overlay) closeModal();
    });

    // --- Form Handling ---
    const handleModalSubmit = () => {
        const fname = document.getElementById('modal-fname').value.trim();
        const lname = document.getElementById('modal-lname').value.trim();
        const email = document.getElementById('modal-email').value.trim();
        const phone = document.getElementById('modal-phone').value.trim();
        const budget = document.getElementById('modal-budget').value;
        const service = document.getElementById('modal-service').value;
        const message = document.getElementById('modal-message').value.trim();
        const agree = document.getElementById('modal-agree').checked;

        if (!fname || !email || !service || !message) {
            alert('Please fill in all required fields (*).');
            return;
        }

        if (!agree) {
            alert('Please agree to our Privacy Policy.');
            return;
        }

        const originalBtnHTML = submitBtn.innerHTML;
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Sending…';

        const templateParams = {
            fname,
            lname,
            email,
            user_email: email,
            phone: phone || '—',
            company: 'none',        // ← removed field, hardcoded default
            budget: budget || '—',
            service: service,
            message
        };

        const SERVICE_ID = 'service_cht9xji';         
        const INTERNAL_TEMPLATE_ID = 'template_uqoo9yi';  
        const THANKYOU_TEMPLATE_ID = 'template_qv65elf';  

        // Check if emailjs is available
        if (typeof emailjs === 'undefined') {
            alert('Email service not initialized. Please try again later.');
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnHTML;
            return;
        }

        emailjs.send(SERVICE_ID, INTERNAL_TEMPLATE_ID, templateParams)
            .then(() => {
                return emailjs.send(SERVICE_ID, THANKYOU_TEMPLATE_ID, templateParams);
            })
            .then(() => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHTML;
                
                // Switch to success state with square box
                const modalContainer = document.querySelector('.contact-modal-container');
                modalContainer.classList.add('success-active');
                
                formBody.style.display = 'none';
                successScreen.style.display = 'flex';
            })
            .catch(err => {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnHTML;
                console.error('EmailJS Error:', err);
                alert('Failed to send message. Please try again.\n\nError: ' + (err.text || err));
            });
    };

    submitBtn.addEventListener('click', handleModalSubmit);

})();