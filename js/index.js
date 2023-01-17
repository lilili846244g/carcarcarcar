gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const sections = gsap.utils.toArray(".ts-hero__sections");
const navLinks = gsap.utils.toArray("nav ul li a ");
navLinks.forEach((link, i) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    /*    navLinks.forEach((item) => {
      item.addEventListener("click", function (e) {
        for (var i = 0; i < navLinks.length; i++) {
          navLinks[i].classList.remove("ts-active");
        }
        this.classList.add("ts-active");
      });
    }); */

    gsap.to(window, { scrollTo: i * innerHeight });
    document.getElementById(`ts-section-${i}`).classList.add("ts-active");
    gsap.to(`#ts-section-${i + 1}`, { scale: 1.2 });
  });
});
/* const boxs = gsap.utils.toArray(".ts-hero__sections");

boxs.forEach((boxs, i) => {
  ScrollTrigger.create({
    start: 0,
    end: (i + 1) * innerHeight - innerHeight / 2,
    markers: true,
    onLeave: () => {
      navLinks.forEach((e) => {
        e.classList.remove("ts-active");
      });
      navLinks[i].classList.add("ts-active");
      if (navLinks[i + 1]) {
        gsap.to(navLinks[i + 1], { scale: 1.5 });
        gsap.to(navLinks[i], { scale: 1 });
      }
    },
    onEnterBack: () => {
      navLinks.forEach((e) => {
        e.classList.remove("ts-active");
      });
      navLinks[i].classList.add("ts-active");
      gsap.to(navLinks[i], { scale: 1.5 });
      if (navLinks[i + 1]) {
        gsap.to(navLinks[i + 1], { scale: 1 });
      }
    },
  });
}); */

let tsAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".ts-hero",
    pin: true,
    start: "top top",
    end: () => "+=" + innerHeight * sections.length,
    scrub: 4,
    markers: true,
  },
});

// =================== section 1 ==========================
tsAnimation.fromTo(
  ".cityskylines",
  1,
  {
    x: 0,
  },
  {
    x: 100,
  }
);
tsAnimation.from(
  ".wheel",
  {
    rotation: "360",
    duration: 2,
    ease: "none",
  },
  "-1"
);
tsAnimation.from(
  ".ts-text-con h1",
  {
    y: -100,
    opacity: 0,
    duration: 0.3,
  },
  "-1"
);
tsAnimation.from(
  ".ts-text-con h2",
  {
    y: -100,
    opacity: 0,
    delay: 0.2,
    duration: 0.3,
  },
  "-1"
);
/* tsAnimation.fromTo(
  ".ts-car",
  0.5,
  {
    x: 230,
    scale: 1.2,
  },
  {
    scale: 1,
  }
); */

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

tsAnimation.fromTo(
  ".cityskylines",
  1,
  {
    x: 0,
  },
  {
    x: 100,
  }
);
tsAnimation.from(
  ".wheel",
  {
    rotation: "0",
    duration: 2,
    ease: "none",
  },
  "-=1"
);
tsAnimation.from(".ts-hero__section-2-text", {
  y: -100,
  opacity: 0,
  duration: 1.5,
});

/* tsAnimation.from(".ts-car", {
  x: 100,
  duration: 0.5,
}); */

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

tsAnimation.fromTo(
  ".cityskylines",
  1,
  {
    x: 0,
  },
  {
    x: 100,
  }
);
tsAnimation.from(".wheel", {
  rotation: "360",
  duration: 2,
  ease: "none",
});
tsAnimation.from(
  ".ts-hero__section-3-text",
  {
    y: -100,
    opacity: 0,
    duration: 1.5,
  },
  "-=1"
);
/* tsAnimation.fromTo(
  ".ts-car",
  {
    x: 100,
    rotation: 0,
    duration: 1,
  },
  {
    rotation: 5,
  }
); */

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
  ".cityskylines",
  1,
  {
    x: 0,
  },
  {
    x: 100,
  }
);
tsAnimation.from(
  ".wheel",
  {
    rotation: "0",
    duration: 2,
    ease: "none",
  },
  "-=1"
);
tsAnimation.from(".ts-hero__section-4-text", {
  y: -100,
  opacity: 0,
  duration: 1.5,
});
/* tsAnimation.fromTo(
  ".ts-car",
  {
    x: -100,
    rotation: 5,
    duration: 1,
  },
  {
    rotation: 0,
  }
); */

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

tsAnimation.fromTo(
  ".cityskylines",
  1,
  {
    x: 0,
  },
  {
    x: 100,
  }
);
tsAnimation.from(
  ".wheel",
  {
    rotation: "360",
    duration: 2,
    ease: "none",
  },
  "-=1"
);
tsAnimation.from(".ts-hero__section-5-text", {
  y: -100,

  opacity: 0,
  duration: 1.5,
});
/* tsAnimation.from(".ts-car", {
  x: 300,
  duration: 1,
}); */
tsAnimation.to(
  ".ts-body",
  {
    duration: 1,
    backgroundColor: "rgb(68,142,193)",
  },
  "-=1"
);
