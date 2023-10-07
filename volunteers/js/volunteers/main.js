document.addEventListener("DOMContentLoaded", () => {

  function firstSection() {
    const hero = document.querySelector('.first-section');

    if (hero) {
      gsap.registerPlugin(ScrollTrigger);
      gsap.to(hero, {
        scrollTrigger: {
          trigger: hero,
          start: '1800 bottom',
          scrub: true,
        },
        opacity: 0,
      })
    }
  }
  firstSection();
});

