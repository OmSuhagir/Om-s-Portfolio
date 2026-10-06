import React from 'react';
import { GraduationCap, Award, MapPin, Calendar, Sparkles, Terminal, Code, Cpu } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function AboutSection() {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>01 // IDENTITY & ACADEMIC CORE</span>
          </div>
          <h2 className="section-title">
            Engineering Mindset, <span className="gradient-text-purple">Grounded In Impact.</span>
          </h2>
          <p className="section-subtitle">
            Bridging foundational computer science theory with production-grade backend and AI implementations.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* Left Column: Bio & Core Philosophy */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '14px',
                  background: 'rgba(168, 85, 247, 0.15)',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--neon-magenta)',
                }}
              >
                <Cpu size={24} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#fff' }}>Om Yogesh Suhagir</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--neon-purple)', fontFamily: 'var(--font-mono)' }}>
                  B.Tech IT • Software & AI Enthusiast
                </p>
              </div>
            </div>

            <p style={{ fontSize: '1.02rem', lineHeight: 1.75, color: '#cbd5e1', marginBottom: '24px' }}>
              I am an Information Technology engineer at{' '}
              <strong style={{ color: '#ffffff' }}>
                Vishwakarma Institute of Technology (VIT Pune)
              </strong>
              , graduating in 2027. My technical foundation spans SQL, distributed databases, REST APIs,
              ETL pipelines, and scalable backend architecture.
            </p>

            <p style={{ fontSize: '0.98rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '28px' }}>
              Beyond writing code, I love solving hard algorithmic problems and exploring high-efficiency
              computational heuristics—which led to publishing 2 Scopus-indexed research papers on algorithmic
              sorting optimization (FBMS) and intelligent healthcare diagnosis (BiteSage).
            </p>

            {/* Quick Meta Details */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(168, 85, 247, 0.18)',
              }}
            >
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  LOCATION
                </div>
                <div style={{ fontSize: '0.92rem', color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                  <MapPin size={14} color="var(--neon-cyan)" />
                  Pune, India
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  STATUS
                </div>
                <div style={{ fontSize: '0.92rem', color: '#10b981', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', marginTop: '3px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                  Graduating 2027
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Formal Education */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
              <GraduationCap size={20} color="var(--neon-magenta)" />
              <h3 style={{ fontSize: '1.2rem', color: '#fff' }}>Academic Progression</h3>
            </div>

            {portfolioData.education.map((edu, idx) => (
              <div
                key={idx}
                className="glass-panel"
                style={{
                  padding: '28px',
                  borderLeft: '4px solid var(--neon-purple)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginBottom: '10px',
                  }}
                >
                  <h4 style={{ fontSize: '1.15rem', color: '#ffffff' }}>{edu.degree}</h4>
                  <span className="cyber-badge" style={{ color: 'var(--neon-magenta)' }}>
                    <Calendar size={12} />
                    {edu.duration}
                  </span>
                </div>

                <div
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--neon-purple)',
                    fontWeight: 600,
                    marginBottom: '6px',
                  }}
                >
                  {edu.institution}
                </div>

                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-mono)',
                    marginBottom: '14px',
                  }}
                >
                  {edu.location} • <span style={{ color: '#38bdf8' }}>{edu.grade}</span>
                </div>

                <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-muted)' }}>
                  {edu.highlight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
