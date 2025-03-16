gsap.from("#page1 #box", {
    scale: 0,
    delay: 1,
    duration: 2,
    rotation: 360,
});
gsap.from("#page2 #box", {
    scale: 0,
    duration: 2,
    rotation: 360,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        start: "top 50%"
    }
});
gsap.from("#page3 h1", {
    opacity: 0,
    y: 30,
    delay: 1,
    duration: 1.5,
    scrollTrigger: {
        trigger: "#page3 .first-text",
        scroller: "body",
        // markers: true,
        start: "top 50%",
        // scrub: true,
        // pin: true,
    },
    stagger: .3,
})