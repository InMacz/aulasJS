// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Carousel functionality with 7 second auto-rotation
let currentServer = 0;
const totalServers = 3;
let carouselInterval;

function showServer(index) {
    const cards = document.querySelectorAll('.server-card');
    const dots = document.querySelectorAll('.dot');
    
    // Remove active class from all
    cards.forEach(card => card.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Add active class to current
    cards[index].classList.add('active');
    dots[index].classList.add('active');
    
    currentServer = index;
}

function nextServer() {
    currentServer = (currentServer + 1) % totalServers;
    showServer(currentServer);
}

function startCarousel() {
    carouselInterval = setInterval(nextServer, 7000); // 7 seconds
}

function resetCarousel() {
    clearInterval(carouselInterval);
    startCarousel();
}

// Carousel dots functionality with manual control
const dots = document.querySelectorAll('.dot');
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showServer(index);
        resetCarousel(); // Reset timer when manually changing
    });
});

// Start automatic carousel
startCarousel();

// Pause carousel when hovering over server card
document.querySelectorAll('.server-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        clearInterval(carouselInterval);
    });
    
    card.addEventListener('mouseleave', () => {
        startCarousel();
    });
});

// Parallax effect on hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.update-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.6s ease-out';
    observer.observe(card);
});

// Button click effects - Ripple animation
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function(e) {
        let ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255,255,255,0.6)';
        ripple.style.width = ripple.style.height = '100px';
        ripple.style.marginLeft = '-50px';
        ripple.style.marginTop = '-50px';
        ripple.style.animation = 'ripple 0.6s';
        ripple.style.left = e.clientX - this.getBoundingClientRect().left + 'px';
        ripple.style.top = e.clientY - this.getBoundingClientRect().top + 'px';
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

// Add ripple animation keyframes dynamically
const style = document.createElement('style');
style.innerHTML = `
    @keyframes ripple {
        from {
            opacity: 1;
            transform: scale(0);
        }
        to {
            opacity: 0;
            transform: scale(2);
        }
    }
`;
document.head.appendChild(style);
