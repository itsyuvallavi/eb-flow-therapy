// services/emailService.js
import emailjs from '@emailjs/browser';

// Initialize EmailJS with environment variable
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Check if environment variables are loaded
if (!EMAILJS_PUBLIC_KEY || !EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID) {
  console.error('EmailJS environment variables are not properly configured');
}

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export const sendContactEmails = async (formData) => {
  const { name, email, phone, message, selectedTherapist } = formData;

  console.log("ENV VARS:", {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID
});
  
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
      EMAILJS_SERVICE_ID,     // Use environment variable
      EMAILJS_TEMPLATE_ID,    // Use environment variable
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