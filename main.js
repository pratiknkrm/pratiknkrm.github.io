/* ========================================
   TYPED TEXT ANIMATION
   ======================================== */

/**
 * Creates a terminal-style typing effect in the hero section
 * This simulates a command being typed character by character
 */

// Wait for the page to fully load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    
    // Get the element where we'll display the typed text
    const typedTextElement = document.querySelector('.typed-text');
    
    // The text we want to type out
   // const textToType = "sudo apt-get install expertise";
    
    // How fast to type (milliseconds per character)
    //const typingSpeed = 100;


   const typedTextElement = document.querySelector('.typed-text');
const commands = [
  "sudo apt-get install expertise",
  "ping -c 4 192.168.1.1",
  "nmap -sV 10.0.0.1",
  "ssh admin@corp.local",
  "sudo systemctl restart nginx"
];

let commandIndex = 0;
let charIndex = 0;

function typeCommand() {
  if (charIndex < commands[commandIndex].length) {
    typedTextElement.textContent += commands[commandIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeCommand, 100);
  } else {
    setTimeout(eraseCommand, 2000); // Wait before erasing
  }
}

function eraseCommand() {
  if (charIndex > 0) {
    typedTextElement.textContent = commands[commandIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseCommand, 50);
  } else {
    commandIndex = (commandIndex + 1) % commands.length;
    setTimeout(typeCommand, 500);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeCommand, 1000);
});
    // Keep track of which character we're on
    let charIndex = 0;
    
    /**
     * This function types one character at a time
     * It calls itself repeatedly using setTimeout (recursive)
     */
    function typeCharacter() {
        // If we haven't typed all characters yet
        if (charIndex < textToType.length) {
            // Add the next character to the display
            typedTextElement.textContent += textToType.charAt(charIndex);
            
            // Move to the next character
            charIndex++;
            
            // Call this function again after typingSpeed milliseconds
            setTimeout(typeCharacter, typingSpeed);
        }
    }
    
    // Start the typing animation after a short delay
    setTimeout(typeCharacter, 500);
    
    
    /* ========================================
       MOBILE MENU TOGGLE
       ======================================== */
    
    /**
     * Makes the hamburger menu work on mobile devices
     * Clicking the hamburger shows/hides the navigation links
     */
    
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    // Check if these elements exist (they should on every page)
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', function() {
            // Toggle the 'active' class to show/hide menu
            navLinks.classList.toggle('active');
            
            // Animate the hamburger icon (turns into an X)
            hamburger.classList.toggle('active');
        });
        
        // Close menu when a link is clicked (better UX on mobile)
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
    
    
    /* ========================================
       SMOOTH SCROLL BEHAVIOR
       ======================================== */
    
    /**
     * Makes scrolling to anchor links smooth instead of instant
     * Already handled by CSS scroll-behavior, but this is a fallback
     */
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Only apply if it's an actual anchor (not just "#")
            if (targetId !== '#') {
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    
    /* ========================================
       SCROLL ANIMATIONS
       ======================================== */
    
    /**
     * Adds fade-in animations to elements as you scroll down
     * Uses Intersection Observer API (modern, performant)
     */
    
    // Configuration for the observer
    const observerOptions = {
        threshold: 0.1,  // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px'  // Start slightly before element enters viewport
    };
    
    // Create the observer
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // If element is now visible
            if (entry.isIntersecting) {
                // Add the 'visible' class (we'll define this in CSS)
                entry.target.classList.add('visible');
                
                // Stop observing this element (animation only happens once)
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Find all elements we want to animate
    const animatedElements = document.querySelectorAll(
        '.competency-card, .project-card, .detail-card, .contact-card'
    );
    
    // Start observing each element
    animatedElements.forEach(element => {
        // Add initial state (invisible)
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Observe it
        observer.observe(element);
    });
    
    // Define the 'visible' state
    const style = document.createElement('style');
    style.textContent = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
    
    
    /* ========================================
       DYNAMIC YEAR IN FOOTER
       ======================================== */
    
    /**
     * Automatically updates the copyright year
     * So you don't have to manually change it every year
     */
    
    const footerText = document.querySelector('.footer-text');
    if (footerText) {
        const currentYear = new Date().getFullYear();
        footerText.innerHTML = footerText.innerHTML.replace('2026', currentYear);
    }
    
});


/* ========================================
   NAVBAR BACKGROUND ON SCROLL
   ======================================== */

/**
 * Changes navbar background opacity based on scroll position
 * Makes it more opaque as you scroll down
 */

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // If we've scrolled more than 50px down
    if (scrollTop > 50) {
        navbar.style.background = 'rgba(10, 14, 39, 0.98)';
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 14, 39, 0.95)';
        navbar.style.boxShadow = 'none';
    }
    
    lastScrollTop = scrollTop;
});


/* ========================================
   PREVENT FLASH OF UNSTYLED CONTENT (FOUC)
   ======================================== */

/**
 * Makes sure the page only shows after CSS is loaded
 * Prevents the ugly flash of unstyled HTML
 */

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
});

// Add initial style
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.3s ease';
