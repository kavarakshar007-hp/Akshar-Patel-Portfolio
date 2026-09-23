import {
  ProjectItem,
  PersonalityTrait,
  ExperienceItem,
  TechnicalSkill,
  NonTechnicalSkill,
  MilestoneItem,
  TimelineNode,
} from '../types';

export const PERSONAL_INFO = {
  name: 'Kavar Akshar',
  handle: 'thatsakki',
  role: 'Computer Science Engineering Student • Developer • Community Builder • Event Organizer • Student Leader',
  statusPill: 'CSE • MSU BARODA • BE 2',
  university: 'Maharaja Sayajirao University of Baroda (MSU Baroda)',
  faculty: 'Faculty of Technology & Engineering',
  degree: 'B.E. Computer Science Engineering',
  year: '2nd Year (Joined 2025)',
  email: 'kavarakshar007@gmail.com',
  github: 'kavarakshar007-hp',
  githubUrl: 'https://github.com/kavarakshar007-hp',
  linkedin: 'Akshar Kavar',
  linkedinUrl: 'https://www.linkedin.com/in/akshar-kavar',
  instagram: 'thatsakki7',
  instagramUrl: 'https://instagram.com/thatsakki7',
  whatsapp: 'thatsakki',
  whatsappUrl: 'https://wa.me/?text=Hi%20Akshar,%20saw%20your%20portfolio!',
  coreEthos: 'I build things, bring people together, and turn ideas into experiences.',
  heroHeadline: [
    'I build with code.',
    'I lead with people.',
    'I turn ideas into experiences.',
  ],
  heroSubtext:
    'Kavar Akshar — better known online as thatsakki — joined MSU Baroda in 2025, founded CodeLab, organized the Code Race Challenge on 29th January 2026, and helped bring back Paramarsh (researched in March, implemented in July 2026).',
  currentMode: {
    title: 'CURRENTLY',
    tagline: 'Building skills. Building communities. Building things worth remembering.',
    status: 'ACTIVE',
  },
};

export const CAPABILITY_STACK = [
  {
    id: 'CODE',
    title: 'CODE',
    summary: 'Building structured algorithms, systems, and modern web applications.',
    detail: 'Writing foundational C/C++, Java, and Python logic while exploring responsive frontend interfaces and clean software architectures.',
  },
  {
    id: 'COMMUNICATE',
    title: 'COMMUNICATE',
    summary: 'Translating complex ideas into transparent, engaging dialogue.',
    detail: 'Articulating technical concepts clearly to peers, facilitating open discussions, and bridging gaps between technical and non-technical members.',
  },
  {
    id: 'COORDINATE',
    title: 'COORDINATE',
    summary: 'Managing schedules, volunteers, and logistics under live pressure.',
    detail: 'Synchronizing multi-layered campus event operations, volunteer rosters, staging timelines, and participant experiences seamlessly.',
  },
  {
    id: 'CONVINCE',
    title: 'CONVINCE',
    summary: 'Inspiring people to step outside comfort zones and take action.',
    detail: 'Encouraging first-year students to embrace coding, participate in collegiate challenges, and take ownership of shared community goals.',
  },
  {
    id: 'CREATE',
    title: 'CREATE',
    summary: 'Designing platforms, workshops, and memorable community moments.',
    detail: 'Shaping spaces where students feel excited to learn, compete, collaborate, and share what they build without fear of failure.',
  },
  {
    id: 'LEAD',
    title: 'LEAD',
    summary: 'Transforming enthusiastic groups into motivated, cohesive teams.',
    detail: 'Setting a clear vision, leading by example with humility, maintaining accountability, and fostering team confidence from kickoff to wrap-up.',
  },
];

