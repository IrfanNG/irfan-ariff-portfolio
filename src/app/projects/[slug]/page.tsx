import type { Metadata } from 'next';
import { Github } from 'lucide-react';
import { notFound } from 'next/navigation';
import SiteHeader from '@/components/site-header';
import { featuredProjects, getProjectBySlug, resumeDownloadHref } from '@/lib/portfolio';

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

export function generateStaticParams() {
  return featuredProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Project not found | Irfan',
    };
  }

  return {
    title: `${project.title} | Irfan`,
    description: project.summary,
  };
}

function DetailBlock({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="detail-block">
      <span className="block-label">{label}</span>
      <div>{children}</div>
    </section>
  );
}

export default async function ProjectCaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="portfolio-shell">
      <SiteHeader
        brandLabel="Irfan"
        brandHref="/"
        navLinks={[
          { label: 'Projects', href: '/projects' },
          { label: 'Value', href: '/#value' },
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
            <p className="eyebrow">CASE STUDY</p>
            <h1>{project.title}</h1>
            <p className="hero-lead">{project.summary}</p>
          </div>

          <div className="case-hero-card">
            <div className="case-hero-row">
              <span className="block-label">Category</span>
              <p>{project.category}</p>
            </div>
            <div className="case-hero-row">
              <span className="block-label">Status</span>
              <p>{project.status}</p>
            </div>
            <div className="case-hero-row">
              <span className="block-label">Role</span>
              <p>{project.role}</p>
            </div>
            {project.repoUrl ? (
              <div className="case-hero-row">
                <span className="block-label">Repository</span>
                <RepoButton repoUrl={project.repoUrl} repoLabel={project.repoLabel} />
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="case-layout">
          <DetailBlock label="Problem">
            <p>{project.problem}</p>
          </DetailBlock>

          <DetailBlock label="Solution">
            <p>{project.solution}</p>
          </DetailBlock>

          <DetailBlock label="My Role">
            <p>{project.role}</p>
          </DetailBlock>

          <DetailBlock label="Key Features">
            <div className="chip-group">
              {project.keyFeatures.map((feature) => (
                <span key={feature} className="chip">
                  {feature}
                </span>
              ))}
            </div>
          </DetailBlock>

          <DetailBlock label="Tech Stack">
            <div className="chip-group">
              {project.techStack.map((tool) => (
                <span key={tool} className="chip chip-muted">
                  {tool}
                </span>
              ))}
            </div>
          </DetailBlock>

          <DetailBlock label="Challenge">
            <p>{project.challenge}</p>
          </DetailBlock>

          <DetailBlock label="What I Learned">
            <p>{project.whatILearned}</p>
          </DetailBlock>

          <DetailBlock label="Status">
            <p>{project.status}</p>
          </DetailBlock>
        </div>
      </section>
    </main>
  );
}
