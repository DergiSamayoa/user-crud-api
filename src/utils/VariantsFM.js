const variants = {
  form: {
    hidden: {
      opacity: 0,
      y: -380,
      x: 500,
      scale: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      y: -380,
      x: 500,
      scale: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut',
      },
    },
  },
  modalForm: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: 'ease',
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'ease',
      }
    }
  },
  card: {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
    exit: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    hover: {
      scale: 1.1,
    },
  },
  button: {
    rest: {
      scale: 1,
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.8,
    },
  },
  listItem: {
    rest: {
      opacity: 1,
      y: 0,
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
      },
    },
    tap: {
      opacity: 0.7,
      y: -5,
    },
  },

};

export default variants;
