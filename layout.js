"use client";
import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//to use toastcontainer we need to use use-client here because by default it work as server component
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "To-Do-List",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
