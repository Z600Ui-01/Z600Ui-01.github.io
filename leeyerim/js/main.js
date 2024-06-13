window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

/* --------------------------------------------------------- */
/* GNB 호버반응 */

$("#section01 .gnb01")
.mouseenter(function () {
  $("#section01 .select01").addClass("on");
})
.mouseleave(function () {
  $("#section01 .select01").removeClass("on");
});

$("#section01 .gnb02")
.mouseenter(function () {
  $("#section01 .select02").addClass("on");
})
.mouseleave(function () {
  $("#section01 .select02").removeClass("on");
});

$("#section01 .gnb03")
.mouseenter(function () {
  $("#section01 .select03").addClass("on");
})
.mouseleave(function () {
  $("#section01 .select03").removeClass("on");
});

$("#section01 .gnb04")
.mouseenter(function () {
  $("#section01 .select04").addClass("on");
})
.mouseleave(function () {
  $("#section01 .select04").removeClass("on");
});

$("#section01 .arrow")
.mouseenter(function () {
  $("#section01 .arrow02").addClass("on");
})
.mouseleave(function () {
  $("#section01 .arrow02").removeClass("on");
});

/* --------------------------------------------------------- */

setTimeout(() => {
  $("#section01 .hat").addClass("on");
}, 500); //몇초뒤에 실행하겠다.

setTimeout(() => {
  $("#section01 .light").addClass("on");
}, 1500); //몇초뒤에 실행하겠다.

setTimeout(() => {
  $("#section01 .planet").addClass("on");
}, 1500); //몇초뒤에 실행하겠다.

/* --------------------------------------------------------- */

let se02_text01 = gsap.timeline();
ScrollTrigger.create({
  animation: se02_text01,
  trigger: "#section02",
  start: "-400px top",
  end: "600px bottom",
  scrub: 1,
});
se02_text01.to("#section02 .text01", { clipPath: "inset(0% 0% 0% 0%"});

let se02_letter01 = gsap.timeline();
ScrollTrigger.create({
  animation: se02_letter01,
  trigger: "#section02",
  start: "-400px top",
  end: "600px bottom",
  scrub: 1,
});
se02_letter01.to("#section02 .letter01", { opacity : 1 , scale : 1 });

let se02_letter02 = gsap.timeline();
ScrollTrigger.create({
  animation: se02_letter02,
  trigger: "#section02",
  start: "-400px top",
  end: "600px bottom",
  scrub: 1,
});
se02_letter02.to("#section02 .letter02", { opacity : 1 , scale : 1 }, 0.5);

let se02_letter03 = gsap.timeline();
ScrollTrigger.create({
  animation: se02_letter03,
  trigger: "#section02",
  start: "-400px top",
  end: "600px bottom",
  scrub: 1,
});
se02_letter03.to("#section02 .letter03", { opacity : 1 , scale : 1 }, 1);

let se02_title = gsap.timeline();
ScrollTrigger.create({
  animation: se02_title,
  trigger: "#section02",
  start: "-200px top",
  end: "800px bottom",
  scrub: 1,
});
se02_title.to("#section02 .title", { clipPath: "inset(0% 0% 0% 0%"});

let se02_text02 = gsap.timeline();
ScrollTrigger.create({
  animation: se02_text02,
  trigger: "#section02",
  start: "-200px top",
  end: "800px bottom",
  scrub: 1,
});
se02_text02.to("#section02 .text02", { clipPath: "inset(0% 0% 0% 0%"}, 0.5);

let se02_elephant = gsap.timeline();
ScrollTrigger.create({
  animation: se02_elephant,
  trigger: "#section02",
  start: "-200px top",
  end: "800px bottom",
  scrub: 1,
});
se02_elephant.to("#section02 .elephant", { opacity : 1 , scale : 1 });

let se02_profile = gsap.timeline();
ScrollTrigger.create({
  animation: se02_profile,
  trigger: "#section02",
  start: "-200px top",
  end: "800px bottom",
  scrub: 1,
});
se02_profile.to("#section02 .profile", { opacity : 1 , scale : 1 }, 0.5);

/* --------------------------------------------------------- */

let se03_letter01 = gsap.timeline();
ScrollTrigger.create({
  animation: se03_letter01,
  trigger: "#section03",
  start: "-700px top",
  end: "300px bottom",
  scrub: 1,
});
se03_letter01.to("#section03 .letter01", { opacity : 1 , scale : 1 });

let se03_letter02 = gsap.timeline();
ScrollTrigger.create({
  animation: se03_letter02,
  trigger: "#section03",
  start: "-700px top",
  end: "300px bottom",
  scrub: 1,
});
se03_letter02.to("#section03 .letter02", { opacity : 1 , scale : 1 }, 0.5);

let se03_letter03 = gsap.timeline();
ScrollTrigger.create({
  animation: se03_letter03,
  trigger: "#section03",
  start: "-700px top",
  end: "300px bottom",
  scrub: 1,
});
se03_letter03.to("#section03 .letter03", { opacity : 1 , scale : 1 }, 1);

