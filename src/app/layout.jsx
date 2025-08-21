import { Playwrite_AR, Meow_Script } from "next/font/google";
import "./globals.css";

const play = Playwrite_AR({
  subsets: ["latin"],
  weight: ["400"],
})
const meo = Meow_Script({
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata = {
  title: "Understanding Next Framework",
  description: "A comprehensive guide to mastering the Next.js framework.",
  keywords: "Next.js, framework, web development, React",
  authors: ['Franc Enemuo'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={play.className}
      >
        <h1 className={`${meo.className} text-4xl`}>Welcome and good afternoon</h1>
        {children}
      </body>
    </html>
  );
}
