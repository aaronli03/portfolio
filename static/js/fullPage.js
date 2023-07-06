gsap.registerPlugin(ScrollTrigger);

gsap.to(".aboutTwoLineMask", {
  stagger: 1,
  scrollTrigger: {
    trigger: ".aboutTwoLineMask",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 0.5,
  },
  width: "100%",
  duration: 1.3,
});

gsap.to(".aboutThreeLineOne", {
    scrollTrigger: {
        trigger: '.aboutThreeLineOne',
        start: "top 80%",
        end: 'bottom 20%',
        scrub: 1.5,
    },
    transform: 'translateX(0%)',
})

gsap.from(".aboutThreeLineTwo", {
    scrollTrigger: {
        trigger: '.aboutThreeLineTwo',
        start: "top 100%",
        end: 'bottom 20%',
        scrub: 1.5,
    },
    transform: 'translateX(20%)',
})

gsap.to(".aboutThreeLineThree", {
    scrollTrigger: {
        trigger: '.aboutThreeLineThree',
        start: "top 100%",
        end: 'bottom 20%',
        scrub: 1.5,
    },
    transform: 'translateX(0%)',
})