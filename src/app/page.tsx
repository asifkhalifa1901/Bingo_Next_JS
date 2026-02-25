"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { Twitter, Instagram, Facebook, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { TemplateId } from "@/data/bingo-templates";

function getRangeFromQuery(query: string): [number, number] | null {
  const match = query.match(/(\d+)\s*-\s*(\d+)/);
  if (!match) return null;
  const start = parseInt(match[1], 10);
  const end = parseInt(match[2], 10);
  if (!Number.isFinite(start) || !Number.isFinite(end)) return null;
  if (start >= end) return null;
  return [start, end];
}

function detectTemplateFromQuery(query: string): TemplateId | null {
  const q = query.toLowerCase();

  if (q.includes("christmas") || q.includes("xmas")) {
    return "christmas";
  }
  if (q.includes("holiday")) {
    return "holiday-party";
  }
  if (q.includes("team") || q.includes("office") || q.includes("meeting")) {
    return "team-meeting";
  }
  if (q.includes("kids") || q.includes("birthday") || q.includes("child")) {
    return "kids-party";
  }
  if (q.includes("classroom") || q.includes("math") || q.includes("school")) {
    return "classroom-math";
  }
  if (q.includes("movie") || q.includes("film") || q.includes("cinema")) {
    return "movie-night";
  }
  if (q.includes("icebreaker") || q.includes("intro") || q.includes("meet")) {
    return "icebreaker";
  }

  return null;
}

