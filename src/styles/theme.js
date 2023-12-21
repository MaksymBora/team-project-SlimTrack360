export const theme = {
  // ------ COLORS -------- //

  color: {
    // PRIMARY COLORS
    primaryWhite: '#ffffff',
    primaryBlack: '#050505',
    primaryViolet: '#B6C3FF',
    primaryBlack2: '#0F0F0F',
    primaryLiteGreen: '#45FFBC',
    primaryGrey: '#B6B6B6',
    primaryGreenLite: '#E3FFA8',

    //SECONDARY COLORS
    secondaryGrey: '#292928',
    secondaryPink: '#FFC4F7',
    secondaryYellow: '#FFF3B7',
  },

  // Breakpoints
  breakpoint: {
    mobile: '320px', // no paddings  Container 300px
    tablet: '834px', // padding left 10px right 10px Container 800px
    desktop: '1440px', // padding left 10px right 10px Container 1372px
  },

  // Animation (transition) on hover & focus
  transition: {
    main: '250ms cubic-bezier(0.165, 0.84, 0.44, 1.03)',
  },

  // box-shadow
  boxShadow: {},
};
