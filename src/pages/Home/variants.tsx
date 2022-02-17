export const violinBackgroundVariant = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2
    }
  }
}

export const violinImageVariant = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.7,
      duration: 2,
    }
  }
}

export const spanTextVariant1 = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    }
  }
}

export const spanTextVariant2 = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 1,
      duration: 2,
    }
  }
}

export const svgVariant = {
  hidden:{
    x: 60,
    opacity: 0
  },
  visible:{ 
    x: 0,
    opacity: 1,
    rotateZ: 360, 
    originX: "center", 
    originY: "center",
    transition:{ 
      duration: 2
    }
  }
}