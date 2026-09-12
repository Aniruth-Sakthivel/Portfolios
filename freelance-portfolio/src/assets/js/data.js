export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Packages', href: '#packages' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { label: 'Delivery', value: 'Fixed timeline' },
  { label: 'Pricing', value: 'Standard, published' },
  { label: 'Stack', value: 'React · Next.js' },
]

export const primaryTech = [
  { name: 'React.js', note: 'Core frontend library behind every Nexaa interface.', icon: 'react' },
  { name: 'Next.js', note: 'App Router, SSR and SEO-ready production builds.', icon: 'layers' },
]

export const otherTech = ['TypeScript', 'JavaScript', 'Node.js', 'Express.js', 'Supabase', 'Tailwind CSS', 'Redux Toolkit', 'REST APIs', 'Git', 'GitHub']

export const services = [
  { num: '01', title: 'React.js Development', body: 'Build fast, responsive and reusable web interfaces using React.js.', icon: 'react', tone: 'accent' },
  { num: '02', title: 'Next.js Development', body: 'Create SEO-friendly, high-performance websites and applications using Next.js.', icon: 'layers', tone: 'accent' },
  { num: '03', title: 'Business Websites', body: 'Modern responsive websites designed to establish a strong, credible online presence.', icon: 'globe', tone: 'accent' },
  { num: '04', title: 'Full-Stack Development', body: 'Complete web applications with frontend, backend, APIs and database integration.', icon: 'stack', tone: 'accent2' },
  { num: '05', title: 'API & Backend Development', body: 'Build and integrate reliable REST APIs using Node.js and Express.js.', icon: 'api', tone: 'accent2' },
  { num: '06', title: 'Supabase Development', body: 'Authentication, database, storage and backend functionality using Supabase.', icon: 'db', tone: 'accent2' },
  { num: '07', title: 'Website Redesign', body: "Rebuild outdated, slow websites into fast, modern, maintainable ones.", icon: 'redo', tone: 'accent2' },
  { num: '08', title: 'Bug Fixing & Maintenance', body: 'Ongoing fixes and improvements for existing React and web applications.', icon: 'bug', tone: 'accent2' },
]

export const projects = [
  {
    name: 'Local Service Booking Platform', label: 'Demo Project', tech: 'Next.js · Supabase · TypeScript',
    shot: 'screenshot: booking flow',
    brief: 'Small service businesses lose bookings to phone tag and no-shows with no reminder system.',
    outcome: 'Live availability, online booking and automatic confirmations — built to replace a paper diary or shared spreadsheet.',
    features: ['Live availability', 'Online booking', 'Email confirmations', 'Admin schedule view', 'Mobile-first'],
    band: 'a',
  },
  {
    name: 'Operations Dashboard', label: 'Demo Project', tech: 'React.js · Next.js · TypeScript',
    shot: 'screenshot: KPI dashboard',
    brief: "Owners can't see daily revenue, bookings or no-shows without opening three different spreadsheets.",
    outcome: "One screen with today's numbers, trends and a searchable appointments table — the daily check-in a manager actually opens.",
    features: ['Live KPIs', 'Charts', 'Filterable tables', 'Role-based access', 'Dark/light mode'],
    band: 'b',
  },
  {
    name: 'Business Management System', label: 'Personal Project', tech: 'React.js · Node.js · Express.js · Supabase',
    shot: 'screenshot: user management',
    brief: 'Growing teams outgrow shared logins and manual record-keeping with no audit trail.',
    outcome: 'Authentication, roles, full CRUD on records and an activity log — the backbone an organization runs staff and clients through.',
    features: ['Authentication', 'Role-based access', 'CRUD operations', 'Activity log', 'REST API'],
    band: 'c',
  },
].map((p) => ({ ...p, repo: '#add-github-repo-link', demo: '#add-live-demo-link' }))

