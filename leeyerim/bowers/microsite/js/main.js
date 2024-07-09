window.addEventListener("DOMContentLoaded", function () {
  let count = 0;
  const counter = setInterval(() => {
    count++;

    $(".counter").html(count);

    if (count >= 100) {
      clearInterval(counter);
    }
  }, 60); // 카운트 하나당 시간

  setTimeout(() => {
    $("#intro .contents").fadeOut(100);
  }, 7000);

  setTimeout(() => {
    $("#intro").addClass("on");
  }, 8000); //몇초뒤에 실행하겠다.

  setTimeout(() => {
    $("#se01_video").addClass("on");
  }, 8000);

  setTimeout(() => {
    $("#intro").fadeOut(10);
  }, 10000);

  let intro = 0;
  const introLine = setInterval(() => {
    intro++;

    $("#intro .line img").attr("src", `images/Loading/line0${intro}.png`);

    if (intro >= 6) {
      clearInterval(introLine);
    }
  }, 1000); //이미지 하나 바뀌는 시간

  $("#container").on("wheel", function (e) {
    let v = e.originalEvent.deltaY;
    if (v < 0) {
      $("#nav").removeClass("on");
    } else {
      $("#nav").addClass("on");
    }
  });

  var $mouseX = 0,
    $mouseY = 0,
    $offsetX = 0,
    $offsetY = 0,
    $offsetXp = 0,
    $offsetYp = 0,
    $xp = 0,
    $yp = 0,
    $mask = $(".mask_circle"),
    $flag = $("#flag");

  $(document).mousemove(function (e) {
    $mouseX = e.pageX;
    $mouseY = e.pageY;
  });

  $("#section02 .se02_bg").mousemove(function (e) {
    $offsetX = e.offsetX;
    $offsetY = e.offsetY;
  });

  const se10_video = document.querySelector("#se10_video");
  se10_video.addEventListener("click", function () {
    // 비디오가 현재 재생 중이라면 정지
    if (!this.paused) {
      this.pause();
      $("#flag .play").addClass("on");
      $("#flag .pause").removeClass("on");
    } else {
      // 비디오가 정지 상태라면 재생
      this.play();
      $("#flag .play").removeClass("on");
      $("#flag .pause").addClass("on");
    }
  });

  $("#se10_video")
    .mouseenter(function () {
      $("#flag .play").addClass("on");
      $("html,body").css("cursor", "none");
    })
    .mouseleave(function () {
      $("#flag > div > div").removeClass("on");
      $("html,body").css("cursor", "inherit");
    });

  $("#section02")
    .mouseenter(function () {
      $("html,body").css("cursor", "none");
    })
    .mouseleave(function () {
      $("html,body").css("cursor", "inherit");
    });

  var $loop = setInterval(function () {
    // change 12 to alter damping higher is slower
    $offsetXp += ($offsetX - $offsetXp) / 32;
    $offsetYp += ($offsetY - $offsetYp) / 32;

    $xp += ($mouseX - $xp) / 32;
    $yp += ($mouseY - $yp) / 32;
    $mask.attr("cx", `${$offsetXp}px`);
    $mask.attr("cy", `${$offsetYp}px`);
    $flag.css({
      left: $xp - $flag.width() + "px",
      top: $yp - $flag.height() + "px",
    });
  }, 1);

  $(".pop_up .pop_close").click(function () {
    $(".pop_up").removeClass("on");
  });

  $(".size").click(function () {
    $("#pop01").addClass("on");
    container.scrollTo(0, 36000, 600, {
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });
  $(".tech").click(function () {
    $("#pop02").addClass("on");
    container.scrollTo(0, 36000, 600, {
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });
  $(".finish").click(function () {
    $("#pop03").addClass("on");
    container.scrollTo(0, 36000, 600, {
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  /*product click*/
  $(".color_chips > li").click(function () {
    let v = $(".color_chips > li").index(this);

    $(".color_chips_border > div").removeClass("on").eq(v).addClass("on");
    $(".left_img > div").removeClass("on").eq(v).addClass("on");

    $(".left_img > div .swiper-slide").removeClass("on");
    $(".left_img > div .swiper-slide:nth-child(1)").addClass("on");

    $(".right_text > li").removeClass("on");

    if (v === 0) {
      $(".right_text .text_black").addClass("on");
      $(".purchase_btn img").attr("src", "images/Shop/01_purchase_btn.png");
    }
    if (v === 1) {
      $(".right_text .text_burgundy").addClass("on");
      $(".purchase_btn img").attr("src", "images/Shop/01_purchase_btn.png");
    }
    if (v === 2) {
      $(".right_text .text_McLaren").addClass("on");
      $(".purchase_btn img").attr("src", "images/Shop/01_purchase_McLaren.png");
    }
    if (v === 3) {
      $(".right_text .text_tan").addClass("on");
      $(".purchase_btn img").attr("src", "images/Shop/01_purchase_btn.png");
    }
  });

  var swiper = new Swiper(".mySwiper01", {
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function (e) {
        $(".swiper-slide").removeClass("on");
      },
      slideChangeTransitionEnd: function (e) {
        console.log(this.activeIndex);
        $(".swiper-slide-active").addClass("on");

        if (this.activeIndex === 0) {
        }
      },
    },
  });

  var swiper = new Swiper(".mySwiper02", {
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function (e) {
        $(".swiper-slide").removeClass("on");
      },
      slideChangeTransitionEnd: function (e) {
        console.log(this.activeIndex);
        $(".swiper-slide-active").addClass("on");

        if (this.activeIndex === 0) {
        }
      },
    },
  });

  var swiper = new Swiper(".mySwiper03", {
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function (e) {
        $(".swiper-slide").removeClass("on");
      },
      slideChangeTransitionEnd: function (e) {
        console.log(this.activeIndex);
        $(".swiper-slide-active").addClass("on");

        if (this.activeIndex === 0) {
        }
      },
    },
  });

  var swiper = new Swiper(".mySwiper04", {
    speed: 500,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function (e) {
        $(".swiper-slide").removeClass("on");
      },
      slideChangeTransitionEnd: function (e) {
        console.log(this.activeIndex);
        $(".swiper-slide-active").addClass("on");

        if (this.activeIndex === 0) {
        }
      },
    },
  });

  var swiper = new Swiper(".mySwiper05", {
    direction: "vertical",
    slidesPerView: "auto",
    freeMode: true,
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    mousewheel: true,
  });

  /* scroll event section */
  container.addListener((e) => {
    let scrollTop = container.scrollTop;
    $(".posNum").html(scrollTop);
  });

  /* 로고 누르면 메인으로 이동 */
  $("#logo").click(function () {
    container.scrollTo(0, 0, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

    /* 메뉴에서 로고 누르면 메인으로 이동*/
    $("#menu_page .logo").click(function () {
      container.scrollTo(0, 0, 0, {
        //xScroll, yScroll, speed(1000 = 1s)
        callback: () => console.log("done!"),
        easing: easing.easeInOutCirc,
      });
      $("#menu_page").fadeOut(1000);
    });

  /* 메뉴 나타나고 사라지기 */
  $("#menu").click(function () {
    $("#menu_page").fadeIn(1000);
  });

  $("#menu_page .menu_close").click(function () {
    $("#menu_page").fadeOut(1000);
  });

  /* 메뉴에서 샵버튼 클릭하면 해당 위치 이동*/
  $("#menu_page .shop_btn").click(function () {
    container.scrollTo(0, 33000, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  /* 메뉴 컨텐츠 클릭하면 해당 위치 이동*/
  $("#menu_page .contents .list01 .title").click(function () {
    container.scrollTo(0, 0, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .main_btn").click(function () {
    container.scrollTo(0, 0, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .strength_btn").click(function () {
    container.scrollTo(0, 3000, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .tech_btn").click(function () {
    container.scrollTo(0, 16000, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .quotes_btn").click(function () {
    container.scrollTo(0, 22925, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .contents .list02 .title").click(function () {
    container.scrollTo(0, 33000, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .whyerror_btn").click(function () {
    container.scrollTo(0, 33000, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .specs_btn").click(function () {
    container.scrollTo(0, 35984, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .gallery_btn").click(function () {
    container.scrollTo(0, 45500, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .contents .list03 .title").click(function () {
    container.scrollTo(0, 68025, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .other_btn").click(function () {
    container.scrollTo(0, 68025, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .collab_btn").click(function () {
    container.scrollTo(0, 85000, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .insta_btn").click(function () {
    container.scrollTo(0, 89550, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .contents .list04 .title").click(function () {
    container.scrollTo(0, 109383, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  $("#menu_page .contact_btn").click(function () {
    container.scrollTo(0, 109383, 0, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
    $("#menu_page").fadeOut(1000);
  });

  /*메뉴 타이틀 구동*/
  $("#menu_page .contents .title")
    .mouseenter(function () {
      $(this).addClass("on");
    })
    .mouseleave(function () {
      $(this).removeClass("on");
    });

  /* 구매페이지에서 스펙화살표 클릭하면 해당 위치 이동 */
  $("#section05 .position01 .specs_btn").click(function () {
    container.scrollTo(0, 35984, 600, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  /* 갤러리 조그만 사진 마우스호버시 border */
  $("#section07 .small > li").each(function () {
    $(this)
      .mouseenter(function () {
        // 호버 시 GSAP 애니메이션을 사용하여 스타일 적용
        gsap.to(this, {
          filter: "brightness(1)",
          border: "2px solid #e5e5e5",
          zIndex: 1000,
          duration: 0.3, // 애니메이션 지속 시간 설정
        });
      })
      .mouseleave(function () {
        // 마우스가 요소를 벗어날 때 원래 상태로 복귀
        gsap.to(this, {
          filter: "brightness(0.5)",
          border: "0px",
          zIndex: 1,
          duration: 0.3, // 애니메이션 지속 시간 설정
        });
      });
  });

  /* 갤러리 조그만 사진 클릭하면 해당 위치 이동 */
  $("#section07 .small .img01").click(function () {
    container.scrollTo(0, 47025, 600, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  $("#section07 .small .img02").click(function () {
    container.scrollTo(0, 49305, 600, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  $("#section07 .small .img03").click(function () {
    container.scrollTo(0, 51375, 600, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  $("#section07 .small .img04").click(function () {
    container.scrollTo(0, 53775, 600, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  $("#section07 .small .img05").click(function () {
    container.scrollTo(0, 55500, 600, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  $("#section07 .small .img06").click(function () {
    container.scrollTo(0, 56625, 600, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  $("#section07 .small .img07").click(function () {
    container.scrollTo(0, 58950, 600, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  $("#section07 .small .img08").click(function () {
    container.scrollTo(0, 60975, 600, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  $("#section07 .small .img09").click(function () {
    container.scrollTo(0, 63225, 600, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  $("#section07 .small .img10").click(function () {
    container.scrollTo(0, 65250, 600, {
      //xScroll, yScroll, speed(1000 = 1s)
      callback: () => console.log("done!"),
      easing: easing.easeInOutCirc,
    });
  });

  /*---------------------------------------------------------------------------*/

  let line = gsap.timeline();
  ScrollTrigger.create({
    animation: line,
    trigger: ".scroll-content",
    start: "top top",
    end: "bottom bottom",
    scrub: 2,
  });
  line.to("#line", { width: innerWidth }, 0);

  /*Intro 01 페이드아웃*/
  let se01_fadeout = gsap.timeline();
  ScrollTrigger.create({
    animation: se01_fadeout,
    trigger: "#section01",
    start: "500px top",
    end: "980px bottom",
    scrub: 2,
  });
  se01_fadeout.to("#section01 .position01", { opacity: 0, y: -50 }, 0);

  /*Intro 02 페이드인*/
  let se01_text = gsap.timeline();
  ScrollTrigger.create({
    animation: se01_text,
    trigger: "#section01",
    start: "800px top",
    end: "bottom bottom",
    scrub: 6,
  });
  se01_text.to("#section01 .text", { opacity: 1 }, 0);

  /*Intro 03 장점 배경텍스처 FIX*/
  gsap.to("#section02 .fix_this", {
    scrollTrigger: {
      trigger: "#section02 .trigger_this",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  /*Intro 03 장점 페이드인01*/
  let se02_s01 = gsap.timeline();
  ScrollTrigger.create({
    animation: se02_s01,
    trigger: "#section02",
    start: "500px top",
    end: "2000px bottom",
    scrub: 3,
  });
  se02_s01.to("#section02 .strength01", { opacity: 1 }, 0);

  /* ---------> 페이드아웃 */
  let se02_s01_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se02_s01_,
    trigger: "#section02",
    start: "2200px top",
    end: "3700px bottom",
    scrub: 3,
  });
  se02_s01_.to("#section02 .strength01", { opacity: 0 }, 0);

  /*Intro 03 장점 페이드인02*/
  let se02_s02 = gsap.timeline();
  ScrollTrigger.create({
    animation: se02_s02,
    trigger: "#section02",
    start: "4200px top",
    end: "5700px bottom",
    scrub: 3,
  });
  se02_s02.to("#section02 .strength02", { opacity: 1 }, 0);

  /* ------------> 페이드아웃 */
  let se02_s02_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se02_s02_,
    trigger: "#section02",
    start: "5900px top",
    end: "7400px bottom",
    scrub: 3,
  });
  se02_s02_.to("#section02 .strength02", { opacity: 0 }, 0);

  /*Intro 03 장점 페이드인03*/
  let se02_s03 = gsap.timeline();
  ScrollTrigger.create({
    animation: se02_s03,
    trigger: "#section02",
    start: "7900px top",
    end: "9400px bottom",
    scrub: 3,
  });
  se02_s03.to("#section02 .strength03", { opacity: 1 }, 0);

  /* -----------> 페이드아웃  */
  let se02_s03_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se02_s03_,
    trigger: "#section02",
    start: "9600px top",
    end: "11100px bottom",
    scrub: 3,
  });
  se02_s03_.to("#section02 .strength03", { opacity: 0 }, 0);
  se02_s03_.to("#section02 .se02_bg", { opacity: 0 }, 0);

  /*Intro 04 장점04 타이틀 롤링*/
  gsap.to("#section03 .title .inner", {
    x: -5348,

    repeat: -1, //반복
    duration: 50, //속도
    ease: "none",
  });

  /*Intro 04 장점04 사운드웨이브 롤링*/

  gsap.to("#section03 .soundwave .inner", {
    x: -3214.94,

    repeat: -1, //반복
    duration: 50, //속도
    ease: "none",
  });

  gsap.to("#section03 .soundwave .inner .wave01 .w_svg svg", {
    strokeDashoffset: 0,

    repeat: 0, //반복
    duration: 30, //속도
    ease: "none",
  });
  gsap.to("#section03 .soundwave .inner .wave02 .w_svg svg", {
    strokeDashoffset: 0,
    delay: 30,

    repeat: 0, //반복
    duration: 30, //속도
    ease: "none",
  });

  /*Intro 04 장점04 text01 페이드인*/
  let se03_text01 = gsap.timeline();
  ScrollTrigger.create({
    animation: se03_text01,
    trigger: "#section03",
    start: "300px top",
    end: "980px bottom",
    scrub: 3,
  });
  se03_text01.to("#section03 .text01", { opacity: 1, scale: 1 }, 0);

  /*Intro 04 장점04 text02 페이드인*/
  let se03_text02 = gsap.timeline();
  ScrollTrigger.create({
    animation: se03_text02,
    trigger: "#section03",
    start: "300px top",
    end: "980px bottom",
    scrub: 3,
  });
  se03_text02.to("#section03 .text02", { opacity: 1 }, 0.3);

  /*Intro 04 장점04 text03 페이드인*/
  let se03_text03 = gsap.timeline();
  ScrollTrigger.create({
    animation: se03_text03,
    trigger: "#section03",
    start: "300px top",
    end: "980px bottom",
    scrub: 3,
  });
  se03_text03.to("#section03 .text03", { opacity: 1 }, 0);

  /*Intro 04 장점04 img02 페이드인*/
  let se03_img02 = gsap.timeline();
  ScrollTrigger.create({
    animation: se03_img02,
    trigger: "#section03",
    start: "300px top",
    end: "980px bottom",
    scrub: 3,
  });
  se03_img02.to("#section03 .img02", { opacity: 1, y: -100 }, 0.3);

  /*Intro 05 테크놀로지-인용 FIX*/
  gsap.to("#section04 .fix_this_4", {
    scrollTrigger: {
      trigger: "#section04 .trigger_this_04",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  /* *Intro 05 테크놀로지 두번째 이미지, 텍스트 올라가기 */
  let se04_img02 = gsap.timeline();
  ScrollTrigger.create({
    animation: se04_img02,
    trigger: "#section04",
    start: "1000px top",
    end: "4000px bottom",
    scrub: 1,
  });
  se04_img02.to("#section04 .img01_list02", { y: 0 }, 0);
  se04_img02.to("#section04 .text_box .text_list", { y: -26 }, 0.1);

  /*Intro 05 테크놀로지 위로 지나가기*/
  let se04_upScroll = gsap.timeline();
  ScrollTrigger.create({
    animation: se04_upScroll,
    trigger: "#section04",
    start: "5500px top",
    end: "10000px bottom",
    scrub: 2,
  });
  se04_upScroll.to("#section04 .position01", { y: -2160 });

  /* Intro 06 언론인용 텍스트 채워지기 */
  let se04_clip = gsap.timeline();
  ScrollTrigger.create({
    animation: se04_clip,
    trigger: "#section04",
    start: "8000px top",
    end: "11000px bottom",
    scrub: 2,
  });
  se04_clip.to("#section04 .position02 .text .text_fill .text01", {
    clipPath: "inset(0% 0% 0% 0%)",
  });

  let se04_clip2 = gsap.timeline();
  ScrollTrigger.create({
    animation: se04_clip2,
    trigger: "#section04",
    start: "10000px top",
    end: "13000px bottom",
    scrub: 2,
  });
  se04_clip2.to("#section04 .position02 .text .text_fill .text02", {
    clipPath: "inset(0% 0% 0% 0%)",
  });

  let se04_clip3 = gsap.timeline();
  ScrollTrigger.create({
    animation: se04_clip3,
    trigger: "#section04",
    start: "12000px top",
    end: "15000px bottom",
    scrub: 2,
  });
  se04_clip3.to("#section04 .position02 .text .text_fill .text03", {
    clipPath: "inset(0% 0% 0% 0%)",
  });

  /*Shop 01 구매페이지 FIX*/
  gsap.to("#section05 .position01 .fix_this", {
    scrollTrigger: {
      trigger: "#section05 .position01 .trigger_this",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  /*Shop 02 스펙 FIX*/
  gsap.to("#section05 .position02 .fix_this", {
    scrollTrigger: {
      trigger: "#section05 .position02 .trigger_this",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  /*Shop 02 스펙 타이틀 롤링*/
  gsap.to("#section05 .bgtext .inner", {
    x: -4186,

    repeat: -1, //반복
    duration: 50, //속도
    ease: "none",
  });

  /*Shop 03 Explore Features FIX*/
  gsap.to("#section06 .fix_this", {
    scrollTrigger: {
      trigger: "#section06 .trigger_this",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  /*Shop 03 Explore Features 배경 페이드인*/
  let se06_bg = gsap.timeline();
  ScrollTrigger.create({
    animation: se06_bg,
    trigger: "#section06",
    start: "900px top",
    end: "5000px bottom",
    scrub: 2,
  });
  se06_bg.to("#section06 .bg", { opacity: 1 });

  /*Shop 03 Explore Features 텍스트 들어옴*/
  let se06_text = gsap.timeline();
  ScrollTrigger.create({
    animation: se06_text,
    trigger: "#section06",
    start: "900px top",
    end: "5000px bottom",
    scrub: 2,
  });
  se06_text.to("#section06 .text", { scale: 1, x: -15000 });

  /*Shop 04 갤러리 FIX*/
  gsap.to("#section07 .fix_this", {
    scrollTrigger: {
      trigger: "#section07 .trigger_this",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  /* Shop 04 갤러리 large 위로 이동 */
  let se07_large_img01 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img01,
    trigger: "#section07",
    start: "1000px top",
    end: "3000px bottom",
    scrub: 1,
  });
  se07_large_img01.to("#section07 .large .img01", { y: -590 });

  let se07_large_img02 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img02,
    trigger: "#section07",
    start: "1000px top",
    end: "3000px bottom",
    scrub: 1,
  });
  se07_large_img02.to("#section07 .large .img02", { y: 94 });

  let se07_large_img03 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img03,
    trigger: "#section07",
    start: "1000px top",
    end: "3000px bottom",
    scrub: 1,
  });
  se07_large_img03.to("#section07 .large .img03", { y: 832 });

  /* ------------------------------------ */

  let se07_large_img01_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img01_,
    trigger: "#section07",
    start: "3001px top",
    end: "5000px bottom",
    scrub: 1,
  });
  se07_large_img01_.to("#section07 .large .img01", { y: -1345 });

  let se07_large_img02_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img02_,
    trigger: "#section07",
    start: "3001px top",
    end: "5000px bottom",
    scrub: 1,
  });
  se07_large_img02_.to("#section07 .large .img02", { y: -661 });

  let se07_large_img03_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img03_,
    trigger: "#section07",
    start: "3001px top",
    end: "5000px bottom",
    scrub: 1,
  });
  se07_large_img03_.to("#section07 .large .img03", { y: 77 });

  /* ------------------------------------ */

  let se07_large_img02__ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img02__,
    trigger: "#section07",
    start: "5001px top",
    end: "7000px bottom",
    scrub: 1,
  });
  se07_large_img02__.to("#section07 .large .img02", { y: -1596 });

  let se07_large_img03__ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img03__,
    trigger: "#section07",
    start: "5001px top",
    end: "7000px bottom",
    scrub: 1,
  });
  se07_large_img03__.to("#section07 .large .img03", { y: -858 });

  let se07_large_img04 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img04,
    trigger: "#section07",
    start: "5001px top",
    end: "7000px bottom",
    scrub: 1,
  });
  se07_large_img04.to("#section07 .large .img04", { y: 68 });

  /* --------------------------------------- */

  let se07_large_img04_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img04_,
    trigger: "#section07",
    start: "7001px top",
    end: "9000px bottom",
    scrub: 1,
  });
  se07_large_img04_.to("#section07 .large .img04", { y: -821 });

  let se07_large_img05 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img05,
    trigger: "#section07",
    start: "7001px top",
    end: "9000px bottom",
    scrub: 1,
  });
  se07_large_img05.to("#section07 .large .img05", { y: 128 });

  let se07_large_img06 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img06,
    trigger: "#section07",
    start: "7001px top",
    end: "9000px bottom",
    scrub: 1,
  });
  se07_large_img06.to("#section07 .large .img06", { y: 878 });

  /* --------------------------------------- */

  let se07_large_img04__ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img04__,
    trigger: "#section07",
    start: "9001px top",
    end: "11000px bottom",
    scrub: 1,
  });
  se07_large_img04__.to("#section07 .large .img04", { y: -1630 });

  let se07_large_img05_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img05_,
    trigger: "#section07",
    start: "9001px top",
    end: "11000px bottom",
    scrub: 1,
  });
  se07_large_img05_.to("#section07 .large .img05", { y: -681 });

  let se07_large_img06_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img06_,
    trigger: "#section07",
    start: "9001px top",
    end: "11000px bottom",
    scrub: 1,
  });
  se07_large_img06_.to("#section07 .large .img06", { y: 98 });

  let se07_large_img07 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img07,
    trigger: "#section07",
    start: "9001px top",
    end: "11000px bottom",
    scrub: 1,
  });
  se07_large_img07.to("#section07 .large .img07", { y: 816 });

  /* --------------------------------------- */

  let se07_large_img05__ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img05__,
    trigger: "#section07",
    start: "11001px top",
    end: "13000px bottom",
    scrub: 1,
  });
  se07_large_img05__.to("#section07 .large .img05", { y: -1472 });

  let se07_large_img06__ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img06__,
    trigger: "#section07",
    start: "11001px top",
    end: "13000px bottom",
    scrub: 1,
  });
  se07_large_img06__.to("#section07 .large .img06", { y: -685 });

  let se07_large_img07_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img07_,
    trigger: "#section07",
    start: "11001px top",
    end: "13000px bottom",
    scrub: 1,
  });
  se07_large_img07_.to("#section07 .large .img07", { y: 62 });

  let se07_large_img08 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img08,
    trigger: "#section07",
    start: "11001px top",
    end: "13000px bottom",
    scrub: 1,
  });
  se07_large_img08.to("#section07 .large .img08", { y: 927 });

  /* --------------------------------------- */
  let se07_large_img06___ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img06___,
    trigger: "#section07",
    start: "13001px top",
    end: "15000px bottom",
    scrub: 1,
  });
  se07_large_img06___.to("#section07 .large .img06", { y: -1532 });

  let se07_large_img07__ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img07__,
    trigger: "#section07",
    start: "13001px top",
    end: "15000px bottom",
    scrub: 1,
  });
  se07_large_img07__.to("#section07 .large .img07", { y: -785 });

  let se07_large_img08_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img08_,
    trigger: "#section07",
    start: "13001px top",
    end: "15000px bottom",
    scrub: 1,
  });
  se07_large_img08_.to("#section07 .large .img08", { y: 80 });

  /* --------------------------------------- */

  let se07_large_img07___ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img07___,
    trigger: "#section07",
    start: "15001px top",
    end: "17000px bottom",
    scrub: 1,
  });
  se07_large_img07___.to("#section07 .large .img07", { y: -1731 });

  let se07_large_img08__ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img08__,
    trigger: "#section07",
    start: "15001px top",
    end: "17000px bottom",
    scrub: 1,
  });
  se07_large_img08__.to("#section07 .large .img08", { y: -866 });

  let se07_large_img09 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img09,
    trigger: "#section07",
    start: "15001px top",
    end: "17000px bottom",
    scrub: 1,
  });
  se07_large_img09.to("#section07 .large .img09", { y: 65 });

  let se07_large_img10 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img10,
    trigger: "#section07",
    start: "15001px top",
    end: "17000px bottom",
    scrub: 1,
  });
  se07_large_img10.to("#section07 .large .img10", { y: 871 });

  /* --------------------------------------- */

  let se07_large_img09_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img09_,
    trigger: "#section07",
    start: "17001px top",
    end: "19000px bottom",
    scrub: 1,
  });
  se07_large_img09_.to("#section07 .large .img09", { y: -757 });

  let se07_large_img10_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img10_,
    trigger: "#section07",
    start: "17001px top",
    end: "19000px bottom",
    scrub: 1,
  });
  se07_large_img10_.to("#section07 .large .img10", { y: 49 });

  /* --------------------------------------- */
  /* --------------------------------------- */

  let se07_large_img09__ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img09__,
    trigger: "#section07",
    start: "19001px top",
    end: "21000px bottom",
    scrub: 1,
  });
  se07_large_img09__.to("#section07 .large .img09", { y: -858 });

  let se07_large_img10__ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_large_img10__,
    trigger: "#section07",
    start: "19001px top",
    end: "21000px bottom",
    scrub: 1,
  });
  se07_large_img10__.to("#section07 .large .img10", { y: -52 });

  /* Shop 04 갤러리 small 밝아지고 획 드러남 */
  let se07_small_img01 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img01,
    trigger: "#section07",
    start: "1000px top",
    end: "2000px bottom",
    scrub: 1,
  });
  se07_small_img01.to("#section07 .small .img01", {
    filter: "brightness(0.5)",
    border: "0px",
  });

  let se07_small_img02 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img02,
    trigger: "#section07",
    start: "1000px top",
    end: "2000px bottom",
    scrub: 1,
  });
  se07_small_img02.to("#section07 .small .img02", {
    filter: "brightness(1)",
    border: "2px solid #e5e5e5",
    zIndex: 100,
  });

  /* ------------------------------------------------ */

  let se07_small_img02_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img02_,
    trigger: "#section07",
    start: "3000px top",
    end: "4000px bottom",
    scrub: 1,
  });
  se07_small_img02_.to("#section07 .small .img02", {
    filter: "brightness(0.5)",
    border: "0px",
    zIndex: 1,
  });

  let se07_small_img03 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img03,
    trigger: "#section07",
    start: "3000px top",
    end: "4000px bottom",
    scrub: 1,
  });
  se07_small_img03.to("#section07 .small .img03", {
    filter: "brightness(1)",
    border: "2px solid #e5e5e5",
    zIndex: 100,
  });

  /* ------------------------------------------------ */

  let se07_small_img03_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img03_,
    trigger: "#section07",
    start: "5000px top",
    end: "6000px bottom",
    scrub: 1,
  });
  se07_small_img03_.to("#section07 .small .img03", {
    filter: "brightness(0.5)",
    border: "0px",
    zIndex: 1,
  });

  let se07_small_img04 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img04,
    trigger: "#section07",
    start: "5000px top",
    end: "6000px bottom",
    scrub: 1,
  });
  se07_small_img04.to("#section07 .small .img04", {
    filter: "brightness(1)",
    border: "2px solid #e5e5e5",
    zIndex: 100,
  });

  /* ------------------------------------------------ */

  let se07_small_img04_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img04_,
    trigger: "#section07",
    start: "7000px top",
    end: "8000px bottom",
    scrub: 1,
  });
  se07_small_img04_.to("#section07 .small .img04", {
    filter: "brightness(0.5)",
    border: "0px",
    zIndex: 1,
  });

  let se07_small_img05 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img05,
    trigger: "#section07",
    start: "7000px top",
    end: "8000px bottom",
    scrub: 1,
  });
  se07_small_img05.to("#section07 .small .img05", {
    filter: "brightness(1)",
    border: "2px solid #e5e5e5",
    zIndex: 100,
  });

  /* ------------------------------------------------ */

  let se07_small_img05_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img05_,
    trigger: "#section07",
    start: "9000px top",
    end: "10000px bottom",
    scrub: 1,
  });
  se07_small_img05_.to("#section07 .small .img05", {
    filter: "brightness(0.5)",
    border: "0px",
    zIndex: 1,
  });

  let se07_small_img06 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img06,
    trigger: "#section07",
    start: "9000px top",
    end: "10000px bottom",
    scrub: 1,
  });
  se07_small_img06.to("#section07 .small .img06", {
    filter: "brightness(1)",
    border: "2px solid #e5e5e5",
    zIndex: 100,
  });

  /* ------------------------------------------------ */

  let se07_small_img06_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img06_,
    trigger: "#section07",
    start: "11000px top",
    end: "12000px bottom",
    scrub: 1,
  });
  se07_small_img06_.to("#section07 .small .img06", {
    filter: "brightness(0.5)",
    border: "0px",
    zIndex: 1,
  });

  let se07_small_img07 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img07,
    trigger: "#section07",
    start: "11000px top",
    end: "12000px bottom",
    scrub: 1,
  });
  se07_small_img07.to("#section07 .small .img07", {
    filter: "brightness(1)",
    border: "2px solid #e5e5e5",
    zIndex: 100,
  });

  /* ------------------------------------------------ */

  let se07_small_img07_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img07_,
    trigger: "#section07",
    start: "13000px top",
    end: "14000px bottom",
    scrub: 1,
  });
  se07_small_img07_.to("#section07 .small .img07", {
    filter: "brightness(0.5)",
    border: "0px",
    zIndex: 1,
  });

  let se07_small_img08 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img08,
    trigger: "#section07",
    start: "13000px top",
    end: "14000px bottom",
    scrub: 1,
  });
  se07_small_img08.to("#section07 .small .img08", {
    filter: "brightness(1)",
    border: "2px solid #e5e5e5",
    zIndex: 100,
  });

  /* ------------------------------------------------ */

  let se07_small_img08_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img08_,
    trigger: "#section07",
    start: "15000px top",
    end: "16000px bottom",
    scrub: 1,
  });
  se07_small_img08_.to("#section07 .small .img08", {
    filter: "brightness(0.5)",
    border: "0px",
    zIndex: 1,
  });

  let se07_small_img09 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img09,
    trigger: "#section07",
    start: "15000px top",
    end: "16000px bottom",
    scrub: 1,
  });
  se07_small_img09.to("#section07 .small .img09", {
    filter: "brightness(1)",
    border: "2px solid #e5e5e5",
    zIndex: 100,
  });

  /* ------------------------------------------------ */

  let se07_small_img09_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img09_,
    trigger: "#section07",
    start: "17000px top",
    end: "18000px bottom",
    scrub: 1,
  });
  se07_small_img09_.to("#section07 .small .img09", {
    filter: "brightness(0.5)",
    border: "0px",
    zIndex: 1,
  });

  let se07_small_img10 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_small_img10,
    trigger: "#section07",
    start: "17000px top",
    end: "18000px bottom",
    scrub: 1,
  });
  se07_small_img10.to("#section07 .small .img10", {
    filter: "brightness(1)",
    border: "2px solid #e5e5e5",
    zIndex: 100,
  });

  /* -----------------이 밑으로는 배경 텍스트 흘러가기&채워지기---------------------- */

  let se07_bgtext01 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_bgtext01,
    trigger: "#section07",
    start: "1000px top",
    end: "3000px bottom",
    scrub: 1,
  });
  se07_bgtext01.to("#section07 .bgtext", { y: -700 });

  let se07_textfill01 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_textfill01,
    trigger: "#section07",
    start: "1000px top",
    end: "3000px bottom",
    scrub: 1,
  });
  se07_textfill01.to("#section07 .bgtext .text_fill", {
    clipPath: "inset(0% 0% 85% 0%)",
  });

  let se07_bgtext02 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_bgtext02,
    trigger: "#section07",
    start: "3001px top",
    end: "5000px bottom",
    scrub: 1,
  });
  se07_bgtext02.to("#section07 .bgtext", { y: -1400 });

  let se07_textfill02 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_textfill02,
    trigger: "#section07",
    start: "3001px top",
    end: "5000px bottom",
    scrub: 1,
  });
  se07_textfill02.to("#section07 .bgtext .text_fill", {
    clipPath: "inset(0% 0% 77% 0%)",
  });

  let se07_bgtext03 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_bgtext03,
    trigger: "#section07",
    start: "5001px top",
    end: "7000px bottom",
    scrub: 1,
  });
  se07_bgtext03.to("#section07 .bgtext", { y: -2100 });

  let se07_textfill03 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_textfill03,
    trigger: "#section07",
    start: "5001px top",
    end: "7000px bottom",
    scrub: 1,
  });
  se07_textfill03.to("#section07 .bgtext .text_fill", {
    clipPath: "inset(0% 0% 68% 0%)",
  });

  let se07_bgtext04 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_bgtext04,
    trigger: "#section07",
    start: "7001px top",
    end: "9000px bottom",
    scrub: 1,
  });
  se07_bgtext04.to("#section07 .bgtext", { y: -2800 });

  let se07_textfill04 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_textfill04,
    trigger: "#section07",
    start: "7001px top",
    end: "9000px bottom",
    scrub: 1,
  });
  se07_textfill04.to("#section07 .bgtext .text_fill", {
    clipPath: "inset(0% 0% 59% 0%)",
  });

  let se07_bgtext05 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_bgtext05,
    trigger: "#section07",
    start: "9001px top",
    end: "11000px bottom",
    scrub: 1,
  });
  se07_bgtext05.to("#section07 .bgtext", { y: -3500 });

  let se07_textfill05 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_textfill05,
    trigger: "#section07",
    start: "9001px top",
    end: "11000px bottom",
    scrub: 1,
  });
  se07_textfill05.to("#section07 .bgtext .text_fill", {
    clipPath: "inset(0% 0% 48% 0%)",
  });

  let se07_bgtext06 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_bgtext06,
    trigger: "#section07",
    start: "11001px top",
    end: "13000px bottom",
    scrub: 1,
  });
  se07_bgtext06.to("#section07 .bgtext", { y: -4200 });

  let se07_textfill06 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_textfill06,
    trigger: "#section07",
    start: "11001px top",
    end: "13000px bottom",
    scrub: 1,
  });
  se07_textfill06.to("#section07 .bgtext .text_fill", {
    clipPath: "inset(0% 0% 42% 0%)",
  });

  let se07_bgtext07 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_bgtext07,
    trigger: "#section07",
    start: "13001px top",
    end: "15000px bottom",
    scrub: 1,
  });
  se07_bgtext07.to("#section07 .bgtext", { y: -4900 });

  let se07_textfill08 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_textfill08,
    trigger: "#section07",
    start: "13001px top",
    end: "15000px bottom",
    scrub: 1,
  });
  se07_textfill08.to("#section07 .bgtext .text_fill", {
    clipPath: "inset(0% 0% 35% 0%)",
  });

  let se07_bgtext08 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_bgtext08,
    trigger: "#section07",
    start: "15001px top",
    end: "17000px bottom",
    scrub: 1,
  });
  se07_bgtext08.to("#section07 .bgtext", { y: -5600 });

  let se07_textfill09 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_textfill09,
    trigger: "#section07",
    start: "15001px top",
    end: "17000px bottom",
    scrub: 1,
  });
  se07_textfill09.to("#section07 .bgtext .text_fill", {
    clipPath: "inset(0% 0% 27% 0%)",
  });

  let se07_bgtext09 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_bgtext09,
    trigger: "#section07",
    start: "17001px top",
    end: "19000px bottom",
    scrub: 1,
  });
  se07_bgtext09.to("#section07 .bgtext", { y: -6300 });

  let se07_textfill10 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_textfill10,
    trigger: "#section07",
    start: "17001px top",
    end: "19000px bottom",
    scrub: 1,
  });
  se07_textfill10.to("#section07 .bgtext .text_fill", {
    clipPath: "inset(0% 0% 0% 0%)",
  });

  let se07_bgtext10 = gsap.timeline();
  ScrollTrigger.create({
    animation: se07_bgtext10,
    trigger: "#section07",
    start: "19001px top",
    end: "21000px bottom",
    scrub: 1,
  });
  se07_bgtext10.to("#section07 .bgtext", { y: -6400 });

  /* ------------------------------------ */
  /* -----------Others 01 FIX------------ */
  gsap.to("#section08 .fix_this_08", {
    scrollTrigger: {
      trigger: "#section08 .trigger_this_08",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  /* Others 01 가로로 이동 */
  let se08_xScroll = gsap.timeline();
  ScrollTrigger.create({
    animation: se08_xScroll,
    trigger: "#section08",
    start: "1000px top",
    end: "11000px bottom",
    scrub: 1,
  });
  se08_xScroll.to("#section08 .xScroll", { x: -7680 });

  /* Others 01 배경색 변하기 */
  let se08_bg01 = gsap.timeline();
  ScrollTrigger.create({
    animation: se08_bg01,
    trigger: "#section08",
    start: "1500px top",
    end: "2800px bottom",
    scrub: 3,
  });
  se08_bg01.to("#section08 .fix_this_08", { backgroundColor: "#2e151a" });

  let se08_bg02 = gsap.timeline();
  ScrollTrigger.create({
    animation: se08_bg02,
    trigger: "#section08",
    start: "2800px top",
    end: "4300px bottom",
    scrub: 3,
  });
  se08_bg02.to("#section08 .fix_this_08", { backgroundColor: "#29262e" });

  let se08_bg03 = gsap.timeline();
  ScrollTrigger.create({
    animation: se08_bg03,
    trigger: "#section08",
    start: "4300px top",
    end: "6400px bottom",
    scrub: 3,
  });
  se08_bg03.to("#section08 .fix_this_08", { backgroundColor: "#181d2e" });

  let se08_bg04 = gsap.timeline();
  ScrollTrigger.create({
    animation: se08_bg04,
    trigger: "#section08",
    start: "7100px top",
    end: "8600px bottom",
    scrub: 3,
  });
  se08_bg04.to("#section08 .fix_this_08", { backgroundColor: "#252d22" });

  let se08_bg05 = gsap.timeline();
  ScrollTrigger.create({
    animation: se08_bg05,
    trigger: "#section08",
    start: "10000px top",
    end: "12000px bottom",
    scrub: 3,
  });
  se08_bg05.to("#section08 .fix_this_08", { backgroundColor: "#0d0c0c" });

  /* Others2 다른제품들 구동 */
  $("#section09 .img")
  .mouseenter(function () {
    $("#section09 .shortcut").addClass("on");
  })
  .mouseleave(function () {
    $("#section09 .shortcut").removeClass("on");
  });

  let se09_move01 = gsap.timeline();
  ScrollTrigger.create({
    animation: se09_move01,
    trigger: "#section09",
    start: "-500px top",
    end: "1000px bottom",
    scrub: 1,
  });
  se09_move01.to(
    "#section09 .products .product01 .img",
    { clipPath: "inset(0% 0% 0% 0%)" },
    0
  );
  se09_move01.to("#section09 .products .product01 .img img", { scale: 1 }, 0);

  let se09_move02 = gsap.timeline();
  ScrollTrigger.create({
    animation: se09_move02,
    trigger: "#section09",
    start: "-500px top",
    end: "1000px bottom",
    scrub: 1,
  });
  se09_move02.to(
    "#section09 .products .product02 .img",
    { clipPath: "inset(0% 0% 0% 0%)" },
    0
  );
  se09_move02.to("#section09 .products .product02 .img img", { scale: 1 }, 0);

  let se09_move03 = gsap.timeline();
  ScrollTrigger.create({
    animation: se09_move03,
    trigger: "#section09",
    start: "0px top",
    end: "1500px bottom",
    scrub: 1,
  });
  se09_move03.to(
    "#section09 .products .product03 .img",
    { clipPath: "inset(0% 0% 0% 0%)" },
    0
  );
  se09_move03.to("#section09 .products .product03 .img img", { scale: 1 }, 0);

  let se09_move04 = gsap.timeline();
  ScrollTrigger.create({
    animation: se09_move04,
    trigger: "#section09",
    start: "0px top",
    end: "1500px bottom",
    scrub: 1,
  });
  se09_move04.to(
    "#section09 .products .product04 .img",
    { clipPath: "inset(0% 0% 0% 0%)" },
    0
  );
  se09_move04.to("#section09 .products .product04 .img img", { scale: 1 }, 0);

  let se09_move05 = gsap.timeline();
  ScrollTrigger.create({
    animation: se09_move05,
    trigger: "#section09",
    start: "800px top",
    end: "2300px bottom",
    scrub: 1,
  });
  se09_move05.to(
    "#section09 .products .product05 .img",
    { clipPath: "inset(0% 0% 0% 0%)" },
    0
  );
  se09_move05.to("#section09 .products .product05 .img img", { scale: 1 }, 0);

  let se09_move06 = gsap.timeline();
  ScrollTrigger.create({
    animation: se09_move06,
    trigger: "#section09",
    start: "800px top",
    end: "2300px bottom",
    scrub: 1,
  });
  se09_move06.to(
    "#section09 .products .product06 .img",
    { clipPath: "inset(0% 0% 0% 0%)" },
    0
  );
  se09_move06.to("#section09 .products .product06 .img img", { scale: 1 }, 0);

  let se09_move07 = gsap.timeline();
  ScrollTrigger.create({
    animation: se09_move07,
    trigger: "#section09",
    start: "1500px top",
    end: "3000px bottom",
    scrub: 1,
  });
  se09_move07.to(
    "#section09 .products .product07 .img",
    { clipPath: "inset(0% 0% 0% 0%)" },
    0
  );
  se09_move07.to("#section09 .products .product07 .img img", { scale: 1 }, 0);

  let se09_move08 = gsap.timeline();
  ScrollTrigger.create({
    animation: se09_move08,
    trigger: "#section09",
    start: "1500px top",
    end: "3000px bottom",
    scrub: 1,
  });
  se09_move08.to(
    "#section09 .products .product08 .img",
    { clipPath: "inset(0% 0% 0% 0%)" },
    0
  );
  se09_move08.to("#section09 .products .product08 .img img", { scale: 1 }, 0);

  let se09_move09 = gsap.timeline();
  ScrollTrigger.create({
    animation: se09_move09,
    trigger: "#section09",
    start: "2300px top",
    end: "3800px bottom",
    scrub: 1,
  });
  se09_move09.to(
    "#section09 .products .product09 .img",
    { clipPath: "inset(0% 0% 0% 0%)" },
    0
  );
  se09_move09.to("#section09 .products .product09 .img img", { scale: 1 }, 0);

  let se09_move10 = gsap.timeline();
  ScrollTrigger.create({
    animation: se09_move10,
    trigger: "#section09",
    start: "2300px top",
    end: "3800px bottom",
    scrub: 1,
  });
  se09_move10.to(
    "#section09 .products .product10 .img",
    { clipPath: "inset(0% 0% 0% 0%)" },
    0
  );
  se09_move10.to("#section09 .products .product10 .img img", { scale: 1 }, 0);

  /* Others2 콜라보레이션 FIX*/
  gsap.to("#section10 .fix_this", {
    scrollTrigger: {
      trigger: "#section10 .trigger_this",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  /* Others2 콜라보레이션 숨겨진 이미지 왼쪽으로 이동*/
  let se10_img = gsap.timeline();
  ScrollTrigger.create({
    animation: se10_img,
    trigger: "#section10",
    start: "980px top",
    end: "1960px bottom",
    scrub: 2,
  });
  se10_img.to("#section10 .position01 .img02", { zIndex: 100, x: -301 });

  let se10_bgimg = gsap.timeline();
  ScrollTrigger.create({
    animation: se10_bgimg,
    trigger: "#section10",
    start: "980px top",
    end: "1960px bottom",
    scrub: 2,
  });
  se10_bgimg.to("#section10 .bgimg02", { zIndex: 100, x: "-100vw" });

  /* Others2 콜라보레이션 제목텍스트 왼쪽으로 이동*/
  let se10_title = gsap.timeline();
  ScrollTrigger.create({
    animation: se10_title,
    trigger: "#section10",
    start: "980px top",
    end: "1960px bottom",
    scrub: 2,
  });
  se10_title.to("#section10 .position01 .title", { x: -544 });

  let se10_title01 = gsap.timeline();
  ScrollTrigger.create({
    animation: se10_title01,
    trigger: "#section10",
    start: "980px top",
    end: "1960px bottom",
    scrub: 2,
  });
  se10_title01.to("#section10 .position01 .title01", {
    filter: "brightness(0.2)",
  });

  let se10_title02 = gsap.timeline();
  ScrollTrigger.create({
    animation: se10_title02,
    trigger: "#section10",
    start: "980px top",
    end: "1960px bottom",
    scrub: 2,
  });
  se10_title02.to("#section10 .position01 .title02", {
    filter: "brightness(1)",
  });

  /* Others2 콜라보레이션 위로 올라가고 영상 밝아지기*/
  let se10_scrollup = gsap.timeline();
  ScrollTrigger.create({
    animation: se10_scrollup,
    trigger: "#section10",
    start: "1970px top",
    end: "2940px bottom",
    scrub: 2,
  });
  se10_scrollup.to("#section10 .bgimg", {
    top: "442px",
  });

  let se10_scrollup2 = gsap.timeline();
  ScrollTrigger.create({
    animation: se10_scrollup2,
    trigger: "#section10",
    start: "1970px top",
    end: "3500px bottom",
    scrub: 3,
  });
  se10_scrollup2.to("#section10 .position01", {
    y: -innerHeight,
    zIndex: 0,
  });

  let se10_movie = gsap.timeline();
  ScrollTrigger.create({
    animation: se10_movie,
    trigger: "#section10",
    start: "1970px top",
    end: "3500px bottom",
    scrub: 1,
  });
  se10_movie.to("#section10 .bgimg", {
    filter: "brightness(1)",
  });

  /* 영상 사라지면서 올라감 */
  let se10_movie_ = gsap.timeline();
  ScrollTrigger.create({
    animation: se10_movie_,
    trigger: "#section10",
    start: "3800px top",
    end: "4500px bottom",
    scrub: 2,
  });
  se10_movie_.to("#section10 .bgimg", {
    opacity: 0,
    y: -738,
  });

  /* Others3 인스타그램 FIX*/
  gsap.to("#section11 .fix_this", {
    scrollTrigger: {
      trigger: "#section11 .trigger_this",
      start: "top top",
      end: "bottom bottom",
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
  });

  /* Others3 인스타그램 이미지 가로로 이동 */
  let se11_img = gsap.timeline();
  ScrollTrigger.create({
    animation: se11_img,
    trigger: "#section11",
    start: "1000px top",
    end: "18000px bottom",
    scrub: 1,
  });
  se11_img.to("#section11 .img", {
    x: -10000,
  });

  /* Others3 인스타그램 페이드아웃 */
  let se11_fade = gsap.timeline();
  ScrollTrigger.create({
    animation: se11_fade,
    trigger: "#section11",
    start: "18000px top",
    end: "19000px bottom",
    scrub: 2,
  });
  se11_fade.to("#section11 .position", {
    opacity: 0,
    y: -200,
  });

  /*Others4 마무리 텍스트 롤링*/
  gsap.to("#section12 .rollingtext .inner", {
    x: -5024,

    repeat: -1, //반복
    duration: 50, //속도
    ease: "none",
  });

  /*Others4 마무리 이미지 살짝 움직이기*/
  let se12_img = gsap.timeline();
  ScrollTrigger.create({
    animation: se12_img,
    trigger: "#section12",
    start: "100px top",
    end: "800px bottom",
    scrub: 2,
  });
  se12_img.to("#section12 .img", {
    y: -30,
  });

  /*Others4 마무리 텍스트 낱개로 제자리로 돌아오기*/
  let se12_text = gsap.timeline();
  ScrollTrigger.create({
    animation: se12_text,
    trigger: "#section12",
    start: "-800px top",
    end: "700px bottom",
    scrub: 2,
  });
  se12_text.to("#section12 .letter", {
    y: -30,
  });





});
