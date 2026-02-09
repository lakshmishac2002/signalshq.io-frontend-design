// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function PerspectiveScroll({ children, intensity = 1 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [8 * intensity, 0, 0, -4 * intensity]);
  const y = useTransform(scrollYProgress, [0, 0.3], [40 * intensity, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.6, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.97, 1]);

  return (
    <div ref={ref} style={{ perspective: '1200px', perspectiveOrigin: 'center top' }}>
      <motion.div
        style={{
          rotateX,
          y,
          opacity,
          scale,
          transformOrigin: 'center top',
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
