import React, { useState } from 'react';
import { ExternalLink, Sparkles, Terminal, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

// Interactive 3D Tilt Card Component
function ProjectCard({ project, onSelect, playAudioChime }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: x * 12, y: -y * 12 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      className="glass-panel"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
        transition: 'transform 0.15s ease-out, border-color 0.3s ease, box-shadow 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '32px',
        border: '1px solid rgba(168, 85, 247, 0.25)',
        position: 'relative',
        minHeight: '380px',
      }}
    >
      <div>
        {/* Top Badges */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '18px',
          }}
        >
          <span
            className="cyber-badge"
            style={{
              color: 'var(--neon-magenta)',
              borderColor: 'rgba(232, 121, 249, 0.4)',
              background: 'rgba(232, 121, 249, 0.08)',
            }}
          >
            {project.category}
          </span>
          <span
            style={{
              fontSize: '0.78rem',
              color: 'var(--neon-cyan)',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Sparkles size={12} />
            {project.stats}
          </span>
        </div>

        {/* Project Title */}
        <h3
          style={{
            fontSize: '1.5rem',
            color: '#ffffff',
            fontWeight: 700,
            marginBottom: '8px',
            letterSpacing: '-0.01em',
          }}
        >
          {project.title}
        </h3>

        <div
          style={{
            fontSize: '0.88rem',
            color: 'var(--neon-purple)',
            fontFamily: 'var(--font-mono)',
            marginBottom: '16px',
          }}
        >
          {project.tagline}
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: '0.94rem',
            lineHeight: 1.65,
            color: 'var(--text-muted)',
            marginBottom: '24px',
          }}
        >
          {project.description}
        </p>
      </div>

      <div>
        {/* Tech Stack Tags */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '8px',
            marginBottom: '24px',
          }}
        >
          {project.tech.map((t, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(255, 255, 255, 0.05)',
                color: '#e2e8f0',
                border: '1px solid rgba(255, 255, 255, 0.08)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '16px',
            borderTop: '1px solid rgba(168, 85, 247, 0.15)',
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => playAudioChime(640)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.86rem',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            <GithubIcon size={16} />
            <span>Source Code</span>
          </a>

          <button
            onClick={() => {
              playAudioChime(800);
              onSelect(project);
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.86rem',
              color: 'var(--neon-magenta)',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <span>System Spec</span>
            <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection({ playAudioChime }) {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>03 // HIGH-IMPACT INITIATIVES</span>
          </div>
          <h2 className="section-title">
            Featured Systems & <span className="gradient-text-purple">Architectures.</span>
          </h2>
          <p className="section-subtitle">
            Engineered for real-world impact across governance intelligence, green computing, career tech, and financial inclusion.
          </p>
        </div>

        {/* 2x2 Grid of 3D Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {portfolioData.projects.map((proj) => (
            <ProjectCard
              key={proj.id}
              project={proj}
              onSelect={setSelectedProject}
              playAudioChime={playAudioChime}
            />
          ))}
        </div>

        {/* Modal for Detailed Project Spec */}
        {selectedProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(5, 2, 12, 0.85)',
              backdropFilter: 'blur(20px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="glass-panel"
              style={{
                maxWidth: '620px',
                width: '100%',
                padding: '36px',
                border: '1px solid var(--neon-magenta)',
                boxShadow: '0 0 50px rgba(168, 85, 247, 0.4)',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <span className="cyber-badge" style={{ color: 'var(--neon-magenta)' }}>
                  {selectedProject.category}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '1.2rem',
                    cursor: 'pointer',
                  }}
                >
                  ✕
                </button>
              </div>

              <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '8px' }}>
                {selectedProject.title}
              </h3>
              <p style={{ color: 'var(--neon-purple)', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', marginBottom: '20px' }}>
                {selectedProject.tagline}
              </p>

              <p style={{ color: '#cbd5e1', lineHeight: 1.7, fontSize: '1rem', marginBottom: '24px' }}>
                {selectedProject.description}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', marginBottom: '10px' }}>
                  STACK SPECIFICATIONS
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {selectedProject.tech.map((t, idx) => (
                    <span
                      key={idx}
                      style={{
                        padding: '6px 12px',
                        background: 'rgba(168, 85, 247, 0.15)',
                        border: '1px solid rgba(168, 85, 247, 0.3)',
                        borderRadius: '6px',
                        color: '#d8b4fe',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="cyber-btn-secondary"
                  style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                >
                  Close Spec
                </button>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-btn-primary"
                  style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                >
                  <GithubIcon size={16} />
                  <span>Inspect Code</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
