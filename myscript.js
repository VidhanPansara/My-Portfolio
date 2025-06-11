// Mobile Menu Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');

    if (mobileMenuBtn && navLinks) {
        // Toggle menu when clicking the button
        mobileMenuBtn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent event from bubbling up
            navLinks.classList.toggle('active');
            
            // Toggle between bars and times icon
            const icon = mobileMenuBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when clicking on a link
        const navLinksItems = navLinks.getElementsByTagName('a');
        for (let link of navLinksItems) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        }
    }
});

// Profile Photo Modal Functionality
document.addEventListener('DOMContentLoaded', function() {
    const profileImg = document.querySelector('.profile-img');
    const profileModal = document.getElementById('profileModal');
    const closeModal = profileModal.querySelector('.close-modal');

    if (profileImg && profileModal && closeModal) {
        // Open modal when clicking on profile image
        profileImg.addEventListener('click', function() {
            profileModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });

        // Close modal when clicking the close button
        closeModal.addEventListener('click', function() {
            profileModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });

        // Close modal when clicking outside
        profileModal.addEventListener('click', function(e) {
            if (e.target === profileModal) {
                profileModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && profileModal.style.display === 'flex') {
                profileModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
    }
});

// Form Submission Handler
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    // Show loading state
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    // Get form data
    const formData = new FormData(this);
    
    // Send the form data
    fetch('https://formspree.io/f/xpwrwkba', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            // Show success message
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.backgroundColor = '#4CAF50';
            
            // Reset form
            this.reset();
        } else {
            throw new Error('Failed to send message');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        submitBtn.innerHTML = '<i class="fas fa-times"></i> Failed to Send';
        submitBtn.style.backgroundColor = '#f44336';
    })
    .finally(() => {
        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.disabled = false;
        }, 3000);
    });
});