// services/emailService.js
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("pBvBJnus_GURsn7yo");

export const sendContactEmails = async (formData) => {
  const { name, email, phone, message, selectedTherapist } = formData;
  
  try {
    // Make sure these parameter names exactly match your template variables
    const templateParams = {
      to_name: "Admin", // The recipient's name
      from_name: name,
      from_email: email,
      phone_number: phone,
      message: message,
      selected_therapist: selectedTherapist,
      reply_to: email,
    };

    const result = await emailjs.send(
      'service_pja43ca',     // Your service ID
      'template_ab98faq',    // Your template ID
      templateParams
    );

    console.log('Email sent:', result);
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: error.text };
  }
};