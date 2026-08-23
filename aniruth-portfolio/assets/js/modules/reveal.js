/**
 * Reveal — one IntersectionObserver drives every scroll animation on the
 * page. Elements opt in with [data-reveal], and can offset themselves with
 * [data-delay="120"] to build a sequence.
 */
(function (PF) {
  'use strict';

  function prefersReducedMotion() {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function show(element) {
    element.classList.add('is-in');
  }

  function init(root) {
    var scope = root || document;
    var elements = scope.querySelectorAll('[data-reveal]');
    if (!elements.length) return;

    /* Per-element offsets — the hero entrance and grid staggers. */
    scope.querySelectorAll('[data-delay]').forEach(function (element) {
      element.style.setProperty('--reveal-delay', element.getAttribute('data-delay') + 'ms');
    });

    if (prefersReducedMotion() || !('IntersectionObserver' in window)) {
      elements.forEach(show);
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          show(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    elements.forEach(function (element) {
      /* Anything already in view on load animates immediately, in sequence. */
      var box = element.getBoundingClientRect();
      if (box.top < window.innerHeight * 0.9 && box.bottom > 0) {
        requestAnimationFrame(function () {
          show(element);
        });
      } else {
        observer.observe(element);
      }
    });
  }

  PF.reveal = { init: init, prefersReducedMotion: prefersReducedMotion };
})((window.PF = window.PF || {}));
