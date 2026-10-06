import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Terminal, Globe2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ playAudioChime }) {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-US', options).format(new Date()));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playAudioChime(800);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(168, 85, 247, 0.15)',
        backgroundColor: '#030108',
        padding: '50px 0 30px',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="portfolio-container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '36px',
          }}
        >
          {/* Left Brand */}
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.2rem',
                color: '#ffffff',
                marginBottom: '4px',
              }}
            >
              OM YOGESH SUHAGIR
            </div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
              B.Tech IT • Vishwakarma Institute of Technology, Pune
            </p>
          </div>

          {/* Center: Live Local IST Time */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: '9999px',
              background: 'rgba(168, 85, 247, 0.08)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              fontSize: '0.78rem',
              fontFamily: 'var(--font-mono)',
              color: '#d8b4fe',
            }}
          >
            <Globe2 size={13} color="var(--neon-cyan)" />
            <span>PUNE, IN (IST):</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>{istTime || '13:00 IST'}</span>
          </div>

          {/* Right: Back to Top */}
          <button
            onClick={scrollToTop}
            className="cyber-btn-secondary"
            style={{ padding: '8px 16px', fontSize: '0.82rem' }}
          >
            <span>Return to Orbit</span>
            <ArrowUp size={14} />
          </button>
        </div>

        {/* Bottom Micro Line */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '0.78rem',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-mono)',
          }}
        >
          <div>© {new Date().getFullYear()} Om Yogesh Suhagir. All rights reserved.</div>
          <div>Synthesized with React 19, Three.js, GSAP & Neon Cyber Aesthetics.</div>
        </div>
      </div>
    </footer>
  );
}
