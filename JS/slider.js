const sliderWrapper = document.getElementById('sliderWrapper');
const sliderIndicator = document.getElementById('sliderIndicator');
const leftBtn = document.getElementById('left-arrow');
const rightBtn = document.getElementById('right-arrow');

// add image
const sliderImages = [
    "./images/gym-1.png",
    "./images/gym-2.png",
    "./images/gym-3.png",
    "./images/gym-4.png"
];

function initializeSlider() {
    let currentIndex = 0;
    sliderImages.forEach((image, index) => {
        // adding image in div
        const img = document.createElement('img');
        img.src = image;
        sliderWrapper.appendChild(img);

        // adding indicator
        const indicatorSpan = document.createElement('div');
        indicatorSpan.className = `indicator ${index === 0 ? 'active' : ''}`
        indicatorSpan.addEventListener('click', () => goToSlide(index) )
        sliderIndicator.appendChild(indicatorSpan);
    });

    const goToSlide = (index) => {
        currentIndex = index;
        updateSlider();
    }

    // update slider
    const updateSlider = () => {
        sliderWrapper.style.transform = `translateX(-${currentIndex * 100}%)`
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);

        });
    }

    const nextSlider = ()=>{
        currentIndex = (currentIndex + 1)% sliderImages.length;
        updateSlider();
    }

    // adding next button
    rightBtn.addEventListener('click',()=>{
        nextSlider();
    });

    // adding previous button
    leftBtn.addEventListener('click',()=>{
        currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
        updateSlider();
    });

    // set auto change slider
    let autoplayInterval= setInterval(nextSlider,3000);
    
    // stop auto change slider when mouse hover
    sliderWrapper.addEventListener('mouseenter',()=>{
        clearInterval(autoplayInterval);
    });

    // again starting auto change slider when mouse leave
    sliderWrapper.addEventListener('mouseleave',()=>{
        autoplayInterval = setInterval(nextSlider,3000);
    })
}

window.addEventListener('DOMContentLoaded', () => {
    initializeSlider();
});