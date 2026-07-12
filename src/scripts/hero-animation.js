import { canAnimate, getPrefersReducedMotion } from "./dom.js";

export function initHeroAnimation({ anime }) {
  const hero = document.querySelector("[data-hero]");
  const heroItems = document.querySelectorAll("[data-hero-item]");
  const heroMedia = document.querySelector("[data-hero-media]");
  const waterScene = document.querySelector("[data-water-scene]");

  if (!canAnimate(anime) || !hero || !heroItems.length || !heroMedia) return;

  if (getPrefersReducedMotion()) {
    [...heroItems, heroMedia, waterScene].filter(Boolean).forEach((element) => {
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

  initWaterDropAnimation({ anime, waterScene });
}

function initWaterDropAnimation({ anime, waterScene }) {
  if (!waterScene) return;

  const drop = waterScene.querySelector("[data-water-drop]");
  const impact = waterScene.querySelector("[data-water-impact]");
  const ripples = waterScene.querySelectorAll("[data-water-ripple]");

  if (!drop || !impact || !ripples.length) return;

  const reduceMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );
  let timeoutId;

  const reset = () => {
    drop.style.opacity = "0";
    drop.style.top = "15%";
    impact.style.opacity = "0";
    impact.style.transform = "translate(-50%, -50%) scaleX(0.2)";

    ripples.forEach((ripple) => {
      ripple.style.opacity = "0";
      ripple.style.transform = "translate(-50%, -50%) scale(0.24)";
    });
  };

  const scheduleNextCycle = () => {
    timeoutId = window.setTimeout(runCycle, 3800);
  };

  const runCycle = () => {
    if (reduceMotionQuery.matches) {
      reset();
      return;
    }

    reset();

    anime.animate(drop, {
      opacity: 1,
      top: "59%",
      duration: 820,
      ease: "inQuad",
    });

    anime.animate(drop, {
      opacity: 0,
      duration: 160,
      ease: "outCubic",
      delay: 760,
    });

    anime.animate(impact, {
      opacity: [0, 0.85, 0],
      scaleX: [0.2, 1, 1.18],
      duration: 520,
      ease: "outCubic",
      delay: 760,
    });

    ripples.forEach((ripple, index) => {
      anime.animate(ripple, {
        opacity: [0, 0.7, 0],
        scale: [0.24, 1.2 + index * 0.32],
        duration: 1180 + index * 180,
        ease: "outCubic",
        delay: 780 + index * 160,
      });
    });

    scheduleNextCycle();
  };

  reset();
  timeoutId = window.setTimeout(runCycle, 1280);

  reduceMotionQuery.addEventListener("change", () => {
    window.clearTimeout(timeoutId);
    reset();
    if (!reduceMotionQuery.matches) scheduleNextCycle();
  });
}
