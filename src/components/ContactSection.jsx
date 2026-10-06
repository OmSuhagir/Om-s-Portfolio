import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, Terminal, Sparkles, Loader2, AlertCircle, ExternalLink } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './Icons';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { sendContactTransmission } from '../services/mailService';

export default function ContactSection({ playAudioChime }) {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sendError, setSendError] = useState(null);
  const [fallbackMailto, setFallbackMailto] = useState(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    playAudioChime(880);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setSendError(null);
    setFallbackMailto(null);
    playAudioChime(750);

    try {
      const result = await sendContactTransmission(formData);

      if (result.success) {
        setIsSent(true);
        playAudioChime(960);

        // Fire celebratory cyber confetti
        confetti({
          particleCount: 90,
          spread: 80,
          origin: { y: 0.6 },
          colors: ['#a855f7', '#d946ef', '#38bdf8', '#ffffff'],
        });
      } else {
        setSendError(result.error || 'Failed to dispatch transmission.');
        setFallbackMailto(result.fallbackMailto);
      }
    } catch (err) {
      setSendError('Unexpected transmission fault. Direct uplink available below.');
      const mailtoUrl = `mailto:${portfolioData.personal.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry - ' + formData.name
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setFallbackMailto(mailtoUrl);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding" style={{ position: 'relative', zIndex: 10 }}>
      <div className="portfolio-container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <Terminal size={14} />
            <span>06 // INITIATE TRANSMISSION</span>
          </div>
          <h2 className="section-title">
            Let's Engineer <span className="gradient-text-purple">The Future Together.</span>
          </h2>
          <p className="section-subtitle">
            Open for software engineering roles, backend/AI internships, and ambitious technical partnerships.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
        >
          {/* Left Column: Direct Transmission Info */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '12px' }}>
              Direct Uplink Details
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '28px' }}>
              Feel free to reach out directly via email, phone, or LinkedIn. I typically respond within 24 hours.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Email with 1-click copy */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: 'rgba(168, 85, 247, 0.08)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={18} color="var(--neon-magenta)" />
                  <div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      EMAIL ADDRESS
                    </div>
                    <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 500 }}>
                      {portfolioData.personal.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  title="Copy email to clipboard"
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: copied ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                    color: copied ? '#10b981' : '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)',
                    border: '1px solid rgba(168, 85, 247, 0.2)',
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              {/* Phone */}
              <a
                href={`tel:${portfolioData.personal.phone}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: 'rgba(168, 85, 247, 0.08)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--neon-cyan)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.25)')}
              >
                <Phone size={18} color="var(--neon-cyan)" />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    PHONE / WHATSAPP
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 500 }}>
                    {portfolioData.personal.phone}
                  </div>
                </div>
              </a>

              {/* Location */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  background: 'rgba(168, 85, 247, 0.08)',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                }}
              >
                <MapPin size={18} color="#fbbf24" />
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                    BASE LOCATION
                  </div>
                  <div style={{ fontSize: '0.92rem', color: '#ffffff', fontWeight: 500 }}>
                    {portfolioData.personal.location}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '10px' }}>
                <a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-btn-secondary"
                  style={{ justifyContent: 'center', fontSize: '0.85rem' }}
                >
                  <LinkedinIcon size={16} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noreferrer"
                  className="cyber-btn-secondary"
                  style={{ justifyContent: 'center', fontSize: '0.85rem' }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Cyber Terminal Form */}
          <div className="glass-panel" style={{ padding: '36px' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '8px' }}>
              Send Transmission
            </h3>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.86rem', fontFamily: 'var(--font-mono)', marginBottom: '24px' }}>
              // ENCRYPTED DIRECT CHANNEL
            </p>

            {isSent ? (
              <div
                style={{
                  padding: '36px 20px',
                  textAlign: 'center',
                  borderRadius: '12px',
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: '#10b981',
                  }}
                >
                  <Sparkles size={28} />
                </div>
                <h4 style={{ fontSize: '1.25rem', color: '#fff', marginBottom: '8px' }}>
                  Transmission Dispatched!
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '10px' }}>
                  Your payload has been routed to <strong>{portfolioData.personal.email}</strong>.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '24px' }}>
                  Om will respond to your frequency (<code style={{ color: 'var(--neon-magenta)' }}>{formData.email}</code>) shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSent(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="cyber-btn-secondary"
                  style={{ fontSize: '0.85rem' }}
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {sendError && (
                  <div
                    style={{
                      padding: '14px 16px',
                      borderRadius: '10px',
                      background: 'rgba(239, 68, 68, 0.12)',
                      border: '1px solid rgba(239, 68, 68, 0.35)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      fontSize: '0.85rem',
                      color: '#fca5a5',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <AlertCircle size={16} color="#ef4444" />
                      <span>{sendError}</span>
                    </div>
                    {fallbackMailto && (
                      <a
                        href={fallbackMailto}
                        target="_blank"
                        rel="noreferrer"
                        className="cyber-btn-secondary"
                        style={{ padding: '6px 12px', fontSize: '0.78rem', justifyContent: 'center' }}
                      >
                        <ExternalLink size={13} />
                        <span>Open Direct Mail Client</span>
                      </a>
                    )}
                  </div>
                )}

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      color: 'var(--text-dim)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '6px',
                    }}
                  >
                    IDENTIFIER / YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    disabled={isSubmitting}
                    placeholder="e.g. Alex Mercer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(10, 5, 20, 0.7)',
                      border: '1px solid rgba(168, 85, 247, 0.25)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      opacity: isSubmitting ? 0.6 : 1,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-magenta)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(168, 85, 247, 0.25)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      color: 'var(--text-dim)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '6px',
                    }}
                  >
                    RETURN FREQUENCY / EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    disabled={isSubmitting}
                    placeholder="e.g. alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(10, 5, 20, 0.7)',
                      border: '1px solid rgba(168, 85, 247, 0.25)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      opacity: isSubmitting ? 0.6 : 1,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-magenta)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(168, 85, 247, 0.25)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      color: 'var(--text-dim)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '6px',
                    }}
                  >
                    TRANSMISSION TOPIC / SUBJECT
                  </label>
                  <input
                    type="text"
                    disabled={isSubmitting}
                    placeholder="e.g. Internship Opportunity / Technical Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(10, 5, 20, 0.7)',
                      border: '1px solid rgba(168, 85, 247, 0.25)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      opacity: isSubmitting ? 0.6 : 1,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-magenta)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(168, 85, 247, 0.25)')}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: 'block',
                      fontSize: '0.78rem',
                      color: 'var(--text-dim)',
                      fontFamily: 'var(--font-mono)',
                      marginBottom: '6px',
                    }}
                  >
                    PAYLOAD / MESSAGE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    disabled={isSubmitting}
                    placeholder="Tell me about your team, project, or role..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(10, 5, 20, 0.7)',
                      border: '1px solid rgba(168, 85, 247, 0.25)',
                      borderRadius: '10px',
                      color: '#ffffff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      outline: 'none',
                      resize: 'vertical',
                      opacity: isSubmitting ? 0.6 : 1,
                    }}
                    onFocus={(e) => (e.target.style.borderColor = 'var(--neon-magenta)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(168, 85, 247, 0.25)')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cyber-btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    marginTop: '6px',
                    opacity: isSubmitting ? 0.8 : 1,
                    cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                      <span>Transmitting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}
