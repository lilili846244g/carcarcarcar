gsap.registerPlugin(ScrollTrigger);

let sections = document.querySelectorAll(".ts-hero__sections");

let totalContainer = sections.length;

var tsAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".ts-hero",
    pin: true,
    start: "top top",
    end: window.innerHeight * totalContainer,
    scrub: true,
    markers: true,
  },
});
tsAnimation.from(".ts-text-con h1", {
  y: -100,
  opacity: 0,
  duration: 1,
});
tsAnimation.from(".ts-text-con h2", {
  y: -100,
  opacity: 0,
  delay: 0.5,
  duration: 1,
});
tsAnimation.fromTo(
  ".ts-car",
  2,
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
    duration: 1,
    backgroundColor: "rgb(255, 215, 46)",
  },
  "-=1"
);

tsAnimation.to(".ts-hero__section-1", { opacity: 0 });

tsAnimation.to(".ts-hero__section-1", { display: "none", duration: 0 });

// =================== section 2 ==========================

tsAnimation.from(".ts-car", {
  x: 100,
  duration: 1,
});

tsAnimation.from(".ts-hero__section-2-text", {
  y: -100,
  duration: 1,
  opacity: 0,
});
tsAnimation.from(".ts-hero__section-2-block", {
  y: -100,
  duration: 1,
  opacity: 0,
});
tsAnimation.to(
  ".ts-body",
  {
    duration: 2,
    backgroundColor: "rgb(57,59,63)",
  },
  "-=1"
);

tsAnimation.to(".ts-hero__section-2", { opacity: 0 });
tsAnimation.to(".ts-hero__section-2", { display: "none", duration: 0 });

// =================== section 3 ==========================

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

tsAnimation.from(".ts-hero__section-3-block", {
  y: -100,
  duration: 1,
  opacity: 0,
});

tsAnimation.from(".ts-hero__section-3-text", {
  y: -100,
  duration: 1,
  opacity: 0,
});
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

tsAnimation.from(".ts-hero__section-4-block", {
  y: -100,
  duration: 1,
  opacity: 0,
});
tsAnimation.from(".ts-hero__section-4-text", {
  y: -100,
  duration: 1,
  opacity: 0,
});
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

tsAnimation.from(".ts-car", {
  x: 300,
  duration: 1,
});

tsAnimation.from(".ts-hero__section-5-block", {
  y: -100,
  duration: 1,
  opacity: 0,
});
tsAnimation.from(".ts-hero__section-5-text", {
  y: -100,
  duration: 1,
  opacity: 0,
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
