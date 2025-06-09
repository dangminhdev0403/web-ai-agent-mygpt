"use client";
import { motion } from "framer-motion";

const Side = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative z-40 text-white pt-20 pb-24 w-full bg-gradient-to-r from-[#000e2b] to-[#00376e] text-center h-[435px]"
    >
      <div className="mb-4 tracking-widest text-sm text-gray-300">MYGPT</div>
      <h2 className="text-2xl md:text-4xl font-bold leading-snug max-w-2xl mx-auto">
        Đi đầu giải pháp ứng dụng GenAI <br /> tại thị trường Việt Nam
      </h2>

      {/* Mây SVG đáy */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-32 md:h-40"
        >
          <path
            fill="#00264d"
            fillOpacity="1"
            d="M0,224L30,202.7C60,181,120,139,180,133.3C240,128,300,160,360,176C420,192,480,192,540,186.7C600,181,660,171,720,154.7C780,139,840,117,900,122.7C960,128,1020,160,1080,181.3C1140,203,1200,213,1260,197.3C1320,181,1380,139,1410,117.3L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
      </div>
    </motion.section>
  );
};

export default Side;
