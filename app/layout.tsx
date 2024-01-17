import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeChange } from "@/components/ModeChange";
import NavLinks from "@/components/NavLinks";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { OPTIONS } from "./api/auth/[...nextauth]/route";
import { Button } from "@/components/ui/button";

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
      <body className={`w-full flex flex-col items-center ${inter.className}`}>
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

export async function NavBar() {
  const navLinks = [
    { title: "Message", link: "/message" },
    { title: "Redirect", link: "/redirect" },
  ];

  const session = await getServerSession(OPTIONS);
  return (
    <header className="w-full border-b border-border/40 flex py-2 sticky justify-center">
      <Container>
        <div className="flex items-between">
          <div className="w-full flex items-center">
            <Link href={"/"}>
              <h1 className="font-bold text-lg mr-6">Auth Test</h1>
            </Link>
            <NavLinks links={navLinks} />
          </div>
          <div className="flex gap-5">
            {session == null ? (
              <Button asChild>
                <Link href="/api/auth/signin">Sign in</Link>
              </Button>
            ) : (
              <Button asChild variant={"secondary"}>
                <Link href={"/api/auth/signout"}>Sign out</Link>
              </Button>
            )}
            <ModeChange />
          </div>
        </div>
      </Container>
    </header>
  );
}

export function Container({
  children,
  hasPadding = false,
}: {
  children: React.ReactNode;
  hasPadding?: boolean;
}) {
  return (
    <div className={`w-full max-w-7xl mx-6 ${hasPadding ? "px-2" : "px-0"}`}>
      {children}
    </div>
  );
}
