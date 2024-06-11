import { Inter, Poppins } from "next/font/google";

export const poppinsFont = Poppins({
  weight: ["400"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const interFont = Inter({
  weight: ["400"],
  variable: "--font-sans",
  subsets: ["latin"],
});
