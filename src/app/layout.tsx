import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/components/auth-provider";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "BingoCraft · Bingo Card Generator",
  description:
    "Create beautiful, printable bingo cards from ready-made templates or your own ideas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <AuthProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />

            <div className="flex-1">{children}</div>

            <footer className="border-t border-slate-800/70 bg-slate-950/95 print:hidden">
              <div className="flex w-full flex-col gap-3 px-4 py-6 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8">
                <p>
                  © {new Date().getFullYear()} BingoCraft. Create and print
                  custom bingo cards for parties, classrooms, and teams.
                </p>
                <p>
                  Built with Next.js, Tailwind CSS, and shadcn/ui · No signup
                  required.
                </p>
              </div>
            </footer>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}


