import React from 'react';
import { BookOpen, Award, Sparkles, Terminal, FileText, CheckCircle, Trophy, Users, ShieldAlert } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PublicationsSection() {
  return (
    <section id="publications" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>05 // SCHOLARLY RESEARCH & LEADERSHIP</span>
          </div>
          <h2 className="section-title">
            Scopus Publications & <span className="gradient-text-purple">Distinctions.</span>
          </h2>
          <p className="section-subtitle">
            Advancing algorithmic paradigms through peer-reviewed research while orchestrating large-scale student initiatives.
          </p>
        </div>

        {/* 2-Column: Publications (Left) & Leadership / Awards (Right) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '32px',
          }}
        >
          {/* Left Column: Research Publications */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <BookOpen size={20} color="var(--neon-magenta)" />
              <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>Peer-Reviewed Research</h3>
              <span className="cyber-badge" style={{ color: '#10b981', borderColor: 'rgba(16, 185, 129, 0.4)' }}>
                Scopus Indexed
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {portfolioData.publications.map((paper) => (
                <div
                  key={paper.id}
                  className="glass-panel"
                  style={{
                    padding: '28px',
                    borderLeft: '4px solid var(--neon-magenta)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: 'var(--neon-cyan)',
                        padding: '3px 8px',
                        background: 'rgba(56, 189, 248, 0.1)',
                        borderRadius: '4px',
                      }}
                    >
                      {paper.venue}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: '#10b981',
                        fontWeight: 600,
                      }}
                    >
                      ✓ {paper.indexing}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.2rem', color: '#ffffff', marginBottom: '10px', lineHeight: 1.3 }}>
                    {paper.title}
                  </h4>

                  <p style={{ fontSize: '0.9rem', lineHeight: 1.6, color: 'var(--text-muted)', marginBottom: '18px' }}>
                    {paper.summary}
                  </p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {paper.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          fontSize: '0.72rem',
                          fontFamily: 'var(--font-mono)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          background: 'rgba(168, 85, 247, 0.12)',
                          color: '#d8b4fe',
                        }}
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Leadership & Honors */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
              <Trophy size={20} color="var(--neon-cyan)" />
              <h3 style={{ fontSize: '1.3rem', color: '#fff' }}>Leadership & Honors</h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {portfolioData.achievements.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '22px 26px',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '12px',
                      background: 'rgba(168, 85, 247, 0.12)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: idx === 0 ? 'var(--neon-magenta)' : idx === 1 ? '#fbbf24' : 'var(--neon-cyan)',
                      flexShrink: 0,
                    }}
                  >
                    {idx === 0 ? <Award size={22} /> : idx === 1 ? <Trophy size={20} /> : idx === 2 ? <Users size={20} /> : <ShieldAlert size={20} />}
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px' }}>
                      <h4 style={{ fontSize: '1.05rem', color: '#ffffff', fontWeight: 600 }}>
                        {item.title}
                      </h4>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                        {item.year}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.82rem', color: 'var(--neon-purple)', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                      {item.subtitle}
                    </div>

                    <p style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
