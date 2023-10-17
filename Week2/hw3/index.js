let scrollTopBtn = document.getElementById("scrollTop");

document.addEventListener('scroll', () => {
    const topStartY = scrollTopBtn.getBoundingClientRect().height;
    const topEndY = scrollTopBtn.getBoundingClientRect().bottom;
    const topBtnHeight = topEndY - topStartY;

    scrollTopBtn.style.opacity = 1 - topBtnHeight / window.scrollY;
});