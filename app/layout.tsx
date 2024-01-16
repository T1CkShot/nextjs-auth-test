import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeChange } from "@/components/ModeChange";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Auth Test",
  description: "A simple webapp to test authjs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full flex flex-col items-center {inter.className}">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar />
          <div className="w-full flex justify-center">
            <Container hasPadding>{children}</Container>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

export function NavBar() {
  return (
    <header className="w-full border-b border-border/40 flex py-2 sticky justify-center">
      <Container>
        <div className="flex items-between">
          <div className="w-full flex items-center">
            <h1 className="font-bold text-lg">Auth Test</h1>
          </div>
          <ModeChange />
        </div>
      </Container>
    </header>
  );
}

export function Container({
  children,
  margin,
  hasPadding = false,
}: {
  children: React.ReactNode;
  margin: string;
  hasPadding?: boolean;
}) {
  return (
    <div
      className={`w-full max-w-7xl mx-${margin} ${
        hasPadding ? "px-2" : "px-0"
      }`}
    >
      {children}
    </div>
  );
}
