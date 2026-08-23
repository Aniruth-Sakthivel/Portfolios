/**
 * Professional experience, education and certifications.
 * Add a new role by prepending an object to `PF.experience`.
 */
(function (PF) {
  'use strict';

  PF.experience = [
    {
      period: '2024 — Present',
      role: 'Junior Software Developer',
      company: 'Dreams Technologies',
      location: 'Coimbatore',
      href: 'https://dreamstechnologies.com/',
      description:
        'Build and maintain production frontends across enterprise, healthcare and consumer domains — CRM, HRMS, EMR, clinic management, POS and travel booking — using React, TypeScript, Redux and Tailwind CSS.',
      contributions: [
        'Built and maintained 6+ production applications across CRM, HRMS, EMR, clinic management, POS and travel booking domains.',
        'Developed a shared reusable component library adopted across all active projects, cutting per-project UI setup time and reducing code duplication significantly.',
        'Integrated 15+ REST APIs via Axios across authentication, records management and reporting modules, enabling fully dynamic data rendering with Redux state management.',
        'Implemented code splitting and lazy loading strategies, reducing initial bundle load time across enterprise apps.',
        'Built healthcare platform modules — dynamic patient records, appointment workflows and role-based access — serving clinical workflows across multiple departments.',
        'Delivered POS system UI with real-time transaction flows, inventory tracking and billing, including a sales dashboard with daily, weekly and monthly reporting charts.',
        'Translated Figma designs and client briefs into pixel-perfect, cross-browser compatible interfaces across desktop and mobile breakpoints.',
        'Established consistent coding standards and folder structure conventions across frontend projects, improving onboarding speed for new team members.',
        'Debugged and resolved cross-browser compatibility issues across Chrome, Firefox and Safari, ensuring consistent UI behaviour across all supported environments.',
        'Contributed UI templates published on Envato ThemeForest, reaching a global developer audience.'
      ]
    }
  ];

  PF.education = [
    {
      period: '2020 — 2024',
      title: 'Bachelor of Engineering, Computer Science and Engineering',
      organisation: 'Sri Ramakrishna Engineering College',
      location: 'Coimbatore'
    }
  ];

  PF.certifications = [
    { title: 'Full Stack Web Development', organisation: 'Udemy' },
    { title: 'BEC Preliminary Level B1', organisation: 'Cambridge English', note: 'Score 142 / 170' }
  ];
})((window.PF = window.PF || {}));
