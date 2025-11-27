export const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const projectionVariants = {
  initial: {
    opacity: 0,
    scale: 1.2,
    filter: "blur(10px)"
  },
  animate: {
    opacity: 1,
    scale: 1.0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};