export const PERSONALITY_TRAITS: PersonalityTrait[] = [
  {
    title: 'CURIOUS',
    subtitle: 'Always exploring',
    description: 'Relentlessly interested in how things work under the hood—from memory layouts in C++ to group psychology in student movements.',
    tag: 'Exploration',
  },
  {
    title: 'BUILDER',
    subtitle: 'Learning by making',
    description: 'Prefers writing code, running small trials, and shipping prototypes over passive theoretical study. Action produces clarity.',
    tag: 'Execution',
  },
  {
    title: 'CONNECTOR',
    subtitle: 'Bringing people together',
    description: 'Naturally draws people with complementary skills together, sparking friendships, study circles, and collaborative initiatives.',
    tag: 'Community',
  },
  {
    title: 'ORGANIZER',
    subtitle: 'Comfort with moving pieces',
    description: 'Thrives in dynamic environments with shifting constraints, keeping teams calm, schedules tight, and logistics coordinated.',
    tag: 'Operations',
  },
  {
    title: 'LEARNER',
    subtitle: 'Continuous expansion',
    description: 'Constantly expanding both technical depth in Computer Science and interpersonal breadth in speech, negotiation, and teamwork.',
    tag: 'Growth',
  },
  {
    title: 'LEADER',
    subtitle: 'Turning groups into teams',
    description: 'Focuses on empowering others, delegating with trust, celebrating small wins, and turning collective ambition into shared execution.',
    tag: 'Leadership',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'codelab-platform',
    number: '01',
    title: 'CodeLab Platform',
    category: 'BUILD',
    shortDesc: 'A community-oriented platform for student coding activities, tasks, competitions, and peer collaboration.',
    fullDesc:
      'Conceptualized and crafted to support the CodeLab student community at MSU Baroda (founded in 2025). The platform provides interactive coding task listings, collaborative session calendars, resource drops, and challenge boards designed specifically to ease junior engineering students into consistent programming habits.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js Architecture'],
    status: 'In Progress',
    year: '2025–2026',
    highlights: [
      'Task tracking system for weekly coding problem sets',
      'Peer collaboration directory for study sprints',
      'Minimalist distraction-free design built for student ease of access',
    ],
    githubUrl: 'https://github.com/kavarakshar007-hp',
    peekTags: ['Community Hub', 'Task Management', 'Student Collaboration'],
  },
  {
    id: 'code-race-challenge',
    number: '02',
    title: 'Code Race Challenge Arena',
    category: 'BUILD',
    shortDesc: 'The digital companion and operational system for the Code Race student coding competition held on 29th January 2026.',
    fullDesc:
      'Designed for and executed on 29th January 2026 as the flagship first-year coding competition organized through CodeLab at MSU Baroda. Features timed round coordination, problem statement distribution, and score logging to manage multi-lab competition pacing smoothly.',
    technologies: ['C++', 'Logic Design', 'Web Dashboard', 'Event Coordination'],
    status: 'Completed',
    year: '29th January 2026',
    highlights: [
      'Executed on 29th January 2026 for first-year engineering students',
      'Problem-set packaging categorized by progressive difficulty tiers',
      'Synchronized multi-lab participant groups with zero logistical friction',
    ],
    githubUrl: 'https://github.com/kavarakshar007-hp',
    peekTags: ['Coding Contest', 'First-Year Mentorship', '29 Jan 2026'],
  },
  {
    id: 'personal-portfolio',
    number: '03',
    title: 'thatsakki.dev — Personal Identity System',
    category: 'BUILD',
    shortDesc: 'Multi-page interactive digital identity system with Swiss editorial discipline, custom portrait cutout, and cherry signal design.',
    fullDesc:
      'This portfolio itself: a custom-engineered multi-page web experience blending Swiss typography, brutalist hairline precision, 70/20/10 slate and cherry color distribution, interactive portrait frame cutout, context-peek tooltips, and server-side contact routing.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion', 'Express'],
    status: 'Completed',
    year: '2026',
    highlights: [
      'Interactive Akshar Portrait cutout frame with multi-tone color adjustments',
      'Zero-pill metadata discipline and Swiss typography hierarchy',
      'Verified server-side contact API with secure inbox delivery',
    ],
    githubUrl: 'https://github.com/kavarakshar007-hp',
    demoUrl: '#',
    peekTags: ['Design System', 'Swiss Editorial', 'Portrait Cutout'],
  },
  {
    id: 'event-management-dashboard',
    number: '04',
    title: 'Collegiate Event Operations Dashboard',
    category: 'CONCEPT',
    shortDesc: 'Architecture concept for managing registrations, volunteer rosters, schedules, and live venue operations.',
    fullDesc:
      'Derived from hands-on campus event coordination challenges including the Paramarsh revival (researched March 2026, implemented July 2026). A centralized planning board mockup for tracking stage readiness, equipment handoffs, volunteer shift alerts, and emergency contact lists during multi-track collegiate festivals.',
    technologies: ['System Design', 'UI/UX Wireframes', 'Operations Workflow'],
    status: 'Conceptualized',
    year: '2025–2026',
    highlights: [
      'Real-time timetable synchronization across tracks',
      'Shift duty allocation matrix for volunteer squads',
      'Backstage quick-lookup directory for coordinators',
    ],
    githubUrl: 'https://github.com/kavarakshar007-hp',
    peekTags: ['Event Logistics', 'Volunteer Roster', 'Backstage Ops'],
  },
  {
    id: 'student-community-hub',
    number: '05',
    title: 'Student Community Hub Concept',
    category: 'CONCEPT',
    shortDesc: 'Conceptual platform for sharing campus tech events, resource repositories, and student activities.',
    fullDesc:
      'An exploratory architecture focused on breaking department silos at MSU Baroda. Allows student organizers to publish upcoming workshops, share verified study notes, and solicit volunteers across different branches of engineering.',
    technologies: ['Information Architecture', 'Product Design', 'Community Strategy'],
    status: 'Conceptualized',
    year: '2025',
    highlights: [
      'Department-neutral event board with direct coordinator contact',
      'Open repository for lecture summaries and lab tutorials',
      'Peer mentorship request board',
    ],
    githubUrl: 'https://github.com/kavarakshar007-hp',
    peekTags: ['Resource Sharing', 'Cross-Dept Hub', 'Student Networking'],
  },
  {
    id: 'developer-utilities',
    number: '06',
    title: 'Core Algorithm Suites & Dev Utilities',
    category: 'EXPERIMENT',
    shortDesc: 'Algorithmic experiments, CLI utilities, and data structures built while mastering C++, Java, and Python.',
    fullDesc:
      'A collection of modular exercises, data structure demonstrations, file-handling experiments, and CLI helpers created throughout undergraduate Computer Science coursework at MSU Baroda since joining in 2025.',
    technologies: ['C', 'C++', 'Java', 'Python', 'OOP Design'],
    status: 'Iterating',
    year: '2025–2026',
    highlights: [
      'Object-oriented implementations of core data structures',
      'Algorithmic problem-solving routines and efficiency benchmarks',
      'Command-line helper scripts for file batching and student tasks',
    ],
    githubUrl: 'https://github.com/kavarakshar007-hp',
    peekTags: ['Data Structures', 'C++ Mastery', 'OOP Fundamentals'],
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'codelab',
    organization: 'CodeLab',
    role: 'Founder & President',
    period: '2025 – Present',
    tagline: 'Student coding community at MSU Baroda dedicated to hands-on learning and peer support.',
    description:
      'Founded CodeLab in 2025 at MSU Baroda with a mission to remove the intimidation around programming for first-year students. Built a supportive environment where juniors can ask questions freely, solve foundational problems in C/C++, and experience the thrill of collaborative coding.',
    type: 'community',
    storySteps: [
      { step: 'The Idea (2025)', detail: 'Noticed first-year engineering students often feel isolated or overwhelmed when starting programming with standard lectures.' },
      { step: 'The Community (2025)', detail: 'Gathered curious peers, initiated regular problem-solving meetups, and established an open culture where no question is too basic.' },
      { step: 'The Competition (29th Jan 2026)', detail: 'Designed and launched "Code Race Challenge" on 29th January 2026—a targeted coding contest tailored to test first-year problem-solving under timed conditions.' },
      { step: 'The Participation', detail: 'Welcomed active student cohorts who tested their skills under friendly timed conditions across multiple college computer labs.' },
      { step: 'The Learning', detail: 'Received overwhelming positive feedback from participants who shared that they gained confidence to tackle programming courses.' },
    ],
    bulletPoints: [
      'Founded CodeLab in 2025 as a dedicated MSU student coding community',
      'Mentored incoming students in fundamental programming practices and logic building',
      'Curated beginner-friendly problem sets and collaborative peer coding sessions',
      'Organized and hosted the flagship Code Race Challenge on 29th January 2026',
    ],
    badges: ['Founded 2025', 'Code Race 29 Jan 2026', 'Peer Mentoring'],
    peekTags: ['CodeLab Founder', 'Coding Competitions', 'Peer Mentoring'],
  },
  {
    id: 'paramarsh',
    organization: 'PARAMARSH',
    role: 'Core Team Member — Research & Revival Execution',
    period: 'March 2026 (Research) – July 2026 (Implementation)',
    tagline: 'National-Level Non-Technical Fiesta • Faculty of Technology & Engineering, MSU Baroda',
    description:
      'Paramarsh is a celebrated, student-run national-level non-technical fiesta associated with the Faculty of Technology & Engineering at Maharaja Sayajirao University of Baroda (began in 2001). Akshar was part of the core team committed to bringing Paramarsh back: initiating in-depth research, alumni discussions, and structural planning in March 2026, and turning that vision into reality through full on-ground implementation and staging in July 2026.',
    type: 'event',
    bulletPoints: [
      'March 2026: Conducted extensive archival research, senior alumni consultations, and concept frameworks for reviving Paramarsh',
      'July 2026: Executed comprehensive on-ground implementation, volunteer alignment, and festival stage operations',
      'Managed volunteer shift duty rosters and rapid issue triage across simultaneous event venues',
      'Embodying the philosophy: "Technology isn\'t the only thing I build. Sometimes I help build experiences."',
    ],
    badges: ['Research Mar 2026', 'Implementation Jul 2026', 'National Fiesta'],
    peekTags: ['Paramarsh MSU', 'Research March 2026', 'Implemented July 2026'],
  },
  {
    id: 'campus-initiatives',
    organization: 'Campus Tech & Student Initiatives',
    role: 'Student Coordinator & Volunteer',
    period: '2025 – Present',
    tagline: 'Active involvement across student seminars, laboratory orientation, and collegiate activities.',
    description:
      'Participating actively across collegiate initiatives at MSU Baroda since joining in 2025, supporting departmental orientations for incoming engineering batches, and volunteering at campus events.',
    type: 'initiative',
    bulletPoints: [
      'Assisted incoming first-year students with academic and laboratory onboarding',
      'Collaborated with senior student organizers on scheduling and crowd flow',
      'Actively bridging the gap between student interests and academic opportunities',
    ],
    badges: ['Student Engagement', 'Teamwork', 'Campus Culture'],
    peekTags: ['Campus Orientation', 'Volunteerism', 'Student Welfare'],
  },
];

