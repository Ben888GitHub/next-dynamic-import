/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "text-primary": "rgba(0, 0, 0, 0.87)",
        "primary-contrast": "#fff",
        orange: "#f99a0e",
        gray: {
          "100": "#8e8e94",
          "200": "rgba(0, 0, 0, 0.6)",
          "300": "rgba(0, 0, 0, 0.23)",
          "400": "rgba(255, 255, 255, 0.2)",
        },
        whitesmoke: "#eaeaea",
        saddlebrown: "#99600a",
        peru: {
          "100": "#ac6a06",
          "200": "#9e6104",
        },
        slategray: "#576074",
        darkslategray: {
          "100": "#434343",
          "200": "#424242",
          "300": "#303030",
        },
        cornflowerblue: {
          "100": "#1262af",
          "200": "#1262ae",
        },
        gainsboro: {
          "100": "#e0e0e0",
          "200": "rgba(226, 226, 226, 0.1)",
        },
        lavender: "#ccdcec",
        darkgray: "#999",
        sandybrown: "#ff9b53",
        palevioletred: "#f9668d",
        lightgray: "#cecece",
        steelblue: "#0284c7",
        silver: "#bdbdbd",
        dimgray: "#616161",
      },
      spacing: {},
      fontFamily: {
        "components-button-large": "Roboto",
        "baloo-bhai": "'Baloo Bhai'",
      },
      borderRadius: {
        "10xs": "3px",
        "4xl-2": "23.2px",
        "5xs-5": "7.5px",
        xs: "12px",
        "7xs": "6px",
        "28xl-8": "47.8px",
        "9xl-4": "28.4px",
      },
    },
    fontSize: {
      mini: "15px",
      xs: "12px",
      "sm-5": "13.5px",
      "3xl-4": "22.4px",
      "xs-2": "11.2px",
      "base-5": "16.5px",
      xl: "20px",
      "3xl": "22px",
      "4xl-9": "23.9px",
      "9xl-4": "28.4px",
      "2xs-5": "10.5px",
      "mid-9": "17.9px",
      "3xs-7": "9.7px",
      "4xs": "9px",
      "26xl-6": "45.6px",
      "23xl": "42px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1440px",
      },
      md: {
        max: "768px",
      },
      sm: {
        max: "428px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
