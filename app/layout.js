import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./component/navbar";
import Footer from "./component/Footer";
import TodoContext from "./component/TodoContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yaser & Reza todo app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TodoContext>
          <Navbar />
          {children}
          <Footer />
        </TodoContext>
      </body>
    </html>
  );
}
