window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

setTimeout(() => {
  $("#section01 .particle01").addClass("on");
}, 600);

setTimeout(() => {
  $("#section01 .particle03").addClass("on");
}, 200);

setTimeout(() => {
  $("#section01 .particle04").addClass("on");
}, 600);

setTimeout(() => {
  $("#section01 .particle05").addClass("on");
}, 600);

/* --------------------------------------------------------- */

/* $(function (){
    $('#section02').mouseenter(function () {
        $('#section02 .gift').addClass("on")
    });
    $('#section02').mouseleave(function () {
        $('#section02 .gift').removeClass("on")
    });
}) */

let se02_whitebox = gsap.timeline();
ScrollTrigger.create({
  animation: se02_whitebox,
  trigger: "#section02",
  start: "-300px top",
  end: "800px bottom",
  scrub: 2,
});
se02_whitebox.to("#section02 .whitebox", { opacity: 1, y: 0 });

let se02_blackbox = gsap.timeline();
ScrollTrigger.create({
  animation: se02_blackbox,
  trigger: "#section02",
  start: "-300px top",
  end: "800px bottom",
  scrub: 2,
});
se02_blackbox.to("#section02 .blackbox", { opacity: 1, y: 0 }, 0.5);

let se03_graph01 = gsap.timeline();
ScrollTrigger.create({
  animation: se03_graph01,
  trigger: "#section03",
  start: "-300px top",
  end: "800px bottom",
  scrub: 1,
});
se03_graph01.to("#section03 .graph01", { rotate: 0, scale: 1, opacity: 1});

let se03_graph02 = gsap.timeline();
ScrollTrigger.create({
  animation: se03_graph02,
  trigger: "#section03",
  start: "-300px top",
  end: "800px bottom",
  scrub: 1,
});
se03_graph02.to("#section03 .graph02", { rotate: 0, scale: 1, opacity: 1 }, 0.5);

let se03_graph03 = gsap.timeline();
ScrollTrigger.create({
  animation: se03_graph03,
  trigger: "#section03",
  start: "-300px top",
  end: "800px bottom",
  scrub: 1,
});
se03_graph03.to("#section03 .graph03", { rotate: 0, scale: 1, opacity: 1 }, 1);

let se03_graph04 = gsap.timeline();
ScrollTrigger.create({
  animation: se03_graph04,
  trigger: "#section03",
  start: "-300px top",
  end: "800px bottom",
  scrub: 1,
});
se03_graph04.to("#section03 .graph04", { rotate: 0, scale: 1, opacity: 1 });

let se03_yes_no = gsap.timeline();
ScrollTrigger.create({
  animation: se03_yes_no,
  trigger: "#section03",
  start: "-300px top",
  end: "800px bottom",
  scrub: 3,
});
se03_yes_no.to("#section03 .yes_no", { y: 0, opacity: 1 });

let se03_arrow = gsap.timeline();
ScrollTrigger.create({
  animation: se03_arrow,
  trigger: "#section03",
  start: "300px top",
  end: "1000px bottom",
  scrub: 3,
});
se03_arrow.to("#section03 .arrow", { y: 0, opacity: 1 });

let se04_tape01 = gsap.timeline();
ScrollTrigger.create({
  animation: se04_tape01,
  trigger: "#section04",
  start: "-200px top",
  end: "800px bottom",
  scrub: 1,
});
se04_tape01.to("#section04 .persona01 .tape01", { rotate: 0, opacity: 1});

let se04_tape02 = gsap.timeline();
ScrollTrigger.create({
  animation: se04_tape02,
  trigger: "#section04",
  start: "-200px top",
  end: "800px bottom",
  scrub: 1,
});
se04_tape02.to("#section04 .persona01 .tape02", { rotate: 0 , opacity: 1}, 1);

let se04_tape03 = gsap.timeline();
ScrollTrigger.create({
  animation: se04_tape03,
  trigger: "#section04",
  start: "-200px top",
  end: "800px bottom",
  scrub: 1,
});
se04_tape03.to("#section04 .persona01 .tape03", { rotate: 0 , opacity: 1}, 1);

let se04_tape01_ = gsap.timeline();
ScrollTrigger.create({
  animation: se04_tape01_,
  trigger: "#section04",
  start: "300px top",
  end: "1500px bottom",
  scrub: 1,
});
se04_tape01_.to("#section04 .persona02 .tape01", { rotate: 0, opacity: 1});

let se04_tape02_ = gsap.timeline();
ScrollTrigger.create({
  animation: se04_tape02_,
  trigger: "#section04",
  start: "300px top",
  end: "1000px bottom",
  scrub: 1,
});
se04_tape02_.to("#section04 .persona02 .tape02", { rotate: 0 , opacity: 1}, 1);

