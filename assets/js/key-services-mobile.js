/* ========================================
   KEY SERVICES MOBILE TOGGLE LOGIC
   Ensures only one service content is visible at a time
======================================== */

(function() {
    'use strict';

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        initKeyServicesToggle();
    });

    function initKeyServicesToggle() {
        // Get all service cards
        const serviceCards = document.querySelectorAll('.service-square-card');
        const tabPanes = document.querySelectorAll('#KeyServices .tab-pane');
        
        if (serviceCards.length === 0) return;

        // Function to check if we're in mobile view
        function isMobileView() {
            return window.innerWidth <= 768;
        }

        // Function to show only one tab at a time
        function handleCardClick(clickedCard, targetId) {
            if (!isMobileView()) {
                // On desktop, use default Bootstrap behavior
                return;
            }

            // Mobile-specific toggle behavior
            const targetPane = document.querySelector(targetId);
            
            // Check if clicked card is already active
            const isAlreadyActive = clickedCard.classList.contains('active');
            
            // Remove active state from all cards
            serviceCards.forEach(card => {
                card.classList.remove('active');
            });

            // Hide all tab panes
            tabPanes.forEach(pane => {
                pane.classList.remove('show', 'active');
                pane.style.display = 'none';
            });

            if (!isAlreadyActive) {
                // Activate clicked card
                clickedCard.classList.add('active');
                
                // Show corresponding content
                if (targetPane) {
                    targetPane.classList.add('show', 'active');
                    targetPane.style.display = 'block';
                    
                    // Smooth scroll to content (with small delay for animation)
                    setTimeout(() => {
                        targetPane.scrollIntoView({ 
                            behavior: 'smooth', 
                            block: 'nearest'
                        });
                    }, 100);
                }
            }
        }

        // Add click event listeners to each card
        serviceCards.forEach(card => {
            card.addEventListener('click', function(e) {
                if (!isMobileView()) {
                    // On desktop, let Bootstrap handle it
                    return;
                }
                
                e.preventDefault();
                const targetId = this.getAttribute('data-bs-target') || this.getAttribute('href');
                handleCardClick(this, targetId);
            });
        });

        // Handle window resize - reset to first tab on desktop
        let resizeTimer;
        window.addEventListener('resize', function() {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                if (!isMobileView()) {
                    // Reset to default Bootstrap behavior on desktop
                    serviceCards.forEach((card, index) => {
                        if (index === 0) {
                            card.classList.add('active');
                        } else {
                            card.classList.remove('active');
                        }
                    });

                    tabPanes.forEach((pane, index) => {
                        if (index === 0) {
                            pane.classList.add('show', 'active');
                            pane.style.display = 'block';
                        } else {
                            pane.classList.remove('show', 'active');
                            pane.style.display = 'none';
                        }
                    });
                }
            }, 250);
        });

        // Initialize: On mobile, show first tab by default
        if (isMobileView()) {
            serviceCards.forEach((card, index) => {
                if (index === 0) {
                    card.classList.add('active');
                } else {
                    card.classList.remove('active');
                }
            });

            tabPanes.forEach((pane, index) => {
                if (index === 0) {
                    pane.classList.add('show', 'active');
                    pane.style.display = 'block';
                } else {
                    pane.classList.remove('show', 'active');
                    pane.style.display = 'none';
                }
            });
        }
    }
})();
