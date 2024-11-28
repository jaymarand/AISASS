import React from 'react';
import { motion } from 'framer-motion';

export const Pricing = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Simple,{' '}
            <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="text-xl text-secondary/70">
            Choose the perfect plan for your needs
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
          <stripe-pricing-table 
            pricing-table-id="prctbl_1QPb7xCabywY62e5GEdNCQzp"
            publishable-key="pk_test_51QCUZeCabywY62e5Omg7QdOgsxBTqbPECRv8VNQs8EN9IPVkZXfONDimroI1VXlpMlpOGcDpQnriTAtNcMe4DByg00mmpDknul"
          >
          </stripe-pricing-table>
        </motion.div>
      </div>
    </section>
  );
};