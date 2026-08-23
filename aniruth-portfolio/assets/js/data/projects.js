/**
 * Selected work.
 *
 * To add a project: append one object below. The home page grid and the
 * project detail template (`project.html?p=<slug>`) both read from here —
 * no markup changes required.
 *
 * Field reference
 *   slug        unique, url-safe id
 *   title       project name
 *   client      who it was built for / where it lives
 *   year        display period
 *   category    one-line positioning
 *   tech[]      technologies, shown as metadata
 *   summary     1–2 sentences for the work grid
 *   mockup      'dashboard' | 'pos' | 'hrms'  (hand-built CSS visual)
 *   image       optional path to a real screenshot; overrides `mockup`
 *   external    optional { label, href } to the live product
 *   overview / problem / approach / solution   case-study prose
 *   role, timeline                             engagement facts
 *   results[]   { value, label } outcomes
 *   decisions[] { title, body } key calls made
 *   screens[]   { view, caption } detail-page visuals (view = mockup variant)
 */
(function (PF) {
  'use strict';

  PF.projects = [
    {
      slug: 'admin-dashboard-template',
      title: 'Admin Dashboard Template',
      client: 'Envato ThemeForest',
      year: '2024 — Present',
      category: 'Product · Design system',
      tech: ['Next.js', 'React', 'TypeScript', 'Vite', 'SCSS'],
      summary:
        'A market-ready admin dashboard published on Envato ThemeForest — data tables, charts, modals and navigation layouts with dark/light mode and a fully responsive grid.',
      mockup: 'dashboard',
      external: {
        label: 'View on ThemeForest',
        href: 'https://themeforest.net/user/dreamstechnologies'
      },

      overview:
        'A commercial admin dashboard template built to be bought, unzipped and shipped. It ships both an admin application and a marketing-site version, covering the screens SaaS, CRM and ERP teams rebuild on every project: tables, charts, modals, forms and navigation shells.',
      problem:
        'Dashboard templates usually fail in one of two ways — they look good in the preview and collapse under real data, or they are technically solid and visually generic. Buyers need something that survives dense tables and long labels, works in dark and light, and does not need a rewrite before the first feature is built.',
      approach:
        'I treated the template as a design system rather than a set of pages. Layout primitives, tables, charts and modals were built as reusable components with a single token layer behind them, so dark mode and the responsive grid fell out of the system instead of being patched on per screen. The marketing-site version was built in Next.js to use SSR and file-based routing where SEO matters.',
      solution:
        'The result is a template that behaves like a product: consistent components across every screen, a theme that switches without visual debt, a responsive grid that holds from mobile to wide desktop, and a bundle kept small through Vite code splitting so the first paint is fast out of the box.',

      role: 'Frontend developer — component architecture, theming, responsive layout, performance',
      timeline: '2024 — Present · Dreams Technologies',

      results: [
        { value: 'Published', label: 'Live on Envato ThemeForest' },
        { value: 'Dark + light', label: 'Themed from a single token layer' },
        { value: 'Two builds', label: 'Admin app and Next.js marketing site' },
        { value: 'Code split', label: 'Fast first load out of the box' }
      ],

      decisions: [
        {
          title: 'One token layer, two themes',
          body:
            'Colour, spacing and radius live in a single variable set. Dark mode redefines the variables rather than the components, which keeps every screen consistent and makes a future third theme cheap.'
        },
        {
          title: 'Next.js only where it pays',
          body:
            'The admin app is a client-rendered SPA — it sits behind a login and gains nothing from SSR. The public marketing version uses Next.js for server rendering and file-based routing, where SEO and first-paint actually matter.'
        },
        {
          title: 'Code splitting as a default',
          body:
            'Routes and heavy chart bundles are split at the boundary, so buyers get a fast initial load without having to configure anything themselves.'
        }
      ],

      screens: [
        { view: 'dashboard', caption: 'Overview — metrics, reporting charts and a dense data table on one grid.' },
        { view: 'hrms', caption: 'Records module — reusable table and status chips shared across the template.' }
      ]
    },

    {
      slug: 'pos-system',
      title: 'POS System',
      client: 'Dreams Technologies',
      year: '2024 — Present',
      category: 'Product · Real-time interface',
      tech: ['React', 'TypeScript', 'Redux', 'Axios', 'Tailwind CSS'],
      summary:
        'A full point-of-sale application with real-time billing, inventory management and a sales dashboard with daily, weekly and monthly reporting charts.',
      mockup: 'pos',
      external: {
        label: 'View live demo',
        href: 'https://dreamspos.dreamstechnologies.com/restaurant-pos/react/login'
      },

      overview:
        'A point-of-sale interface used at the counter, where every interaction is timed against a customer waiting. It covers billing, inventory with stock alerts and category tracking, and a sales dashboard that reports across daily, weekly and monthly ranges.',
      problem:
        'A POS screen is judged on the seconds it takes to add an item, take payment and start the next order. It also has to stay usable on tablets, keep totals correct while stock is changing underneath it, and never leave staff guessing whether a transaction went through.',
      approach:
        'The transaction flow was modelled in Redux so the ticket, the inventory and the totals all read from one source of truth instead of drifting apart. Product data, transaction records and inventory sync run through REST APIs via Axios with explicit loading and error states, so the interface always says what it knows. Layout was designed tablet-first and scaled up to desktop, not the reverse.',
      solution:
        'A counter interface with a fast item-entry path, live totals, stock alerts surfaced where they matter, and a reporting dashboard that turns the same transaction data into daily, weekly and monthly views — consistent across desktop and tablet.',

      role: 'Frontend developer — transaction UI, state architecture, API integration, reporting dashboard',
      timeline: '2024 — Present · Dreams Technologies',

      results: [
        { value: 'Real-time', label: 'Billing and inventory stay in sync' },
        { value: 'Tablet + desktop', label: 'One layout system across both' },
        { value: 'Daily / weekly / monthly', label: 'Sales reporting from one dataset' },
        { value: 'Live', label: 'Running as a public product demo' }
      ],

      decisions: [
        {
          title: 'One source of truth for the ticket',
          body:
            'Cart, stock and totals derive from a single Redux slice. Nothing recalculates independently, which removes the class of bug where the printed total and the screen total disagree.'
        },
        {
          title: 'Tablet-first layout',
          body:
            'The counter device is the primary target, so the layout was designed at tablet width first and given room to breathe on desktop — rather than shrinking a desktop screen until it fit.'
        },
        {
          title: 'Explicit states over optimistic guesses',
          body:
            'Every API-backed action has a visible loading and failure state. In a payment flow, an honest "still working" beats a silent optimistic update that has to be walked back.'
        }
      ],

      screens: [
        { view: 'pos', caption: 'Order screen — item entry, live ticket and totals rail.' },
        { view: 'dashboard', caption: 'Sales dashboard — reporting charts over the same transaction data.' }
      ]
    },

    {
      slug: 'hrms-system',
      title: 'HRMS System',
      client: 'Dreams Technologies',
      year: '2024 — Present',
      category: 'Product · Workflow tooling',
      tech: ['React', 'TypeScript', 'Redux', 'Axios', 'Tailwind CSS'],
      summary:
        'Leave management with role-based approval flows and attendance tracking with daily logs and real-time status, built on form and table components shared across every HR module.',
      mockup: 'hrms',

      overview:
        'The HR platform’s leave and attendance modules: employees apply, managers approve or reject, and attendance is tracked through daily logs with real-time status — all behind role-based access.',
      problem:
        'HR software fragments quickly. Every module needs forms, tables, filters and status states, and when each one is built separately the product ends up with five slightly different date pickers and no shared idea of what "pending" looks like.',
      approach:
        'I built the form components and data tables once, as a shared set used consistently across the HR modules, then composed leave and attendance on top of them. Role-based access was handled at the view level so employees and managers see the same data model through different permissions, and payroll, leave balance and employee records were integrated through REST APIs feeding Redux state.',
      solution:
        'A leave workflow that reads the same way for an employee applying and a manager approving, attendance with daily logs and live status, and a component set that made each subsequent HR module faster to build than the last.',

      role: 'Frontend developer — module architecture, shared components, role-based views, API integration',
      timeline: '2024 — Present · Dreams Technologies',

      results: [
        { value: 'Apply / approve / reject', label: 'Complete leave workflow' },
        { value: 'Role-based', label: 'Employee and manager views' },
        { value: 'Shared components', label: 'Forms and tables reused across HR modules' },
        { value: 'Integrated', label: 'Payroll, leave balance and records APIs' }
      ],

      decisions: [
        {
          title: 'Components before screens',
          body:
            'The form and table primitives were built first and reused everywhere. Consistency stopped being something to police in review — it was the path of least resistance.'
        },
        {
          title: 'One data model, two permissions',
          body:
            'Employees and managers render from the same state with different capabilities, rather than maintaining two parallel implementations that drift apart over time.'
        },
        {
          title: 'Status as a shared vocabulary',
          body:
            'Pending, approved and rejected are defined once, visually and semantically, so a status chip means the same thing in leave, attendance and every module added later.'
        }
      ],

      screens: [
        { view: 'hrms', caption: 'Leave management — requests, status chips and approval actions.' },
        { view: 'dashboard', caption: 'Attendance overview — daily logs and real-time status.' }
      ]
    }
  ];
})((window.PF = window.PF || {}));
