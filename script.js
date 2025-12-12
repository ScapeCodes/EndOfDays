
function startSlideshow() {
    const slides = document.querySelectorAll('.hero-bg');
    let currentSlide = 0;
    const slideInterval = 8000; // Time each slide is visible (8 seconds)

    function nextSlide() {
        // Remove 'active' class from current slide
        slides[currentSlide].classList.remove('active');
        
        // Move to the next slide (wraps around to the first slide)
        currentSlide = (currentSlide + 1) % slides.length;
        
        // Add 'active' class to the new slide
        slides[currentSlide].classList.add('active');
    }

    // Start the rotation immediately
    slides[currentSlide].classList.add('active');
    
    // Set the interval to automatically switch slides
    setInterval(nextSlide, slideInterval);
}

document.addEventListener('DOMContentLoaded', function () {
    // Set the launch date (Example: January 1, 2026)
    const launchDate = new Date('Jan 1, 2026 00:00:00').getTime();
    
    const countdownElement = document.getElementById('countdown');

    startSlideshow();

    // Update the countdown every 1 second
    const x = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the launch date
        const distance = launchDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        // Display the result
        if (distance > 0) {
            countdownElement.innerHTML = `${days}D ${hours}H ${minutes}M ${seconds}S`;
        } else {
            // When the countdown is over
            clearInterval(x);
            countdownElement.innerHTML = "SERVER IS LIVE! CONNECT NOW";
            countdownElement.style.backgroundColor = 'rgba(46, 204, 113, 0.2)'; // Green background
        }
    }, 1000);
});