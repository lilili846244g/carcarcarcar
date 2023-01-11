gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = gsap.utils.toArray(".ts-hero__sections");

let tsAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".ts-hero",
    pin: true,
    start: "top top",
    end: () => "+=" + innerHeight * sections.length,
    scrub: true,
    markers: true,
  },
});
sections.forEach(function (e, i) {
  tsAnimation.fromTo(
    e,
    {
      yPercent: 100,
    },
    {
      yPercent: 0,
    },
    i
  );
});

gsap.utils.toArray("li a").forEach((a, i) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    gsap.to(window, { scrollTo: i * innerHeight });
  });
});

// =================== section 1 ==========================

tsAnimation.add(function () {
  // add class
  let link1 = document.getElementById("ts-section-1");
  link1.classList.add("ts-active");
  // remove class
  let link2 = document.getElementById("ts-section-2");
  link2.classList.remove("ts-active");

  /* img-scale*/
  let scale1 = document.getElementById("ts-section-img-1");
  scale1.classList.add("img-scale");

  let scale2 = document.getElementById("ts-section-img-2");
  scale2.classList.remove("img-scale");
});
tsAnimation.from(".ts-text-con h1", {
  y: -100,
  opacity: 0,
  duration: 0.3,
});
tsAnimation.from(".ts-text-con h2", {
  y: -100,
  opacity: 0,
  delay: 0.2,
  duration: 0.3,
});
tsAnimation.fromTo(
  ".ts-car",
  0.5,
  {
    x: 230,
    scale: 1.2,
  },
  {
    scale: 1,
  }
);

tsAnimation.to(
  ".ts-body",
  {
    duration: 2,
    backgroundColor: "rgb(255, 215, 46)",
  },
  "-=1"
);

tsAnimation.to(".ts-hero__section-1", { opacity: 0 });

tsAnimation.to(".ts-hero__section-1", { display: "none", duration: 0 });

// =================== section 2 ==========================

tsAnimation.add(function () {
  // add class
  let link2 = document.getElementById("ts-section-2");
  link2.classList.add("ts-active");
  // remove class
  let link1 = document.getElementById("ts-section-1");
  link1.classList.remove("ts-active");
  let link3 = document.getElementById("ts-section-3");
  link3.classList.remove("ts-active");
  /* img-scale*/
  let scale2 = document.getElementById("ts-section-img-2");
  scale2.classList.add("img-scale");
  let scale1 = document.getElementById("ts-section-img-1");
  scale1.classList.remove("img-scale");
  let scale3 = document.getElementById("ts-section-img-3");
  scale3.classList.remove("img-scale");

  document.getElementById("ts-section-img-1").src = "./images/car.png";
  document.getElementById("ts-section-img-2").src = "./images/car.png";
  document.getElementById("ts-section-img-3").src = "./images/car.png";
  document.getElementById("ts-section-img-4").src = "./images/car.png";
  document.getElementById("ts-section-img-5").src = "./images/car.png";
});
tsAnimation.from(".ts-hero__section-2-text", {
  y: -100,

  opacity: 0,
  duration: 2,
});

tsAnimation.from(".ts-car", {
  x: 100,
  duration: 0.5,
});

tsAnimation.to(
  ".ts-body",
  {
    duration: 1.5,
    backgroundColor: "rgb(57,59,63)",
  },
  "-=1"
);

tsAnimation.to(".ts-hero__section-2", { opacity: 0 });
tsAnimation.to(".ts-hero__section-2", { display: "none", duration: 0 });

// =================== section 3 ==========================
tsAnimation.add(function () {
  // add class
  let link3 = document.getElementById("ts-section-3");
  link3.classList.add("ts-active");
  // remove class
  let link2 = document.getElementById("ts-section-2");
  link2.classList.remove("ts-active");
  let link4 = document.getElementById("ts-section-4");
  link4.classList.remove("ts-active");

  /* img-scale*/
  let scale3 = document.getElementById("ts-section-img-3");
  scale3.classList.add("img-scale");
  let scale2 = document.getElementById("ts-section-img-2");
  scale2.classList.remove("img-scale");
  let scale4 = document.getElementById("ts-section-img-4");
  scale4.classList.remove("img-scale");

  document.getElementById("ts-section-img-1").src = "./images/logo-1.png";
  document.getElementById("ts-section-img-2").src = "./images/logo-1.png";
  document.getElementById("ts-section-img-3").src = "./images/logo-1.png";
  document.getElementById("ts-section-img-4").src = "./images/logo-1.png";
  document.getElementById("ts-section-img-5").src = "./images/logo-1.png";
});

