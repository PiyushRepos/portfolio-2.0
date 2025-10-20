import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Piyush Kumar | Full-Stack Developer (React, Node.js, Express.js, MongoDB, Next.js, MERN Stack, GenAI Engineer)",
  description:
    "Final-year BCA student and full-stack MERN developer with 3 delivered freelance projects. Passionate about Next.js, Generative AI, productivity tools, and solving real-world problems through code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`${inter.className} bg-background antialiased`}>
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