export const TECHNICAL_SKILLS: TechnicalSkill[] = [
  {
    name: 'C',
    category: 'Systems Programming',
    status: 'CORE',
    usageContext: 'Memory management, pointers, and foundational computer architecture understanding.',
    focusArea: 'Core Language Fundamentals',
  },
  {
    name: 'C++',
    category: 'Systems & Algorithmic',
    status: 'CORE',
    usageContext: 'Primary language for data structures, algorithms, and modular object-oriented programming.',
    focusArea: 'Data Structures & Algorithms',
  },
  {
    name: 'Object-Oriented Programming (OOP)',
    category: 'Architecture',
    status: 'CORE',
    usageContext: 'Class design, encapsulation, inheritance, polymorphism, and clean modular code design.',
    focusArea: 'Software Engineering Principles',
  },
  {
    name: 'Java',
    category: 'Application Development',
    status: 'ACTIVE',
    usageContext: 'Class hierarchies, exception handling, collections, and structured enterprise patterns.',
    focusArea: 'Object-Oriented Applications',
  },
  {
    name: 'Python',
    category: 'Scripting & Logic',
    status: 'ACTIVE',
    usageContext: 'Rapid prototyping, data processing scripts, algorithmic experiments, and utilities.',
    focusArea: 'Scripting & Automation',
  },
  {
    name: 'HTML5',
    category: 'Web Standards',
    status: 'ACTIVE',
    usageContext: 'Semantic document structure, accessibility landmarks, and web fundamentals.',
    focusArea: 'Semantic Web Markup',
  },
  {
    name: 'CSS3',
    category: 'Styling & Layout',
    status: 'ACTIVE',
    usageContext: 'Flexbox, Grid, responsive viewports, custom properties, and fluid typography.',
    focusArea: 'Visual Layouts & Animation',
  },
  {
    name: 'Bootstrap',
    category: 'Component UI',
    status: 'ACTIVE',
    usageContext: 'Grid-based rapid UI templating, responsive containers, and rapid mockups.',
    focusArea: 'Responsive UI Scaffolding',
  },
  {
    name: 'JavaScript',
    category: 'Dynamic Web',
    status: 'EXPLORING',
    usageContext: 'Modern ES6+ syntax, asynchronous programming, event loop, and DOM manipulation.',
    focusArea: 'Interactive Web Logic',
  },
  {
    name: 'Modern Frontend (React & Vite)',
    category: 'Frontend Ecosystem',
    status: 'EXPLORING',
    usageContext: 'Component lifecycles, hooks, state management, and modern build tooling.',
    focusArea: 'Single Page Applications',
  },
  {
    name: 'Backend Development',
    category: 'Server Engineering',
    status: 'EXPLORING',
    usageContext: 'REST APIs, server-side request routing, middleware, and request validation.',
    focusArea: 'Server-Side Architecture',
  },
  {
    name: 'Databases & SQL',
    category: 'Data Persistence',
    status: 'EXPLORING',
    usageContext: 'Relational schemas, queries, normalization, and persistent data storage.',
    focusArea: 'Data Modeling & Persistence',
  },
  {
    name: 'Full-Stack Architecture',
    category: 'Integrated Systems',
    status: 'EXPLORING',
    usageContext: 'Connecting client interfaces with secure backends and deployment lifecycles.',
    focusArea: 'End-to-End Delivery',
  },
];

