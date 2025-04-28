import Chatbot from "@/components/chatbot";
import Header from "@/components/header";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    template: '%s | My Name',
    default: 'My Name'
  },
};

export default function RootLayout({ children }) {
  //throw new Error('ooops');

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="mt-12">{children}</main>
        <Chatbot />
      </body>
    </html>
  );
}
