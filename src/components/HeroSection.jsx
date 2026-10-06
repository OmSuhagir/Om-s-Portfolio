import React, { useState, useEffect } from 'react';
import { ArrowRight, Code2, Sparkles, Terminal, Mail, ChevronDown, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function HeroSection({ playAudioChime }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = [
    'AI & Backend Systems Engineer',
    'Full-Stack Web Developer',
    'Scopus-Indexed Researcher',
    'VIT Pune • Class of 2027',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [roles.length]);

  const scrollTo = (id) => {
    playAudioChime(580);
    const elem = document.querySelector(id);
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '100px',
        paddingBottom: '60px',
        zIndex: 10,
      }}
    >
      <div className="portfolio-container" style={{ width: '100%' }}>
        <div style={{ maxWidth: '780px' }}>
          {/* Status Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(168, 85, 247, 0.12)',
              border: '1px solid rgba(168, 85, 247, 0.35)',
              backdropFilter: 'blur(8px)',
              marginBottom: '24px',
            }}
          >
            <div className="pulse-dot" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: '#d8b4fe',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {portfolioData.personal.status}
            </span>
          </div>

          {/* Main Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.8rem, 6.5vw, 4.8rem)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}
          >
            <span style={{ color: '#ffffff', display: 'block' }}>I AM</span>
            <span className="gradient-text-purple" style={{ display: 'block' }}>
              {portfolioData.personal.name}
            </span>
          </h1>

          {/* Dynamic Cycling Role */}
          <div
            style={{
              height: '42px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '24px',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                color: 'var(--neon-cyan)',
                fontSize: '1.15rem',
              }}
            >
              &gt;
            </span>
            <span
              key={roleIndex}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(1.1rem, 2.8vw, 1.45rem)',
                fontWeight: 600,
                color: '#e879f9',
                letterSpacing: '0.02em',
                animation: 'fadeSlide 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {roles[roleIndex]}
            </span>
          </div>

          {/* Bio Pitch */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              lineHeight: 1.7,
              color: 'var(--text-muted)',
              marginBottom: '36px',
              maxWidth: '640px',
            }}
          >
            Specializing in high-performance backend pipelines, REST APIs, and intelligent
            data-driven web architectures. Ex-Backend Intern at{' '}
            <strong style={{ color: '#fff' }}>Tech Mahindra</strong> (Net Zero AI) with{' '}
            <span style={{ color: 'var(--neon-magenta)', fontWeight: 600 }}>
              2 Scopus-indexed research publications
            </span>
            .
          </p>

          {/* CTA Buttons */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              alignItems: 'center',
              marginBottom: '48px',
            }}
          >
            <button
              onClick={() => scrollTo('#projects')}
              className="cyber-btn-primary"
              id="hero-explore-projects-btn"
            >
              <span>Explore Projects</span>
              <ArrowRight size={18} />
            </button>

            <a
              href="/om_suhagir_VIT.pdf"
              download="Om_Yogesh_Suhagir_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn-secondary"
              id="hero-download-cv-btn"
              onClick={() => playAudioChime(640)}
            >
              <Download size={16} />
              <span>Download CV</span>
            </a>

            <button
              onClick={() => scrollTo('#contact')}
              className="cyber-btn-secondary"
              id="hero-contact-btn"
            >
              <span>Initiate Transmission</span>
            </button>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px', marginLeft: '6px' }}>
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = 'var(--neon-magenta)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(217, 70, 239, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.25)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  color: 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = 'var(--neon-magenta)';
                  e.currentTarget.style.boxShadow = '0 0 15px rgba(217, 70, 239, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.25)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Quick Metrics Bar */}
          <div
            className="glass-panel"
            style={{
              padding: '20px 28px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '20px',
              maxWidth: '680px',
            }}
          >
            {portfolioData.stats.map((stat, idx) => (
              <div key={idx} style={{ textAlign: 'left' }}>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.9rem',
                    fontWeight: 800,
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'baseline',
                  }}
                >
                  <span className="gradient-text-neon">{stat.value}</span>
                  <span style={{ color: 'var(--neon-magenta)', fontSize: '1.4rem' }}>
                    {stat.suffix}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--text-dim)',
                    fontFamily: 'var(--font-mono)',
                    lineHeight: 1.3,
                    marginTop: '2px',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div
          onClick={() => scrollTo('#about')}
          style={{
            position: 'absolute',
            bottom: '24px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '6px',
            cursor: 'pointer',
            opacity: 0.7,
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.7')}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--neon-purple)',
              letterSpacing: '0.15em',
            }}
          >
            SCROLL DOWN
          </span>
          <ChevronDown
            size={18}
            color="var(--neon-magenta)"
            style={{ animation: 'bounceSlow 2s infinite' }}
          />
        </div> */}
      </div>

      <style>{`
        @keyframes fadeSlide {
          0% { opacity: 0; transform: translateY(6px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </section>
  );
}
