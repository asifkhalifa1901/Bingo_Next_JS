"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
      <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-4 pb-10 pt-10 md:px-6 lg:px-10">
        <Card className="w-full max-w-md border border-slate-800 bg-slate-900/90">
          <CardHeader className="space-y-2">
            <CardTitle className="text-xl font-semibold text-slate-50">
              Log in to BingoCraft
            </CardTitle>
            <p className="text-sm text-slate-400">
              Use your Google account to access saved presets and templates.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button
                className="w-full bg-white text-slate-900 hover:bg-slate-100"
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/" })}
              >
                Continue with Google
              </Button>
              <p className="text-xs text-slate-500">
                We use Google for authentication only. Every time you log in,
                you&apos;ll be asked to pick a Google account (even if you only
                have one), so you&apos;re always in control of which account you
                use.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

