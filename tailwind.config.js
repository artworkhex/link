module.exports = {
  content: [
    './index.html',
    './*/.html',
  ],


  theme: {
    screens: {
      xm: "220px",
      xm1: "270px",
      sm: "320px",
      sm1: "400px",
      md: "588px",
      md1: "620px",
      lg: "776px",
      xl: "1240px",
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.55em',
    },
    backgroundImage: {
      'utama': "url('/asset/bg.jpg')"
    },
    extend: {},
  },
  plugins: [],
}