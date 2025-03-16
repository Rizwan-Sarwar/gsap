var timeLine = gsap.timeline();

timeLine.from("h2", {
    opacity: 0,
    y: -30,
    duration: .5,
    delay: 1,
})

timeLine.from("h4", {
    opacity: 0,
    y: -30,
    duration: .2,
    stagger: .1
})
timeLine.from("h1", {
    opacity: 0,
    y: 30,
    duration: .5,
})