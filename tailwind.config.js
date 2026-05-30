export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 18px 55px rgba(14, 165, 233, 0.28)",
        glass: "0 18px 60px rgba(8, 47, 73, 0.28)"
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        sheen: "sheen 5s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" }
        },
        sheen: {
          "0%, 100%": { transform: "translateX(-120%)" },
          "50%": { transform: "translateX(120%)" }
        }
      }
    }
  },
  plugins: []
};
