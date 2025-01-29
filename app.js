// this script change the video of home page after clicking next button of home page
const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4','videos/hero-2.mp4','videos/hero-3.mp4','videos/hero-4.mp4'];

let index = 0;
nextButton.addEventListener('click', function(){

    index += 1
    video.src = movieList[index];

    if(index === 3){
        index = -1;
    }
})




// adding gsap 
var navTl = gsap.timeline();
navTl.from("header .head-left, .head-right p",{
    y: -20,
    opacity: 0,
    duration: 0.3,
    delay: 0.5,
    stagger: 0.3,
});

var heroText = gsap.timeline();
heroText.from(".hero-section .hero-info h1, .hero-section .hero-info p",{
    x: -40,
    opacity: 0,
    duration:1,
    delay: 0.5,
})
heroText.from(".gaming-text",{
    x: 40,
    opacity: 0,
    duration:1,
    delay: 0.5,
})
