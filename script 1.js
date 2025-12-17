// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
}));

// Navbar background on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Contact form submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you would normally send the data to a server
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
    
    // Reset form
    contactForm.reset();
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements that should fade in
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.skill-item, .project-card, .stat-item, .timeline-item, .cert-item, .contact-item');
    elementsToAnimate.forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-progress');

const animateSkillBars = () => {
    skillBars.forEach(skillBar => {
        const rect = skillBar.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            const width = skillBar.style.width;
            skillBar.style.width = '0';
            setTimeout(() => {
                skillBar.style.width = width;
            }, 200);
        }
    });
};

let skillBarsAnimated = false;
window.addEventListener('scroll', () => {
    if (!skillBarsAnimated) {
        const aboutSection = document.querySelector('.about');
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            animateSkillBars();
            skillBarsAnimated = true;
        }
    }
});

// Fade in animation for developer illustration
const developerIllustration = document.querySelector('.developer-illustration');
if (developerIllustration) {
    developerIllustration.style.opacity = '0';
    developerIllustration.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        developerIllustration.style.transition = 'opacity 1s ease, transform 1s ease';
        developerIllustration.style.opacity = '1';
        developerIllustration.style.transform = 'translateY(0)';
    }, 300);
}

// Add parallax effect to home section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.home-content, .home-image');
    
    parallaxElements.forEach(el => {
        if (scrolled < window.innerHeight) {
            el.style.transform = `translateY(${scrolled * 0.5}px)`;
            el.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    });
});

// Add hover effect to project cards
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Dynamic typing effect for name
const nameElement = document.querySelector('.name');
if (nameElement) {
    const originalText = nameElement.textContent;
    const nameParts = ['John Developer', 'Full Stack Developer', 'Software Engineer'];
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    const typeName = () => {
        const currentText = nameParts[currentIndex];
        
        if (isDeleting) {
            nameElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                currentIndex = (currentIndex + 1) % nameParts.length;
            }
            
            setTimeout(typeName, 50);
        } else {
            nameElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentText.length) {
                setTimeout(() => {
                    isDeleting = true;
                }, 2000);
            }
            
            setTimeout(typeName, 100);
        }
    };
    
    // Start the typing effect after a delay
    setTimeout(typeName, 1000);
}

// Add active section highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Enhanced scroll animations
const scrollElements = document.querySelectorAll('.project-card, .timeline-item, .skill-item');
const elementInView = (el, percentageScroll = 100) => {
    const elementTop = el.getBoundingClientRect().top;
    return (
        elementTop <= 
        (window.innerHeight || document.documentElement.clientHeight) * (percentageScroll / 100)
    );
};

const displayScrollElement = (element) => {
    element.classList.add('scrolled');
};

const hideScrollElement = (element) => {
    element.classList.remove('scrolled');
};

const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
        if (elementInView(el, 100)) {
            displayScrollElement(el);
        } else {
            hideScrollElement(el);
        }
    });
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
});

// Initialize on load
handleScrollAnimation();

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', (e) => {
    // ESC to close mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Add touch gestures for mobile
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.changedTouches[0].screenY;
});

document.addEventListener('touchend', (e) => {
    touchEndY = e.changedTouches[0].screenY;
    handleSwipe();
});

const handleSwipe = () => {
    if (touchEndY < touchStartY - 50) {
        // Swipe up
        window.scrollBy({ top: 300, behavior: 'smooth' });
    }
    if (touchEndY > touchStartY + 50) {
        // Swipe down
        window.scrollBy({ top: -300, behavior: 'smooth' });
    }
};

