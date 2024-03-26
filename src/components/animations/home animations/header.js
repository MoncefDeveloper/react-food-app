import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const headerAnimation = (myHeaderSection) => {
  const [textWithImage, bottom] = myHeaderSection.children;
  const [text, image] = textWithImage.children;

  let mm = gsap.matchMedia();

  // ------------------------------------- tetx with image animation -------------------------------------
  // desktop
  mm.add("(min-width: 500px)", () => {
    const tl = gsap.timeline();

    tl.staggerFromTo(
      [...text.children],
      1,
      {
        xPercent: -100,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        ease: "power4.out",
      },
      0.2
    ).fromTo(
      image,
      2,
      {
        xPercent: 100,
        opacity: 0,
      },
      {
        xPercent: 0,
        opacity: 1,
        ease: "power4.out",
      },
      "<.5"
    );
  });

  //   mobile
  mm.add("(max-width: 500px)", () => {
    const tl = gsap.timeline();

    tl.fromTo(
      image,
      2,
      {
        y: "50px",
        scale: 0.5,
        opacity: 0,
      },
      {
        y: "0px",
        scale: 1,
        opacity: 1,
        ease: "power4.out",
      }
    ).staggerFromTo(
      [...text.children],
      1,
      {
        yPercent: -100,
        opacity: 0,
      },
      {
        yPercent: 0,
        opacity: 1,
        ease: "power4.out",
      },
      0.2,
      "<.7"
    );
  });

  const secondAniamtion = gsap.to(textWithImage, 1, {
    borderRadius: "30px",
    scale: 0.9,
    // ease:"power4.out"
  });

  ScrollTrigger.create({
    trigger: textWithImage,
    start: "1% top",
    end: "bottom center",
    animation: secondAniamtion,
    scrub: 1.2,
  });

  // ------------------------------------- bottom animation -------------------------------------
  // desktop
  const bottomAnimation = gsap.fromTo(
    bottom,
    1,
    {
      yPercent: 100,
      opacity: 0,
    },
    {
      yPercent: 0,
      opacity: 1,
      ease: "power4.out",
    }
  );

  ScrollTrigger.create({
    trigger: bottom,
    start: "top bottom",
    animation: bottomAnimation,
  });

  const bottomSecondAniamtion = gsap.to(bottom, 1, {
    borderRadius: "0",
    scale: 1,
    // ease:"power4.out"
  });

  ScrollTrigger.create({
    trigger: bottom,
    start: "top bottom",
    end: "bottom bottom",
    animation: bottomSecondAniamtion,
    scrub: 1.2,
  });

  //   ScrollTrigger.create(scrollTriggerConfig);

  ScrollTrigger.refresh();
};
