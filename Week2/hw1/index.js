let scrollTopBtn = document.querySelector(".scroll_top");
const images = document.querySelectorAll('.london_image');

images.forEach(imageContainer => {
    const image = imageContainer.querySelector('img');
    const caption = imageContainer.querySelector('.caption');

    image.addEventListener('mouseover', (event) => {
        image.style.filter = 'brightness(50%)';
        image.style.transform = 'translateY(-5px)';
        caption.style.opacity = 1;
    });

    image.addEventListener('mouseout', (event) => {
        image.style.filter = 'brightness(100%)';
        image.style.transform = 'translateY(5px)';
        caption.style.opacity = 1;
    });
});

document.addEventListener('scroll', () => {
    const topStartY = scrollTopBtn.getBoundingClientRect().height;
    const topEndY = scrollTopBtn.getBoundingClientRect().bottom;
    const topBtnHeight = topEndY - topStartY;

    scrollTopBtn.style.opacity = 1 - topBtnHeight / window.scrollY;
});