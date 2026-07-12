export function initRightMenu() {
  const openButton = document.querySelector("[data-menu-open]");
  const closeButton = document.querySelector("[data-menu-close]");
  const panel = document.querySelector("[data-menu-panel]");
  const overlay = document.querySelector("[data-menu-overlay]");
  const links = document.querySelectorAll("[data-menu-link]");

  if (!openButton || !closeButton || !panel || !overlay) return;

  const focusableSelector = "a[href], button:not([disabled])";

  function setOpen(isOpen) {
    openButton.setAttribute("aria-expanded", String(isOpen));
    panel.setAttribute("aria-hidden", String(!isOpen));
    overlay.classList.toggle("is-hidden", !isOpen);
    document.body.classList.toggle("is-menu-open", isOpen);

    window.requestAnimationFrame(() => {
      panel.classList.toggle("is-closed", !isOpen);
      overlay.classList.toggle("is-transparent", !isOpen);
    });

    if (isOpen) {
      panel.querySelector(focusableSelector)?.focus();
    } else {
      openButton.focus();
    }
  }

  function closeMenu() {
    setOpen(false);
  }

  openButton.addEventListener("click", () => setOpen(true));
  closeButton.addEventListener("click", closeMenu);
  overlay.addEventListener("click", closeMenu);
  links.forEach((link) => link.addEventListener("click", closeMenu));

  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      panel.getAttribute("aria-hidden") === "false"
    ) {
      closeMenu();
    }
  });
}
