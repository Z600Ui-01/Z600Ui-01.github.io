window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};
/* --------------------------------------------------------- */

/* GNB 호버반응 */

$("#gnb .gnb01")
.mouseenter(function () {
  $("#gnb .select01").addClass("on");
})
.mouseleave(function () {
  $("#gnb .select01").removeClass("on");
});

$("#gnb .gnb02")
.mouseenter(function () {
  $("#gnb .select02").addClass("on");
})
.mouseleave(function () {
  $("#gnb .select02").removeClass("on");
});

$("#gnb .gnb03")
.mouseenter(function () {
  $("#gnb .select03").addClass("on");
})
.mouseleave(function () {
  $("#gnb .select03").removeClass("on");
});

$("#gnb .gnb04")
.mouseenter(function () {
  $("#gnb .select04").addClass("on");
})
.mouseleave(function () {
  $("#gnb .select04").removeClass("on");
});

$("#gnb .arrow")
.mouseenter(function () {
  $("#gnb .arrow02").addClass("on");
})
.mouseleave(function () {
  $("#gnb .arrow02").removeClass("on");
});

/* --------------------------------------------------------- */
/* --------------------------------------------------------- */

/* 롤링텍스트 */
gsap.to("#section01 .textrolling .inner", {
  x: -3914,

  repeat: -1, //반복
  duration: 50, //속도
  ease: "none",
});

gsap.to("#section06 .textrolling01 .inner", {
  x: -3914,

  repeat: -1, //반복
  duration: 50, //속도
  ease: "none",
});

gsap.to("#section06 .textrolling02 .inner", {
  x: 3914,

  repeat: -1, //반복
  duration: 50, //속도
  ease: "none",
});

gsap.to("#section06 .textrolling03 .inner", {
  x: -3914,

  repeat: -1, //반복
  duration: 50, //속도
  ease: "none",
});

/* --------------------------------------------------------- */

let se02_img01 = gsap.timeline();
ScrollTrigger.create({
  animation: se02_img01,
  trigger: "#section02",
  start: "-600px top",
  end: "300px bottom",
  scrub: 1,
});
se02_img01.to("#section02 .img01", { rotate: 0 });

let se02_img02 = gsap.timeline();
ScrollTrigger.create({
  animation: se02_img02,
  trigger: "#section02",
  start: "-600px top",
  end: "300px bottom",
  scrub: 1,
});
se02_img02.to("#section02 .img02", { opacity: 1 , rotate: 0 }, 1);

let se02_line = gsap.timeline();
ScrollTrigger.create({
  animation: se02_line,
  trigger: "#section02",
  start: "-600px top",
  end: "300px bottom",
  scrub: 1,
});
se02_line.to("#section02 .line", { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }, 1.5);

let se02_sign = gsap.timeline();
ScrollTrigger.create({
  animation: se02_sign,
  trigger: "#section02",
  start: "-600px top",
  end: "300px bottom",
  scrub: 2,
});
se02_sign.to("#section02 .sign", { clipPath: "inset(0% 0% 0% 0%)" }, 3);

/* --------------------------------------------------------- */

let se03_img02 = gsap.timeline();
ScrollTrigger.create({
  animation: se03_img02,
  trigger: "#section03",
  start: "-600px top",
  end: "500px bottom",
  scrub: 1,
});
se03_img02.to("#section03 .img02", { opacity : 1 , rotate: 0 });

let se03_img03 = gsap.timeline();
ScrollTrigger.create({
  animation: se03_img03,
  trigger: "#section03",
  start: "-600px top",
  end: "500px bottom",
  scrub: 1,
});
se03_img03.to("#section03 .img03", { opacity : 1 , rotate: 0 });

let se03_yellowtext = gsap.timeline();
ScrollTrigger.create({
  animation: se03_yellowtext,
  trigger: "#section03",
  start: "-600px top",
  end: "500px bottom",
  scrub: 1,
});
se03_yellowtext.to("#section03 .yellowtext", { clipPath: "inset(0% 0% 0% 0%)" }, 1);

let se03_drawing = gsap.timeline();
ScrollTrigger.create({
  animation: se03_drawing,
  trigger: "#section03",
  start: "-600px top",
  end: "500px bottom",
  scrub: 1,
});
se03_drawing.to("#section03 .drawing", { clipPath: "inset(0% 0% 0% 0%)" }, 1.5);

let se03_text = gsap.timeline();
ScrollTrigger.create({
  animation: se03_text,
  trigger: "#section03",
  start: "0px top",
  end: "900px bottom",
  scrub: 2,
});
se03_text.to("#section03 .text", { opacity: 1 , y: 0 });

