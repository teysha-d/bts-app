export const pageVariants = {
  initial: {
    opacity: 0,
    y: 50,
    scale: 0.95,
  },
  in: {
    opacity: 1,
    y: 0,
    scale: 1,
  },
  out: {
    opacity: 0,
    y: -50,
    scale: 0.95,
  },
};

export const pageTransition = {
  type: "spring",
  stiffness: 50,
  damping: 20,
  duration: 0.5,
};
