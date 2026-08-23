/**
 * Site-level content and identity.
 * Everything personal lives here — no copy is hardcoded in markup or modules.
 */
(function (PF) {
  'use strict';

  PF.site = {
    name: 'Aniruth Sakthivel',
    initials: 'AS',
    role: 'Frontend Developer',
    location: 'Coimbatore, Tamil Nadu, India',
    city: 'Coimbatore',
    availability: 'Available for selected projects',

    /**
     * Optional portrait: { src, alt }. Leave null to render the typographic
     * plate (initials) instead — no stock imagery either way.
     */
    portrait: null,

    hero: {
      intro: "Hello, I'm Aniruth Sakthivel",
      headline: 'I design and build digital products that feel as good as they work.',
      /** The single word set in serif italic. Must appear in `headline`. */
      headlineAccent: 'feel',
      /** Small facts shown beside the hero copy. */
      meta: [
        { label: 'Currently', value: 'Dreams Technologies' },
        { label: 'Focus', value: 'React · TypeScript · Redux' },
        { label: 'Since', value: '2024' }
      ],
      description:
        'Frontend developer with two years of production experience across enterprise, healthcare and consumer software. I specialise in React, TypeScript and Redux, and care most about reusable architecture, honest performance and interfaces people can actually move through.'
    },

    about: {
      heading: 'A little about me.',
      paragraphs: [
        'I’m a frontend developer based in Coimbatore, currently at Dreams Technologies, where I’ve spent the last two years shipping production interfaces for CRM, HRMS, EMR, clinic management, POS and travel booking products.',
        'Most of my work sits in dense, data-heavy software — the kind where a table, a filter and a form decide whether someone’s workday is smooth or exhausting. That constraint shaped how I build: a shared component library instead of one-off screens, consistent folder conventions instead of tribal knowledge, and REST integrations designed so the UI stays predictable when the data isn’t.',
        'I care about the parts users feel but rarely name — how quickly the first screen paints, whether a layout survives a 360px viewport, whether keyboard focus goes somewhere sensible. Code splitting and lazy loading aren’t line items to me; they’re the difference between a product that feels considered and one that feels assembled.',
        'I enjoy building interfaces that carry real complexity without looking complicated, translating Figma work into pixel-accurate, cross-browser UI, and leaving behind a codebase the next developer can read on their first day.'
      ]
    },

    contact: {
      heading: 'Have something worth building?',
      description:
        "I'm always interested in thoughtful products, challenging problems and meaningful collaborations.",
      ctaLabel: 'Start a Conversation',
      subject: 'Project enquiry'
    },

    footer: {
      description: 'Frontend developer building considered, fast interfaces for complex products.'
    },

    /** Contact + social links, in the order they appear. */
    links: [
      {
        id: 'email',
        label: 'Email',
        value: 'aniruthsakthivel.dev@gmail.com',
        href: 'mailto:aniruthsakthivel.dev@gmail.com'
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        value: 'in/aniruth-sakthivel',
        href: 'https://linkedin.com/in/aniruth-sakthivel',
        external: true
      },
      {
        id: 'github',
        label: 'GitHub',
        value: 'aniruth-sakthivel',
        href: 'https://github.com/aniruth-sakthivel',
        external: true
      },
      {
        id: 'resume',
        label: 'Résumé',
        value: 'PDF, 72 KB',
        href: 'assets/docs/Aniruth-Sakthivel-CV.pdf',
        external: true,
        download: true
      }
    ],

    /** Secondary details surfaced in the contact section. */
    details: [
      { label: 'Phone', value: '+91 9488479124', href: 'tel:+919488479124' },
      { label: 'Based in', value: 'Coimbatore, Tamil Nadu, India' }
    ],

    /**
     * Impact figures. All drawn from the résumé — nothing rounded up.
     * Delete this array (and the #impact block in index.html) to remove the section.
     */
    impact: [
      { value: 2, suffix: '+', label: 'Years in production' },
      { value: 6, suffix: '+', label: 'Applications shipped' },
      { value: 15, suffix: '+', label: 'REST APIs integrated' },
      { value: 5, suffix: '', label: 'Product domains' }
    ]
  };
})((window.PF = window.PF || {}));
