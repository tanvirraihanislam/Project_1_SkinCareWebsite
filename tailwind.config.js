/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "naaskinn-bg-light": "#FBF9F4", // Soft, warm off-white/beige
        "naaskinn-bg-medium": "#F5F1E9", // Slightly darker beige for contrast
        "naaskinn-text-primary": "#3D3A37", // Dark, warm gray/brown
        "naaskinn-text-secondary": "#6B6865", // Lighter, muted gray/brown
        "naaskinn-accent": "#A8BFAA", // Soft, muted green
        "naaskinn-accent-darker": "#8FA48F", // Darker green for hover
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Example: Using Inter font (ensure you import it in your index.css/html)
      },
      aspectRatio: {
        "3/4": "3 / 4", // For product image consistency
      },
    },
  },
  plugins: [],
};