export default function LandingPage() {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const goToTemplate = (query: string) => {
    const range = getRangeFromQuery(query);
    if (range) {
      const [start, end] = range;
      router.push(`/generator?mode=range&start=${start}&end=${end}`);
      return;
    }

    const templateId = detectTemplateFromQuery(query);
    if (templateId) {
      router.push(`/generator?template=${templateId}`);
    } else {
      const title = encodeURIComponent(query.trim());
      router.push(`/generator?title=${title}`);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!search.trim()) {
      router.push("/generator");
      return;
    }
    goToTemplate(search);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
      <div className="flex min-h-screen w-full flex-col gap-16 px-4 pb-20 pt-12 md:px-6 lg:px-10 lg:pt-16">
        {/* Hero with Google-like search journey */}
        <section className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Tell us your bingo idea
            </div>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
                What{" "}
                <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                  bingo card
                </span>{" "}
                do you want to create?
              </h1>
              <p className="max-w-2xl text-sm text-slate-400 sm:text-base">
                Type your idea like &quot;Christmas bingo card&quot; or choose one
                of the quick options below. We&apos;ll open a ready-made card in
                the editor so you can tweak the squares and make it look perfect.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mt-2 flex w-full max-w-xl flex-col gap-3 sm:flex-row"
            >
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="e.g. Christmas bingo card"
                className="h-11 rounded-full border-slate-700 bg-slate-900/70 text-sm text-slate-50 placeholder:text-slate-500"
              />
              <Button
                type="submit"
                className="h-11 rounded-full px-6 cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-95"
              >
                Generate
              </Button>
            </form>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-300">
              <span className="text-[11px] uppercase tracking-wide text-slate-500">
                Popular:
              </span>
              {[
                { label: "Christmas bingo card", query: "christmas bingo card" },
                { label: "Team meeting bingo", query: "team meeting bingo card" },
                { label: "Kids birthday bingo", query: "kids birthday bingo card" },
                { label: "Classroom math bingo", query: "classroom math bingo card" },
              ].map((pill) => (
                <button
                  key={pill.label}
                  type="button"
                  className="cursor-pointer rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-[11px] hover:border-emerald-400 hover:text-emerald-300 transition-colors"
                  onClick={() => {
                    setSearch(pill.query);
                    goToTemplate(pill.query);
                  }}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            <p className="text-xs text-muted-foreground">
              Free to use · Print or save as PDF · No signup required.
            </p>
          </div>

          <Card className="border border-emerald-500/30 bg-slate-900/90 shadow-emerald-500/20">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-slate-50">
                Why people use BingoCraft
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-xs text-slate-300">
              <p>• Teachers use it for vocabulary and math review.</p>
              <p>• Teams use it as a fun icebreaker in remote meetings.</p>
              <p>• Hosts use it to add games to parties and events.</p>
              <p>
                Choose a template, tweak the squares, and you&apos;re ready to
                print in under a minute.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* About section */}
        <section
          id="about"
          className="grid gap-8 border-t border-slate-800/60 pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              ABOUT US
            </h2>
            <p className="max-w-3xl text-sm text-slate-400">
              BingoCraft is a focused little tool for one job: helping you make
              printable bingo cards in seconds. Whether you&apos;re planning a
              game night, running a classroom activity, or hosting a team
              meeting, you paste your ideas, choose a layout, and we take care
              of the shuffling, FREE spaces, and print-friendly layout.
            </p>
            <p className="max-w-3xl text-sm text-slate-400">
              The project is built with Next.js, Tailwind CSS, and shadcn/ui,
              so the experience stays fast, responsive, and consistent across
              laptops, tablets, and phones.
            </p>
          </div>

          <Card className="border border-slate-700/70 bg-slate-900/80">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-slate-50">
                What you can do with BingoCraft
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs text-slate-300">
              <p>• Create custom cards with your own words or phrases.</p>
              <p>• Start from themed templates and tweak just a few squares.</p>
              <p>• Shuffle layouts instantly to print multiple versions.</p>
              <p>• Save to PDF or print directly from your browser.</p>
            </CardContent>
          </Card>
        </section>

        {/* Templates callout */}
        <section className="grid gap-8 border-t border-slate-800/60 pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              TEMPLATES
            </h2>
            <p className="max-w-3xl text-sm text-slate-400">
              From party food and movie night to classroom vocabulary and tech
              buzzwords, BingoCraft ships with ready-made templates so you never
              have to start from a blank card. Each template comes with
              hand-picked items that you can keep, remix, or completely replace.
            </p>
            <div className="grid gap-4 text-xs text-slate-300 sm:grid-cols-3">
              <div>
                <p className="text-sm font-semibold text-slate-50">For fun</p>
                <p>Party food, movie night, kids birthdays, sports nights.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-50">
                  For classrooms
                </p>
                <p>Vocabulary, math terms, language-learning phrases.</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-50">
                  For teams
                </p>
                <p>Meeting buzzwords, icebreakers, conference and office games.</p>
              </div>
            </div>
            <Button
              asChild
              className="border-slate-600 bg-slate-900/80 text-slate-50 hover:bg-slate-800"
            >
              <Link href="/templates">View template gallery</Link>
            </Button>
          </div>

          <Card className="border border-slate-700/70 bg-slate-900/80">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-semibold text-slate-50">
                Quick stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs text-slate-300">
              <p>• 20+ pre-built templates to start from.</p>
              <p>• Supports 3×3, 4×4, 5×5, and 6×6 grids.</p>
              <p>• FREE center toggle and instant shuffling.</p>
            </CardContent>
          </Card>
        </section>

        {/* Contact section */}
        <section
          id="contact"
          className="grid gap-8 border-t border-slate-800/60 pt-10 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]"
        >
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
              CONTACT US
            </h2>
            <p className="max-w-xl text-sm text-slate-400">
              Have an idea for a new template or feature? Reach out and share
              how you&apos;re using BingoCraft. We&apos;d love to hear from you.
            </p>
            <div className="space-y-1 text-sm text-slate-300">
              <p>
                <span className="font-semibold text-slate-50">Email:</span>{" "}
                <span className="text-emerald-300">hello@bingocraft.app</span>
              </p>
              <p>
                <span className="font-semibold text-slate-50">Phone:</span>{" "}
                +1 (555) 012-3456
              </p>
              <p>
                <span className="font-semibold text-slate-50">Address:</span>{" "}
                123 Game Night Lane, Suite 200, Anywhere City, USA
              </p>
            </div>
          </div>

          <div className="space-y-4 text-sm text-slate-300">
            <p className="text-xs text-slate-500">
              The details below are sample contact information for layout
              purposes. You can replace them with your real business details at
              any time.
            </p>
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Social
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="social-pill"
                  aria-label="Visit us on X (Twitter)"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="social-pill"
                  aria-label="Visit us on Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="social-pill"
                  aria-label="Visit us on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="social-pill"
                  aria-label="Visit us on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}


