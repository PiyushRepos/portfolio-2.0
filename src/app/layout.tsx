import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
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
        width: 1200,
        height: 630,
        alt: "Piyush Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${raleway.className} bg-background antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
          enableColorScheme={true}
        >
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
