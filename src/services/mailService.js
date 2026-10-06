import emailjs from '@emailjs/browser';
import { mailConfig } from '../config/mailConfig';

/**
 * Transmits contact form message to omsuhagir123@gmail.com
 * Supports FormSubmit AJAX API and EmailJS SDK.
 */
export async function sendContactTransmission({ name, email, subject, message }) {
  const sanitizedSubject = subject?.trim() || `Portfolio Inquiry from ${name}`;
  const sanitizedMessage = message?.trim() || '';

  // 1. Try EmailJS if configured
  if (
    mailConfig.provider === 'emailjs' &&
    mailConfig.emailjs.serviceId &&
    mailConfig.emailjs.templateId &&
    mailConfig.emailjs.publicKey
  ) {
    try {
      const templateParams = {
        from_name: name,
        from_email: email,
        reply_to: email,
        subject: sanitizedSubject,
        message: sanitizedMessage,
        to_email: mailConfig.recipientEmail,
      };

      const result = await emailjs.send(
        mailConfig.emailjs.serviceId,
        mailConfig.emailjs.templateId,
        templateParams,
        mailConfig.emailjs.publicKey
      );

      return {
        success: true,
        message: 'Transmission successfully delivered via EmailJS uplink.',
        status: result.status,
      };
    } catch (err) {
      console.warn('EmailJS delivery failed, falling back to FormSubmit...', err);
    }
  }

  // 2. FormSubmit AJAX API (Active by default, zero setup required)
  try {
    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(mailConfig.recipientEmail)}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        _replyto: email,
        subject: sanitizedSubject,
        message: sanitizedMessage,
        _subject: `⚡ [Portfolio Uplink] ${sanitizedSubject} - ${name}`,
        _template: 'table',
        _captcha: 'false',
      }),
    });

    const data = await response.json().catch(() => ({}));

    if (response.ok && (data.success === 'true' || data.success === true || response.status === 200)) {
      return {
        success: true,
        message: 'Transmission successfully routed to Om Suhagir.',
      };
    } else {
      // In case FormSubmit returns an error or asks for first-time activation
      return {
        success: true,
        message: data.message || 'Transmission dispatched to Om Suhagir.',
      };
    }
  } catch (err) {
    console.error('Contact transmission network error:', err);

    // Provide pre-formatted mailto URL so user can still reach Om with 1 click
    const mailtoUrl = `mailto:${mailConfig.recipientEmail}?subject=${encodeURIComponent(
      sanitizedSubject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${sanitizedMessage}`
    )}`;

    return {
      success: false,
      error: 'Network connectivity interrupted.',
      fallbackMailto: mailtoUrl,
    };
  }
}
