import React, { useState } from 'react';
import ResponsiveHeroBanner, { NavLink, Partner } from '../components/ui/responsive-hero-banner';
import {
  Code2,
  Database,
  Globe,
  Terminal,
  Cpu,
  GraduationCap,
  Award,
  ExternalLink,
  Mail,
  Send,
  CheckCircle2,
  FileText,
  Compass,
  Sparkles,
  Users,
  Zap
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/icons';

export const App: React.FC = () => {
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const navLinks: NavLink[] = [
    { label: "Home", href: "#home", isActive: true },
    { label: "About", href: "#about" },
    { label: "Education", href: "#education" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Certifications", href: "#certifications" },
    { label: "Contact", href: "#contact" }
  ];

  const partners: Partner[] = [
    { name: "Python", logoUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=120&q=80", href: "#skills" },
    { name: "SQL / MySQL", logoUrl: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=120&q=80", href: "#skills" },
    { name: "React & TS", logoUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=120&q=80", href: "#skills" },
    { name: "Tailwind CSS", logoUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=120&q=80", href: "#skills" },
    { name: "Git & Linux", logoUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=120&q=80", href: "#skills" }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* 1. HERO SECTION (Powered by the ResponsiveHeroBanner component) */}
      <div id="home">
        <ResponsiveHeroBanner
          navLinks={navLinks}
          logoText="SS"
          badgeLabel="Software Systems Student"
          badgeText="AI & ML Enthusiast • Data Explorer • Full-Stack Developer"
          title="Sreerag S"
          titleLine2="Crafting Database-Driven & Web Software"
          description="Software Systems student passionate about Artificial Intelligence, Machine Learning, Data Science, and Full-Stack Development. Exploring the intersection of intelligent technologies, data-driven solutions, and modern software engineering to build applications that make a difference."
          primaryButtonText="Explore Projects"
          primaryButtonHref="#projects"
          secondaryButtonText="Get in Touch"
          secondaryButtonHref="#contact"
          ctaButtonText="Contact Me"
          ctaButtonHref="#contact"
          partnersTitle="Core Development Stack & Technologies"
          partners={partners}
        />
      </div>

      <main className="max-w-7xl mx-auto px-6 py-20 space-y-32">
        {/* 2. ABOUT SECTION */}
        <section id="about" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
              01 / Profile
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-8">
            About Me
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-5 text-neutral-300 text-lg leading-relaxed">
              <p>
                I am a Software Systems student at <strong className="text-white">Coimbatore Institute of Technology</strong> with a strong interest in <strong className="text-white">Artificial Intelligence</strong>, <strong className="text-white">Machine Learning</strong>, <strong className="text-white">Data Science</strong>, and <strong className="text-white">Full-Stack Development</strong>.
              </p>
              <p>
                I am fascinated by how raw data can be transformed into meaningful insights, how machine learning models can identify patterns and make intelligent predictions, and how AI can be integrated into practical, dependable software applications.
              </p>
              <p>
                My technical foundation includes <strong className="text-white">Python programming</strong>, <strong className="text-white">database management</strong>, and <strong className="text-white">web technologies</strong>. I enjoy exploring the intersection of intelligent systems and software engineering, developing applications, experimenting with data-driven approaches, and understanding how emerging technologies can solve real-world problems.
              </p>
              <p>
                I am continuously learning, building practical projects, and expanding my knowledge across AI, machine learning, data, and modern web development. My goal is to grow into a versatile technology professional capable of building intelligent, scalable, and impactful solutions.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-semibold text-sm transition-all"
                >
                  <Mail className="w-4 h-4" /> Reach Out
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white font-medium text-sm transition-all border border-white/10"
                >
                  <FileText className="w-4 h-4" /> View Work
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/10 bg-neutral-900/60 backdrop-blur-sm p-6 shadow-xl relative overflow-hidden group hover:border-cyan-500/40 transition-colors">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-colors" />
                <h3 className="text-lg font-semibold text-white mb-5 flex items-center gap-2">
                  <Compass className="w-5 h-5 text-cyan-400" />
                  Quick Highlights
                </h3>

                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <GraduationCap className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium text-white">Academic Degree</span>
                      <span className="text-neutral-400">MSc. Software Systems, CIT (CGPA: 8.30)</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Database className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium text-white">Primary Focus</span>
                      <span className="text-neutral-400">AI, Machine Learning & Data Science</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Cpu className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium text-white">Current Exploration</span>
                      <span className="text-neutral-400">Full-Stack Development, Modern Web & Intelligent Systems</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-medium text-white">Mindset</span>
                      <span className="text-neutral-400">Build with precision, test thoroughly, iterate fast</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. EDUCATION SECTION */}
        <section id="education" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
              02 / Milestones
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-8">
            Education
          </h2>

          <div className="relative border-l border-white/10 ml-4 md:ml-6 pl-6 md:pl-10 space-y-12">
            {/* Timeline item 1 */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 ring-4 ring-[#09090b] shadow-glow" />
              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-cyan-500/40 transition-all">
                <span className="text-xs font-mono text-cyan-400 uppercase font-semibold">2024 — 2029 (Expected)</span>
                <h3 className="text-xl font-bold text-white mt-1">MSc. Software Systems</h3>
                <p className="text-neutral-400 text-sm mt-0.5">Coimbatore Institute of Technology</p>
                <div className="mt-3 inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-cyan-300">
                  CGPA: 8.30 (up to 4th semester)
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Python", "DBMS", "SQL & MySQL", "OOP", "Data Structures", "System Design"].map(tag => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-white/5 text-neutral-300 border border-white/5">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline item 2 */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-neutral-700 ring-4 ring-[#09090b]" />
              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all">
                <span className="text-xs font-mono text-neutral-400 uppercase font-semibold">2024</span>
                <h3 className="text-xl font-bold text-white mt-1">Higher Secondary Examination (12th Grade)</h3>
                <p className="text-neutral-400 text-sm mt-0.5">Carmel Garden Matriculation Higher Secondary School</p>
                <div className="mt-3 inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-300">
                  Academic Score: 89%
                </div>
              </div>
            </div>

            {/* Timeline item 3 */}
            <div className="relative group">
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-neutral-700 ring-4 ring-[#09090b]" />
              <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-white/20 transition-all">
                <span className="text-xs font-mono text-neutral-400 uppercase font-semibold">2022</span>
                <h3 className="text-xl font-bold text-white mt-1">Secondary School Certificate (10th Grade)</h3>
                <p className="text-neutral-400 text-sm mt-0.5">Carmel Garden Matriculation Higher Secondary School</p>
                <div className="mt-3 inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-300">
                  Academic Score: 92%
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TECHNICAL SKILLS SECTION */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
              03 / Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-8">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Programming Languages</h3>
              <p className="text-neutral-400 text-sm mb-4">Core languages used for algorithms, scripting, and system builds.</p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Java (Introductory)", "C (File Handling)", "TypeScript", "JavaScript"].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-lg bg-neutral-800/80 border border-white/5 text-xs font-medium text-neutral-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Databases & Storage</h3>
              <p className="text-neutral-400 text-sm mb-4">Data modeling, relational query optimization, and normalization.</p>
              <div className="flex flex-wrap gap-2">
                {["SQL", "MySQL", "Database Normalization", "ER Modeling", "Relational Algebra"].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-lg bg-neutral-800/80 border border-white/5 text-xs font-medium text-neutral-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Web Technologies</h3>
              <p className="text-neutral-400 text-sm mb-4">Building clean, responsive, and accessible digital interfaces.</p>
              <div className="flex flex-wrap gap-2">
                {["HTML5", "CSS3", "Tailwind CSS", "Bootstrap 5", "React", "Responsive Design"].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-lg bg-neutral-800/80 border border-white/5 text-xs font-medium text-neutral-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Tools & Environment</h3>
              <p className="text-neutral-400 text-sm mb-4">Tooling used to build, version, and collaborate on projects.</p>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VS Code", "Vite", "Windows Terminal", "Linux Basics"].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-lg bg-neutral-800/80 border border-white/5 text-xs font-medium text-neutral-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 5 */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 transition-all group md:col-span-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Core CS Foundations</h3>
              <p className="text-neutral-400 text-sm mb-4">Key architectural concepts driving maintainable and robust systems.</p>
              <div className="flex flex-wrap gap-2">
                {["Object-Oriented Programming (OOP)", "Database Management Systems", "File Handling & Persistence", "CRUD System Architecture", "Data Structures Fundamentals"].map(skill => (
                  <span key={skill} className="px-3 py-1 rounded-lg bg-neutral-800/80 border border-white/5 text-xs font-medium text-neutral-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. PROJECTS SECTION */}
        <section id="projects" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
              04 / Portfolio
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-neutral-400 max-w-2xl mb-10">
            Selected academic, software systems, and data-driven builds.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <article className="flex flex-col rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-cyan-500/50 transition-all overflow-hidden group shadow-xl">
              <div className="h-48 w-full overflow-hidden relative bg-neutral-950 border-b border-white/5">
                <img
                  src="assets/images/projects/Bondbook.png"
                  alt="BondBook - Personal Relationship Management System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded-full font-mono text-[11px] text-cyan-300">
                  C Console App
                </span>
                <span className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-full font-mono text-xs text-cyan-400 border border-white/10">
                  Project 01
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    BondBook
                  </h3>
                  <p className="text-cyan-400 text-xs font-mono mt-0.5 mb-3">Personal Relationship Management System</p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    A console-based Personal Relationship Management System developed in C. Organizes and maintains personal contacts, relationships, memories, and preferences using structured record management with persistent file storage.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Key Highlights:</div>
                    <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                      <li><strong>Add & Update:</strong> Store personal details, memories & preferences</li>
                      <li><strong>View & Search:</strong> Retrieve records by person's name</li>
                      <li><strong>Delete Records:</strong> Remove unwanted entries from persistent storage</li>
                      <li><strong>File Persistence:</strong> Binary & text file operations using C structures</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["C Programming", "Structures", "File Handling", "Binary I/O", "CRUD"].map(tech => (
                      <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/SREERAGS-cs/bond-book"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> View Code on GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Project 2 */}
            <article className="flex flex-col rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-cyan-500/50 transition-all overflow-hidden group shadow-xl">
              <div className="h-48 w-full overflow-hidden relative bg-neutral-950 border-b border-white/5">
                <img
                  src="assets/images/projects/reportcard.png"
                  alt="Student Report Card Management System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 bg-blue-950/80 border border-blue-800/60 px-2.5 py-1 rounded-full font-mono text-[11px] text-blue-300">
                  C++ Console App
                </span>
                <span className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-full font-mono text-xs text-cyan-400 border border-white/10">
                  Project 02
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Student Report Card Management System
                  </h3>
                  <p className="text-cyan-400 text-xs font-mono mt-0.5 mb-3">Academic Record & Grade Evaluation</p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    A console-based C++ application designed to simplify academic record administration. Maintains student profiles, subject marks, automated average calculations, and performance-based grade determination using object-oriented principles and file persistence.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Key Highlights:</div>
                    <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                      <li><strong>Add & Search:</strong> Register students with subject marks & query by roll number</li>
                      <li><strong>View & Update:</strong> Display comprehensive reports and modify records</li>
                      <li><strong>Grade Engine:</strong> Automated average calculations and predefined grade mapping</li>
                      <li><strong>File Persistence:</strong> Persistent file storage using C++ <code>ifstream</code> & <code>ofstream</code></li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["C++", "OOP (Classes/Objects)", "File Handling", "Arrays", "CRUD"].map(tech => (
                      <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/SREERAGS-cs/students-report-management"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> View Code on GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Project 3 */}
            <article className="flex flex-col rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-cyan-500/50 transition-all overflow-hidden group shadow-xl">
              <div className="h-48 w-full overflow-hidden relative bg-neutral-950 border-b border-white/5">
                <img
                  src="assets/images/projects/multivendor.png"
                  alt="Multi-Vendor E-Commerce Platform"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded-full font-mono text-[11px] text-cyan-300">
                  E-Commerce / Full-Stack
                </span>
                <span className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-full font-mono text-xs text-cyan-400 border border-white/10">
                  Project 03
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Multi-Vendor E-Commerce Platform
                  </h3>
                  <p className="text-cyan-400 text-xs font-mono mt-0.5 mb-3">Centralized Multi-Role Web Marketplace</p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    A web-based marketplace designed to bring multiple vendors and customers together through a centralized shopping platform. Provides dedicated, responsive interfaces for customer shopping workflows, vendor catalog & inventory management, and centralized administrative oversight.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Key Highlights:</div>
                    <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                      <li><strong>Customer Module:</strong> Registration, product browsing, cart, checkout, order placement & ratings</li>
                      <li><strong>Vendor Module:</strong> Dedicated dashboard for vendor registration, catalog, inventory & orders</li>
                      <li><strong>Admin Module:</strong> Platform monitoring, user & vendor management, system administration</li>
                      <li><strong>Architecture:</strong> Responsive UI with Bootstrap 5 components and JavaScript interactivity</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["HTML5", "CSS3", "JavaScript", "Bootstrap 5", "Frontend"].map(tech => (
                      <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/SREERAGS-cs/Multi-Vendor-Ecommerce-Platform"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> View Code on GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Project 4 */}
            <article className="flex flex-col rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-cyan-500/50 transition-all overflow-hidden group shadow-xl">
              <div className="h-48 w-full overflow-hidden relative bg-neutral-950 border-b border-white/5">
                <img
                  src="assets/images/projects/agrimind.png"
                  alt="AgriMind - AI-Powered Agricultural Intelligence Platform"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 bg-emerald-950/80 border border-emerald-800/60 px-2.5 py-1 rounded-full font-mono text-[11px] text-emerald-300">
                  AI / Machine Learning
                </span>
                <span className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-full font-mono text-xs text-cyan-400 border border-white/10">
                  Project 04
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    AgriMind
                  </h3>
                  <p className="text-cyan-400 text-xs font-mono mt-0.5 mb-3">AI-Powered Agricultural Intelligence Platform</p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    An AI-assisted agricultural decision-support platform designed to help farmers make informed decisions using data-driven insights and machine learning predictions. Integrates farm management, market intelligence, and intelligent agronomic utilities.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Key Highlights:</div>
                    <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                      <li><strong>Crop & Disease AI:</strong> Crop recommendations and plant disease detection via image analysis</li>
                      <li><strong>Predictive Intelligence:</strong> Crop yield prediction and market price forecasting models</li>
                      <li><strong>Farm & Risk Analytics:</strong> Profitability tracking, financial monitoring, and risk assessment</li>
                      <li><strong>Smart Assistant:</strong> AI-powered agricultural advisor for real-time farming support</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["React & TS", "FastAPI", "TensorFlow", "Scikit-learn", "OpenCV", "SQLAlchemy"].map(tech => (
                      <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <a
                      href="https://agri-mind-nine.vercel.app/"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                    <a
                      href="https://github.com/HARI-NANDHINI-S/agri-mind"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" /> View on GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Project 5 */}
            <article className="flex flex-col rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-cyan-500/50 transition-all overflow-hidden group shadow-xl">
              <div className="h-48 w-full overflow-hidden relative bg-neutral-950 border-b border-white/5">
                <img
                  src="assets/images/projects/phishing.png"
                  alt="Phishing Detection using Adversarial ML"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 bg-violet-950/80 border border-violet-800/60 px-2.5 py-1 rounded-full font-mono text-[11px] text-violet-300">
                  Machine Learning / Cybersecurity
                </span>
                <span className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-full font-mono text-xs text-cyan-400 border border-white/10">
                  Project 05
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    Phishing Detection using Adversarial ML
                  </h3>
                  <p className="text-cyan-400 text-xs font-mono mt-0.5 mb-3">Adversarial Robustness & URL Classification</p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    A machine learning security project focused on identifying malicious phishing URLs and evaluating how adversarial manipulation impacts detection accuracy. Explores attack generation techniques to test model vulnerability and investigates defensive strategies to enhance real-world classification robustness.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Key Highlights:</div>
                    <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                      <li><strong>URL Classification:</strong> TF-IDF feature extraction pipeline for distinguishing phishing vs. benign URLs</li>
                      <li><strong>Adversarial Sample Generation:</strong> Synthesized URL perturbations to evaluate model vulnerability and evasion</li>
                      <li><strong>Robustness Analysis:</strong> Quantitative evaluation of model resilience under adversarial manipulation</li>
                      <li><strong>Defensive Hardening:</strong> Exploration of robust training techniques to mitigate adversarial evasion</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["Python", "Scikit-learn", "TF-IDF", "Pandas", "NumPy", "Adversarial ML"].map(tech => (
                      <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Thanushree-07/phishing-detection-adversarial-ml"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> View on GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Project 6 */}
            <article className="flex flex-col rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-cyan-500/50 transition-all overflow-hidden group shadow-xl">
              <div className="h-48 w-full overflow-hidden relative bg-neutral-950 border-b border-white/5">
                <img
                  src="assets/images/projects/nettelemetry.png"
                  alt="NetTelemetry - Network Telemetry and Monitoring System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded-full font-mono text-[11px] text-cyan-300">
                  Computer Networks / Systems
                </span>
                <span className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-full font-mono text-xs text-cyan-400 border border-white/10">
                  Project 06
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    NetTelemetry
                  </h3>
                  <p className="text-cyan-400 text-xs font-mono mt-0.5 mb-3">Network Telemetry & Monitoring System</p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    A network monitoring application designed to measure and record network connectivity and performance metrics. Utilizes ICMP-based probing to verify target availability, measures latency, and persists telemetry logs into an SQLite database for structured network analysis.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Key Highlights:</div>
                    <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                      <li><strong>ICMP Probing:</strong> Low-level latency measurement and reachability diagnostics via <code>IcmpSendEcho</code></li>
                      <li><strong>Telemetry Storage:</strong> Structured SQLite database schema to record monitoring logs and response times</li>
                      <li><strong>Target Management:</strong> Configurable target endpoints with automated connectivity tracking</li>
                      <li><strong>System Testing:</strong> Rigorous unit test coverage ensuring diagnostic measurement reliability</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["Python", "ICMP", "Windows API", "SQLite", "Unit Testing"].map(tech => (
                      <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/Dhanumithra/NetTelemetry"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> View on GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Project 7 */}
            <article className="flex flex-col rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-cyan-500/50 transition-all overflow-hidden group shadow-xl">
              <div className="h-48 w-full overflow-hidden relative bg-neutral-950 border-b border-white/5">
                <img
                  src="assets/images/projects/attendance.png"
                  alt="QR-Based Attendance Management System"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 bg-blue-950/80 border border-blue-800/60 px-2.5 py-1 rounded-full font-mono text-[11px] text-blue-300">
                  Application / Automation
                </span>
                <span className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-full font-mono text-xs text-cyan-400 border border-white/10">
                  Project 07
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    QR-Based Attendance System
                  </h3>
                  <p className="text-cyan-400 text-xs font-mono mt-0.5 mb-3">Automated Attendance Logging & Record Tracking</p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    A digital attendance management application designed to streamline institutional record keeping through QR code technology. Replaces manual roll-call processes with rapid QR code generation and scan-based verification, recording student attendance data accurately and efficiently.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Key Highlights:</div>
                    <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                      <li><strong>QR Generation:</strong> Dynamic creation of unique identification QR codes for registered users</li>
                      <li><strong>Scan Verification:</strong> Real-time QR scanning interface for rapid automated attendance logging</li>
                      <li><strong>Data Integrity:</strong> Accurate timestamping to eliminate proxy attendance and manual entry errors</li>
                      <li><strong>Attendance Tracking:</strong> Structured record persistence and consolidated summary reporting</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["Python", "QR Codes", "Scanning", "Data Management", "Automation"].map(tech => (
                      <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/SREERAGS-cs/QR-Based-Attendance-system-"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> View on GitHub
                  </a>
                </div>
              </div>
            </article>

            {/* Project 8 */}
            <article className="flex flex-col rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-cyan-500/50 transition-all overflow-hidden group shadow-xl">
              <div className="h-48 w-full overflow-hidden relative bg-neutral-950 border-b border-white/5">
                <img
                  src="assets/images/projects/resume.png"
                  alt="AI-Powered Resume Analyzer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute top-4 left-4 bg-cyan-950/80 border border-cyan-800/60 px-2.5 py-1 rounded-full font-mono text-[11px] text-cyan-300">
                  AI / Text Processing
                </span>
                <span className="absolute top-4 right-4 bg-neutral-950/80 backdrop-blur-md px-2.5 py-1 rounded-full font-mono text-xs text-cyan-400 border border-white/10">
                  Project 08
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    AI-Powered Resume Analyzer
                  </h3>
                  <p className="text-cyan-400 text-xs font-mono mt-0.5 mb-3">Intelligent Resume Parsing & Content Evaluation</p>
                  <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                    An intelligent document analysis application designed to parse resumes, extract structured profile information, and evaluate resume content. Applies text processing and software engineering techniques to streamline candidate information retrieval and provide structured insights into resume data.
                  </p>

                  <div className="space-y-2 mb-6">
                    <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Key Highlights:</div>
                    <ul className="text-xs text-neutral-300 space-y-1 list-disc list-inside">
                      <li><strong>Text Extraction:</strong> Automated parsing and extraction of profile details from unstructured resume files</li>
                      <li><strong>Content Structuring:</strong> Segmenting and identifying candidate skills, qualifications, and experience domains</li>
                      <li><strong>Profile Evaluation:</strong> Intelligent analysis and verification of resume content against structured criteria</li>
                      <li><strong>Streamlined Workflow:</strong> Fast, repeatable document analysis pipeline for organized profile evaluation</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {["Python", "Text Processing", "Document Parsing", "Extraction", "Data Structuring"].map(tech => (
                      <span key={tech} className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-neutral-400 border border-white/5 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/SREERAGS-cs/Resume-analyzer"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" /> View on GitHub
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* 6. CERTIFICATIONS SECTION */}
        <section id="certifications" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
              05 / Credentials
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-8">
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cert 1: Infosys - Database and SQL */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-cyan-500/40 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">Database and SQL</h3>
                <p className="text-xs font-mono text-blue-400">Infosys Springboard</p>
                <p className="text-neutral-400 text-sm mt-2">
                  Relational database fundamentals, SQL DDL/DML, complex joins, subqueries, grouping, and indexing.
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Credential
                  </span>
                  <a
                    href="assets/certificates/database and sql certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Certificate <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Cert 2: HackerRank - Python (Basic) */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-cyan-500/40 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">Python (Basic)</h3>
                <p className="text-xs font-mono text-emerald-400">HackerRank</p>
                <p className="text-neutral-400 text-sm mt-2">
                  Core Python programming, data structures, conditional execution, string manipulation, and standard algorithms.
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Credential
                  </span>
                  <a
                    href="assets/certificates/python_basic certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Certificate <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Cert 3: Simplilearn - Advanced Python */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-cyan-500/40 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">Advanced Python</h3>
                <p className="text-xs font-mono text-cyan-400">Simplilearn</p>
                <p className="text-neutral-400 text-sm mt-2">
                  Advanced programming paradigms, generators, decorators, modular design, and efficient Pythonic constructs.
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Credential
                  </span>
                  <a
                    href="assets/certificates/advances python course certificate.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Certificate <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Cert 4: Infosys - Introduction to Java */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-cyan-500/40 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">Introduction to Java</h3>
                <p className="text-xs font-mono text-purple-400">Infosys Springboard</p>
                <p className="text-neutral-400 text-sm mt-2">
                  Object-oriented programming, class design, encapsulation, inheritance, polymorphism, and Java fundamentals.
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Credential
                  </span>
                  <a
                    href="assets/certificates/introduction to java certification.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Certificate <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Cert 5: NPTEL - Soft Skills Development */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-cyan-500/40 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">Soft Skills Development</h3>
                <p className="text-xs font-mono text-amber-400">NPTEL</p>
                <p className="text-neutral-400 text-sm mt-2">
                  Professional workplace communication, team collaboration, technical presentations, and leadership skills.
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Credential
                  </span>
                  <a
                    href="assets/certificates/Softskills.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Certificate <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Cert 6: MathWorks - Reinforcement Learning Onramp */}
            <div className="p-6 rounded-2xl bg-neutral-900/40 border border-white/10 hover:border-cyan-500/40 transition-all flex items-start gap-4">
              <div className="p-3 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white">Reinforcement Learning Onramp</h3>
                <p className="text-xs font-mono text-rose-400">MathWorks (MATLAB)</p>
                <p className="text-neutral-400 text-sm mt-2">
                  Foundations of reinforcement learning, agent modeling, reward functions, and policy training in MATLAB.
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
                  <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Verified Credential
                  </span>
                  <a
                    href="assets/certificates/certificate(matlab).pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    View Certificate <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. AREAS OF INTEREST SECTION */}
        <section id="interests" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
              06 / Interests
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-4">
            Areas of Interest
          </h2>
          <p className="text-neutral-400 max-w-2xl mb-10">
            Domains I am actively exploring and passionate about building expertise in.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* AI */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Artificial Intelligence</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Exploring intelligent systems, generative AI, large language models, and AI-powered applications that solve real-world problems.</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Generative AI", "LLMs", "AI Applications"].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">{tag}</span>
                ))}
              </div>
            </div>
            {/* ML */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-blue-500/40 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Machine Learning</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Interested in supervised and unsupervised learning, predictive modelling, model evaluation, and practical ML applications.</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Supervised Learning", "Predictive Models", "Model Evaluation"].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-300">{tag}</span>
                ))}
              </div>
            </div>
            {/* Data Science */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-violet-500/40 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-violet-500/10 blur-2xl group-hover:bg-violet-500/20 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 mb-4 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Data Science & Analytics</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Passionate about data exploration, preprocessing, statistical analysis, visualization, extracting insights, and data-driven decision-making.</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["Data Exploration", "Statistics", "Visualization"].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-violet-950/60 border border-violet-800/40 text-violet-300">{tag}</span>
                ))}
              </div>
            </div>
            {/* Full-Stack */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 transition-all group relative overflow-hidden md:col-span-1 lg:col-span-1">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/20 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Full-Stack Development</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Interested in building complete web applications, developing responsive interfaces, creating backend services, designing APIs, and integrating databases.</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["React", "APIs", "Databases", "Full-Stack"].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-300">{tag}</span>
                ))}
              </div>
            </div>
            {/* Intelligent Systems */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-blue-500/40 transition-all group relative overflow-hidden md:col-span-2 lg:col-span-2">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 rounded-full bg-blue-500/10 blur-2xl group-hover:bg-blue-500/20 transition-colors" />
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Intelligent Software Systems</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Exploring how AI, machine learning, data, and software engineering can converge to create practical, impactful intelligent applications that bridge the gap between research and real-world use.</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {["AI + Software", "Data-Driven Apps", "Python", "SQL", "Scalable Systems"].map(tag => (
                  <span key={tag} className="text-xs px-2.5 py-1 rounded-md bg-blue-950/60 border border-blue-800/40 text-blue-300">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. ACHIEVEMENTS & ACTIVITIES SECTION */}
        <section id="achievements" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
              07 / Activities
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-4">
            Achievements &amp; Activities
          </h2>
          <p className="text-neutral-400 max-w-2xl mb-10">
            Academic participation and technical community engagements.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Club Activity */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Club Activity</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Technical member of 403 Strats Club at CIT.</p>
            </div>

            {/* Hackathons */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-blue-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Hackathons</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Participated in rapid prototyping challenges developing database-backed workflow tools.</p>
            </div>

            {/* Academic Achievements */}
            <div className="p-6 rounded-2xl bg-neutral-900/50 border border-white/10 hover:border-amber-500/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Academic Achievements</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">Consistent academic excellence maintaining an 8.30 CGPA in MSc. Software Systems at CIT.</p>
            </div>
          </div>
        </section>

        {/* 9. CONTACT SECTION */}
        <section id="contact" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-950/60 border border-cyan-800/60 px-3 py-1 rounded-full">
              08 / Connect
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-neutral-400 max-w-2xl mb-12">
            Interested in collaborating, offering an internship opportunity, or discussing software systems? Drop me a message or connect directly.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <a
                  href="mailto:sreeragkootale@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 hover:bg-neutral-900 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 uppercase font-mono block">Email</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      sreeragkootale@gmail.com
                    </span>
                  </div>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 hover:bg-neutral-900 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 uppercase font-mono block">LinkedIn</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      Connect on LinkedIn
                    </span>
                  </div>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-neutral-900/50 border border-white/10 hover:border-cyan-500/40 hover:bg-neutral-900 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-neutral-400 uppercase font-mono block">GitHub</span>
                    <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      View Repositories
                    </span>
                  </div>
                </a>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-cyan-950/30 to-blue-950/20 border border-cyan-800/30 text-sm text-neutral-300">
                <span className="text-cyan-400 font-semibold block mb-1">Open for Opportunities</span>
                Looking for summer/fall software development internships, research projects, and collaborative technical builds.
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="p-8 rounded-2xl bg-neutral-900/40 border border-white/10 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Project Inquiry / Opportunity"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Hello Sreerag, I'd like to talk about..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white placeholder-neutral-600 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-neutral-950 font-bold flex items-center justify-center gap-2 transition-colors shadow-lg shadow-cyan-500/20"
                >
                  <Send className="w-4 h-4" /> Send Message
                </button>

                {submitted && (
                  <div className="p-4 rounded-xl bg-emerald-950/50 border border-emerald-800 text-emerald-300 text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    Thank you! Your message has been prepared. (Email service connection ready).
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* 9. FOOTER */}
      <footer className="border-t border-white/10 py-12 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-mono font-bold text-white text-xs">
              SS
            </span>
            <span className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Sreerag S. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a href="#home" className="hover:text-white transition-colors">Back to top ↑</a>
            <a href="mailto:sreeragkootale@gmail.com" className="hover:text-cyan-400 transition-colors">sreeragkootale@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

