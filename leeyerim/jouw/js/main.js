window.onload = function () {
  setTimeout(function () {
    scrollTo(0, 0);
  }, 100);
};

/* --------------------------------------------------------- */

let se02_bg = gsap.timeline();
ScrollTrigger.create({
  animation: se02_bg,
  trigger: "#section02",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se02_bg.to(".wrapbg", { opacity: 1 });

let se02_overview = gsap.timeline();
ScrollTrigger.create({
  animation: se02_overview,
  trigger: "#section02",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se02_overview.to("#section02 .overview", { opacity: 1 , y: 0 });

/* --------------------------------------------------------- */

let se03_research = gsap.timeline();
ScrollTrigger.create({
  animation: se03_research,
  trigger: "#section03",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se03_research.to("#section03 .research", { opacity: 1 , y: 0 });

let se03_graph02 = gsap.timeline();
ScrollTrigger.create({
  animation: se03_graph02,
  trigger: "#section03",
  start: "-600px top",
  end: "500px bottom",
  scrub: 3,
});
se03_graph02.to("#section03 .graph02", { opacity: 1 }, 0.5);

let se03_circle = gsap.timeline();
ScrollTrigger.create({
  animation: se03_circle,
  trigger: "#section03",
  start: "-600px top",
  end: "500px bottom",
  scrub: 3,
});
se03_circle.to("#section03 .circle01", { opacity: 1, scale: 1 }, 0.5);
se03_circle.to("#section03 .circle02", { opacity: 1, scale: 1 }, 0.7);

let se03_article = gsap.timeline();
ScrollTrigger.create({
  animation: se03_article,
  trigger: "#section03",
  start: "-600px top",
  end: "500px bottom",
  scrub: 3,
});
se03_article.to("#section03 .article", { opacity: 1, y: 0 }, 1);

let se03_company = gsap.timeline();
ScrollTrigger.create({
  animation: se03_company,
  trigger: "#section03",
  start: "-600px top",
  end: "500px bottom",
  scrub: 3,
});
se03_company.to("#section03 .company", { clipPath: "inset(0% 0% 0% 0%)" }, 1.5);

/* --------------------------------------------------------- */

let se04_persona = gsap.timeline();
ScrollTrigger.create({
  animation: se04_persona,
  trigger: "#section04",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se04_persona.to("#section04 .persona", { opacity: 1 , y: 0 });

let se04_users01 = gsap.timeline();
ScrollTrigger.create({
  animation: se04_users01,
  trigger: "#section04",
  start: "-600px top",
  end: "500px bottom",
  scrub: 3,
});
se04_users01.to("#section04 .users01", { opacity: 1 , x: 0 });

let se04_users02 = gsap.timeline();
ScrollTrigger.create({
  animation: se04_users02,
  trigger: "#section04",
  start: "-600px top",
  end: "500px bottom",
  scrub: 3,
});
se04_users02.to("#section04 .users02", { opacity: 1 , x: 0 });

let se04_users03 = gsap.timeline();
ScrollTrigger.create({
  animation: se04_users03,
  trigger: "#section04",
  start: "-600px top",
  end: "500px bottom",
  scrub: 3,
});
se04_users03.to("#section04 .users03", { opacity: 1 , x: 0 });

let se04_users04 = gsap.timeline();
ScrollTrigger.create({
  animation: se04_users04,
  trigger: "#section04",
  start: "-600px top",
  end: "500px bottom",
  scrub: 3,
});
se04_users04.to("#section04 .users04", { opacity: 1 , x: 0 });

let se04_shadow = gsap.timeline();
ScrollTrigger.create({
  animation: se04_shadow,
  trigger: "#section04",
  start: "-600px top",
  end: "500px bottom",
  scrub: 3,
});
se04_shadow.to("#section04 .shadow", { opacity: 1 }, 1);

/* --------------------------------------------------------- */

let se05_style = gsap.timeline();
ScrollTrigger.create({
  animation: se05_style,
  trigger: "#section05",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se05_style.to("#section05 .style", { opacity: 1 , y: 0 });

let se05_bg = gsap.timeline();
ScrollTrigger.create({
  animation: se05_bg,
  trigger: "#section05",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se05_bg.to(".wrapbg2", { opacity: 1 });

/* --------------------------------------------------------- */

let se06_gridsystem = gsap.timeline();
ScrollTrigger.create({
  animation: se06_gridsystem,
  trigger: "#section06",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se06_gridsystem.to("#section06 .gridsystem", { opacity: 1 , y: 0 });

let se06_grid = gsap.timeline();
ScrollTrigger.create({
  animation: se06_grid,
  trigger: "#section06",
  start: "-600px top",
  end: "500px bottom",
  scrub: 3,
});
se06_grid.to("#section06 .grid", { clipPath: "inset(0% 0% 0% 0%)" , opacity : 1 }, 0.2);

/* --------------------------------------------------------- */

let se07_main = gsap.timeline();
ScrollTrigger.create({
  animation: se07_main,
  trigger: "#section07",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se07_main.to("#section07 .main", { opacity: 1 , y: 0 });

let se07_main02 = gsap.timeline();
ScrollTrigger.create({
  animation: se07_main02,
  trigger: "#section07",
  start: "400px top",
  end: "1000px bottom",
  scrub: 2,
});
se07_main02.to("#section07 .main02", { opacity: 1 , x: 0 });

let se07_mobile01 = gsap.timeline();
ScrollTrigger.create({
  animation: se07_mobile01,
  trigger: "#section07",
  start: "400px top",
  end: "1000px bottom",
  scrub: 2,
});
se07_mobile01.to("#section07 .mobile01", { opacity: 1 , x: 0 });

let se07_main03 = gsap.timeline();
ScrollTrigger.create({
  animation: se07_main03,
  trigger: "#section07",
  start: "1500px top",
  end: "2500px bottom",
  scrub: 2,
});
se07_main03.to("#section07 .main03", { opacity: 1 , x: 0 });

let se07_main04 = gsap.timeline();
ScrollTrigger.create({
  animation: se07_main04,
  trigger: "#section07",
  start: "2600px top",
  end: "3600px bottom",
  scrub: 2,
});
se07_main04.to("#section07 .main04", { opacity: 1 , y: 0 });

let se07_mobile02 = gsap.timeline();
ScrollTrigger.create({
  animation: se07_mobile02,
  trigger: "#section07",
  start: "2600px top",
  end: "3600px bottom",
  scrub: 2,
});
se07_mobile02.to("#section07 .mobile02", { opacity: 1 , x: 0 });

/* --------------------------------------------------------- */

let se08_shop = gsap.timeline();
ScrollTrigger.create({
  animation: se08_shop,
  trigger: "#section08",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se08_shop.to("#section08 .shop", { opacity: 1 , y: 0 });

let se08_line01 = gsap.timeline();
ScrollTrigger.create({
  animation: se08_line01,
  trigger: "#section08",
  start: "-200px top",
  end: "800px bottom",
  scrub: 2,
});
se08_line01.to("#section08 .line01", { opacity: 1 });

let se08_text01 = gsap.timeline();
ScrollTrigger.create({
  animation: se08_text01,
  trigger: "#section08",
  start: "-200px top",
  end: "800px bottom",
  scrub: 2,
});
se08_text01.to("#section08 .text01", { opacity: 1 , x: 0 });

let se08_line02 = gsap.timeline();
ScrollTrigger.create({
  animation: se08_line02,
  trigger: "#section08",
  start: "600px top",
  end: "1600px bottom",
  scrub: 2,
});
se08_line02.to("#section08 .line02", { opacity: 1 });

let se08_text02 = gsap.timeline();
ScrollTrigger.create({
  animation: se08_text02,
  trigger: "#section08",
  start: "600px top",
  end: "1600px bottom",
  scrub: 2,
});
se08_text02.to("#section08 .text02", { opacity: 1 , x: 0 });

let se08_line03 = gsap.timeline();
ScrollTrigger.create({
  animation: se08_line03,
  trigger: "#section08",
  start: "1500px top",
  end: "2500px bottom",
  scrub: 2,
});
se08_line03.to("#section08 .line03", { opacity: 1 });

let se08_text03 = gsap.timeline();
ScrollTrigger.create({
  animation: se08_text03,
  trigger: "#section08",
  start: "1500px top",
  end: "2500px bottom",
  scrub: 2,
});
se08_text03.to("#section08 .text03", { opacity: 1 , x: 0 });

/* --------------------------------------------------------- */

let se08_cart01 = gsap.timeline();
ScrollTrigger.create({
  animation: se08_cart01,
  trigger: "#section08",
  start: "2100px top",
  end: "3000px bottom",
  scrub: 2,
});
se08_cart01.to("#section08 .cart01", { opacity: 1 , x: 0 });

let se08_cart02 = gsap.timeline();
ScrollTrigger.create({
  animation: se08_cart02,
  trigger: "#section08",
  start: "2800px top",
  end: "3500px bottom",
  scrub: 2,
});
se08_cart02.to("#section08 .cart02", { opacity: 1 , x: 0 });

/* --------------------------------------------------------- */

let se09_about = gsap.timeline();
ScrollTrigger.create({
  animation: se09_about,
  trigger: "#section09",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se09_about.to("#section09 .about", { opacity: 1 , y: 0 });

let se09_about01 = gsap.timeline();
ScrollTrigger.create({
  animation: se09_about01,
  trigger: "#section09",
  start: "600px top",
  end: "1500px bottom",
  scrub: 2,
});
se09_about01.to("#section09 .about01", { opacity: 1 , x: 0 });

let se09_about02 = gsap.timeline();
ScrollTrigger.create({
  animation: se09_about02,
  trigger: "#section09",
  start: "600px top",
  end: "1500px bottom",
  scrub: 2,
});
se09_about02.to("#section09 .about02", { opacity: 1 , y: 0 });

let se09_about03 = gsap.timeline();
ScrollTrigger.create({
  animation: se09_about03,
  trigger: "#section09",
  start: "1800px top",
  end: "2500px bottom",
  scrub: 2,
});
se09_about03.to("#section09 .about03", { opacity: 1 , x: 0 });

let se09_addimg = gsap.timeline();
ScrollTrigger.create({
  animation: se09_addimg,
  trigger: "#section09",
  start: "1800px top",
  end: "2500px bottom",
  scrub: 2,
});
se09_addimg.to("#section09 .addimg", { opacity: 1 , x: 0 }, 0.2);

let se09_addtext = gsap.timeline();
ScrollTrigger.create({
  animation: se09_addtext,
  trigger: "#section09",
  start: "1800px top",
  end: "2500px bottom",
  scrub: 2,
});
se09_addtext.to("#section09 .addtext", { opacity: 1 , x: 0 });

/* --------------------------------------------------------- */

let se10_contact = gsap.timeline();
ScrollTrigger.create({
  animation: se10_contact,
  trigger: "#section10",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se10_contact.to("#section10 .contact", { opacity: 1 , y: 0 });

let se10_text01 = gsap.timeline();
ScrollTrigger.create({
  animation: se10_text01,
  trigger: "#section10",
  start: "-600px top",
  end: "500px bottom",
  scrub: 2,
});
se10_text01.to("#section10 .text01", { opacity: 1 , y: 0 }, 0.2);

let se10_contact02 = gsap.timeline();
ScrollTrigger.create({
  animation: se10_contact02,
  trigger: "#section10",
  start: "650px top",
  end: "1000px bottom",
  scrub: 2,
});
se10_contact02.to("#section10 .contact02", { opacity: 1 , x: 0 });

let se10_contact03 = gsap.timeline();
ScrollTrigger.create({
  animation: se10_contact03,
  trigger: "#section10",
  start: "650px top",
  end: "1000px bottom",
  scrub: 2,
});
se10_contact03.to("#section10 .contact03", { opacity: 1 , x: 0 });

/* --------------------------------------------------------- */

let se10_login = gsap.timeline();
ScrollTrigger.create({
  animation: se10_login,
  trigger: "#section10",
  start: "1200px top",
  end: "2000px bottom",
  scrub: 2,
});
se10_login.to("#section10 .login", { opacity: 1 , y: 0 });

let se10_textline = gsap.timeline();
ScrollTrigger.create({
  animation: se10_textline,
  trigger: "#section10",
  start: "1200px top",
  end: "2000px bottom",
  scrub: 2,
});
se10_textline.to("#section10 .textline", { opacity: 1 }, 0.2);

let se10_logintext = gsap.timeline();
ScrollTrigger.create({
  animation: se10_logintext,
  trigger: "#section10",
  start: "1200px top",
  end: "2000px bottom",
  scrub: 2,
});
se10_logintext.to("#section10 .logintext", { opacity: 1 , x: 0 }, 0.2);

/* --------------------------------------------------------- */

let se10_thankstext = gsap.timeline();
ScrollTrigger.create({
  animation: se10_thankstext,
  trigger: "#section10",
  start: "3400px top",
  end: "4000px bottom",
  scrub: 2,
});
se10_thankstext.to("#section10 .thankstext", { opacity: 1 , y: 0 });
