import { type Config } from "tailwindcss";
import { withUt } from "uploadthing/tw";

export default withUt({
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        purple: "#633CFF",
        purple_hover: "#BEADFF",
        light_purple: "#EFEBFF",
        dark_gray: "#333333",
        gray: "#737373",
        border: "#D9D9D9",
        light_gray: "#FAFAFA",
        error: "#FF3939",
      },
    },
  },
  plugins: [],
}) satisfies Config;