let se03_elephant = gsap.timeline();
ScrollTrigger.create({
  animation: se03_elephant,
  trigger: "#section03",
  start: "-700px top",
  end: "300px bottom",
  scrub: 1,
});
se03_elephant.to("#section03 .elephant", { opacity : 1 , scale : 1 }, 1);

let se03_title = gsap.timeline();
ScrollTrigger.create({
  animation: se03_title,
  trigger: "#section03",
  start: "-700px top",
  end: "300px bottom",
  scrub: 1,
});
se03_title.to("#section03 .title", { clipPath: "inset(0% 0% 0% 0%)" }, 1);

let se03_thumbnail = gsap.timeline();
ScrollTrigger.create({
  animation: se03_thumbnail,
  trigger: "#section03",
  start: "-700px top",
  end: "300px bottom",
  scrub: 2,
});
se03_thumbnail.to("#section03 .thumbnail", { y: 0 , x: 0 , rotate: 0 }, 1);

let se03_jouw = gsap.timeline();
ScrollTrigger.create({
  animation: se03_jouw,
  trigger: "#section03",
  start: "-700px top",
  end: "300px bottom",
  scrub: 2,
});
se03_jouw.to("#section03 .jouw", { y: 0 , x: 0 , rotate: 0 }, 1);

let se03_converse = gsap.timeline();
ScrollTrigger.create({
  animation: se03_converse,
  trigger: "#section03",
  start: "-700px top",
  end: "300px bottom",
  scrub: 2,
});
se03_converse.to("#section03 .converse", { y: 0 , x: 0 , rotate: 0 }, 1);

let se03_sangsunal = gsap.timeline();
ScrollTrigger.create({
  animation: se03_sangsunal,
  trigger: "#section03",
  start: "-700px top",
  end: "300px bottom",
  scrub: 2,
});
se03_sangsunal.to("#section03 .sangsunal", { y: 0 , x: 0 , rotate: 0 }, 1);

let se03_bowers = gsap.timeline();
ScrollTrigger.create({
  animation: se03_bowers,
  trigger: "#section03",
  start: "-700px top",
  end: "300px bottom",
  scrub: 2,
});
se03_bowers.to("#section03 .bowers", { y: 0 , x: 0 , rotate: 0 }, 1);


/* -------------------- */

$("#section03 .content01")
.mouseenter(function () {
  $("#section03 .hover01").addClass("on");
})
.mouseleave(function () {
  $("#section03 .hover01").removeClass("on");
});

$("#section03 .content02")
.mouseenter(function () {
  $("#section03 .hover02").addClass("on");
})
.mouseleave(function () {
  $("#section03 .hover02").removeClass("on");
});

$("#section03 .content03")
.mouseenter(function () {
  $("#section03 .hover03").addClass("on");
})
.mouseleave(function () {
  $("#section03 .hover03").removeClass("on");
});

$("#section03 .content04")
.mouseenter(function () {
  $("#section03 .hover04").addClass("on");
})
.mouseleave(function () {
  $("#section03 .hover04").removeClass("on");
});

/* -------------------- */

$("#section03 .content01")
.mouseenter(function () {
  $("#section03 .thumbnail").addClass("on");
})
.mouseleave(function () {
  $("#section03 .thumbnail").removeClass("on");
});

$("#section03 .content01")
.mouseenter(function () {
  $("#section03 .jouw").addClass("on");
})
.mouseleave(function () {
  $("#section03 .jouw").removeClass("on");
});

$("#section03 .content02")
.mouseenter(function () {
  $("#section03 .converse").addClass("on");
})
.mouseleave(function () {
  $("#section03 .converse").removeClass("on");
});

$("#section03 .content03")
.mouseenter(function () {
  $("#section03 .sangsunal").addClass("on");
})
.mouseleave(function () {
  $("#section03 .sangsunal").removeClass("on");
});

$("#section03 .content04")
.mouseenter(function () {
  $("#section03 .bowers").addClass("on");
})
.mouseleave(function () {
  $("#section03 .bowers").removeClass("on");
});

/* --------------------------------------------------------- */

let se04_keyword01 = gsap.timeline();
ScrollTrigger.create({
  animation: se04_keyword01,
  trigger: "#section04",
  start: "-800px top",
  end: "200px bottom",
  scrub: 1,
});
se04_keyword01.to("#section04 .keyword01", { opacity : 1 , scale : 1 });

let se04_keyword02 = gsap.timeline();
ScrollTrigger.create({
  animation: se04_keyword02,
  trigger: "#section04",
  start: "-800px top",
  end: "200px bottom",
  scrub: 1,
});
se04_keyword02.to("#section04 .keyword02", { opacity : 1 , scale : 1 , y : 0 }, 1);

let se04_keyword03 = gsap.timeline();
ScrollTrigger.create({
  animation: se04_keyword03,
  trigger: "#section04",
  start: "-800px top",
  end: "200px bottom",
  scrub: 1,
});
se04_keyword03.to("#section04 .keyword03", { opacity : 1 , scale : 1 }, 2);

let se04_tele = gsap.timeline();
ScrollTrigger.create({
  animation: se04_tele,
  trigger: "#section04",
  start: "-400px top",
  end: "600px bottom",
  scrub: 1,
});
se04_tele.to("#section04 .tele", { opacity : 1 , scale : 1 });