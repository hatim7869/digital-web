
function scroller() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}



scroller();



var tl = gsap.timeline();
tl.from("#page-1 h1", {
    duration: 2,
    opacity: 0,
    ease: Expo.easeInOut

},)
tl.from("#page-1 #img1", {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: Expo.e

}, '-=1')
tl.from("#page-1 #img2", {
    x: 120,
    opacity: 0,
    duration: 1,
    ease: Expo.e

}, '-=1')
tl.from("#page-1 #img3", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: Expo.e

}, '-=1')

gsap.from("#page-2 h4,#page-2 h1", {
    scrollTrigger: {
        trigger: "#page-2",
        scroller: "#main",
        // markers: true,
        start: "top 60%"
    },
    stagger: .1,
    y: 20,
    ease: Expo.easeInOut,
    duration: 1,
    opacity: 0
})
gsap.from("#page-2 #about-us", {
    scrollTrigger: {
        trigger: "#page-2 #about-us",
        scroller: "#main",
        start: "top 80%"
    },
    stagger: .1,
    y: 20,
    ease: Expo.easeInOut,
    duration: 1,
    opacity: 0
})
gsap.from("#page-3 #p3-left #img1,#img2,#img3,#img4", {
    scrollTrigger: {
        trigger: "#page-2 #about-us",
        scroller: "#main",
        start: "top 50%"
    },
    y: 150,
    ease: Expo.easeInOut,
    duration: 2,
    opacity: 0
})

gsap.from("#page-3 #p3-right", {
    scrollTrigger: {
        trigger: "#page-3",
        scroller: "#main",
        start: "top 30%",

    },

    y: 50,
    duration: 1,
    ease: Expo.easeInOut,
    opacity: 0
})
gsap.from("#page-3 #p3-right #services", {
    scrollTrigger: {
        trigger: "#page-3",
        scroller: "#main",
        start: "top 30%",

    },
    delay: 1,
    y: 50,
    duration: 1,
    ease: Expo.easeInOut,
    opacity: 0
})
gsap.from("#page-4 h1", {
    scrollTrigger: {
        trigger: "#page-4",
        scroller: "#main",
        start: "top 80%",

    },
    y: 20,
    duration: 1,
    ease: Expo.easeInOut,
    opacity: 0
}, '-=2')

gsap.from("#page-5 #left-img", {
    scrollTrigger: {
        trigger: "#page-5 #left-img",
        scroller: "#main",
        start: "top 50%"

    },

    x: -20,
    duration: 1,
    ease: Expo.easeInOut,
    opacity: 0
})
gsap.from("#page-5 #right-img", {
    scrollTrigger: {
        trigger: "#page-5 #right-img",
        scroller: "#main",
        start: "top 50%",

    },

    x: 20,
    duration: 1,
    ease: Expo.easeInOut,
    opacity: 0
})
gsap.from("#page-5  #bottom-work", {
    scrollTrigger: {
        trigger: "#page-5",
        scroller: "#main",
        start: "top 10%",

    },

    y: 50,
    duration: 1,
    ease: Expo.easeInOut,
    opacity: 0
})
gsap.from("#page-6  .swiper", {
    scrollTrigger: {
        trigger: "#page-6",
        scroller: "#main",
        start: "top 50%",

    },

    y: 20,
    duration: 1,
    ease: Expo.easeInOut,
    opacity: 0
})
gsap.from("#page-7 #first,#second,#third", {
    scrollTrigger: {
        trigger: "#page-7",
        scroller: "#main",
        start: "top 50%",

    },

    y: 50,
    duration: 2,
    stagger: .2,
    delay: 1,
    ease: Expo.easeInOut,
    opacity: 0
})
gsap.to("#page-7 #on-image", {
    scrollTrigger: {
        trigger: "#page-7",
        scroller: "#main",
        start: "top 60%",

    },

    height: "38vh",
    duration: 1,
    ease: Expo.easeInOut,
    opacity: 1
})







var flag = 0;
var menu = document.querySelector("#menu")
    .addEventListener("click", function () {
        if (flag === 0) {
            document.querySelector("#line1").style.transform = "rotate(-35deg)"
            document.querySelector("#line2").style.backgroundColor = "transparent"
            document.querySelector("#line3").style.width = "100%"
            document.querySelector("#line3").style.transform = "rotate(28deg)"
            document.querySelector("#nav2").style.top = "0";
            flag = 1;
        }
        else {
            document.querySelector("#line1").style = "none"
            document.querySelector("#line3").style = "none"
            document.querySelector("#nav2").style.top = "100%";
            document.querySelector("#line2").style.backgroundColor = "black"
            flag = 0;
        }
    })
const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    grabCursor: true
});