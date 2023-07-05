gsap.registerPlugin(ScrollTrigger);

gsap.to(".aboutTwoLineMask", {
  stagger: 1,
  scrollTrigger: {
    trigger: ".aboutTwoLineMask",
    start: "top 80%",
    end: "bottom 40%",
    scrub: true,
    markers: true,
  },
  width: "100%",
  duration: 1.5,
});
