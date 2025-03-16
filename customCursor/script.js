let main = document.querySelector("#main");
let cursor = document.querySelector("#cursor");
let imageWrapper = document.querySelector("#image");

main.addEventListener("mousemove", (ele)=> {
    gsap.to(cursor, {
        x: ele.x,
        y: ele.y,
        duration: 1,
        ease: "back.out(2)",
    })
})

imageWrapper.addEventListener("mouseenter", ()=> {
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
        scale: 2.5,
        backgroundColor: "#ffffff5c"
    })
})
imageWrapper.addEventListener("mouseleave", ()=> {
    cursor.innerHTML = "";
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "#fff"
    })
})