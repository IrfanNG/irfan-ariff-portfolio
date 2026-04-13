'use client';

import { motion } from 'framer-motion';
import { MapPin, Terminal, Github, Linkedin, Globe, AtSign, ExternalLink, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';


export default function Home() {
  const metadata = [
    { icon: <MapPin size={12} />, label: 'LOCATION', value: 'KUALA LUMPUR' },
    { icon: <Terminal size={12} />, label: 'AVAILABILITY', value: 'SELECTIVE' },
  ];

  return (
    <main className="dossier-grid">
      {/* --- THE LETTERHEAD HEADER --- */}
      <section className="col-start-1 col-end-13">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="header-block"
        >
          {/* Identity Section */}
          <div className="identity-container">
            <div className="photo-box">
              <Image
                src="/photo-id.png"
                alt="Irfan Ariff"
                width={150}
                height={150}
                className="photo-img"
                priority
              />
            </div>

            <div className="name-box">
              <h1 className="serif-display name-title">
                IRFAN ARIFF
              </h1>
              <p className="label-mono subtitle">
                SOFTWARE ENGINEERING STUDENT // UNI AMBASSADOR AT KRACKEDDEVS
              </p>
            </div>
          </div>

          {/* Metadata Bar */}
          <div className="hairline-h" style={{ marginBottom: '1rem' }} />
          <nav aria-label="Social Profiles" className="social-list-horizontal" style={{ padding: '0 0 1rem 0' }}>
            <a href="https://github.com/IrfanNG" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="GitHub">
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.linkedin.com/in/irfan-ariff-20691a264" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.threads.net/@irfanrff" target="_blank" rel="noopener noreferrer" className="social-icon-link">
              <AtSign size={20} strokeWidth={1.5} />
            </a>
            <a href="mailto:mnifanmohdariff@gmail.com" className="social-icon-link">
              <Mail size={20} strokeWidth={1.5} />
            </a>
            <a href="https://wa.me/60183823063" target="_blank" rel="noopener noreferrer" className="social-icon-link">
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
          transition={{ delay: 0.4, duration: 1 }}
        >
          {/* 01 // INTRODUCTION */}
          <div className="content-section">
            <h2 className="label-mono section-header">{"// INTRODUCTION"}</h2>
            <p className="intro-text">
              Software Engineering student at UniKL MIIT. I build software with a focus on clean logic and scalable architecture. From freelance web systems to mobile apps, I prioritize code quality and efficiency.
            </p>
          </div>

          {/* 02 // PROFESSIONAL EXPERIENCE */}
          <div className="content-section">
            <h2 className="label-mono section-header">{"// EXPERIENCE"}</h2>

            <div className="dossier-table">
              <div className="table-row">
                <span className="label-mono cell-date">MAR 2026</span>
                <div className="cell-details">
                  <span className="serif-display cell-role">SAKURAYA — DUIT RAYA PLANNER</span>
                  <p className="label-mono cell-desc">Modernizing tradition through a specialized financial gifting engine.</p>
                  <a href="https://github.com/IrfanNG/SakuRaya" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <Github size={12} strokeWidth={1.5} />
                    <span className="label-mono" style={{ fontSize: '0.6rem' }}>SOURCE</span>
                  </a>
                </div>
                <span className="label-mono cell-org">GODAMSAHUR HACKATHON</span>
              </div>
              <div className="hairline-h table-divider" />

              <div className="table-row">
                <span className="label-mono cell-date">MAR 2026</span>
                <div className="cell-details">
                  <span className="serif-display cell-role">SAF — MOSQUE COMMUNITY PLATFORM</span>
                  <p className="label-mono cell-desc">Bridging congregations through modern collaborative digital solutions.</p>
                  <a href="https://github.com/IrfanNG/Saf" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <Github size={12} strokeWidth={1.5} />
                    <span className="label-mono" style={{ fontSize: '0.6rem' }}>SOURCE</span>
                  </a>
                </div>
                <span className="label-mono cell-org">KRACKEDDEVS CHALLENGE</span>
              </div>
            </div>
          </div>

          {/* 03 // ACADEMIC FOUNDATION */}
          <div className="content-section">
            <h2 className="label-mono section-header">{"// ACADEMIC FOUNDATION"}</h2>

            <div className="dossier-table">
              <div className="table-row">
                <span className="label-mono cell-date">2023 — 2027</span>
                <div className="cell-details">
                  <span className="serif-display cell-role">BSc. INFORMATION TECHNOLOGY (SOFT. ENG)</span>
                  <p className="label-mono cell-desc">Focused on Object-Oriented Programming, Web Architecture, and IT Project Management.</p>
                </div>
                <span className="label-mono cell-org">UNIKL MIIT</span>
              </div>
              <div className="hairline-h table-divider" />

              <div className="table-row">
                <span className="label-mono cell-date">2021 — 2022</span>
                <div className="cell-details">
                  <span className="serif-display cell-role">DIPLOMA IN COMPUTER SYSTEM</span>
                </div>
                <span className="label-mono cell-org">ADV. TECH TRAINING CENTRE</span>
              </div>
              <div className="hairline-h table-divider" />

              <div className="table-row">
                <span className="label-mono cell-date">2019 — 2020</span>
                <div className="cell-details">
                  <span className="serif-display cell-role">TECHNOLOGY COMPUTER SYSTEM</span>
                </div>
                <span className="label-mono cell-org">GIATMARA</span>
              </div>
            </div>
          </div>
          {/* 04 // CERTIFICATIONS */}
          <div className="content-section">
            <h2 className="label-mono section-header">{"// CERTIFICATIONS"}</h2>

            <div className="dossier-table">
              {/* OWASP */}
              <div className="table-row">
                <span className="label-mono cell-date">JAN 2026</span>
                <div className="cell-details">
                  <span className="serif-display cell-role">HOW HACKERS BREAK INTO WIFI</span>
                  <a href="/cert-owasp-wifi.png" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <ExternalLink size={12} strokeWidth={1.5} />
                    <span className="label-mono" style={{ fontSize: '0.6rem' }}>VIEW</span>
                  </a>
                </div>
                <span className="label-mono cell-org">0DAY ACADEMY / OWASP</span>
              </div>
              <div className="hairline-h table-divider" />

              {/* GOOGLE PM */}
              <div className="table-row">
                <span className="label-mono cell-date">NOV 2025</span>
                <div className="cell-details">
                  <span className="serif-display cell-role">GOOGLE PROJECT MANAGEMENT</span>
                  <a href="/cert-google-pm.png" target="_blank" rel="noopener noreferrer" className="repo-link">
                    <ExternalLink size={12} strokeWidth={1.5} />
                    <span className="label-mono" style={{ fontSize: '0.6rem' }}>VIEW</span>
                  </a>
                </div>
                <span className="label-mono cell-org">COURSERA</span>
              </div>
            </div>
          </div>

          {/* 05 // COLLABORATION & STUDIO */}
          <div className="content-section">
            <h2 className="label-mono section-header">{"// COLLABORATION"}</h2>
            <div className="studio-box">
              <p className="intro-text" style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                For software engineering inquiries, digital product development, or collaboration through Alchimistra Studio.
              </p>
              <a href="https://alchimistra.com" target="_blank" rel="noopener noreferrer" className="repo-link" style={{ padding: '0.8rem 1.5rem' }}>
                <Globe size={16} strokeWidth={1.5} />
                <span className="label-mono">OPEN ALCHIMISTRA STUDIO</span>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
