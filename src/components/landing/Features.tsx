import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Brain, Code, GraduationCap } from 'lucide-react';

const features = [
  {
    icon: MessageSquare,
    title: 'Natural Conversations',
    description: "Chat like you're talking to a brilliant friend who understands context and nuance."
  },
  {
    icon: Brain,
    title: 'Universal Knowledge',
    description: 'From academic research to creative projects, access comprehensive knowledge instantly.'
  },
  {
    icon: Code,
    title: 'Code Generation',
    description: 'Build entire applications with AI guidance and smart code suggestions.'
  },
  {
    icon: GraduationCap,
    title: 'Learning Companion',
    description: 'Get personalized explanations in any field, adapted to your learning style.'
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-dark-200">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Powered by Advanced{' '}
            <span className="gradient-text">AI Technology</span>
          </h2>
          <p className="text-xl text-secondary/70">
            Experience the next generation of AI assistance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="feature-card"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-secondary/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};