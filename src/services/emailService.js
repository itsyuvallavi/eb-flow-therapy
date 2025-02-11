// services/emailService.js
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("pBvBJnus_GURsn7yo");

export const sendContactEmails = async (formData) => {
  const { name, email, phone, message, selectedTherapist } = formData;
  
  try {
    // Updated template parameters to include all necessary information
    const templateParams = {
      to_email: "elinorlmft@gmail.com", // Set the fixed recipient email
      to_name: "Elinor Bawnik", // Set the fixed recipient name
      from_name: name,
      from_email: email,
      phone_number: phone,
      message: message,
      selected_therapist: selectedTherapist,
      reply_to: email,
    };

    const result = await emailjs.send(
      'service_6ctc9at',     // Your service ID
      'template_329fpke',    // Your template ID
      templateParams
    );

    console.log('Email sent successfully:', result);
    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { 
      success: false, 
      message: 'Failed to send message. Please try again or contact us directly.',
      error: error.text 
    };
  }
};