let se04_tape03_ = gsap.timeline();
ScrollTrigger.create({
  animation: se04_tape03_,
  trigger: "#section04",
  start: "300px top",
  end: "1000px bottom",
  scrub: 1,
});
se04_tape03_.to("#section04 .persona02 .tape03", { rotate: 0 , opacity: 1}, 1);

let se05_graph = gsap.timeline();
ScrollTrigger.create({
  animation: se05_graph,
  trigger: "#section05",
  start: "-500px top",
  end: "100px bottom",
  scrub: 1,
});
se05_graph.to("#section05 .graph", { opacity: 1 });

let se05_icon = gsap.timeline();
ScrollTrigger.create({
  animation: se05_icon,
  trigger: "#section05",
  start: "-500px top",
  end: "100px bottom",
  scrub: 1,
});
se05_icon.to("#section05 .graph .icon", { opacity: 1, scale: 1 });

let se06_keywords = gsap.timeline();
ScrollTrigger.create({
  animation: se06_keywords,
  trigger: "#section06",
  start: "-500px top",
  end: "500px bottom",
  scrub: 3,
});
se06_keywords.to("#section06 .keywords", { y: 0, opacity: 1 });

let se06_design = gsap.timeline();
ScrollTrigger.create({
  animation: se06_design,
  trigger: "#section06",
  start: "-200px top",
  end: "800px bottom",
  scrub: 3,
});
se06_design.to("#section06 .design", { y: 0, opacity: 1 });

let se07_line = gsap.timeline();
ScrollTrigger.create({
  animation: se07_line,
  trigger: "#section07",
  start: "-600px top",
  end: "100px bottom",
  scrub: 2,
});
se07_line.to("#section07 .line", { x: 0 });

let se07_line2 = gsap.timeline();
ScrollTrigger.create({
  animation: se07_line2,
  trigger: "#section07",
  start: "-600px top",
  end: "100px bottom",
  scrub: 2,
});
se07_line2.to("#section07 .line", { opacity: 1 }, 0.5);

let se07_img01 = gsap.timeline();
ScrollTrigger.create({
  animation: se07_img01,
  trigger: "#section07",
  start: "-600px top",
  end: "100px bottom",
  scrub: 2,
});
se07_img01.to("#section07 .img .img01", { x: 0, opacity: 1 }, 0.5);

let se07_img02 = gsap.timeline();
ScrollTrigger.create({
  animation: se07_img02,
  trigger: "#section07",
  start: "-600px top",
  end: "100px bottom",
  scrub: 2,
});
se07_img02.to("#section07 .img .img02", { x: 0, opacity: 1 }, 1.1);

let se07_img03 = gsap.timeline();
ScrollTrigger.create({
  animation: se07_img03,
  trigger: "#section07",
  start: "-600px top",
  end: "100px bottom",
  scrub: 2,
});
se07_img03.to("#section07 .img .img03", { x: 0, opacity: 1 }, 1.7);

let se07_img04 = gsap.timeline();
ScrollTrigger.create({
  animation: se07_img04,
  trigger: "#section07",
  start: "-600px top",
  end: "100px bottom",
  scrub: 2,
});
se07_img04.to("#section07 .img .img04", { x: 0, opacity: 1 }, 2.3);

let se08_left = gsap.timeline();
ScrollTrigger.create({
  animation: se08_left,
  trigger: "#section08",
  start: "-200px top",
  end: "800px bottom",
  scrub: 2,
});
se08_left.to("#section08 .left", { y: 0, opacity: 1 });

let se08_right = gsap.timeline();
ScrollTrigger.create({
  animation: se08_right,
  trigger: "#section08",
  start: "-200px top",
  end: "800px bottom",
  scrub: 2,
});
se08_right.to("#section08 .right", { y: 0, opacity: 1 });

let se08_contents = gsap.timeline();
ScrollTrigger.create({
  animation: se08_contents,
  trigger: "#section08",
  start: "1800px top",
  end: "2800px bottom",
  scrub: 2,
});
se08_contents.to("#section08 .main02 .contents", { y: 0, opacity: 1 });

let se08_add_friends = gsap.timeline();
ScrollTrigger.create({
  animation: se08_add_friends,
  trigger: "#section08",
  start: "3000px top",
  end: "4000px bottom",
  scrub: 2,
});
se08_add_friends.to("#section08 .main02 .add_friends", { y: 0, opacity: 1 });

let se09_painpoint = gsap.timeline();
ScrollTrigger.create({
  animation: se09_painpoint,
  trigger: "#section09",
  start: "-500px top",
  end: "300px bottom",
  scrub: 1,
});
se09_painpoint.to("#section09 .painpoint", { x: 0, opacity: 1 });

