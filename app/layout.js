import "./globals.css";
// import TopNav from "@/components/nav/TopNav";
import { Toaster } from "react-hot-toast";
import { NextAuthProvider } from "@/components/NextAuthProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <NextAuthProvider>
        {/*<TopNav />*/}
        <Toaster />
        {children}
    </NextAuthProvider>
    </body>
    </html>
  );
}
