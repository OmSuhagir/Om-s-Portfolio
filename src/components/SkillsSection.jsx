import React, { useState } from 'react';
import { Code, Database, Globe, Wrench, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function SkillsSection({ playAudioChime }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Complete Stack', icon: Sparkles },
    { id: 'languages', name: 'Languages', icon: Code },
    { id: 'backend', name: 'Backend & Data', icon: Database },
    { id: 'frontend', name: 'Frontend & 3D', icon: Globe },
    { id: 'tools', name: 'Core & DevOps', icon: Wrench },
  ];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>02 // TECHNICAL ARSENAL</span>
          </div>
          <h2 className="section-title">
            Mastery Across <span className="gradient-text-purple">The Engineering Stack.</span>
          </h2>
          <p className="section-subtitle">
            Battle-tested frameworks, database architectures, and algorithms engineered for speed and reliability.
          </p>
        </div>

        {/* Category Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '48px',
          }}
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  playAudioChime(720);
                  setActiveCategory(cat.id);
                }}
                className={isActive ? 'cyber-btn-primary' : 'cyber-btn-secondary'}
                style={{
                  padding: '9px 20px',
                  fontSize: '0.86rem',
                  borderRadius: '9999px',
                }}
              >
                <Icon size={15} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Card 1: Languages */}
          {(activeCategory === 'all' || activeCategory === 'languages') && (
            <div className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(168, 85, 247, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--neon-magenta)',
                  }}
                >
                  <Code size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>Programming Languages</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    Core algorithmic synthesis
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {portfolioData.skills.programming.map((skill, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--neon-purple)', fontFamily: 'var(--font-mono)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #9333ea, #e879f9)',
                          borderRadius: '3px',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 2: Backend & Databases */}
          {(activeCategory === 'all' || activeCategory === 'backend') && (
            <div className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--neon-cyan)',
                  }}
                >
                  <Database size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>Backend & Data Engineering</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    APIs, queries & ETL systems
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {portfolioData.skills.backendAndData.map((skill, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--neon-cyan)', fontFamily: 'var(--font-mono)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #38bdf8, #8b5cf6)',
                          borderRadius: '3px',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 3: Frontend & 3D */}
          {(activeCategory === 'all' || activeCategory === 'frontend') && (
            <div className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(232, 121, 249, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--neon-magenta)',
                  }}
                >
                  <Globe size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>Web & 3D Interactive</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    Three.js, React & modern UI
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {portfolioData.skills.frontendAnd3D.map((skill, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: 'var(--neon-magenta)', fontFamily: 'var(--font-mono)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #d946ef, #38bdf8)',
                          borderRadius: '3px',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Card 4: Tools & Core Concepts */}
          {(activeCategory === 'all' || activeCategory === 'tools') && (
            <div className="glass-panel" style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(251, 191, 36, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fbbf24',
                  }}
                >
                  <Wrench size={20} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', color: '#fff' }}>Engineering Foundations</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    Architecture & Git tooling
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {portfolioData.skills.toolsAndCore.map((skill, idx) => (
                  <div key={idx}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                      <span style={{ fontSize: '0.9rem', color: '#e2e8f0', fontWeight: 500 }}>
                        {skill.name}
                      </span>
                      <span style={{ fontSize: '0.8rem', color: '#fbbf24', fontFamily: 'var(--font-mono)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      style={{
                        height: '6px',
                        background: 'rgba(255, 255, 255, 0.06)',
                        borderRadius: '3px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          width: `${skill.level}%`,
                          background: 'linear-gradient(90deg, #fbbf24, #ec4899)',
                          borderRadius: '3px',
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
