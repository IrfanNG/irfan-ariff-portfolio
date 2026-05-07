import Image from 'next/image';
import {
  BadgeCheck,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import SiteHeader from '@/components/site-header';
import {
  aboutParagraphs,
  aiSections,
  contactIntro,
  experienceItems,
  featuredProjects,
  heroBadges,
  navLinks,
  resumeDownloadHref,
  resumePitch,
  skillGroups,
  valueCards,
  workflowMessage,
  workflowSteps,
} from '@/lib/portfolio';

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="badge">{children}</span>;
}

function InfoChip({ children }: { children: React.ReactNode }) {
  return <span className="info-chip">{children}</span>;
}

function RepoButton({
  repoUrl,
  repoLabel = 'GitHub Repo',
}: {
  repoUrl?: string;
  repoLabel?: string;
}) {
  if (!repoUrl) {
    return null;
  }

  return (
    <a className="repo-button" href={repoUrl} target="_blank" rel="noreferrer">
      <Github size={14} strokeWidth={2} />
      {repoLabel}
    </a>
  );
}

function ProjectCard({
  title,
  category,
  summary,
  status,
  problem,
  solution,
  role,
  keyFeatures,
  techStack,
  challenge,
  whatILearned,
  repoUrl,
  repoLabel,
}: (typeof featuredProjects)[number]) {
  return (
    <article className="project-card">
      <div className="project-card-head">
        <div>
          <p className="eyebrow">{category}</p>
          <h3>{title}</h3>
        </div>
        <div className="project-head-actions">
          <InfoChip>{status}</InfoChip>
          <RepoButton repoUrl={repoUrl} repoLabel={repoLabel} />
        </div>
      </div>

      <p className="project-summary">{summary}</p>

      <div className="project-grid">
        <div className="project-block">
          <span className="block-label">Problem</span>
          <p>{problem}</p>
        </div>
        <div className="project-block">
          <span className="block-label">Solution</span>
          <p>{solution}</p>
        </div>
        <div className="project-block">
          <span className="block-label">My Role</span>
          <p>{role}</p>
        </div>
        <div className="project-block">
          <span className="block-label">Challenge</span>
          <p>{challenge}</p>
        </div>
      </div>

      <div className="project-footer">
        <div className="project-section">
          <span className="block-label">Key Features</span>
          <div className="chip-group">
            {keyFeatures.map((feature) => (
              <span key={feature} className="chip">
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="project-section">
          <span className="block-label">Tech Stack</span>
          <div className="chip-group">
            {techStack.map((tool) => (
              <span key={tool} className="chip chip-muted">
                {tool}
              </span>
            ))}
          </div>
        </div>

        <div className="project-section project-insight">
          <span className="block-label">What I Learned</span>
          <p>{whatILearned}</p>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <main className="portfolio-shell">
      <SiteHeader
        brandLabel="Irfan"
        brandHref="/"
        navLinks={navLinks}
        actions={[
          { label: 'Resume', href: resumeDownloadHref, variant: 'ghost', external: true, download: true },
          { label: 'Contact Me', href: '#contact', variant: 'solid' },
        ]}
      />

      <section className="hero section-pad">
        <div className="hero-grid">
          <div className="hero-copy">
            <h1>
              AI-assisted software developer building web and mobile products with speed, clarity,
              and practical implementation.
            </h1>
            <p className="hero-lead">
              I&apos;m a Software Engineering student focused on rapid development, clean UI, and
              practical digital solutions for business and user problems.
            </p>

            <div className="hero-actions">
              <a className="button button-solid" href="#projects">
                View Projects
              </a>
              <a className="button button-ghost" href={resumeDownloadHref} download>
                <Download size={16} strokeWidth={2} />
                Download Resume
              </a>
              <a className="button button-ghost" href="#contact">
                Contact Me
              </a>
            </div>

            <div className="badge-row" aria-label="Trust badges">
              {heroBadges.map((badge) => (
                <Badge key={badge}>
                  <BadgeCheck size={14} strokeWidth={2} />
                  {badge}
                </Badge>
              ))}
            </div>

            <div className="hero-positioning">
              <Sparkles size={16} strokeWidth={2} />
              <p>{resumePitch}</p>
            </div>
          </div>

          <aside className="hero-aside">
            <div className="profile-card">
              <div className="profile-visual">
                <Image
                  src="/new-profile-image.jpeg"
                  alt="Irfan"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="profile-image"
                />
              </div>

              <div className="profile-body">
                <p className="eyebrow">Irfan Ariff</p>
                <h2>Software Engineering Student / AI-Assisted Software Developer</h2>
                <p className="profile-text">
                  Internship-ready for teams that need someone who can move quickly, keep the UI
                  clean, and help turn ideas into usable product work.
                </p>

                <div className="profile-grid">
                  <div>
                    <span className="block-label">Strength</span>
                    <p>Rapid delivery with clean UI thinking</p>
                  </div>
                  <div>
                    <span className="block-label">Focus</span>
                    <p>Internship-ready product work</p>
                  </div>
                </div>

                <div className="profile-links">
                  <a href="mailto:mnifanmohdariff@gmail.com" aria-label="Email Irfan">
                    <Mail size={16} strokeWidth={2} />
                  </a>
                  <a href="https://www.linkedin.com/in/irfan-ariff-20691a264" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <Linkedin size={16} strokeWidth={2} />
                  </a>
                  <a href="https://github.com/IrfanNG" target="_blank" rel="noreferrer" aria-label="GitHub">
                    <Github size={16} strokeWidth={2} />
                  </a>
                  <a href="https://wa.me/60183823063" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                    <MessageCircle size={16} strokeWidth={2} />
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-pad" id="value">
        <SectionHeading
          eyebrow="WHAT I CAN BRING TO YOUR TEAM"
          title="I help teams move faster without losing product quality."
        />

        <div className="value-grid">
          {valueCards.map((card) => (
            <article key={card.title} className="value-card">
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad" id="about">
        <SectionHeading
          eyebrow="ABOUT ME"
          title="Short version."
        />

        <div className="about-grid">
          <div className="about-copy">
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="about-panel">
            <div className="panel-row">
              <span className="block-label">Focus</span>
              <p>Web apps, mobile apps, and practical product work</p>
            </div>
            <div className="panel-row">
              <span className="block-label">Working style</span>
              <p>Direct, structured, proof-first, and iteration-friendly</p>
            </div>
            <div className="panel-row">
              <span className="block-label">Tools I use</span>
              <p>ChatGPT, Codex, Gemini, Figma, Google Stitch</p>
            </div>
            <div className="panel-row">
              <span className="block-label">Best fit</span>
              <p>Teams that care about speed, clarity, and product quality</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad" id="projects">
        <SectionHeading
          eyebrow="FEATURED PROJECTS"
          title="Case studies that show product thinking, not just screenshots."
        />

        <div className="project-stack">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>

      <section className="section-pad" id="process">
        <SectionHeading
          eyebrow="HOW I BUILD PRODUCTS"
          title="A simple process that keeps me fast and accountable."
          description="I do not jump straight into code. I structure the work first so the end result is easier to use and easier to maintain."
        />

        <div className="process-grid">
          {workflowSteps.map((step, index) => (
            <article key={step} className="process-card">
              <span className="process-index">0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>

        <div className="process-callout">
          <Sparkles size={18} strokeWidth={2} />
          <p>{workflowMessage}</p>
        </div>
      </section>

      <section className="section-pad" id="ai">
        <SectionHeading
          eyebrow="HOW I USE AI IN DEVELOPMENT"
          title="AI speeds up the work, but I still own the quality."
          description="AI helps me move faster, but I still review, test, debug, and improve everything myself."
        />

        <div className="ai-grid">
          {aiSections.map((section) => (
            <article key={section.title} className="ai-card">
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad" id="skills">
        <SectionHeading
          eyebrow="SKILLS"
          title="Grouped by how recruiters actually scan them."
          description="No percentages. No fake bars. Just a clear read on what I can work with."
        />

        <div className="skill-grid">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-card">
              <h3>{group.title}</h3>
              <div className="chip-group">
                {group.items.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad" id="experience">
        <SectionHeading
          eyebrow="EXPERIENCE"
          title="Real responsibility, real communication, real troubleshooting."
        />

        <div className="experience-grid">
          {experienceItems.map((item) => (
            <article key={item.title} className="experience-card">
              <h3>{item.title}</h3>
              <p className="experience-desc">{item.description}</p>
              <div className="chip-group">
                {item.emphasis.map((point) => (
                  <span key={point} className="chip chip-muted">
                    {point}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-pad" id="resume">
        <div className="resume-card">
          <SectionHeading
            eyebrow="RESUME"
            title="Easy to download, easy to forward."
            description={contactIntro}
          />

          <p className="resume-copy">{resumePitch}</p>

          <div className="cta-row">
            <a className="button button-solid" href={resumeDownloadHref} download>
              <Download size={16} strokeWidth={2} />
              Download Resume
            </a>
            <a className="button button-ghost" href="https://www.linkedin.com/in/irfan-ariff-20691a264" target="_blank" rel="noreferrer">
              View LinkedIn
              <ExternalLink size={16} strokeWidth={2} />
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad" id="contact">
        <SectionHeading
          eyebrow="CONTACT"
          title="Open for internship opportunities."
          description="If you need someone who can help build, improve, and ship digital products faster, this is where to reach me."
        />

        <div className="contact-grid">
          <div className="contact-card">
            <span className="block-label">Email</span>
            <a href="mailto:mnifanmohdariff@gmail.com">mnifanmohdariff@gmail.com</a>
          </div>
          <div className="contact-card">
            <span className="block-label">LinkedIn</span>
            <a href="https://www.linkedin.com/in/irfan-ariff-20691a264" target="_blank" rel="noreferrer">
              linkedin.com/in/irfan-ariff-20691a264
            </a>
          </div>
          <div className="contact-card">
            <span className="block-label">GitHub</span>
            <a href="https://github.com/IrfanNG" target="_blank" rel="noreferrer">
              github.com/IrfanNG
            </a>
          </div>
          <div className="contact-card">
            <span className="block-label">Resume</span>
            <a href={resumeDownloadHref} download>
              Download PDF resume
            </a>
          </div>
          <div className="contact-card">
            <span className="block-label">WhatsApp</span>
            <a href="https://wa.me/60183823063" target="_blank" rel="noreferrer">
              +60 18-382 3063
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
      </footer>
    </main>
  );
}
