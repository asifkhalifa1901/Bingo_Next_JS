"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const { data: session } = useSession();
  const user = session?.user;

  const initials =
    user?.name
      ?.split(" ")
      .map((p) => p[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "ME";

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
          {user && (
            <Link
              href="/my-cards"
              className="hover:text-emerald-300 transition-colors"
            >
              My cards
            </Link>
          )}
          {!user && (
            <>
              <Link
                href="/login"
                className="hidden text-slate-300 hover:text-emerald-300 transition-colors sm:inline"
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className="hidden text-slate-300 hover:text-emerald-300 transition-colors sm:inline"
              >
                Sign up
              </Link>
            </>
          )}
          {user && (
            <>
              <Link
                href="/profile"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-600 bg-slate-900 text-xs font-semibold text-slate-50 hover:border-emerald-400"
              >
                {initials}
              </Link>
              <button
                type="button"
                className="hidden text-slate-300 hover:text-emerald-300 transition-colors sm:inline"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </button>
            </>
          )}
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

