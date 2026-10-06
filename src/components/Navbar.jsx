import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Download, Terminal, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Navbar({ soundEnabled, setSoundEnabled, playAudioChime }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Publications', href: '#publications' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    playAudioChime(660);
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        backgroundColor: scrolled ? 'rgba(5, 2, 12, 0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(168, 85, 247, 0.2)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
      }}
    >
      <div className="portfolio-container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px',
          }}
        >
          {/* Logo / Brand */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              cursor: 'pointer',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #9333ea, #d946ef)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 18px rgba(168, 85, 247, 0.5)',
                fontWeight: 800,
                fontSize: '1rem',
                color: '#fff',
                fontFamily: 'var(--font-display)',
                letterSpacing: '1px',
              }}
            >
              OS
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  letterSpacing: '0.05em',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                OM SUHAGIR
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: '#10b981',
                    boxShadow: '0 0 8px #10b981',
                    display: 'inline-block',
                  }}
                />
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--neon-purple)',
                  letterSpacing: '0.08em',
                }}
              >
                B.TECH IT • VIT PUNE
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '28px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  transition: 'color 0.2s ease, transform 0.2s ease',
                  position: 'relative',
                  padding: '6px 0',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            {/* Audio Toggle */}
            <button
              onClick={() => {
                setSoundEnabled(!soundEnabled);
                if (!soundEnabled) playAudioChime(880);
              }}
              title={soundEnabled ? 'Mute Cyber Audio' : 'Enable Cyber Audio'}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                background: soundEnabled ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                color: soundEnabled ? 'var(--neon-magenta)' : 'var(--text-dim)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--neon-magenta)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.3)';
              }}
            >
              {soundEnabled ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            {/* Resume CV Button */}
            <a
              href="/om_suhagir_VIT.pdf"
              download="Om_Yogesh_Suhagir_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-btn-secondary"
              style={{
                padding: '8px 16px',
                fontSize: '0.82rem',
                display: 'none',
              }}
              id="resume-nav-btn"
            >
              <Download size={14} />
              <span>Resume</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                border: '1px solid rgba(168, 85, 247, 0.3)',
                background: 'rgba(20, 10, 40, 0.6)',
                color: '#fff',
              }}
              className="mobile-toggle-btn"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              padding: '20px 0 24px',
              borderTop: '1px solid rgba(168, 85, 247, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              backgroundColor: 'rgba(5, 2, 12, 0.96)',
              backdropFilter: 'blur(20px)',
              borderRadius: '0 0 16px 16px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  padding: '10px 16px',
                  color: '#ffffff',
                  fontSize: '1rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'rgba(168, 85, 247, 0.08)',
                }}
              >
                <span>{link.name}</span>
                <span style={{ color: 'var(--neon-magenta)', fontSize: '0.8rem' }}>→</span>
              </a>
            ))}
            <div style={{ padding: '8px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="/om_suhagir_VIT.pdf"
                download="Om_Yogesh_Suhagir_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Download size={16} />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="cyber-btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Initiate Transmission
              </a>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav {
            display: flex !important;
          }
          #resume-nav-btn {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
