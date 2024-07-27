import "./globals.css";
import { Toaster } from "react-hot-toast";
import TopNav from "@/components/TopNav";
import { NextAuthProvider } from "@/components/NextAuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <NextAuthProvider>
        <TopNav />
        <Toaster />
        {children}
    </NextAuthProvider>
    </body>
    </html>
  );
}
