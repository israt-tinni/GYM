const animation = ScrollReveal({
    distance:'50px',
    duration: 1500,
    delay: 300,
    reset: false,
    easing: 'ease'
});

animation.reveal('.content-test',{
    delay: 200,
    origin: 'left',
    distance: '100px'
});

animation.reveal('.container h2',{
    delay: 200,
    origin: 'bottom',
    distance: '50px'
});

animation.reveal('.ad-box',{
    delay: 300,
    origin: 'right',
    distance: '50px'
});

animation.reveal('#member-box',{
    delay: 300,
    origin: 'bottom',
    distance: '50px'
});

animation.reveal('#about-txt',{
    delay: 200,
    origin: 'left',
    distance: '100px'
});

animation.reveal('.about-img',{
    delay: 200,
    origin: 'right',
    distance: '100px'
});

animation.reveal('.trainers-info',{
    delay: 200,
    origin: 'bottom',
    distance: '50px'
});

animation.reveal('.footer-details',{
    delay: 200,
    origin: 'bottom',
    distance: '50px'
});