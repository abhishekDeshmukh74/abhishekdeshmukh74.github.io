import React, { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useScroll } from "motion/react";
import { profile } from "../../constants";
import { ArrowUp } from "lucide-react";
import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const barRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [barHeight, setBarHeight] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const measure = () => setBarHeight(el.clientHeight);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const springConfig = { stiffness: 800, damping: 50, mass: 0.1 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || "ontouchstart" in window);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const mouseMove = (e: MouseEvent) => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      };
      window.addEventListener("mousemove", mouseMove);
      return () => {
        window.removeEventListener("mousemove", mouseMove);
      };
    }
  }, [cursorX, cursorY, isMobile]);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Desktop: right-side vertical progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-50 hidden sm:block"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          ref={barRef}
          className="relative w-1 h-32 md:h-40 lg:h-48 bg-gray-800/50 rounded-full backdrop-blur-sm border border-gray-700/30"
        >
          <motion.div
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#00f050] to-[#00f050]/70 rounded-full shadow-lg shadow-[#00f050]/20"
            style={{ scaleY: scaleY, transformOrigin: "top", height: "100%" }}
          />
        </div>
      </motion.div>

      {/* Mobile: top horizontal progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 sm:hidden"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <motion.div
          className="h-1 bg-gradient-to-r from-[#00f050] to-[#00f050]/70 shadow-lg shadow-[#00f050]/20 origin-left"
          style={{ scaleX: scaleY }}
        />
      </motion.div>

      {/* Mobile email link */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeInOut" }}
        className="fixed bottom-4 left-1/2 -translate-x-1/2 z-30 sm:hidden font-montserrat"
      >
        <motion.a
          href={`mailto:${profile.email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Send email to ${profile.email}`}
          className="text-gray-400 hover:text-pista font-montserrat text-xs tracking-wide transition-colors duration-300 cursor-pointer px-4 py-2 bg-black/20 backdrop-blur-sm rounded-full border border-gray-700/50"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 240, 80, 0.1)" }}
          whileTap={{ scale: 0.95 }}
        >
          {profile.email}
        </motion.a>
      </motion.div>

      {/* Green cursor glow (desktop only) — pointer-events-none so clicks pass through */}
      {!isMobile && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block"
          style={{ x: cursorXSpring, y: cursorYSpring }}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="w-6 h-6 rounded-full bg-[#00f050]/40 -translate-x-1/2 -translate-y-1/2"
            style={{
              boxShadow: "0 0 12px 4px rgba(0, 240, 80, 0.5)",
            }}
          />
        </motion.div>
      )}

      {/* Scroll-to-top button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-pista text-black shadow-lg shadow-pista/30 hover:bg-pista/90 transition-colors sm:block hidden"
        style={{ pointerEvents: showScrollTop ? "auto" : "none" }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp size={20} />
      </motion.button>

      {children}
    </div>
  );
};

export default MainLayout;