export const NON_TECHNICAL_SKILLS: NonTechnicalSkill[] = [
  {
    name: 'Communication',
    domain: 'Interpersonal',
    description: 'Articulating technical and organizational concepts clearly to both technical peers and general audiences.',
    appliedIn: 'CodeLab workshops, student mentoring, and project presentations',
  },
  {
    name: 'Convincing',
    domain: 'Influence & Inspiration',
    description: 'Inspiring people to take initiative, try competitive programming, and contribute to community projects.',
    appliedIn: 'Recruiting first-year participants for CodeLab and Code Race',
  },
  {
    name: 'Leadership',
    domain: 'Strategy & Direction',
    description: 'Setting a clear direction, motivating group energy, and leading by personal example and responsibility.',
    appliedIn: 'President of CodeLab, team guidance, and student representation',
  },
  {
    name: 'Management',
    domain: 'Resource Allocation',
    description: 'Balancing time, academic commitments, event priorities, and team delegation effectively.',
    appliedIn: 'Balancing CSE curriculum with community and event leadership',
  },
  {
    name: 'Event Coordination',
    domain: 'Operations',
    description: 'Orchestrating schedules, stage readiness, participant flow, and emergency adjustments in real time.',
    appliedIn: 'Code Race Challenge (29 Jan 2026) and Paramarsh fiesta revival (July 2026)',
  },
  {
    name: 'Team Collaboration',
    domain: 'Team Dynamics',
    description: 'Listening actively, respecting varied skill levels, and creating a psychologically safe working environment.',
    appliedIn: 'Organizing committee teams and peer programming circles',
  },
  {
    name: 'Public Interaction',
    domain: 'Engagement',
    description: 'Engaging comfortably with large student gatherings, addressing questions, and welcoming newcomers.',
    appliedIn: 'Campus orientations, event briefings, and announcements',
  },
  {
    name: 'Problem Solving',
    domain: 'Analytical Thinking',
    description: 'Breaking down ambiguous logistical and technical hurdles into concrete, actionable steps.',
    appliedIn: 'Debugging algorithmic roadblocks and troubleshooting event snags',
  },
  {
    name: 'Organization',
    domain: 'Structural Clarity',
    description: 'Maintaining clear documentation, check-sheets, and systematic structures so teams operate smoothly.',
    appliedIn: 'Event planning boards, problem repositories, and schedules',
  },
];