let se03_arrow01 = gsap.timeline();
ScrollTrigger.create({
  animation: se03_arrow01,
  trigger: "#section03",
  start: "0px top",
  end: "900px bottom",
  scrub: 1,
});
se03_arrow01.to("#section03 .arrow01", { clipPath: "inset(0% 0% 0% 0%)" }, 1);

let se03_arrow02 = gsap.timeline();
ScrollTrigger.create({
  animation: se03_arrow02,
  trigger: "#section03",
  start: "0px top",
  end: "900px bottom",
  scrub: 1,
});
se03_arrow02.to("#section03 .arrow02", { clipPath: "inset(0% 0% 0% 0%)" }, 5);

/* --------------------------------------------------------- */

let se04_text = gsap.timeline();
ScrollTrigger.create({
  animation: se04_text,
  trigger: "#section04",
  start: "-800px top",
  end: "200px bottom",
  scrub: 1,
});
se04_text.to("#section04 .text", { clipPath: "inset(0% 0% 0% 0%)" });

/* --------------------------------------------------------- */

let se05_text = gsap.timeline();
ScrollTrigger.create({
  animation: se05_text,
  trigger: "#section05",
  start: "-600px top",
  end: "500px bottom",
  scrub: 1,
});
se05_text.to("#section05 .text", { opacity: 1 , x: 0 });

let se05_yellowtext = gsap.timeline();
ScrollTrigger.create({
  animation: se05_yellowtext,
  trigger: "#section05",
  start: "-600px top",
  end: "500px bottom",
  scrub: 1,
});
se05_yellowtext.to("#section05 .yellowtext", { rotate: 0 , opacity: 1 });

let se05_img01 = gsap.timeline();
ScrollTrigger.create({
  animation: se05_img01,
  trigger: "#section05",
  start: "100px top",
  end: "1000px bottom",
  scrub: 1,
});
se05_img01.to("#section05 .img01", { rotate: 0 , opacity: 1 });

let se05_colorchips = gsap.timeline();
ScrollTrigger.create({
  animation: se05_colorchips,
  trigger: "#section05",
  start: "100px top",
  end: "1000px bottom",
  scrub: 1,
});
se05_colorchips.to("#section05 .colorchips", { clipPath: "inset(0% 0% 0% 0%)" }, 1);

/* --------------------------------------------------------- */

let se06_title = gsap.timeline();
ScrollTrigger.create({
  animation: se06_title,
  trigger: "#section06",
  start: "-600px top",
  end: "500px bottom",
  scrub: 1,
});
se06_title.to("#section06 .title", { opacity: 1 , x: 0 });

let se06_text01 = gsap.timeline();
ScrollTrigger.create({
  animation: se06_text01,
  trigger: "#section06",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se06_text01.to("#section06 .text01", { opacity: 1 , y: 0 });

let se06_text02 = gsap.timeline();
ScrollTrigger.create({
  animation: se06_text02,
  trigger: "#section06",
  start: "500px top",
  end: "1500px bottom",
  scrub: 2,
});
se06_text02.to("#section06 .text02", { opacity: 1 , y: 0 });

let se06_text03 = gsap.timeline();
ScrollTrigger.create({
  animation: se06_text03,
  trigger: "#section06",
  start: "900px top",
  end: "1900px bottom",
  scrub: 2,
});
se06_text03.to("#section06 .text03", { opacity: 1 , y: 0 });

let se06_text04 = gsap.timeline();
ScrollTrigger.create({
  animation: se06_text04,
  trigger: "#section06",
  start: "1530px top",
  end: "2530px bottom",
  scrub: 2,
});
se06_text04.to("#section06 .text04", { opacity: 1 , y: 0 });

let se06_text05 = gsap.timeline();
ScrollTrigger.create({
  animation: se06_text05,
  trigger: "#section06",
  start: "2300px top",
  end: "3300px bottom",
  scrub: 2,
});
se06_text05.to("#section06 .text05", { opacity: 1 , y: 0 });


/* --------------------------------------------------------- */

let se06_thanksfor = gsap.timeline();
ScrollTrigger.create({
  animation: se06_thanksfor,
  trigger: "#section06",
  start: "2700px top",
  end: "3600px bottom",
  scrub: 1,
});
se06_thanksfor.to("#section06 .thanksfor", { opacity: 1 , x: 0 });

let se06_watching = gsap.timeline();
ScrollTrigger.create({
  animation: se06_watching,
  trigger: "#section06",
  start: "2700px top",
  end: "3600px bottom",
  scrub: 1,
});
se06_watching.to("#section06 .watching", { opacity: 1 , x: 0 }, 0.5);