export const packages = [
  {
    name: 'Landing Page', scope: 'One-page site for a single offer or launch.', icon: 'bolt', iconTone: 'accent',
    includes: ['Responsive one-page build', 'Contact form', 'Basic SEO metadata', 'Deploy + handover'],
    timeline: '[ set typical timeline ]', price: '[ set standard price ]', featured: false,
  },
  {
    name: 'Business Website', scope: 'Multi-section site for an established organization.', icon: 'globe', iconTone: 'accent2-solid',
    includes: ['Up to 5 sections or pages', 'React.js / Next.js build', 'SEO + Open Graph setup', 'One revision round', 'Deploy + handover'],
    timeline: '[ set typical timeline ]', price: '[ set standard price ]', featured: true,
  },
  {
    name: 'Web Application', scope: 'Dashboard or internal tool with real data.', icon: 'stack', iconTone: 'accent',
    includes: ['Auth and user roles', 'REST API + database', 'CRUD screens and tables', 'Staging + production deploy'],
    timeline: '[ set typical timeline ]', price: '[ set standard price ]', featured: false,
  },
]

export const why = [
  { title: 'Faster delivery', body: 'A fixed process and reusable components mean less time spent re-solving what\'s already solved.', icon: 'bolt', tone: 'accent2' },
  { title: 'Consistent quality', body: 'The same checklist and standards apply to a landing page and a full application alike.', icon: 'check', tone: 'accent' },
  { title: 'Standard pricing', body: 'One published rate card. No client pays a different price for the same scope.', icon: 'spark', tone: 'accent2' },
  { title: 'Built for organizations', body: 'Role-based access, audit trails and handover documentation from day one, not bolted on later.', icon: 'shield', tone: 'accent' },
  { title: 'Clear communication', body: 'Plain-language updates and visible progress, no jargon standing in for a status report.', icon: 'chat', tone: 'accent2' },
  { title: 'You own the outcome', body: 'Code, credentials and documentation transfer to you at handover — no lock-in.', icon: 'check', tone: 'accent' },
]

export const process = [
  { num: '01', title: 'Diagnose', body: 'Identify the operational problem and who it costs time or money.', icon: 'chat', tone: 'accent' },
  { num: '02', title: 'Scope', body: 'Fix the deliverables, technology and standard price in writing.', icon: 'check', tone: 'accent' },
  { num: '03', title: 'Build', body: 'Develop and test against the agreed scope, on a fixed timeline.', icon: 'stack', tone: 'accent2' },
  { num: '04', title: 'Launch & support', body: 'Deploy, hand over documentation, and stay available for fixes.', icon: 'bolt', tone: 'accent2' },
]

export const faqs = [
  { q: 'Who is this for?', a: 'Organizations — small businesses, startups and teams — with an operational problem that software can fix, not just an idea for a website.' },
  { q: 'Why a standard price instead of a quote?', a: "The same package costs the same for everyone. You see the price before you commit, and it doesn't move once work starts." },
  { q: 'How fast is delivery?', a: 'Faster than a from-scratch build, because a fixed process and reusable components remove most of the setup time. Exact timelines are listed per package.' },
  { q: 'Do we own the code?', a: 'Yes — the repository, deployment access and documentation transfer to you at handover.' },
  { q: 'Can you fix or extend an existing system?', a: 'Yes. Redesigns, bug fixes and maintenance on existing React and Next.js projects run on the same standard rate card.' },
  { q: 'How are payments handled?', a: '[ add your payment terms — e.g. deposit up front, balance on delivery ]' },
]

export const socials = [
  { label: 'GitHub', icon: 'react', href: '#add-github-link' },
  { label: 'WhatsApp', icon: 'chat', href: '#add-whatsapp-link' },
  { label: 'Email', icon: 'spark', href: '#add-email-link' },
]

export const projectTypes = ['Business Website', 'React.js Development', 'Next.js Development', 'Full-Stack Application', 'API Development', 'Website Redesign', 'Bug Fixing', 'Maintenance', 'Other']

export const budgets = ['Under ₹5,000', '₹5,000 – ₹15,000', '₹15,000 – ₹30,000', '₹30,000 – ₹50,000', '₹50,000+']
