/**
 * Theme — explicit light/dark choice layered over the system preference.
 * The initial value is applied by an inline script in <head>; this module
 * handles switching, persistence, the button's accessible name, and the
 * sunset/sunrise transition that plays when a visitor flips it.
 */
(function (PF) {
  'use strict';

  var STORAGE_KEY = 'pf-theme';
  var THEME_COLOR = { light: '#faf9f6', dark: '#0c0c0d' };
  /* Matches --dur-theme; the classes come off once the animation has run. */
  var TRANSITION_MS = 560;

  var timer = null;

  function systemTheme() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  function stored() {
    try {
      var value = localStorage.getItem(STORAGE_KEY);
      return value === 'light' || value === 'dark' ? value : null;
    } catch (e) {
      return null;
    }
  }

  function current() {
    return document.documentElement.getAttribute('data-theme') || systemTheme();
  }

  function toggles() {
    return document.querySelectorAll('[data-theme-toggle]');
  }

  /** The page-wide warm wash. One element, created once, purely decorative. */
  function daylight() {
    var node = document.querySelector('.daylight');
    if (node) return node;

    node = document.createElement('div');
    node.className = 'daylight';
    node.setAttribute('aria-hidden', 'true');
    document.body.appendChild(node);
    return node;
  }

  /**
   * Plays the day/night transition — the toggle's sky and the page wash run
   * off the same attribute, so they are always in step.
   */
  function animate(theme) {
    var root = document.documentElement;

    daylight();
    window.clearTimeout(timer);

    /* Restart cleanly even on a rapid second click. */
    root.removeAttribute('data-transition');
    void root.offsetWidth;
    root.classList.add('theme-switching');
    root.setAttribute('data-transition', theme === 'dark' ? 'to-dark' : 'to-light');

    timer = window.setTimeout(function () {
      root.classList.remove('theme-switching');
      root.removeAttribute('data-transition');
    }, TRANSITION_MS);
  }

  function apply(theme, options) {
    var settings = options || {};

    /* Arm the transition before the palette flips — CSS takes its timing from
       the style in force at the moment of the change, so this has to come
       first or every colour snaps while the sky animates. */
    if (settings.animate && !PF.reveal.prefersReducedMotion()) animate(theme);

    document.documentElement.setAttribute('data-theme', theme);

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', THEME_COLOR[theme]);

    if (settings.persist) {
      try {
        localStorage.setItem(STORAGE_KEY, theme);
      } catch (e) {}
    }

    toggles().forEach(function (button) {
      button.setAttribute(
        'aria-label',
        theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'
      );
    });
  }

  function init() {
    apply(current(), {});

    /* Enable transitions only after the first paint, so a stored dark theme
       does not play a moonrise on every page load. */
    requestAnimationFrame(function () {
      document.documentElement.classList.add('theme-ready');
    });

    toggles().forEach(function (button) {
      button.addEventListener('click', function () {
        apply(current() === 'dark' ? 'light' : 'dark', { persist: true, animate: true });
      });
    });

    /* Follow the system while the visitor has not made an explicit choice. */
    if (window.matchMedia) {
      var query = window.matchMedia('(prefers-color-scheme: dark)');
      var onChange = function () {
        if (!stored()) apply(systemTheme(), { animate: true });
      };
      if (query.addEventListener) query.addEventListener('change', onChange);
      else if (query.addListener) query.addListener(onChange);
    }
  }

  PF.theme = { init: init };
})((window.PF = window.PF || {}));
