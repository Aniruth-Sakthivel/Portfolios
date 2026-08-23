/**
 * Cursor — a small pointer accent for precise pointers only.
 * Never rendered on touch devices or under reduced motion, and it never
 * carries information that isn't already visible on the page.
 */
(function (PF) {
  'use strict';

  function supported() {
    return (
      window.matchMedia &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches &&
      !PF.reveal.prefersReducedMotion()
    );
  }

  function init() {
    if (!supported()) return;

    var cursor = document.createElement('div');
    cursor.className = 'cursor';
    cursor.setAttribute('aria-hidden', 'true');
    cursor.innerHTML = '<span class="cursor__label"></span>';
    document.body.appendChild(cursor);

    var label = cursor.querySelector('.cursor__label');
    var x = 0;
    var y = 0;
    var queued = false;

    var draw = function () {
      cursor.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0) translate(-50%,-50%)';
      queued = false;
    };

    document.addEventListener(
      'mousemove',
      function (event) {
        x = event.clientX;
        y = event.clientY;
        cursor.classList.add('is-visible');

        if (!queued) {
          queued = true;
          requestAnimationFrame(draw);
        }
      },
      { passive: true }
    );

    document.addEventListener('mouseleave', function () {
      cursor.classList.remove('is-visible');
    });

    document.addEventListener(
      'mouseover',
      function (event) {
        var plate = event.target.closest('[data-cursor-label]');
        if (plate) {
          label.textContent = plate.getAttribute('data-cursor-label');
          cursor.classList.add('is-label');
          cursor.classList.remove('is-link');
          return;
        }

        cursor.classList.remove('is-label');
        cursor.classList.toggle('is-link', Boolean(event.target.closest('a, button')));
      },
      { passive: true }
    );
  }

  PF.cursor = { init: init };
})((window.PF = window.PF || {}));
