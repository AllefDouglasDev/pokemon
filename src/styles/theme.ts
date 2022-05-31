const theme = {
  grid: {
    container: "130rem",
    gutter: "3.2rem",
  },
  border: {
    radius: {
      small: "1rem",
      medium: "1.5rem",
      large: "2.4rem",
    },
  },
  font: {
    family:
      "Inter, Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    light: 300,
    normal: 400,
    semibold: 600,
    bold: 800,
    sizes: {
      xlittle: "0.8rem",
      little: "1rem",
      xxsmall: "1.2rem",
      xsmall: "1.4rem",
      small: "1.5rem",
      medium: "1.6rem",
      xmedium: "1.8rem",
      large: "2.0rem",
      xlarge: "2.4rem",
      xxlarge: "3.6rem",
    },
  },
  spacings: {
    xxxsmall: "0.4rem",
    xxsmall: "0.6rem",
    xsmall: "1rem",
    small: "1.7rem",
    medium: "2.2rem",
    large: "3rem",
    xlarge: "4rem",
    xxlarge: "5.2rem",
  },
  colors: {
    primary: "#494949",
    black: "#000000",
    black100: "#303943",
    black200: "#212121",
    white: "#FFFFFF",
    background: "#E5E5E5",
    gray: "#767676",
    gray100: "#E0E0E0",
    gray200: "#F4F5F4",
    green: "#48D0B0",
    red: "#FB6C6C",
    purple: "#6C79DB",
    pink: "#F0729F",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  sizes: {
    header: "10.8rem",
    container: "150rem",
    profileImage: "4.7rem",
    pagination: "37.5rem",
  },
  breakpoints: {
    mobile: "@media screen and (min-width: 10rem) and (max-width: 40rem)",
    tablet: "@media screen and (max-width: 60rem)",
  },
} as const;

export default theme;
