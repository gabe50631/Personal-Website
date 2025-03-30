let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;
const carouselImages = document.querySelector('.carousel-images');

function showSlide(index) {
    // Prevent out-of-bounds index
    if (index < 0) {
        currentIndex = totalImages - 1;
    } else if (index >= totalImages) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    // Adjust the transform to slide images
    const offset = currentIndex * 100;
    carouselImages.style.transform = `translateX(-${offset}%)`; // Apply the calculated offset
}

function prevSlide() {
    showSlide(currentIndex - 1); // Go to the previous image
}

function nextSlide() {
    showSlide(currentIndex + 1); // Go to the next image
}
