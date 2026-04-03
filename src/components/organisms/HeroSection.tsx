import React from "react";
import { motion, type Variants } from "motion/react";
import { Github, Linkedin, Mail } from "lucide-react";
const me = "/assets/me.png";
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
    <section aria-label="Hero introduction" className="px-6 sm:px-10 md:px-16 lg:px-28 xl:px-48 py-16 sm:py-20 overflow-hidden">
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
            <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-1 bg-gradient-to-br from-pista via-teal-400 to-purple-500 shadow-[0_0_40px_rgba(16,185,129,0.4)]">
              <img
                src={me}
                alt={profile.name}
                loading="eager"
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
            className="text-pista text-3xl sm:text-4xl md:text-5xl font-montserrat-extrabold tracking-wider"
          >
            <span className="sr-only">{text1}</span>
            <span aria-hidden="true">
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
            </span>
          </motion.h1>

          <motion.h2
            className="text-white text-2xl sm:text-3xl md:text-4xl font-montserrat-extrabold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <span className="sr-only">{text2.join(" ")}</span>
            <span aria-hidden="true">
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
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-300 max-w-lg leading-relaxed font-montserrat text-base sm:text-lg"
          >
            8+ years building production-grade apps, from scalable{" "}
            <motion.span
              className="text-pista font-bold"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              full-stack
            </motion.span>{" "}
            architectures to intelligent{" "}
            <motion.span
              className="text-pista font-bold"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              Gen AI
            </motion.span>{" "}
            workflows powered by{" "}
            <motion.span
              className="text-pista font-bold"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              LLMs
            </motion.span>{" "}
            and{" "}
            <motion.span
              className="text-pista font-bold"
              whileHover={{ scale: 1.1, color: "#10b981" }}
              transition={{ duration: 0.2 }}
            >
              LangGraph
            </motion.span>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col gap-8 justify-center md:justify-start items-center md:items-start"
          >
            <motion.a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pista text-black px-8 py-3 rounded-lg font-bold"
              aria-label="Download resume (opens in new tab)"
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
                href={profile.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) profile"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-pista hover:border-pista transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
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
              <motion.a
                href={profile.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode profile"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-full bg-white/10 border border-white/20 hover:bg-pista hover:border-pista transition-all duration-300"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
