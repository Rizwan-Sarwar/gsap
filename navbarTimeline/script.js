let menu = document.querySelector(".rs__open");
let close = document.querySelector(".rs__close");

let timeline = gsap.timeline();

timeline.to(".sidebar", {
    x: 0,
})
timeline.from(".sidebar .logo-wrap span", {
    x: 50,
    opacity: 0,    
})
timeline.from(".sidebar .logo-wrap button", {
    x: 10,
    opacity: 0,    
})
timeline.from(".sidebar .menu-wrap ul li", {
    x: 50,
    opacity: 0,
    duration: .2,
    stagger: 0.2
})
timeline.pause();

menu.addEventListener("click", ()=> {
    timeline.play();
})
close.addEventListener("click", ()=> {
    timeline.reverse();
})