/**
 * Project visuals — abstract interfaces composed from the primitives in
 * mockups.css. No images, no randomness: the same input always draws the
 * same picture. Decorative, so the frame is hidden from assistive tech.
 */
(function (PF) {
  'use strict';

  function bar(width, strong) {
    return '<span class="mk-bar' + (strong ? ' mk-bar--strong' : '') + '" style="--w:' + width + '%"></span>';
  }

  function repeat(count, fn) {
    var out = '';
    for (var i = 0; i < count; i++) out += fn(i);
    return out;
  }

  /* --- Admin dashboard --------------------------------------------------- */
  function dashboard() {
    var navWidths = [72, 54, 63, 46, 58];
    var tiles = [
      { label: 54, value: 68, accent: false },
      { label: 44, value: 82, accent: true },
      { label: 60, value: 58, accent: false }
    ];
    var bars = [38, 56, 44, 72, 60, 88, 66, 50];

    return (
      '<div class="mk mk--dashboard">' +
      '<div class="mk-rail">' +
      '<span class="mk-dot mk-dot--accent"></span>' +
      navWidths.map(function (w) { return bar(w); }).join('') +
      '<span class="mk-grow"></span>' +
      bar(64) +
      '</div>' +
      '<div class="mk-main">' +
      '<div class="mk-row">' + bar(26, true) + '<span class="mk-grow"></span>' +
      '<span class="mk-pill" style="--w:22%"></span><span class="mk-dot"></span></div>' +
      '<div class="mk-tiles">' +
      tiles.map(function (t) {
        return '<div class="mk-tile">' + bar(t.label) +
          '<span class="mk-bar mk-bar--strong' + (t.accent ? ' mk-bar--accent' : '') + '" style="--w:' + t.value + '%"></span>' +
          '</div>';
      }).join('') +
      '</div>' +
      '<div class="mk-panel mk-grow">' +
      '<div class="mk-row">' + bar(24) + '<span class="mk-grow"></span><span class="mk-chip" style="--w:12cqw"></span></div>' +
      '<div class="mk-chart">' +
      bars.map(function (h, i) {
        return '<span class="mk-chart__bar' + (i === 5 ? ' mk-chart__bar--accent' : '') + '" style="--h:' + h + '%"></span>';
      }).join('') +
      '</div>' +
      '</div>' +
      '<div class="mk-panel">' +
      '<div class="mk-table">' +
      '<div class="mk-table__row mk-table__row--head"><span class="mk-dot"></span>' + bar(62) + bar(48) + '<span class="mk-chip mk-chip--quiet"></span></div>' +
      repeat(3, function (i) {
        var w = [78, 64, 70][i];
        return '<div class="mk-table__row"><span class="mk-dot"></span>' + bar(w) + bar(52 - i * 6) +
          '<span class="mk-chip' + (i === 1 ? '' : ' mk-chip--quiet') + '"></span></div>';
      }) +
      '</div></div>' +
      '</div></div>'
    );
  }

  /* --- Point of sale ----------------------------------------------------- */
  function pos() {
    var products = [0, 1, 2, 3, 4, 5, 6, 7];
    var lines = [72, 58, 66, 48];

    return (
      '<div class="mk mk--pos">' +
      '<div class="mk-main">' +
      '<div class="mk-row">' + bar(22, true) + '<span class="mk-grow"></span><span class="mk-pill" style="--w:26%"></span></div>' +
      '<div class="mk-row">' +
      repeat(4, function (i) {
        return '<span class="mk-chip' + (i === 0 ? '' : ' mk-chip--quiet') + '" style="--w:' + [14, 11, 13, 10][i] + 'cqw"></span>';
      }) +
      '</div>' +
      '<div class="mk-grid">' +
      products.map(function (i) {
        return '<div class="mk-card' + (i === 2 ? ' mk-card--active' : '') + '">' +
          '<span class="mk-card__thumb"></span>' + bar(76) + bar(42) + '</div>';
      }).join('') +
      '</div></div>' +
      '<div class="mk-panel mk-ticket">' +
      '<div class="mk-row">' + bar(46, true) + '<span class="mk-grow"></span><span class="mk-dot"></span></div>' +
      '<div class="mk-ticket__lines">' +
      lines.map(function (w) {
        return '<div class="mk-ticket__line">' + bar(w) + bar(100) + '</div>';
      }).join('') +
      '</div>' +
      '<span class="mk-divider"></span>' +
      '<div class="mk-total">' + bar(38) + bar(100) + '</div>' +
      '<div class="mk-total">' + bar(30, true) + '<span class="mk-bar mk-bar--strong mk-bar--accent" style="--w:100%"></span></div>' +
      '<span class="mk-button"></span>' +
      '</div></div>'
    );
  }

  /* --- HRMS -------------------------------------------------------------- */
  function hrms() {
    /* Fixed calendar pattern: 0 empty, 1 approved (accent), 2 pending (soft). */
    var cells = [
      0, 0, 1, 0, 0, 2, 0,
      0, 1, 1, 0, 0, 0, 0,
      0, 0, 0, 2, 0, 0, 0,
      0, 0, 1, 1, 1, 0, 0
    ];
    var modifier = ['', ' mk-cal__cell--on', ' mk-cal__cell--soft'];

    return (
      '<div class="mk mk--hrms">' +
      '<div class="mk-rail">' +
      '<span class="mk-dot mk-dot--accent"></span>' +
      [68, 52, 60, 44].map(function (w) { return bar(w); }).join('') +
      '<span class="mk-grow"></span>' + bar(56) +
      '</div>' +
      '<div class="mk-main">' +
      '<div class="mk-row">' + bar(28, true) + '<span class="mk-grow"></span><span class="mk-pill" style="--w:20%"></span></div>' +
      /* Calendar and request list sit side by side once there is room. */
      '<div class="mk-split">' +
      '<div class="mk-panel mk-grow">' +
      '<div class="mk-cal__head">' + repeat(7, function () { return '<span></span>'; }) + '</div>' +
      '<div class="mk-cal">' +
      cells.map(function (c) { return '<span class="mk-cal__cell' + modifier[c] + '"></span>'; }).join('') +
      '</div></div>' +
      '<div class="mk-panel">' +
      '<div class="mk-list">' +
      repeat(4, function (i) {
        return '<div class="mk-list__row"><span class="mk-dot"></span>' + bar([70, 58, 64, 52][i]) +
          '<span class="mk-chip' + (i === 0 ? '' : ' mk-chip--quiet') + '"></span></div>';
      }) +
      '</div></div>' +
      '</div>' +
      '</div></div>'
    );
  }

  var VIEWS = { dashboard: dashboard, pos: pos, hrms: hrms };

  /**
   * Returns the markup for a mockup frame.
   * Unknown views fall back to the dashboard so a new project never renders
   * an empty plate.
   */
  function mockup(view) {
    var build = VIEWS[view] || VIEWS.dashboard;
    return '<div class="mk-frame" aria-hidden="true">' + build() + '</div>';
  }

  PF.mockup = mockup;
})((window.PF = window.PF || {}));
