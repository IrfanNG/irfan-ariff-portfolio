export type ProjectStatus = 'Completed' | 'In Progress' | 'Prototype' | 'FYP' | 'Demo';

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  status: ProjectStatus;
  problem: string;
  solution: string;
  role: string;
  keyFeatures: string[];
  techStack: string[];
  challenge: string;
  whatILearned: string;
  repoUrl?: string;
  repoLabel?: string;
};

export const resumeDownloadHref = '/IrfanAriff-Resume.pdf';
export const resumePreviewHref = '/Irfan-Ariff-Resume.md';

export const navLinks = [
  { label: 'Value', href: '#value' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'AI', href: '#ai' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];

export const heroBadges = [
  'Web & Mobile Development',
  'AI-Assisted Workflow',
  'UI/UX Thinking',
];

export const valueCards = [
  {
    title: 'Faster Prototyping',
    body: 'I can help teams quickly turn ideas into working prototypes using AI-assisted development tools, while still reviewing and improving the output manually.',
  },
  {
    title: 'Product & User Thinking',
    body: 'I do not just build screens. I try to understand the problem, user flow, business goal, and how the feature will actually be used.',
  },
  {
    title: 'Clean UI Implementation',
    body: 'I care about layout, spacing, responsiveness, and usability, so the final product feels polished and easy to use.',
  },
  {
    title: 'Adaptability',
    body: 'I am comfortable learning new tools, debugging issues, and improving based on feedback.',
  },
  {
    title: 'Practical Project Thinking',
    body: 'My projects are based on actual student project requirements, not just random cloned apps.',
  },
];

export const aboutParagraphs = [
  "I'm a Software Engineering student interested in building practical web and mobile applications. My strength is rapid development - using tools like ChatGPT, Codex, Gemini, Figma, and Google Stitch to speed up planning, prototyping, debugging, and UI iteration.",
  "I'm especially interested in internship opportunities where I can contribute to real product development, learn from experienced teams, and improve as a software developer.",
];

export const workflowSteps = [
  'Understand the problem',
  'Research user pain points',
  'Plan user flow and features',
  'Design UI in Figma',
  'Build MVP rapidly',
  'Test, debug, and improve',
  'Iterate based on feedback',
];

export const workflowMessage =
  'I use AI-assisted workflows to speed up ideation, debugging, and development while maintaining code quality, usability, and clear thinking.';

export const aiSections = [
  {
    title: 'Planning',
    body: 'Breaking down features, user flows, and system requirements.',
  },
  {
    title: 'UI Ideation',
    body: 'Generating layout ideas, design directions, and copy variations.',
  },
  {
    title: 'Development',
    body: 'Speeding up boilerplate, component structure, and code refactoring.',
  },
  {
    title: 'Debugging',
    body: 'Understanding errors faster and comparing possible fixes.',
  },
  {
    title: 'Documentation',
    body: 'Writing clearer project explanations and implementation notes.',
  },
];

export const skillGroups = [
  {
    title: 'Web Development',
    items: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Laravel'],
  },
  {
    title: 'Mobile Development',
    items: ['Flutter', 'Dart', 'React Native', 'Firebase'],
  },
  {
    title: 'Backend & Database',
    items: ['PHP', 'SQL', 'Firebase', 'Basic API integration'],
  },
  {
    title: 'UI/UX & Product Design',
    items: ['Figma', 'Wireframing', 'User flow planning', 'Responsive design'],
  },
  {
    title: 'AI-Assisted Development',
    items: ['ChatGPT', 'Codex', 'Gemini', 'Google Stitch'],
  },
  {
    title: 'Developer Tools',
    items: ['Git', 'GitHub', 'VS Code', 'Debugging', 'Documentation'],
  },
];

export const experienceItems = [
  {
    title: 'FYP / Student Project Service',
    description:
      'Helped students plan, structure, and develop academic software projects by turning rough ideas into clearer system flows, features, UI direction, and implementation plans.',
    emphasis: ['Requirement gathering', 'Communication', 'Software planning', 'UI direction', 'Client-style work'],
  },
  {
    title: 'Computer Technician Experience',
    description:
      'Diagnosed and resolved hardware and software issues for laptops, desktops, and printers, while communicating technical solutions clearly to customers.',
    emphasis: ['Troubleshooting', 'Customer communication', 'Technical problem solving', 'Responsibility'],
  },
];

export const resumePitch =
  'Looking for an internship opportunity where I can contribute to software development, product building, and AI-assisted workflows.';

export const contactIntro =
  "I'm currently open to internship opportunities in software development and product teams.";

export const contactLinks = [
  { label: 'Email', href: 'mailto:mnifanmohdariff@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/irfan-ariff-20691a264' },
  { label: 'GitHub', href: 'https://github.com/IrfanNG' },
  { label: 'Resume', href: resumeDownloadHref },
  { label: 'WhatsApp', href: 'https://wa.me/60183823063' },
];

export const projects: ProjectCaseStudy[] = [
  {
    slug: 'cutimate',
    title: 'CutiMate',
    category: 'Flutter travel planning app',
    summary:
      'A group travel planning app for Malaysian users that supports destination discovery, voting, itinerary planning, and expense tracking.',
    status: 'FYP',
    problem:
      'Group trip planning usually gets scattered across chat threads, screenshots, and separate expense notes, which makes it hard for everyone to stay aligned.',
    solution:
      'CutiMate brings the planning flow into one mobile experience with group coordination, destination discovery, voting, itinerary planning, and expense tracking.',
    role:
      'I shaped the mobile flow, feature structure, and UI direction for a calmer and more usable travel planning experience.',
    keyFeatures: [
      'Group planning',
      'Destination discovery',
      'Voting system',
      'Expense tracking',
      'Itinerary planning',
      'Firebase auth',
      'Strong UI/UX direction',
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Figma', 'Google Places API'],
    challenge:
      'The challenge was balancing multiple trip-planning actions in one app without making the interface feel crowded or confusing.',
    whatILearned:
      'I learned how to design a mobile product that supports several user flows while still feeling calm, clear, and easy to use.',
  },
  {
    slug: 'myumrahguide',
    title: 'MyUmrahGuide',
    category: 'Guided learning app',
    summary:
      'A calm Umrah practice companion app that helps users learn step by step, track progress, and move through the guidance with confidence.',
    status: 'FYP',
    problem:
      'Users often need a clear and reliable reference for Umrah practice, but the information is usually spread across sources that are not optimized for quick understanding.',
    solution:
      'The app presents onboarding, practice mode, progress tracking, and step-by-step guidance in a simple interface that supports learning instead of overwhelming the user.',
    role:
      'I focused on the interface structure, the user journey, and the implementation of a clear and reassuring mobile experience.',
    keyFeatures: [
      'Onboarding',
      'Practice mode',
      'Progress tracking',
      'Step-by-step guidance',
      'Calm and clear UI',
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Figma'],
    challenge:
      'The main challenge was making the product feel simple and calm while still delivering structured guidance that users could trust.',
    whatILearned:
      'Guided apps need clarity more than complexity. A strong flow and a calm interface matter as much as the content itself.',
  },
  {
    slug: 'safe-drop-system',
    title: 'Safe Drop System',
    category: 'Smart parcel security system',
    summary:
      'A secure parcel drop system that combines web logic, geofence checks, and verification flow to improve parcel handling safety.',
    status: 'Completed',
    problem:
      'Parcel drop workflows can be vulnerable when identity and location checks are not tightly controlled, especially in shared environments.',
    solution:
      'Safe Drop System uses verification flow, geofence status logic, and connected backend actions to make parcel drop handling more controlled and traceable.',
    role:
      'I worked on the system flow, backend actions, and the logic that connects verification and parcel handling.',
    keyFeatures: [
      'User verification',
      'Geofence status',
      'GPS coordinate flow',
      'Parcel status updates',
      'MySQL / PHP backend',
    ],
    techStack: ['PHP', 'JavaScript', 'MySQL', 'XAMPP', 'IoT workflow'],
    challenge:
      'The challenge was keeping verification logic and GPS-driven behavior reliable while still making the system easy to understand.',
    whatILearned:
      'This project taught me how access control, location checks, and backend flow need to work together when the system handles real-world handoff points.',
  },
  {
    slug: 'saf',
    title: 'Saf',
    category: 'Mosque community PWA',
    summary:
      'A premium PWA for mosque community tools, prayer utilities, and local community features in one lightweight experience.',
    status: 'Completed',
    problem:
      'Mosque communities often need prayer tools, announcements, and community utilities in one accessible place instead of scattered across separate channels.',
    solution:
      'Saf combines spiritual utilities, community updates, lost and found features, and PWA convenience into one usable interface.',
    role:
      'I helped shape the overall product flow and interface structure for a community-focused PWA experience.',
    keyFeatures: [
      'Prayer times',
      'Daily inspiration',
      'Pustaka Doa',
      'Lost and found',
      'Mosque activities',
      'Zakat calculator',
      'Offline ready PWA',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Firebase', 'Framer Motion', 'OneSignal'],
    challenge:
      'The challenge was balancing utility, clarity, and premium presentation without making the app feel heavy.',
    whatILearned:
      'I learned how to combine community information, utility features, and polished motion in a PWA that stays lightweight and practical.',
  },
  {
    slug: 'sakuraya',
    title: 'SakuRaya',
    category: 'Ramadan / Raya personal finance planner',
    summary:
      'A personal finance planner that helps users manage duit raya budgeting, cash breakdowns, and bank crowd visibility during Ramadan and Raya season.',
    status: 'Completed',
    problem:
      'During Ramadan and Raya, budgeting for duit raya, withdrawing cash, and dealing with bank congestion can become stressful and repetitive.',
    solution:
      'SakuRaya helps users manage recipients, calculate note breakdowns, track savings, and avoid crowded bank visits through a live crowd report flow.',
    role:
      'I worked on the finance logic, structured data flow, and the product experience for a more focused budgeting tool.',
    keyFeatures: [
      'Smart cash breakdown',
      'Real-time bank tracker',
      'Recipient management',
      'Savings roadmap',
      'RLS security',
    ],
    techStack: ['Next.js', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Google Auth'],
    challenge:
      'The challenge was combining budgeting, live crowd data, and privacy controls in a way that stayed clear and low-friction.',
    whatILearned:
      'I learned how a small finance tool can become much more useful when the workflow is structured around a specific seasonal need.',
    repoUrl: undefined,
    repoLabel: 'GitHub Repo',
  },
];

export const featuredProjects = projects;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
