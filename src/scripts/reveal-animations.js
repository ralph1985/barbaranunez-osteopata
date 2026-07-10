import { canAnimate, getPrefersReducedMotion } from "./dom.js";

export function initRevealAnimations({ anime }) {
  if (
    !canAnimate(anime) ||
    getPrefersReducedMotion() ||
    !("IntersectionObserver" in window)
  ) {
    return;
  }

  const revealItems = [
    ...document.querySelectorAll("[data-animate]"),
    ...document.querySelectorAll("[data-animate-group] > *"),
  ];

  if (!revealItems.length) return;

  revealItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(28px) scale(0.99)";
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const element = entry.target;
        const siblings = [...element.parentElement.children].filter((child) =>
          revealItems.includes(child),
        );
        const delay = Math.min(
          Math.max(siblings.indexOf(element), 0) * 65,
          320,
        );

        observer.unobserve(element);
        anime.animate(element, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 680,
          ease: "outCubic",
          delay,
        });
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.14,
    },
  );

  revealItems.forEach((item) => observer.observe(item));
}
