import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, Award, Zap } from 'lucide-react';

const stats = [
  { icon: Users, value: '1M+', label: 'Questions Answered Daily' },
  { icon: Star, value: '4.9/5', label: 'User Rating' },
  { icon: Award, value: '98%', label: 'Success Rate' },
  { icon: Zap, value: '50ms', label: 'Average Response Time' }
];

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Senior Developer',
    company: 'TechCorp',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=256&h=256&fit=crop',
    quote: 'Ultimate AI has transformed our development workflow. The code suggestions are incredibly accurate.'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Content Creator',
    company: 'CreativeHub',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&h=256&fit=crop',
    quote: 'The AI understands context so well, it feels like working with a brilliant creative partner.'
  },
  {
    name: 'Emily Watson',
    role: 'Research Lead',
    company: 'DataScience Inc',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&h=256&fit=crop',
    quote: 'From data analysis to report writing, Ultimate AI has become indispensable for our research team.'
  }
];

const clients = [
  'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=200&h=80&fit=crop',
  'https://images.unsplash.com/photo-1611162616305-c69b3396004b?q=80&w=200&h=80&fit=crop',
  'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=200&h=80&fit=crop',
  'https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=200&h=80&fit=crop'
];

export const SocialProof = () => {
  return (
    <section className="py-20 bg-dark-200/50">
      <div className="container mx-auto px-4 max-w-8xl">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-secondary/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mb-20">
          <p className="text-center text-secondary/70 mb-8">Trusted by innovative companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {clients.map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt="Client Logo"
                className="h-12 object-contain opacity-50 hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="cyber-card"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-secondary/70">
                    {testimonial.role} at {testimonial.company}
                  </p>
                </div>
              </div>
              <p className="text-secondary/80 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};