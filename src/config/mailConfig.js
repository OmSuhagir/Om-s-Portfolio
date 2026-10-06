// Contact Mailing System Configuration
// You can use FormSubmit (active by default, requires 0 setup!) 
// OR configure EmailJS below if you have EmailJS service keys.

export const mailConfig = {
  // Primary recipient email
  recipientEmail: 'omsuhagir123@gmail.com',

  // Provider: 'formsubmit' (default zero-setup) or 'emailjs'
  provider: 'formsubmit',

  // Optional: EmailJS credentials (only if using EmailJS)
  emailjs: {
    serviceId: '',   // e.g. 'service_xyz'
    templateId: '',  // e.g. 'template_abc'
    publicKey: '',   // e.g. 'user_12345678'
  },
};
