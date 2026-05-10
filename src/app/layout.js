import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import GlobalHandlers from "@/components/GlobalHandlers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "SetuFlow | AI & Workflow Solutions",
  description: "We build intelligent automation systems designed to make your work easy, not to replace humans. Leverage AI to save time and reduce costs.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: "/new_logo.png",
    shortcut: "/new_logo.png",
    apple: "/new_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <GlobalHandlers />
        {children}
      </body>
    </html>
  );
}
