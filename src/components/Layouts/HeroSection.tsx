// components/HeroSection.tsx
"use client";
import { motion } from "framer-motion";

const HeroSection = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="relative z-40 text-white bg-transparent pt-20 bg-gradient-to-r from-blue-600 to-cyan-500 w-full pb-4 mb-10">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl md:text-3xl text-center"
      >
        {title}{" "}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-center text-white"
      >
        {description}{" "}
      </motion.p>
    </section>
  );
};

export default HeroSection;
