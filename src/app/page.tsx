'use client';

import { motion } from 'framer-motion';
import { MapPin, Terminal, Github, Linkedin, AtSign, ExternalLink, Mail, MessageCircle, Briefcase } from 'lucide-react';
import Image from 'next/image';


export default function Home() {
  const metadata = [
    { icon: <MapPin size={12} />, label: 'LOCATION', value: 'KUALA LUMPUR' },
    { icon: <Terminal size={12} />, label: 'AVAILABILITY', value: 'SELECTIVE FREELANCE' },
  ];

  return (
    <main className="dossier-grid">
      {/* --- THE LETTERHEAD HEADER --- */}
      <section className="col-start-1 col-end-13">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="header-block"
        >
          {/* Identity Section */}
          <div className="identity-container">
            <div className="photo-box">
              <Image
                src="/new-profile-image.jpeg"
                alt="Irfan Ariff"
                width={150}
                height={150}
                className="photo-img"
                priority
                quality={90}
                sizes="(max-width: 768px) 150px, 150px"
              />
            </div>

            <div className="name-box">
              <h1 className="serif-display name-title">
                IRFAN ARIFF
              </h1>
              <p className="label-mono subtitle">
                FULL-STACK ENGINEER
              </p>
            </div>
          </div>

          {/* Metadata Bar */}
          <div className="hairline-h" style={{ marginBottom: '1rem' }} />

          <nav aria-label="Social Profiles" className="social-list-horizontal" style={{ padding: '0 0 1rem 0' }}>
            <a href="https://github.com/IrfanNG" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/in/irfan-ariff-20691a264" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.threads.net/@irfanrff" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Threads">
              <AtSign size={20} strokeWidth={1.5} />
            </a>
            <a href="mailto:mnifanmohdariff@gmail.com" className="social-icon-link" aria-label="Email">
              <Mail size={20} strokeWidth={1.5} />
            </a>
            <a href="https://wa.me/60183823063" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="WhatsApp">
              <MessageCircle size={20} strokeWidth={1.5} />
            </a>
          </nav>

          <div className="metadata-bar">
            {metadata.map((item, index) => (
              <div key={index} className="metadata-item">
                <span className="metadata-icon">{item.icon}</span>
                <span className="label-mono">{item.label}:</span>
                <span className="label-mono metadata-value">{item.value}</span>
              </div>
            ))}
          </div>
          <div className="hairline-h" />
        </motion.div>
      </section>

      {/* --- THE DOSSIER CONTENT --- */}
      <section className="col-start-1 col-end-13 md:col-start-1 md:col-end-10" style={{ marginTop: '2rem' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {/* 01 // POSITIONING */}
          <div className="content-section">
            <h2 className="label-mono section-header">{"// POSITIONING"}</h2>
            <p className="intro-text">
              I build clear, functional web experiences with client-facing offers shaped around delivery, proof, and strong digital presence.
            </p>

            <div className="client-offer-panel" style={{ marginTop: '2rem' }}>
              <div className="client-offer-topline">
                <span className="client-offer-label">CLIENT</span>
                <span className="client-offer-badge">RECOMMENDED</span>
              </div>

              <div className="client-offer-head">
                <span className="client-offer-icon" aria-hidden="true">
                  <Briefcase size={16} />
                </span>
                <h3 className="client-offer-title">What you can hire me for</h3>
              </div>

              <p className="client-offer-copy">
                Portfolio builds, product surfaces, and clean handoff-friendly implementations.
              </p>

              <div className="client-offer-grid">
                <div className="client-offer-item">
                  <span className="label-mono">PORTFOLIO BUILDS</span>
                  <p>Curated personal sites with strong identity and clean structure.</p>
                </div>
                <div className="client-offer-item">
                  <span className="label-mono">PRODUCT SURFACES</span>
                  <p>Focused landing pages and product pages designed to convert.</p>
                </div>
                <div className="client-offer-item">
                  <span className="label-mono">HAND-OFF READY</span>
                  <p>Implementation that is clean, maintainable, and easy to continue.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 02 // FEATURED WORK */}
          <div className="content-section" id="featured-work">
            <h2 className="label-mono section-header">{"// FEATURED WORK"}</h2>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <h3 className="serif-display" style={{ fontSize: '1.25rem', lineHeight: '1.1', textTransform: 'uppercase' }}>COPPER BOSTON GROUP</h3>
                <p className="label-mono" style={{ color: 'var(--accent)', fontSize: '0.6rem' }}>DIGITAL INFRASTRUCTURE & BRAND ARCHITECTURE</p>
              </div>

              <p className="intro-text" style={{ fontSize: '1.1rem' }}>
                High-performance digital ecosystem work for institutions and independent brands, with technical stability and data-driven UI at the core.
              </p>

              <a
                href="https://www.copperboston.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="work-preview-link"
                aria-label="Open Copper Boston website in a new tab"
              >
                <div className="work-preview-card">
                  <div className="work-preview-chrome">
                    <div className="work-preview-dots" aria-hidden="true">
                      <span />
                      <span />
                      <span />
                    </div>
                    <span className="label-mono work-preview-url">COPPERBOSTON.DEV</span>
                    <ExternalLink size={14} strokeWidth={1.5} className="work-preview-icon" aria-hidden="true" />
                  </div>

                  <div className="work-preview-image-wrap">
                    <Image
                      src="/hero-crop.png"
                      alt="Preview of the Copper Boston website homepage"
                      fill
                      sizes="(max-width: 768px) 100vw, 720px"
                      className="work-preview-image"
                    />
                    <div className="work-preview-overlay">
                      <span className="label-mono">OPEN WEBSITE</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>

          {/* 03 // SELECTED PROJECTS */}
          <div className="content-section" id="selected-projects">
            <h2 className="label-mono section-header">{"// SELECTED PROJECTS"}</h2>

            <div className="dossier-table">
              <div className="table-row">
                <div className="cell-details">
                  <span className="serif-display cell-role">SAKURAYA - DUIT RAYA PLANNER</span>
                  <p className="label-mono cell-desc">Financial gifting planner with clear flow and low-friction experience.</p>
                  <a href="https://github.com/IrfanNG/SakuRaya" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <Github size={12} strokeWidth={1.5} />
                    <span className="label-mono" style={{ fontSize: '0.6rem' }}>SOURCE</span>
                  </a>
                </div>
                <span className="label-mono cell-org">GODAMSAHUR HACKATHON</span>
              </div>
              <div className="hairline-h table-divider" />

              <div className="table-row">
                <div className="cell-details">
                  <span className="serif-display cell-role">SAF - MOSQUE COMMUNITY PLATFORM</span>
                  <p className="label-mono cell-desc">Community coordination platform for updates, events, and participation.</p>
                  <a href="https://github.com/IrfanNG/Saf" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <Github size={12} strokeWidth={1.5} />
                    <span className="label-mono" style={{ fontSize: '0.6rem' }}>SOURCE</span>
                  </a>
                </div>
                <span className="label-mono cell-org">KRACKEDDEVS CHALLENGE</span>
              </div>
            </div>
          </div>

          {/* 04 // BACKGROUND */}
          <div className="content-section">
            <h2 className="label-mono section-header">{"// BACKGROUND"}</h2>

            <div className="dossier-table">
              <div className="table-row">
                <div className="cell-details">
                  <span className="serif-display cell-role">BSc. INFORMATION TECHNOLOGY (SOFTWARE ENGINEERING)</span>
                  <p className="label-mono cell-desc">Web architecture, OOP, and project management foundation.</p>
                </div>
                <span className="label-mono cell-org">UNIKL MIIT</span>
              </div>
              <div className="hairline-h table-divider" />

              <div className="table-row">
                <div className="cell-details">
                  <span className="serif-display cell-role">DIPLOMA IN COMPUTER SYSTEM</span>
                </div>
                <span className="label-mono cell-org">ADV. TECH TRAINING CENTRE</span>
              </div>
              <div className="hairline-h table-divider" />
            </div>
          </div>
          {/* 05 // CERTIFICATIONS */}
          <div className="content-section">
            <h2 className="label-mono section-header">{"// CERTIFICATIONS"}</h2>

            <div className="dossier-table">
              {/* GITHUB WORKSHOP */}
              <div className="table-row">
                <div className="cell-details">
                  <span className="serif-display cell-role">GITHUB WORKSHOP - OPEN SOURCE CONTRIBUTOR</span>
                  <a
                    href="/github-workshop.webp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-preview-link"
                    aria-label="Open GitHub Workshop certificate in a new tab"
                  >
                    <div className="cert-preview-thumb">
                      <Image
                        src="/github-workshop.webp"
                        alt="Preview of the GitHub Workshop certificate"
                        fill
                        sizes="(max-width: 768px) 44vw, 180px"
                        className="cert-preview-image"
                      />
                      <div className="cert-preview-overlay" aria-hidden="true">
                        <ExternalLink size={12} strokeWidth={1.5} />
                      </div>
                    </div>
                  </a>
                </div>
                <span className="label-mono cell-org">GDG IIUM</span>
              </div>
              <div className="hairline-h table-divider" />

              {/* OWASP */}
              <div className="table-row">
                <div className="cell-details">
                  <span className="serif-display cell-role">HOW HACKERS BREAK INTO WIFI</span>
                  <a
                    href="/cert-owasp-wifi.webp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-preview-link"
                    aria-label="Open OWASP WiFi certificate in a new tab"
                  >
                    <div className="cert-preview-thumb">
                      <Image
                        src="/cert-owasp-wifi.webp"
                        alt="Preview of the OWASP WiFi security certificate"
                        fill
                        sizes="(max-width: 768px) 44vw, 180px"
                        className="cert-preview-image"
                      />
                      <div className="cert-preview-overlay" aria-hidden="true">
                        <ExternalLink size={12} strokeWidth={1.5} />
                      </div>
                    </div>
                  </a>
                </div>
                <span className="label-mono cell-org">0DAY ACADEMY / OWASP</span>
              </div>
              <div className="hairline-h table-divider" />

              {/* GOOGLE PM */}
              <div className="table-row">
                <div className="cell-details">
                  <span className="serif-display cell-role">GOOGLE PROJECT MANAGEMENT</span>
                  <a
                    href="/cert-google-pm.webp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-preview-link"
                    aria-label="Open Google Project Management certificate in a new tab"
                  >
                    <div className="cert-preview-thumb">
                      <Image
                        src="/cert-google-pm.webp"
                        alt="Preview of the Google Project Management certificate"
                        fill
                        sizes="(max-width: 768px) 44vw, 180px"
                        className="cert-preview-image"
                      />
                      <div className="cert-preview-overlay" aria-hidden="true">
                        <ExternalLink size={12} strokeWidth={1.5} />
                      </div>
                    </div>
                  </a>
                </div>
                <span className="label-mono cell-org">COURSERA</span>
              </div>
            </div>
          </div>

          {/* 06 // CONTACT */}
          <div className="content-section" id="contact">
            <h2 className="label-mono section-header">{"// CONTACT"}</h2>
            <p className="intro-text" style={{ fontSize: '1.1rem' }}>
              Open to selective freelance builds, portfolio revamps, and product pages that need clean execution.
            </p>

            <div className="cta-row">
              <a href="mailto:mnifanmohdariff@gmail.com" className="repo-link">
                <Mail size={12} strokeWidth={1.5} />
                <span className="label-mono" style={{ fontSize: '0.6rem' }}>EMAIL</span>
              </a>
              <a href="https://wa.me/60183823063" target="_blank" rel="noopener noreferrer" className="repo-link">
                <MessageCircle size={12} strokeWidth={1.5} />
                <span className="label-mono" style={{ fontSize: '0.6rem' }}>WHATSAPP</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}



