import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import { ReactLenis } from "@/lib/lenis";
import Progress from "@/components/progress";

const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Piyush Kumar | Full-Stack Developer (React, Node.js, Express.js, MongoDB, Next.js, MERN Stack, GenAI Engineer)",
  description:
    "Final-year BCA student and full-stack MERN developer with 3 delivered freelance projects. Passionate about Next.js, Generative AI, productivity tools, and solving real-world problems through code.",
  authors: [
    {
      name: "Piyush Kumar",
      url: "https://piyus.me",
    },
  ],
  keywords: [
    "Piyush Kumar",
    "Full-Stack Developer",
    "MERN Stack",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Next.js",
    "Generative AI",
    "GenAI Engineer",
    "Productivity Tools",
    "Freelance Developer",
    "BCA Student",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
    "Web Applications",
    "Portfolio inspiration",
    "Piyush Dev",
    "Piyush Portfolio",
    "piyus.me",
    "piyushh04",
  ],
  applicationName: "Piyush Kumar Portfolio",
  category: "Portfolio",
  openGraph: {
    title:
      "Piyush Kumar | Full-Stack Developer (React, Node.js, Express.js, MongoDB, Next.js, MERN Stack, GenAI Engineer)",
    description:
      "Final-year BCA student and full-stack MERN developer with 3 delivered freelance projects. Passionate about Next.js, Generative AI, productivity tools, and solving real-world problems through code.",
    url: "https://piyus.me",
    siteName: "Piyush Kumar Portfolio",
    images: [
      {
        url: "https://piyus.me/og-image.png",
        alt: "Piyush Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Piyush Kumar | Full-Stack Developer (React, Node.js, Express.js, MongoDB, Next.js, MERN Stack, GenAI Engineer)",
    description:
      "Final-year BCA student and full-stack MERN developer with 3 delivered freelance projects. Passionate about Next.js, Generative AI, productivity tools, and solving real-world problems through code.",
    images: ["https://piyus.me/og-image.png"],
    creator: "@_PiyushDev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="22ceaa7c-55b2-48ab-b721-759af5e34fcb"
        ></script>
      </head>
      <body
        suppressHydrationWarning
        className={`${rubik.className} bg-background antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange={false}
        >
          <ReactLenis root options={{ lerp: 0.085, orientation: "vertical" }}>
            <main>
              <Progress />
              {children}
            </main>
          </ReactLenis>
        </ThemeProvider>
      </body>
    </html>
  );
}
