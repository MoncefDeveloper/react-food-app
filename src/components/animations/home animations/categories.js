import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const categoriesAnimation = (myCategoriesSection) => {
  console.log(myCategoriesSection.children);
  const tl = gsap.timeline();

  tl.staggerFromTo(
    [
      ...myCategoriesSection.children[0].children,
      ...myCategoriesSection.children[1].children,
    ],
    0.5,
    { scale: 0.3, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      ease: "power4.out",
      stagger: {
        from: "random",
        each: 0.1,
      },
    }
  );

  ScrollTrigger.create({
    trigger: myCategoriesSection,
    start: "top 80%",
    animation: tl,
  });
};
