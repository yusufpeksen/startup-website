// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-bg":
          "url('C:/Users/Admin/Desktop/startup-app/public/images/landingbg.png')",
        "content-bg":
          "url('C:/Users/Admin/Desktop/startup-app/public/images/contentbg.png')",
        "pricing-bg":
          "url('C:/Users/Admin/Desktop/startup-app/public/images/pricingbg.png')",
        "contact-bg":
          "url('C:/Users/Admin/Desktop/startup-app/public/images/contactbg.png')",
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"], // Default sans-serif fontu olarak DM Sans kullan
      },
      animation: {
        "slide-left": "slideLeft 0.5s ease-in-out",
        "slide-right": "slideRight 0.5s ease-in-out",
      },
      keyframes: {
        slideLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideRight: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
