import emailjs from '@emailjs/browser';
import { ContactForm } from '../types';

export const sendEmail = async (data: ContactForm) => {
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    message: data.message,
  };

  try {
    const response = await emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      templateParams,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    );
    return response;
  } catch (error) {
    throw error;
  }
};