"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

interface props {
  src: string;
  width: number;
  height: number;
  index: number;
}
const SkillsDataProvider = ({ src, width, height, index }: props) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const imageVarients = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const animationDelay = 0.3;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      variants={imageVarients}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{ delay: index * animationDelay }}
    >
      <Image src={src} alt="skills image" height={height} width={width} />
    </motion.div>
  );
};

export default SkillsDataProvider;
