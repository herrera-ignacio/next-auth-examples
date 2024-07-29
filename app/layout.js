import "./globals.css";
import { Toaster } from "react-hot-toast";
import TopNav from "@/components/TopNav";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <TopNav />
      <Toaster />
      {children}
    </body>
    </html>
  );
}
