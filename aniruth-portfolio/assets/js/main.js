/**
 * Home page — renders every data-driven region, then starts the behaviour
 * modules. Content comes from assets/js/data/*; nothing is authored here.
 */
(function (PF) {
  'use strict';

  var html = PF.html;
  var raw = PF.raw;
  var icons = PF.icons;

  /* ----------------------------------------------------------------------
     Hero
     ---------------------------------------------------------------------- */

  function renderHeadline(site) {
    var node = document.querySelector('[data-headline]');
    if (!node) return;

    var text = site.hero.headline;
    var accent = site.hero.headlineAccent;
    var index = accent ? text.indexOf(accent) : -1;

    if (index === -1) {
      node.textContent = text;
      return;
    }

    PF.mount(
      node,
      html`${text.slice(0, index)}<em class="serif">${accent}</em>${text.slice(index + accent.length)}`
    );
  }

  function renderHeroMeta(site) {
    PF.mount(
      document.querySelector('[data-hero-meta]'),
      site.hero.meta
        .map(function (row) {
          return html`<div class="hero__meta-row">
            <dt>${row.label}</dt>
            <dd>${row.value}</dd>
          </div>`;
        })
        .join('')
    );
  }

  /* ----------------------------------------------------------------------
     Work
     ---------------------------------------------------------------------- */

  var LAYOUTS = ['standard', 'reverse', 'wide'];

  function projectVisual(project) {
    if (project.image) {
      return html`<img
        src="${project.image}"
        alt="${project.title} interface"
        loading="lazy"
        decoding="async"
        width="1200"
        height="825"
        style="width:100%;height:100%;object-fit:cover"
      />`;
    }
    return raw(PF.mockup(project.mockup));
  }

  function renderProjects(projects) {
    PF.mount(
      document.querySelector('[data-projects]'),
      projects
        .map(function (project, index) {
          return html`<article
            class="project"
            data-layout="${LAYOUTS[index % LAYOUTS.length]}"
            data-reveal="fade-up"
            data-cursor-label="View Project →"
          >
            <div class="project__media">${projectVisual(project)}</div>
            <div class="project__body">
              <p class="project__index">
                <span class="serif">${String(index + 1).padStart(2, '0')}</span>
                <span class="t-label">${project.category}</span>
              </p>
              <h3 class="project__title">
                <a class="project__link" href="project.html?p=${project.slug}">${project.title}</a>
              </h3>
              <p class="t-body t-muted project__summary">${project.summary}</p>
              <ul class="project__tech">
                ${project.tech.map(function (item) {
                  return html`<li>${item}</li>`;
                })}
              </ul>
              <p class="project__foot">
                <span class="project__cta">View Project ${raw(icons.arrowRight)}</span>
                <span class="project__year">${project.year}</span>
              </p>
            </div>
          </article>`;
        })
        .join('')
    );
  }

  /* ----------------------------------------------------------------------
     About
     ---------------------------------------------------------------------- */

  function renderAbout(site) {
    PF.mount(
      document.querySelector('[data-about-prose]'),
      site.about.paragraphs
        .map(function (paragraph) {
          return html`<p>${paragraph}</p>`;
        })
        .join('')
    );

    var plate = document.querySelector('[data-plate]');
    if (!plate) return;

    var portrait = site.portrait;
    PF.mount(
      plate,
      portrait
        ? html`<img src="${portrait.src}" alt="${portrait.alt}" loading="lazy" decoding="async" />`
        : html`<span class="plate__initials" aria-hidden="true">${site.initials}</span>
            <figcaption class="plate__caption">
              <span class="t-label">${site.role}</span>
              <span class="t-label">${site.city}</span>
            </figcaption>`
    );
  }

  /* ----------------------------------------------------------------------
     Expertise
     ---------------------------------------------------------------------- */

  function renderSkills(skills) {
    PF.mount(
      document.querySelector('[data-skills]'),
      skills
        .map(function (group, index) {
          return html`<div class="expertise__group" data-reveal="fade-up" data-delay="${index * 80}">
            <div class="expertise__title">
              <h3 class="t-h3">${group.title}</h3>
              <span class="t-label">${String(index + 1).padStart(2, '0')}</span>
            </div>
            <ul class="expertise__list">
              ${group.items.map(function (item) {
                return html`<li>${item}</li>`;
              })}
            </ul>
          </div>`;
        })
        .join('')
    );
  }

  /* ----------------------------------------------------------------------
     Experience
     ---------------------------------------------------------------------- */

  function renderExperience(roles) {
    PF.mount(
      document.querySelector('[data-experience]'),
      roles
        .map(function (role) {
          var company = role.href
            ? html`<a class="timeline__company link" href="${role.href}" target="_blank" rel="noopener noreferrer">
                ${role.company} ${raw(icons.arrowUpRight)}
              </a>`
            : html`<span class="timeline__company">${role.company}</span>`;

          return html`<article class="timeline__item" data-reveal="fade-up">
            <div class="timeline__aside">
              <p class="t-label">${role.period}</p>
              <h3 class="timeline__role">${role.role}</h3>
              ${company}
              <p class="t-small t-muted">${role.location}</p>
            </div>
            <div>
              <p class="t-body t-muted timeline__desc">${role.description}</p>
              <ul class="timeline__contrib">
                ${role.contributions.map(function (item) {
                  return html`<li><span>${item}</span></li>`;
                })}
              </ul>
            </div>
          </article>`;
        })
        .join('')
    );
  }

  function renderRecords(selector, records, format) {
    PF.mount(document.querySelector(selector), records.map(format).join(''));
  }

  /* ----------------------------------------------------------------------
     Impact
     ---------------------------------------------------------------------- */

  function renderImpact(stats) {
    PF.mount(
      document.querySelector('[data-impact]'),
      stats
        .map(function (stat, index) {
          return html`<div class="impact__item" data-reveal="fade-up" data-delay="${index * 70}">
            <p class="impact__value"><span data-count="${stat.value}">${stat.value}</span>${stat.suffix}</p>
            <p class="impact__label">${stat.label}</p>
          </div>`;
        })
        .join('')
    );
  }

  /* ----------------------------------------------------------------------
     Contact + footer
     ---------------------------------------------------------------------- */

  function renderContact(site) {
    var email = site.links.filter(function (link) {
      return link.id === 'email';
    })[0];

    var cta = document.querySelector('[data-contact-cta]');
    if (cta && email) {
      cta.setAttribute('href', email.href + '?subject=' + encodeURIComponent(site.contact.subject));
    }

    PF.mount(
      document.querySelector('[data-contact-details]'),
      site.details
        .map(function (detail) {
          var value = detail.href
            ? html`<a class="link link--quiet" href="${detail.href}">${detail.value}</a>`
            : html`${detail.value}`;
          return html`<div class="about__fact">
            <dt>${detail.label}</dt>
            <dd>${value}</dd>
          </div>`;
        })
        .join('')
    );

    PF.mount(
      document.querySelector('[data-contact-links]'),
      site.links
        .map(function (link) {
          return html`<a class="contact__link" href="${link.href}"${raw(PF.linkAttrs(link))}>
            <span class="contact__link-label">${link.label}</span>
            <span class="contact__link-value">${link.value} ${raw(icons.arrowUpRight)}</span>
          </a>`;
        })
        .join('')
    );

  }

  /* ----------------------------------------------------------------------
     Boot
     ---------------------------------------------------------------------- */

  function init() {
    var site = PF.site;

    PF.chrome(site);
    renderHeadline(site);
    renderHeroMeta(site);
    renderProjects(PF.projects);
    renderAbout(site);
    renderSkills(PF.skills);
    renderExperience(PF.experience);

    renderRecords('[data-education]', PF.education, function (item) {
      return html`<div class="record">
        <p class="t-label">${item.period}</p>
        <div>
          <h4 class="t-h3">${item.title}</h4>
          <p class="record__meta"><span>${item.organisation}</span><span>${item.location}</span></p>
        </div>
      </div>`;
    });

    renderRecords('[data-certifications]', PF.certifications, function (item) {
      return html`<div class="record">
        <p class="t-label">${item.organisation}</p>
        <div>
          <h4 class="t-h3">${item.title}</h4>
          ${item.note ? html`<p class="record__meta"><span>${item.note}</span></p>` : ''}
        </div>
      </div>`;
    });

    renderImpact(site.impact);
    renderContact(site);

    PF.theme.init();
    PF.nav.init();
    PF.reveal.init();
    PF.counters.init();
    PF.cursor.init();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})((window.PF = window.PF || {}));
