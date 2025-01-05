// Get all the images and buttons
var slides = document.getElementsByClassName("slide");
var currentSlideIndex = 0;  // Start from the first slide

// Function to show the next slide
function nextSlide() {
    slides[currentSlideIndex].classList.remove("active");  // Hide current slide
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;  // Move to the next slide, loop back to the first after the last slide
    slides[currentSlideIndex].classList.add("active");  // Show next slide
}

// Function to show the previous slide
function prevSlide() {
    slides[currentSlideIndex].classList.remove("active");  // Hide current slide
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;  // Move to the previous slide, loop back to the last slide after the first
    slides[currentSlideIndex].classList.add("active");  // Show previous slide
}

// Automatically move to the next slide every 3 seconds
setInterval(nextSlide, 3000);