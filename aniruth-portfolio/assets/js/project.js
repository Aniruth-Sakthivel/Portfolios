/**
 * Project detail — renders one case study from PF.projects, selected by the
 * `p` query parameter. Adding a project to the data file is enough; this
 * template needs no changes.
 */
(function (PF) {
  'use strict';

  var html = PF.html;
  var raw = PF.raw;
  var icons = PF.icons;

  function findProject(slug) {
    for (var i = 0; i < PF.projects.length; i++) {
      if (PF.projects[i].slug === slug) return { project: PF.projects[i], index: i };
    }
    return null;
  }

  function plate(view, image, title) {
    var content = image
      ? html`<img
          src="${image}"
          alt="${title} interface"
          loading="lazy"
          decoding="async"
          style="width:100%;height:100%;object-fit:cover"
        />`
      : raw(PF.mockup(view));

    return html`<div class="pj__plate">${content}</div>`;
  }

  function block(label, body) {
    return html`<section class="pj__block">
      <h2 class="t-label">${label}</h2>
      <div class="pj__block-body"><p>${body}</p></div>
    </section>`;
  }

  function renderNotFound(root) {
    PF.mount(
      root,
      html`<div class="container">
        <div class="pj__empty">
          <p class="t-label">404</p>
          <h1 class="t-h1">That project isn&rsquo;t here.</h1>
          <p class="t-lead">
            The link may be out of date. Everything currently published lives in the work section.
          </p>
          <a class="btn btn--primary" href="index.html#work">
            View Selected Work ${raw(icons.arrowRight)}
          </a>
        </div>
      </div>`
    );
  }

  function renderProject(root, project, index) {
    var projects = PF.projects;
    var previous = projects[(index - 1 + projects.length) % projects.length];
    var next = projects[(index + 1) % projects.length];
    var single = projects.length < 2;

    document.title = project.title + ' — ' + PF.site.name;
    var description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute('content', project.summary);

    var facts = [
      { label: 'Role', value: project.role },
      { label: 'Timeline', value: project.timeline },
      { label: 'Client', value: project.client },
      { label: 'Category', value: project.category }
    ];

    PF.mount(
      root,
      html`<article class="pj">
        <div class="container">
          <a class="pj__breadcrumb" href="index.html#work">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <path d="M9.5 6h-7M5 2.5 1.5 6 5 9.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            Selected Work
          </a>

          <header class="pj__head">
            <div>
              <p class="t-label pj__category">
                ${String(index + 1).padStart(2, '0')} &mdash; ${project.category}
              </p>
              <h1 class="t-h1 pj__title" data-reveal="fade-up">${project.title}</h1>
            </div>
            <div>
              <p class="t-lead pj__summary" data-reveal="fade-up" data-delay="80">${project.summary}</p>
              ${project.external
                ? html`<div class="pj__actions">
                    <a
                      class="btn btn--ghost"
                      href="${project.external.href}"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ${project.external.label} ${raw(icons.arrowUpRight)}
                    </a>
                  </div>`
                : ''}
            </div>
          </header>

          <dl class="pj__facts">
            ${facts.map(function (fact) {
              return html`<div class="pj__fact">
                <dt class="t-label">${fact.label}</dt>
                <dd>${fact.value}</dd>
              </div>`;
            })}
          </dl>

          <div data-reveal="image">${plate(project.mockup, project.image, project.title)}</div>

          ${block('Overview', project.overview)} ${block('Problem', project.problem)}
          ${block('Approach', project.approach)} ${block('Solution', project.solution)}

          <section class="pj__block">
            <h2 class="t-label">Key decisions</h2>
            <div class="pj__decisions">
              ${project.decisions.map(function (decision) {
                return html`<div class="pj__decision" data-reveal="fade-up">
                  <h3>${decision.title}</h3>
                  <p>${decision.body}</p>
                </div>`;
              })}
            </div>
          </section>

          <section class="pj__block">
            <h2 class="t-label">Results</h2>
            <div class="pj__results">
              ${project.results.map(function (result) {
                return html`<div class="pj__result" data-reveal="fade-up">
                  <p class="pj__result-value">${result.value}</p>
                  <p class="pj__result-label">${result.label}</p>
                </div>`;
              })}
            </div>
          </section>

          <section class="pj__block">
            <h2 class="t-label">Technologies</h2>
            <ul class="pj__tags">
              ${project.tech.map(function (item) {
                return html`<li>${item}</li>`;
              })}
            </ul>
          </section>

          <section class="pj__block">
            <h2 class="t-label">Screens</h2>
            <div class="pj__screens">
              ${project.screens.map(function (screen) {
                return html`<figure class="pj__figure" data-reveal="image">
                  ${plate(screen.view, screen.image, project.title)}
                  <figcaption class="pj__caption">${screen.caption}</figcaption>
                </figure>`;
              })}
            </div>
          </section>

          ${single
            ? ''
            : html`<nav class="pj__nav" aria-label="More projects">
                <a class="pj__nav-link" href="project.html?p=${previous.slug}">
                  <span class="t-label">Previous</span>
                  <span class="pj__nav-title">${previous.title}</span>
                </a>
                <a class="pj__nav-link pj__nav-link--next" href="project.html?p=${next.slug}">
                  <span class="t-label">Next</span>
                  <span class="pj__nav-title">${next.title}</span>
                </a>
              </nav>`}
        </div>
      </article>`
    );
  }

  function init() {
    var root = document.querySelector('[data-project]');
    if (!root) return;

    PF.chrome(PF.site);

    var slug = new URLSearchParams(window.location.search).get('p');
    var match = slug ? findProject(slug) : null;

    if (match) renderProject(root, match.project, match.index);
    else renderNotFound(root);

    PF.theme.init();
    PF.nav.init();
    PF.reveal.init();
    PF.cursor.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})((window.PF = window.PF || {}));