export const ACHIEVEMENTS: MilestoneItem[] = [
  {
    year: '2025',
    title: 'Admitted to B.E. Computer Science Engineering',
    organization: 'Faculty of Technology & Engineering, MSU Baroda',
    narrative:
      'Joined the prestigious Faculty of Technology & Engineering at Maharaja Sayajirao University of Baroda in 2025 to pursue a four-year Bachelor of Engineering in Computer Science.',
    category: 'Academic Foundation',
    keyTakeaway: 'Deepening theoretical CS fundamentals, systems programming rigor, and collegiate leadership.',
  },
  {
    year: '2025',
    title: 'Founder & President — CodeLab',
    organization: 'MSU Baroda Student Community',
    narrative:
      'Founded CodeLab in 2025 as a dedicated student coding community to cultivate hands-on programming habits among first-year engineering students and provide accessible peer mentoring.',
    category: 'Leadership & Community',
    keyTakeaway: 'Built a vibrant student space where newcomers gain confidence in code.',
  },
  {
    year: '29th January 2026',
    title: 'Organized "Code Race Challenge"',
    organization: 'CodeLab Community @ MSU Baroda',
    narrative:
      'Successfully organized and executed the Code Race Challenge on 29th January 2026—a competitive coding challenge specifically targeted at first-year students to test logic under timed conditions.',
    category: 'Event Execution',
    keyTakeaway: 'Turned a conceptual student challenge into an organized, well-received contest.',
  },
  {
    year: 'March – July 2026',
    title: 'PARAMARSH Revival: Research & Implementation',
    organization: 'Faculty of Technology & Engineering, MSU Baroda',
    narrative:
      'Part of the dedicated core team that brought back Paramarsh (MSU\'s landmark national-level non-technical fiesta, est. 2001). Conducted archival research and concept planning in March 2026, leading to full on-ground execution and implementation in July 2026.',
    category: 'National Fiesta Revival',
    keyTakeaway: 'Demonstrated large-scale logistical coordination, research depth, and high-stakes teamwork.',
  },
  {
    year: '2025–2026',
    title: 'Active Student Mentorship & Campus Coordination',
    organization: 'MSU Baroda Campus',
    narrative:
      'Consistently contributing time to orient juniors, organize peer study groups, and volunteer across collegiate engineering events.',
    category: 'Campus Service',
    keyTakeaway: 'True leadership is demonstrated by how many others you help succeed.',
  },
];

