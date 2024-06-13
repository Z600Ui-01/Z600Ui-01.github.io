window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

/* --------------------------------------------------------- */

setTimeout(() => {
  $("#section01 .line").addClass("on");
}, 1000); //몇초뒤에 실행하겠다.

let se02_img = gsap.timeline();
ScrollTrigger.create({
  animation: se02_img,
  trigger: "#section02",
  start: "-500px top",
  end: "500px bottom",
  scrub: 1,
});
se02_img.to("#section02 .img", { filter: "blur(0px)" });

let se02_text = gsap.timeline();
ScrollTrigger.create({
  animation: se02_text,
  trigger: "#section02",
  start: "-500px top",
  end: "500px bottom",
  scrub: 2,
});
se02_text.to("#section02 .text", { clipPath: "inset(0% 0% 0% 0%)" }, 0.2);

/* --------------------------------------------------------- */

let se03_colorchips = gsap.timeline();
ScrollTrigger.create({
  animation: se03_colorchips,
  trigger: "#section03",
  start: "-600px top",
  end: "500px bottom",
  scrub: 1,
});
se03_colorchips.to("#section03 .colorchips", { filter: "blur(0px)" });

let se03_text = gsap.timeline();
ScrollTrigger.create({
  animation: se03_text,
  trigger: "#section03",
  start: "-300px top",
  end: "700px bottom",
  scrub: 2,
});
se03_text.to("#section03 .text", { clipPath: "inset(0% 0% 0% 0%)" });

let se03_diamond = gsap.timeline();
ScrollTrigger.create({
  animation: se03_diamond,
  trigger: "#section03",
  start: "-300px top",
  end: "700px bottom",
  scrub: 2,
});
se03_diamond.to("#section03 .diamond", { rotate: 0 });

/* --------------------------------------------------------- */

let se04_diamond = gsap.timeline();
ScrollTrigger.create({
  animation: se04_diamond,
  trigger: "#section04",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se04_diamond.to("#section04 .diamond", { rotate: 0 });

let se04_text = gsap.timeline();
ScrollTrigger.create({
  animation: se04_text,
  trigger: "#section04",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se04_text.to("#section04 .text", { clipPath: "inset(0% 0% 0% 0%)" });

let se04_img = gsap.timeline();
ScrollTrigger.create({
  animation: se04_img,
  trigger: "#section04",
  start: "-600px top",
  end: "500px bottom",
  scrub: 1,
});
se04_img.to("#section04 .img", { x: 0 , filter: "blur(0px)"});

/* --------------------------------------------------------- */

let se05_text = gsap.timeline();
ScrollTrigger.create({
  animation: se05_text,
  trigger: "#section05",
  start: "-500px top",
  end: "300px bottom",
  scrub: 2,
});
se05_text.to("#section05 .text", { clipPath: "inset(0% 0% 0% 0%)" });

let se05_mockup = gsap.timeline();
ScrollTrigger.create({
  animation: se05_mockup,
  trigger: "#section05",
  start: "-500px top",
  end: "300px bottom",
  scrub: 1,
});
se05_mockup.to("#section05 .mockup", { y: 0 });

let se05_btn = gsap.timeline();
ScrollTrigger.create({
  animation: se05_btn,
  trigger: "#section05",
  start: "-500px top",
  end: "300px bottom",
  scrub: 2,
});
se05_btn.to("#section05 .btn", { rotate: 0 });