let se09_solution = gsap.timeline();
ScrollTrigger.create({
  animation: se09_solution,
  trigger: "#section09",
  start: "-500px top",
  end: "300px bottom",
  scrub: 1,
});
se09_solution.to("#section09 .solution", { x: 0, opacity: 1 });

let se09_contents = gsap.timeline();
ScrollTrigger.create({
  animation: se09_contents,
  trigger: "#section09",
  start: "-200px top",
  end: "800px bottom",
  scrub: 2,
});
se09_contents.to("#section09 .contents", { y: 0, opacity: 1 });

let se10_mobile01 = gsap.timeline();
ScrollTrigger.create({
  animation: se10_mobile01,
  trigger: "#section10",
  start: "-500px top",
  end: "800px bottom",
  scrub: 2,
});
se10_mobile01.to("#section10 .mobile01", { y: 0, opacity: 1 });

let se10_mobile02 = gsap.timeline();
ScrollTrigger.create({
  animation: se10_mobile02,
  trigger: "#section10",
  start: "-500px top",
  end: "800px bottom",
  scrub: 2,
});
se10_mobile02.to("#section10 .mobile02", { y: 0, opacity: 1 });

let se10_mobile03 = gsap.timeline();
ScrollTrigger.create({
  animation: se10_mobile03,
  trigger: "#section10",
  start: "-500px top",
  end: "800px bottom",
  scrub: 3,
});
se10_mobile03.to("#section10 .mobile03", { opacity: 1 }, 0.5);

let se10_mobile04 = gsap.timeline();
ScrollTrigger.create({
  animation: se10_mobile04,
  trigger: "#section10",
  start: "500px top",
  end: "1000px bottom",
  scrub: 3,
});
se10_mobile04.to("#section10 .mobile04", { opacity: 1 });

let se11_mobile01 = gsap.timeline();
ScrollTrigger.create({
  animation: se11_mobile01,
  trigger: "#section11",
  start: "-500px top",
  end: "800px bottom",
  scrub: 2,
});
se11_mobile01.to("#section11 .mobile01", { opacity: 1 });

let se11_mobile02 = gsap.timeline();
ScrollTrigger.create({
  animation: se11_mobile02,
  trigger: "#section11",
  start: "-500px top",
  end: "800px bottom",
  scrub: 2,
});
se11_mobile02.to("#section11 .mobile02", { y: 0, opacity: 1 });

let se11_mobile03 = gsap.timeline();
ScrollTrigger.create({
  animation: se11_mobile03,
  trigger: "#section11",
  start: "1000px top",
  end: "2000px bottom",
  scrub: 2,
});
se11_mobile03.to("#section11 .mobile03", { y: 0, opacity: 1 });

let se12_move01 = gsap.timeline();
ScrollTrigger.create({
  animation: se12_move01,
  trigger: "#section12",
  start: "-800px top",
  end: "500px bottom",
  scrub: 1,
});
se12_move01.to("#section12 .move01", { x: 0, y: 0 });

let se12_move02 = gsap.timeline();
ScrollTrigger.create({
  animation: se12_move02,
  trigger: "#section12",
  start: "-800px top",
  end: "500px bottom",
  scrub: 1,
});
se12_move02.to("#section12 .move02", { x: 0, y: 0 });

let se12_move03 = gsap.timeline();
ScrollTrigger.create({
  animation: se12_move03,
  trigger: "#section12",
  start: "-800px top",
  end: "500px bottom",
  scrub: 1,
});
se12_move03.to("#section12 .move03", { x: 0, y: 0 });

let se12_move04 = gsap.timeline();
ScrollTrigger.create({
  animation: se12_move04,
  trigger: "#section12",
  start: "-800px top",
  end: "500px bottom",
  scrub: 1,
});
se12_move04.to("#section12 .move04", { x: 0, y: 0 });

let se12_move05 = gsap.timeline();
ScrollTrigger.create({
  animation: se12_move05,
  trigger: "#section12",
  start: "-800px top",
  end: "500px bottom",
  scrub: 1,
});
se12_move05.to("#section12 .move05", { x: 0, y: 0 });

let se12_move06 = gsap.timeline();
ScrollTrigger.create({
  animation: se12_move06,
  trigger: "#section12",
  start: "-800px top",
  end: "500px bottom",
  scrub: 1,
});
se12_move06.to("#section12 .move06", { x: 0, y: 0 });

let se12_logo = gsap.timeline();
ScrollTrigger.create({
  animation: se12_logo,
  trigger: "#section12",
  start: "100px top",
  end: "800px bottom",
  scrub: 1,
});
se12_logo.to("#section12 .logo", { opacity: 1, scale: 1 });