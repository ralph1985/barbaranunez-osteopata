import { canAnimate, getPrefersReducedMotion } from "./dom.js";

export function initHeroAnimation({ anime }) {
  const hero = document.querySelector("[data-hero]");
  const heroItems = document.querySelectorAll("[data-hero-item]");
  const heroMedia = document.querySelector("[data-hero-media]");

  if (!canAnimate(anime) || !hero || !heroItems.length || !heroMedia) return;

  if (getPrefersReducedMotion()) {
    [...heroItems, heroMedia].forEach((element) => {
      element.style.opacity = "1";
      element.style.transform = "none";
      element.style.clipPath = "none";
    });
    return;
  }

  heroItems.forEach((item) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(22px)";
  });
  heroMedia.style.opacity = "0";
  heroMedia.style.transform = "translateY(34px) scale(0.96)";
  heroMedia.style.clipPath = "inset(12% 0 12% 0 round 0.5rem)";

  anime.animate(heroItems, {
    opacity: 1,
    y: 0,
    duration: 720,
    ease: "outCubic",
    delay: (_target, index) => 90 + index * 85,
  });

  anime.animate(heroMedia, {
    opacity: 1,
    y: 0,
    scale: 1,
    clipPath: "inset(0% 0 0% 0 round 0.5rem)",
    duration: 1080,
    ease: "outCubic",
    delay: 360,
  });
}
