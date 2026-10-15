// Lightbox Elements

const galleryButtons = document.querySelectorAll(".gallery-button");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const closeButton = document.querySelector(".lightbox-close");
const previousButton = document.querySelector(".lightbox-prev");
const nextButton = document.querySelector(".lightbox-next");
const imageCounter = document.getElementById("lightbox-counter");

let currentImageIndex = 0;
let lastFocusedButton = null;

// Open Lightbox

function openLightbox(index) {
    currentImageIndex = index;
    lastFocusedButton = galleryButtons[index];

    updateLightbox();

    lightbox.classList.add("active");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    closeButton.focus();
}

// Update Lightbox Image

function updateLightbox() {
    const selectedButton = galleryButtons[currentImageIndex];
    const fullImage = selectedButton.getAttribute("data-full");
    const imageDescription = selectedButton.querySelector("img").alt;

    lightboxImage.src = fullImage;
    lightboxImage.alt = imageDescription;

    imageCounter.textContent =
        (currentImageIndex + 1) + " / " + galleryButtons.length;
}

// Close Lightbox

function closeLightbox() {
    lightbox.classList.remove("active");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    if (lastFocusedButton) {
        lastFocusedButton.focus();
    }
}

// Next Image

function nextImage() {
    currentImageIndex++;

    if (currentImageIndex >= galleryButtons.length) {
        currentImageIndex = 0;
    }

    updateLightbox();
}

// Previous Image

function previousImage() {
    currentImageIndex--;

    if (currentImageIndex < 0) {
        currentImageIndex = galleryButtons.length - 1;
    }

    updateLightbox();
}

// Gallery Thumbnail Click Events

galleryButtons.forEach(function(button, index) {
    button.addEventListener("click", function() {
        openLightbox(index);
    });
});

// Lightbox Button Events

closeButton.addEventListener("click", closeLightbox);
nextButton.addEventListener("click", nextImage);
previousButton.addEventListener("click", previousImage);

// Close Lightbox When Clicking Outside Image

lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Keyboard Navigation

document.addEventListener("keydown", function(event) {
    if (!lightbox.classList.contains("active")) {
        return;
    }

    if (event.key === "Escape") {
        closeLightbox();
    }

    if (event.key === "ArrowRight") {
        nextImage();
    }

    if (event.key === "ArrowLeft") {
        previousImage();
    }
});