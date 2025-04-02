// Profile image modal functionality
const profileImg = document.querySelector('.profile-img');
const modal = document.createElement('div');
modal.className = 'profile-modal';
modal.innerHTML = `
    <div class="modal-content">
        <img src="" alt="Profile Image" class="modal-img">
        <span class="close-modal">&times;</span>
    </div>
`;
document.body.appendChild(modal);

profileImg.addEventListener('click', () => {
    const modalImg = modal.querySelector('.modal-img');
    modalImg.src = profileImg.src;
    modal.style.display = 'flex';
});

modal.querySelector('.close-modal').addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Add this CSS for the modal
const modalStyle = document.createElement('style');
modalStyle.textContent = `
    .profile-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.9);
        z-index: 1000;
        align-items: center;
        justify-content: center;
    }
    
    .modal-content {
        position: relative;
        max-width: 80%;
        max-height: 80vh;
        text-align: center;
    }
    
    .modal-img {
        max-width: 100%;
        max-height: 80vh;
        border-radius: 50%;
        border: 5px solid var(--primary-color);
        animation: zoomIn 0.3s ease-out;
    }
    
    .close-modal {
        position: absolute;
        top: -40px;
        right: -40px;
        color: white;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s;
    }
    
    .close-modal:hover {
        color: var(--primary-color);
    }
    
    @keyframes zoomIn {
        from { transform: scale(0.5); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
    }
    
    @media (max-width: 768px) {
        .modal-img {
            width: 90vw;
            height: 90vw;
        }
        
        .close-modal {
            top: -30px;
            right: 0;
            font-size: 30px;
        }
    }
`;
document.head.appendChild(modalStyle);

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        // Show loading state
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with actual form submission code)
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            
            // Reset form after 2 seconds
            setTimeout(() => {
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
}