/**
 * Expertise, grouped by discipline.
 * Categories render as typographic columns — add or reorder freely.
 */
(function (PF) {
  'use strict';

  PF.skills = [
    {
      title: 'Product Development',
      items: ['React', 'Next.js', 'TypeScript', 'JavaScript (ES6+)', 'Redux', 'React Router', 'React Hooks']
    },
    {
      title: 'Interface Design',
      items: ['UI Development', 'Design Systems', 'Responsive Design', 'Figma to Code', 'Tailwind CSS', 'SCSS', 'Bootstrap']
    },
    {
      title: 'Engineering',
      items: [
        'REST API Integration',
        'Reusable Component Architecture',
        'Code Splitting & Lazy Loading',
        'Cross-browser Compatibility',
        'Vite',
        'Git & GitLab',
        'Axios'
      ]
    }
  ];
})((window.PF = window.PF || {}));
