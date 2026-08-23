/**
 * Navigation — scrolled state, active-section tracking and the mobile panel
 * (focus trap, Escape, scroll lock).
 */
(function (PF) {
  'use strict';

  var FOCUSABLE = 'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

  function init() {
    var nav = document.querySelector('[data-nav]');
    if (!nav) return;

    var toggle = nav.querySelector('[data-nav-toggle]');
    var panel = nav.querySelector('[data-nav-panel]');
    var links = nav.querySelectorAll('a[href^="#"]');

    /* --- Scrolled state -------------------------------------------------- */
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        nav.classList.toggle('is-scrolled', window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    /* --- Mobile panel ---------------------------------------------------- */
    if (toggle && panel) {
      var setOpen = function (open) {
        toggle.setAttribute('aria-expanded', String(open));
        toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
        panel.classList.toggle('is-open', open);
        document.body.classList.toggle('is-locked', open);
      };

      toggle.addEventListener('click', function () {
        setOpen(toggle.getAttribute('aria-expanded') !== 'true');
      });

      panel.addEventListener('click', function (event) {
        if (event.target.closest('a')) setOpen(false);
      });

      document.addEventListener('keydown', function (event) {
        if (toggle.getAttribute('aria-expanded') !== 'true') return;

        if (event.key === 'Escape') {
          setOpen(false);
          toggle.focus();
          return;
        }

        if (event.key !== 'Tab') return;

        /* Keep focus between the toggle and the last item in the panel. */
        var items = [toggle].concat(Array.prototype.slice.call(panel.querySelectorAll(FOCUSABLE)));
        var first = items[0];
        var last = items[items.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      });

      window.addEventListener('resize', function () {
        if (window.innerWidth >= 960 && toggle.getAttribute('aria-expanded') === 'true') {
          setOpen(false);
        }
      });
    }

    /* --- Active section -------------------------------------------------- */
    var targets = [];
    links.forEach(function (link) {
      var id = link.getAttribute('href').slice(1);
      var section = id && document.getElementById(id);
      if (section && targets.indexOf(section) === -1) targets.push(section);
    });

    if (!targets.length || !('IntersectionObserver' in window)) return;

    var visible = new Set();

    var setCurrent = function (id) {
      links.forEach(function (link) {
        var isCurrent = link.getAttribute('href') === '#' + id;
        if (isCurrent) link.setAttribute('aria-current', 'true');
        else link.removeAttribute('aria-current');
      });
    };

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        });

        if (!visible.size) return;

        /* The topmost visible section wins. */
        var top = null;
        visible.forEach(function (section) {
          if (!top || section.offsetTop < top.offsetTop) top = section;
        });
        if (top) setCurrent(top.id);
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    targets.forEach(function (section) {
      observer.observe(section);
    });
  }

  PF.nav = { init: init };
})((window.PF = window.PF || {}));