tsAnimation.from(".ts-hero__section-3-text", {
  y: -100,
  opacity: 0,
  duration: 1.5,
});
tsAnimation.fromTo(
  ".ts-car",
  {
    x: 100,
    rotation: 0,
    duration: 1,
  },
  {
    rotation: 5,
  }
);

tsAnimation.to(
  ".ts-body",
  {
    duration: 1,
    backgroundColor: "rgb(59,94,155)",
  },
  "-=1"
);

tsAnimation.to(".ts-hero__section-3", { opacity: 0 });
tsAnimation.to(".ts-hero__section-3", { display: "none", duration: 0 });

// =================== section 4 ==========================

tsAnimation.add(function () {
  // add class
  let link4 = document.getElementById("ts-section-4");
  link4.classList.add("ts-active");
  // remove class
  let link3 = document.getElementById("ts-section-3");
  link3.classList.remove("ts-active");
  let link5 = document.getElementById("ts-section-5");
  link5.classList.remove("ts-active");

  /* img-scale*/
  let scale4 = document.getElementById("ts-section-img-4");
  scale4.classList.add("img-scale");
  let scale3 = document.getElementById("ts-section-img-3");
  scale3.classList.remove("img-scale");
  let scale5 = document.getElementById("ts-section-img-5");
  scale5.classList.remove("img-scale");
});
tsAnimation.from(".ts-hero__section-4-text", {
  y: -100,
  opacity: 0,
  duration: 1.5,
});
tsAnimation.fromTo(
  ".ts-car",
  {
    x: -100,
    rotation: 5,
    duration: 1,
  },
  {
    rotation: 0,
  }
);

tsAnimation.to(
  ".ts-body",
  {
    duration: 1,
    backgroundColor: "rgb(68,142,193)",
  },
  "-=1"
);

tsAnimation.to(".ts-hero__section-4", { opacity: 0 });
tsAnimation.to(".ts-hero__section-4", { display: "none", duration: 0 });

// =================== section 5 ==========================

tsAnimation.add(function () {
  // add class
  let link5 = document.getElementById("ts-section-5");
  link5.classList.add("ts-active");
  // remove class
  let link4 = document.getElementById("ts-section-4");
  link4.classList.remove("ts-active");

  /* img-scale*/
  let scale5 = document.getElementById("ts-section-img-5");
  scale5.classList.add("img-scale");
  let scale4 = document.getElementById("ts-section-img-4");
  scale4.classList.remove("img-scale");
});
tsAnimation.from(".ts-hero__section-5-text", {
  y: -100,

  opacity: 0,
  duration: 1.5,
});
tsAnimation.from(".ts-car", {
  x: 300,
  duration: 1,
});
tsAnimation.to(
  ".ts-body",
  {
    duration: 1,
    backgroundColor: "rgb(68,142,193)",
  },
  "-=1"
);

/*tsAnimation.to(".ts-hero__section-5", { opacity: 0 });
tsAnimation.to(".ts-hero__section-5", { display: "none", duration: 0 });*/

// =================== section 5 ==========================

/*tsAnimation.from(".ts-car", {
  x: 100,
  duration: 1,
});

tsAnimation.from(".ts-hero__section-6-block", {
  y: -100,
  duration: 1,
  opacity: 0,
});
tsAnimation.from(".ts-hero__section-6-text", {
  y: -100,
  duration: 1,
  opacity: 0,
});
tsAnimation.to(
  ".ts-body",
  {
    duration: 1,
    backgroundColor: "rgb(200, 200, 200)",
  },
  "-=1"
);*/
