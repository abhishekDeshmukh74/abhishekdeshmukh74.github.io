import React from "react";
import { motion, type Variants } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
import me from "../../assets/me.png";
import { profile } from "../../constants";

const HeroSection = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const text1 = profile.greeting;
  const text2 = profile.tagline;

  return (
    <section className="px-8 md:px-64 py-20 overflow-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col md:flex-row items-center justify-between gap-10"
      >
        {/* Profile Photo */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
          className="flex-shrink-0 order-1 md:order-2 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full p-1 bg-gradient-to-br from-pista via-teal-400 to-purple-500 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
              <img
                src={me}
                alt={profile.name}
                className="w-full h-full rounded-full object-cover object-top"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-center md:text-left space-y-6 order-2 md:order-1"
        >
          <motion.h1
            variants={titleVariants}
            className="text-pista text-4xl md:text-5xl font-montserrat-extrabold tracking-wider whitespace-nowrap"
          >
            {text1.split(" ").map((word, wIndex) => (
              <span key={wIndex} className="inline-block mr-2">
                {word.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: (wIndex * 6 + index) * 0.05,
                      ease: [0.6, -0.05, 0.01, 0.99],
                    }}
                    className="inline-block"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.h2
            className="text-white text-3xl md:text-4xl font-montserrat-extrabold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            {text2.map((word, wIndex) => (
              <span key={wIndex} className="inline-block mr-2">
                {word.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, rotateY: 90 }}
                    animate={{ opacity: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.8 + (wIndex * 8 + index) * 0.03,
                      ease: "easeOut",
                    }}
                    className="inline-block tracking-wider"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-400 max-w-lg leading-relaxed font-montserrat text-lg"
          >
            Crafting high-performance, full-stack web experiences with{" "}
            <motion.span
              className="text-pista font-bold text-xl"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              React JS
            </motion.span>
            ,{" "}
            <motion.span
              className="text-pista font-bold text-xl"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              Next.js
            </motion.span>
            ,{" "}
            <motion.span
              className="text-pista font-bold text-xl"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              Node.js
            </motion.span>
            , and{" "}
            <motion.span
              className="text-pista font-bold text-xl"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              Gen AI
            </motion.span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-wrap gap-4 justify-center md:justify-start items-center"
          >
            <motion.a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pista text-black px-8 py-3 rounded-lg font-bold"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(16, 185, 129, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              GET RESUME
            </motion.a>

            <div className="flex items-center gap-3">
              <motion.a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-pista hover:border-pista transition-all duration-300"
              >
                <Github size={20} color="#FFFFFF" />
              </motion.a>
              <motion.a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-pista hover:border-pista transition-all duration-300"
              >
                <Linkedin size={20} color="#FFFFFF" />
              </motion.a>
              <motion.a
                href={`mailto:${profile.email}`}
                aria-label="Send email"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-pista hover:border-pista transition-all duration-300"
              >
                <Mail size={20} color="#FFFFFF" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
