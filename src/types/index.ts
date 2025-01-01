export interface Project {
  title: string;
  description: string;
  stack: string[];
  metrics: string;
}

export interface Goal {
  title: string;
  description: string;
}

export interface Achievement {
  title: string;
  date: string;
  description: string;
  icon: JSX.Element;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}