export const TIMELINE_NODES: TimelineNode[] = [
  {
    id: 't-01',
    index: '01',
    title: 'Stepping into MSU Baroda Computer Science',
    period: '2025',
    stage: 'Academic Journey',
    narrative:
      'Joined the Faculty of Technology & Engineering at Maharaja Sayajirao University of Baroda in 2025 as a B.E. Computer Science Engineering student. Immersed into rigorous CS theory and lab work.',
    learnings: ['Data structures', 'C Language & systems thinking', 'Engineering discipline'],
    peekTags: ['Joined MSU 2025', 'Faculty of Tech & Eng', 'CSE BE 2'],
  },
  {
    id: 't-02',
    index: '02',
    title: 'Mastering Foundational Algorithms & C++',
    period: '2025',
    stage: 'Software Architecture',
    narrative:
      'Transitioned into advanced C++, OOP architecture, and Java. Learned to organize code into classes, understand inheritance, encapsulation, and algorithmic paradigms.',
    learnings: ['C++ OOP architecture', 'Java foundations', 'Python scripting'],
    peekTags: ['C++', 'Java', 'Object-Oriented Design'],
  },
  {
    id: 't-03',
    index: '03',
    title: 'Founding CodeLab at MSU Baroda',
    period: '2025',
    stage: 'Community Builder',
    narrative:
      'Recognized that first-year students often felt intimidated by standard coding lectures. Founded CodeLab in 2025 as an open, peer-driven space for regular practice, problem solving, and mentorship.',
    learnings: ['Community leadership', 'Peer curriculum design', 'Empathetic mentorship'],
    peekTags: ['CodeLab Founded 2025', 'Founder & President', 'MSU Community'],
  },
  {
    id: 't-04',
    index: '04',
    title: 'Hosting Code Race Challenge',
    period: '29th January 2026',
    stage: 'Event Execution',
    narrative:
      'Organized and hosted the flagship Code Race Challenge on 29th January 2026 for first-year engineering students. Handled problem-set curation, multi-lab scheduling, and live contest moderation.',
    learnings: ['Live contest operations', 'Problem-set pacing', 'Participant management'],
    peekTags: ['Code Race', '29th Jan 2026', 'First-Year Challenge'],
  },
  {
    id: 't-05',
    index: '05',
    title: 'Paramarsh Revival: Archival & Groundwork Research',
    period: 'March 2026',
    stage: 'Research & Strategy',
    narrative:
      'Initiated in-depth research in March 2026 to study the 25-year legacy of Paramarsh (MSU\'s national-level non-technical fiesta since 2001). Consulted senior alumni, developed logistical frameworks, and formulated the strategy to bring the festival back.',
    learnings: ['Archival research', 'Festival design frameworks', 'Stakeholder alignment'],
    peekTags: ['Paramarsh Research', 'March 2026', 'Legacy Revival'],
  },
  {
    id: 't-06',
    index: '06',
    title: 'Paramarsh Revival: Full On-Ground Implementation',
    period: 'July 2026',
    stage: 'Large-Scale Execution',
    narrative:
      'Turned months of research into live campus reality in July 2026. Handled backstage operations, stage management, volunteer duty allocations, and crowd orchestration, successfully restoring Paramarsh.',
    learnings: ['On-ground crisis resolution', 'Multi-venue synchronization', 'Public stage management'],
    peekTags: ['Paramarsh Staging', 'July 2026', 'Campus Grandeur'],
  },
  {
    id: 't-07',
    index: '07',
    title: 'Expanding into Modern Web & Full-Stack Systems',
    period: '2026',
    stage: 'Full-Stack Expansion',
    narrative:
      'Expanding horizons beyond foundational languages into modern JavaScript, React, backend APIs, and database engineering. Building functional tools that combine technical polish with human utility.',
    learnings: ['React & modern tooling', 'API architectures', 'Responsive UI design'],
    peekTags: ['React', 'Full-Stack Horizons', 'Modern Web'],
  },
  {
    id: 't-08',
    index: '08',
    title: 'Still Building...',
    period: 'Present & Ahead',
    stage: 'The Road Ahead',
    narrative:
      'Currently in 2nd Year B.E. CSE at MSU Baroda. Balancing code, leadership, community building, and event execution every single day. The best projects and the best experiences are still ahead.',
    learnings: ['Continuous curiosity', 'Consistency over intensity', 'Lifelong builder ethos'],
    peekTags: ['Active Builder', 'Continuous Growth', 'What\'s Next'],
  },
];

