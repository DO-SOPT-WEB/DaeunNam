let scrollTopBtn = document.querySelector(".scroll_top");
const images = document.querySelectorAll('.london_image');

function applyHoverEffects(image, caption, brightness, translateY) {
    image.style.filter = `brightness(${brightness}%)`;
    image.style.transform = `translateY(${translateY}px)`;
    caption.style.opacity = 1;
}

images.forEach(imageContainer => {
    const image = imageContainer.querySelector('img');
    const caption = imageContainer.querySelector('.caption');

    image.addEventListener('mouseover', () => {
        applyHoverEffects(image, caption, 50, -5);
    });

    image.addEventListener('mouseout', () => {
        applyHoverEffects(image, caption, 100, 5);
    });

    caption.addEventListener('mouseover', () => {
        applyHoverEffects(image, caption, 50, -5);
    });

    caption.addEventListener('mouseout', () => {
        applyHoverEffects(image, caption, 100, 5);
    });
});


document.addEventListener('scroll', () => {
    const topStartY = scrollTopBtn.getBoundingClientRect().height;
    const topEndY = scrollTopBtn.getBoundingClientRect().bottom;
    const topBtnHeight = topEndY - topStartY;

    scrollTopBtn.style.opacity = 1 - topBtnHeight / window.scrollY;
});