import React, { useState, useRef, useCallback } from 'react';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import CyberBackground3D from './components/CyberBackground3D';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import PublicationsSection from './components/PublicationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  // Initialize Lenis Smooth Scroll + GSAP ScrollTrigger sync
  useSmoothScroll();

  const [soundEnabled, setSoundEnabled] = useState(false);
  const audioCtxRef = useRef(null);

  // Synthesize soft futuristic audio feedback
  const playAudioChime = useCallback(
    (freq = 660) => {
      if (!soundEnabled) return;
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        if (!audioCtxRef.current) {
          audioCtxRef.current = new AudioContext();
        }
        const ctx = audioCtxRef.current;
        if (ctx.state === 'suspended') {
          ctx.resume();
        }
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.5, ctx.currentTime + 0.12);

        gain.gain.setValueAtTime(0.04, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.18);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.18);
      } catch (err) {
        // Ignore audio playback errors if restricted by browser policy
      }
    },
    [soundEnabled]
  );

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-dark)' }}>
      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* Cyber Grid Background & Ambient Lighting */}
      <div className="cyber-grid-bg" />
      <div className="ambient-glow-1" />
      <div className="ambient-glow-2" />

      {/* 3D Three.js Interactive Canvas with GSAP Scroll Trigger */}
      <CyberBackground3D />

      {/* Main Content Interface Layer */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <Navbar
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          playAudioChime={playAudioChime}
        />
        <main>
          <HeroSection playAudioChime={playAudioChime} />
          <AboutSection />
          <SkillsSection playAudioChime={playAudioChime} />
          <ProjectsSection playAudioChime={playAudioChime} />
          <ExperienceSection />
          <PublicationsSection />
          <ContactSection playAudioChime={playAudioChime} />
        </main>
        <Footer playAudioChime={playAudioChime} />
      </div>
    </div>
  );
}
