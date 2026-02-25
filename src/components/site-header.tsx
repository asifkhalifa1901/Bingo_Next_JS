"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

// Auth-related UI is intentionally hidden for now. When you want
// to re-enable login/signup/profile, wire this header back to
// next-auth like before.

export function SiteHeader() {
  return (
    <header className="border-b border-slate-800/70 bg-slate-950/90 backdrop-blur print:hidden">
      <div className="flex w-full items-center justify-between px-4 py-3 md:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500 text-sm font-bold text-slate-950 shadow-lg shadow-emerald-500/40">
            BG
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-slate-50">
              BingoCraft
            </span>
            <span className="text-[11px] text-slate-400">
              Instant Bingo Generator
            </span>
          </div>
        </Link>
        <nav className="flex items-center gap-4 text-xs font-medium text-slate-300 sm:text-sm">
          <Link
            href="/"
            className="hover:text-emerald-300 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/templates"
            className="hover:text-emerald-300 transition-colors"
          >
            Templates
          </Link>
          <Button
            asChild
            size="sm"
            className="ml-1 bg-emerald-500 text-slate-950 hover:bg-emerald-400"
          >
            <Link href="/generator">Open generator</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}


