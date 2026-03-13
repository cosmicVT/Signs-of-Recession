(() => {
  "use strict";
  if (window.history && 'scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }
//load handler//
  window.addEventListener(
    'load',
    () => {
      try {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        });
      } catch (err) {
        console.error("Scroll reset failed:", err);
      }
    },
    { once: true, passive: true }
  );
})();