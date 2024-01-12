gsap.registerPlugin(ScrollTrigger);

const audio = document.querySelector("#audio");
const audioToggle = document.querySelector("#audioToggle");
audioToggle.addEventListener("change", () => {
  if (audioToggle.checked) {
    audio.play();
  } else {
    audio.pause();
  }
});
gsap.to(".aboutTwoLineMask", {
  stagger: 1,
  scrollTrigger: {
    trigger: ".aboutTwoLineMask",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 0.5,
  },
  width: "100%",
  duration: 1.4,
});

gsap.to(".aboutThreeLineOne", {
  scrollTrigger: {
    trigger: ".aboutThreeLineOne",
    start: "top 100%",
    end: "bottom 10%",
    scrub: 4,
  },
  transform: "translateX(2%)",
  ease: "slow(0.7, 0.7, false)",
});

gsap.from(".aboutThreeLineTwo", {
  scrollTrigger: {
    trigger: ".aboutThreeLineTwo",
    start: "top 100%",
    end: "bottom 10%",
    scrub: 4,
  },
  transform: "translateX(8%)",
  ease: "slow(0.7, 0.7, false)",
});

gsap.to(".aboutThreeLineThree", {
  scrollTrigger: {
    trigger: ".aboutThreeLineThree",
    start: "top 100%",
    end: "bottom 10%",
    scrub: 4,
  },
  transform: "translateX(0%)",
  ease: "slow(0.7, 0.7, false)",
});

gsap.from(".aboutThreeLineFour", {
  scrollTrigger: {
    trigger: ".aboutThreeLineFour",
    start: "top 100%",
    end: "bottom 10%",
    scrub: 4,
  },
  transform: "translateX(2%)",
  ease: "slow(0.7, 0.7, false)",
});

ScrollTrigger.create({
  trigger: ".projectComponentOne",
  start: "top -15%",
  pin: true,
  pinSpacing: false,
});
ScrollTrigger.create({
  trigger: ".projectComponentTwo",
  start: "top -15%",
  pin: true,
  pinSpacing: false,
});
ScrollTrigger.create({
  trigger: ".projectComponentThree",
  start: "top -15%",
  pin: true,
  pinSpacing: false,
});
ScrollTrigger.create({
  trigger: ".projectComponentFour",
  start: "top -15%",
  pin: true,
  pinSpacing: false,
});
ScrollTrigger.create({
  trigger: ".projectComponentFive",
  start: "top -15%",
  end: "bottom bottom",
  pin: true,
  pinSpacing: false,
});