export const WHAT_I_DO = [
  {
    title: 'BUILD',
    headline: 'Software & Experiments',
    description: 'Writing algorithms in C/C++, exploring modern web stacks, and engineering functional software with attention to clean structure.',
    tags: ['C / C++', 'Web Platforms', 'Prototyping'],
    icon: 'Terminal',
  },
  {
    title: 'LEAD',
    headline: 'Community & Culture',
    description: 'Founder & President of CodeLab (est. 2025). Creating peer-to-peer environments where juniors feel empowered to start and persist in coding.',
    tags: ['CodeLab 2025', 'Peer Mentoring', 'Team Direction'],
    icon: 'Users',
  },
  {
    title: 'ORGANIZE',
    headline: 'Event & Experience Ops',
    description: 'Planning competitions like Code Race (29th Jan 2026) and spearheading the Paramarsh revival (researched March, implemented July 2026).',
    tags: ['Code Race 2026', 'Paramarsh 2026', 'Operations'],
    icon: 'CalendarCheck',
  },
  {
    title: 'LEARN',
    headline: 'Continuous Engineering',
    description: 'Strengthening core Computer Science disciplines, memory models, object-oriented design, and exploring full-stack web horizons.',
    tags: ['CS Fundamentals', 'OOP', 'New Stacks'],
    icon: 'Sparkles',
  },
  {
    title: 'CONNECT',
    headline: 'People & Networks',
    description: 'Bridging technical students with opportunities, collaborating with fellow student organizers, and turning ideas into tangible experiences.',
    tags: ['Collaboration', 'Student Networks', 'Communication'],
    icon: 'Share2',
  },
];
