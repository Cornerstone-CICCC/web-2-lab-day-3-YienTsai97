gsap.registerPlugin(ScrollTrigger);

// YOUR CODE HERE



/////// [1]
let tlOne = gsap.timeline()

tlOne
    .from('.content div h1 span:first-child', { x: '-100vw', duration: 1 })
    .from('.content div h1 span:last-child', { x: '100vw', duration: 1 }, '<')
    .from('.content div p', { transformOrigin: 'top left', rotate: 90, opacity: 0, duration: .5 })
    .from('.section1 img', { marginTop: '200vh', duration: .8 })


/////// [2]
let tlTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".section2",
        start: "top 25%",
        end: "bottom",
        toggleActions: "play pause reverse reset"
    },
});

tlTwo
    .from('.section2 div h2 span', { y: '-100vh', duration: .5, stagger: .3, })
    .from('.section2 div p', { rotationY: 90, opacity: 0, duration: .5, stagger: .3 })



/////// [Horizon]

let tlHorizon = gsap.timeline({
    scrollTrigger: {
        trigger: ".horizontal-sections",
        start: "top",
        end: "bottom",
        pin: true,
        scrub: true,
    },
});

tlHorizon
    .to('.horizontal-sections', { x: '-105vw', })



/////// [3]
let tlThree = gsap.timeline({
    scrollTrigger: {
        trigger: ".horizontal-sections",
        start: "-25% top",
        end: "bottom",
        toggleActions: "play pause reverse reset"
    },
});

tlThree
    .from('.section3 div h2', { scale: 10, x: '0vw', opacity: 0, duration: 1, })
    .from('.section3 div p span', { y: '100vh', opacity: 0, duration: .5, stagger: .1 })
    .to('.section3 div p span', { color: 'black', backgroundColor: 'white', duration: .5, stagger: .1 }, '<')



/////// [4]
let tlFour = gsap.timeline({
    scrollTrigger: {
        trigger: ".horizontal-sections",
        start: "1% top",
        end: "bottom",
        //markers: "true",
        toggleActions: "play pause reverse reset"

    },
});


tlFour
    .from('.section4 .portfolio-item', { x: '100vw', stagger: .3 },)




/////// [5]
let tlFive = gsap.timeline({
    scrollTrigger: {
        trigger: ".section5",
        start: "top",
        end: "bottom",
        pin: true,
        scrub: true,
    },
})

let contact = document.querySelector(".section5 div h2")
let contactArrey = [...contact.innerHTML]
console.log(contactArrey)
contact.textContent = ""

contactArrey.forEach((char) => {
    const span = document.createElement('span')
    contact.append(span)
    span.append(`${char}`)
})

let spanSpace = document.querySelector(".section5 div h2 span:nth-child(8)")
spanSpace.innerHTML = '&nbsp'

console.log(spanSpace)
tlFive
    .from('.section5 div h2 span', { y: '-50vh', stagger: .3 })
    .from('.section5 div p', { y: '30vh', opacity: 0 })
    .from('.section5 div button', { scale: 0 })
    .to('.section5', { backgroundColor: 'black' })
    .from('.section5', { backgroundPosition: '150% 90%' })


