import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal, Building2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>04 // INDUSTRIAL TRACK RECORD</span>
          </div>
          <h2 className="section-title">
            Professional Experience & <span className="gradient-text-purple">Backend Impact.</span>
          </h2>
          <p className="section-subtitle">
            Deploying enterprise-grade microservices, REST APIs, and database solutions in agile engineering environments.
          </p>
        </div>

        {/* Timeline Container */}
        <div
          style={{
            maxWidth: '880px',
            margin: '0 auto',
            position: 'relative',
          }}
        >
          {/* Vertical Glowing Timeline Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '24px',
              width: '2px',
              background: 'linear-gradient(180deg, #9333ea 0%, #d946ef 50%, #38bdf8 100%)',
              boxShadow: '0 0 12px rgba(168, 85, 247, 0.6)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
            {portfolioData.experience.map((exp, idx) => (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  gap: '28px',
                  alignItems: 'flex-start',
                  position: 'relative',
                }}
              >
                {/* Timeline Node Icon */}
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    background: '#090418',
                    border: '2px solid var(--neon-magenta)',
                    boxShadow: '0 0 20px rgba(217, 70, 239, 0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                    zIndex: 2,
                  }}
                >
                  <Building2 size={22} color="var(--neon-magenta)" />
                </div>

                {/* Experience Card */}
                <div
                  className="glass-panel"
                  style={{
                    flexGrow: 1,
                    padding: '32px',
                    borderLeft: '4px solid var(--neon-purple)',
                  }}
                >
                  {/* Card Header */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      flexWrap: 'wrap',
                      gap: '12px',
                      marginBottom: '10px',
                    }}
                  >
                    <div>
                      <h3 style={{ fontSize: '1.4rem', color: '#ffffff', fontWeight: 700 }}>
                        {exp.role}
                      </h3>
                      <div
                        style={{
                          fontSize: '1.05rem',
                          color: 'var(--neon-purple)',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px',
                          marginTop: '2px',
                        }}
                      >
                        <span>{exp.company}</span>
                        <span style={{ color: 'var(--text-dim)' }}>•</span>
                        <span style={{ fontSize: '0.85rem', color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>
                          {exp.badge}
                        </span>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                      <span className="cyber-badge" style={{ color: 'var(--neon-magenta)' }}>
                        <Calendar size={12} />
                        {exp.duration}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p style={{ color: '#cbd5e1', fontSize: '0.96rem', lineHeight: 1.6, marginBottom: '20px' }}>
                    {exp.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {exp.highlights.map((item, hIdx) => (
                      <div
                        key={hIdx}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '10px',
                          fontSize: '0.9rem',
                          color: 'var(--text-muted)',
                          lineHeight: 1.5,
                        }}
                      >
                        <CheckCircle2
                          size={16}
                          color="var(--neon-magenta)"
                          style={{ flexShrink: 0, marginTop: '3px' }}
                        />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
