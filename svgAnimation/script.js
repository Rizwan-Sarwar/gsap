let initialPath = `M 10 300 Q 750 300 1490 300`;
let svg = document.querySelector("svg");

svg.addEventListener("mousemove", (ele)=> {
    let newPath = `M 10 300 Q ${ele.x} ${ele.y} 1490 300`;
    gsap.to("svg path", {
        attr: {
            d: newPath,
        },
    })
})

svg.addEventListener("mouseleave", (ele)=> {
    gsap.to("svg path", {
        attr: {
            d: initialPath,
        },
        duration: 1,
        ease: "elastic.out(1,0.2)",
    })
})