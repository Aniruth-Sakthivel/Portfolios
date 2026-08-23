/**
 * Rendering helpers — a tagged template that escapes interpolated values,
 * plus small utilities shared by both pages.
 */
(function (PF) {
  'use strict';

  var ESCAPE = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

  function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, function (c) {
      return ESCAPE[c];
    });
  }

  /**
   * Marks a string as pre-formed markup (icons, nested template output).
   * `toString` keeps Array.join and innerHTML assignment working unchanged.
   */
  function raw(value) {
    return {
      __raw: true,
      value: String(value),
      toString: function () {
        return this.value;
      }
    };
  }

  function serialize(value) {
    if (value === null || value === undefined || value === false) return '';
    if (Array.isArray(value)) return value.map(serialize).join('');
    if (value && value.__raw) return value.value;
    return escapeHTML(value);
  }

  /**
   * html`<p>${value}</p>` — interpolated values are escaped unless they are
   * already raw (an icon, or the result of another `html` call), so templates
   * nest safely.
   */
  function html(strings) {
    var values = Array.prototype.slice.call(arguments, 1);
    var out = '';
    for (var i = 0; i < strings.length; i++) {
      out += strings[i];
      if (i < values.length) out += serialize(values[i]);
    }
    return raw(out);
  }

  /** Replaces a node's contents with markup produced by `html`. */
  function mount(node, markup) {
    if (!node) return;
    node.innerHTML = String(markup);
  }

  /** Resolves 'a.b.c' against an object. */
  function get(source, path) {
    return path.split('.').reduce(function (acc, key) {
      return acc == null ? acc : acc[key];
    }, source);
  }

  /** Fills every [data-text="path"] inside `root` from `source`. */
  function bindText(root, source) {
    root.querySelectorAll('[data-text]').forEach(function (node) {
      var value = get(source, node.getAttribute('data-text'));
      if (value !== null && value !== undefined) node.textContent = value;
    });
  }

  function attrs(link) {
    return link.external ? ' target="_blank" rel="noopener noreferrer"' : '';
  }

  var icons = {
    arrowRight:
      '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true"><path d="M2.5 7h9M8 3.5 11.5 7 8 10.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    arrowUpRight:
      '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M3.5 8.5 8.5 3.5M4.5 3.5h4v4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg>'
  };

  /** Page furniture shared by the home and project pages. */
  function chrome(site) {
    bindText(document, site);

    var links = document.querySelector('[data-footer-links]');
    if (links) {
      mount(
        links,
        site.links
          .map(function (link) {
            return html`<a class="link link--quiet t-small" href="${link.href}"${raw(attrs(link))}>
              ${link.label} ${raw(icons.arrowUpRight)}
            </a>`;
          })
          .join('')
      );
    }

    var year = document.querySelector('[data-year]');
    if (year) year.textContent = String(new Date().getFullYear());
  }

  PF.chrome = chrome;
  PF.raw = raw;
  PF.html = html;
  PF.mount = mount;
  PF.linkAttrs = attrs;
  PF.icons = icons;
})((window.PF = window.PF || {}));
