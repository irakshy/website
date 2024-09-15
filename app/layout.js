import CustomFooter from "@/components/Footer/CustomFooter";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

export const metadata = {
  title: "RAKSHITH",
  description: "AI",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`dark antialiased`}>
        <Navbar />
        {children}
        <CustomFooter />
      </body>
    </html>
  );
}
