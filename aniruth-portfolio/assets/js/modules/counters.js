/**
 * Counters — impact figures count up once, only when they enter the viewport.
 * Under reduced motion the final value is written straight away.
 */
(function (PF) {
  'use strict';

  var DURATION = 900;

  function easeOut(t) {
    return 1 - Math.pow(1 - t, 3);
  }

  function run(element) {
    var target = Number(element.getAttribute('data-count'));
    if (!isFinite(target)) return;

    var start = null;

    var step = function (timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min((timestamp - start) / DURATION, 1);
      element.textContent = String(Math.round(easeOut(progress) * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }

  function init(root) {
    var scope = root || document;
    var counters = scope.querySelectorAll('[data-count]');
    if (!counters.length) return;

    if (PF.reveal.prefersReducedMotion() || !('IntersectionObserver' in window)) {
      counters.forEach(function (element) {
        element.textContent = element.getAttribute('data-count');
      });
      return;
    }

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          run(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.4 }
    );

    counters.forEach(function (element) {
      element.textContent = '0';
      observer.observe(element);
    });
  }

  PF.counters = { init: init };
})((window.PF = window.PF || {}));
