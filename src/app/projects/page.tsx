import Link from 'next/link';
import { ArrowUpRight, Github } from 'lucide-react';
import SiteHeader from '@/components/site-header';
import { featuredProjects, resumeDownloadHref } from '@/lib/portfolio';

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

function ProjectIndexCard({
  slug,
  title,
  category,
  summary,
  status,
  problem,
  solution,
  role,
  keyFeatures,
  techStack,
  repoUrl,
  repoLabel,
}: (typeof featuredProjects)[number]) {
  return (
    <article className="project-card project-card-compact">
      <div className="project-card-head">
        <div>
          <p className="eyebrow">{category}</p>
          <h3>{title}</h3>
        </div>
        <div className="project-head-actions">
          <span className="info-chip">{status}</span>
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
      </div>

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

      <div className="project-footer project-footer-compact">
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

        <Link className="project-link" href={`/projects/${slug}`}>
          Open case study <ArrowUpRight size={16} strokeWidth={2} />
        </Link>
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="portfolio-shell">
      <SiteHeader
        brandLabel="Irfan"
        brandHref="/"
        navLinks={[
          { label: 'Home', href: '/' },
          { label: 'Value', href: '/#value' },
          { label: 'Skills', href: '/#skills' },
          { label: 'Contact', href: '/#contact' },
        ]}
        actions={[
          { label: 'Resume', href: resumeDownloadHref, variant: 'ghost', external: true, download: true },
          { label: 'Contact Me', href: '/#contact', variant: 'solid' },
        ]}
      />

      <section className="hero section-pad hero-compact">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">PROJECT INDEX</p>
            <h1>Selected projects presented as recruiter-ready case studies.</h1>
            <p className="hero-lead">
              Each project shows the problem, the solution, my role, and the product thinking
              behind it so recruiters can scan value quickly.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="project-stack">
          {featuredProjects.map((project) => (
            <ProjectIndexCard key={project.slug} {...project} />
          ))}
        </div>
      </section>
    </main>
  );
}
