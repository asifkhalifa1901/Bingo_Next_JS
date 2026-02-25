"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  BingoTemplate,
  TemplateId,
  TEMPLATES,
  TEMPLATE_ACCENT_BY_ID,
} from "@/data/bingo-templates";
import { cn } from "@/lib/utils";

type BingoCell = {
  id: number;
  text: string;
  isFree?: boolean;
};
// templates imported from data module

function getTemplateById(id: string | null): BingoTemplate | null {
  if (!id) return null;
  return TEMPLATES.find((t) => t.id === id) ?? null;
}

function generateBingoGrid(
  items: string[],
  size: number,
  useFreeCenter: boolean
): BingoCell[][] {
  const totalCells = size * size;
  const sanitized = items
    .map((v) => v.trim())
    .filter((v) => v.length > 0);

  const pool = [...sanitized];
  while (pool.length < totalCells) {
    pool.push(...sanitized);
    if (sanitized.length === 0) break;
  }

  const shuffled = pool
    .slice(0, totalCells)
    .map((text, idx) => ({ text, sort: Math.random(), idx }))
    .sort((a, b) => a.sort - b.sort)
    .map((x) => x.text);

  const grid: BingoCell[][] = [];
  let id = 0;

  // Decide where the FREE cell goes (if enabled).
  // For odd sizes use the exact center, for even sizes pick a random cell.
  const freeIndex =
    useFreeCenter && totalCells > 0
      ? size % 2 === 1
        ? (totalCells - 1) / 2
        : Math.floor(Math.random() * totalCells)
      : null;

  for (let row = 0; row < size; row++) {
    const rowCells: BingoCell[] = [];
    for (let col = 0; col < size; col++) {
      const index = row * size + col;
      const isFreePos = freeIndex !== null && index === freeIndex;
      rowCells.push({
        id: id++,
        text: isFreePos ? "FREE" : shuffled[index] ?? "",
        isFree: isFreePos,
      });
    }
    grid.push(rowCells);
  }

  return grid;
}

export default function GeneratorPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { data: session, status } = useSession();
  const templateId = searchParams.get("template");
  const template = getTemplateById(templateId);

  const [rawItems, setRawItems] = useState(
    template ? template.items.join("\n") : ""
  );
  const [size, setSize] = useState(template?.size ?? 5);
  const [useFreeCenter, setUseFreeCenter] = useState(
    template?.useFreeCenter ?? true
  );
  const [cardName, setCardName] = useState<string>(
    template?.name ?? "Custom card"
  );
  const [seed, setSeed] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [generatedAt, setGeneratedAt] = useState<string | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setGeneratedAt(new Date().toLocaleString());
  }, []);

  // Require login to use the generator
  useEffect(() => {
    if (!isClient) return;
    if (status === "loading") return;
    if (!session?.user) {
      const redirect = encodeURIComponent(
        window.location.pathname + window.location.search
      );
      router.replace(`/login?redirect=${redirect}`);
    }
  }, [status, session?.user, router, isClient, searchParams]);

  // If we just came from "My cards", load the last saved card for this user.
  useEffect(() => {
    if (!isClient || !session?.user?.email) return;
    if (searchParams.get("saved") !== "1") return;
    const key = `bingocraft_last_card_${session.user.email}`;
    const stored = localStorage.getItem(key);
    if (!stored) return;
    try {
      const parsed = JSON.parse(stored) as {
        name: string;
        size: number;
        useFreeCenter: boolean;
        rawItems: string;
      };
      setCardName(parsed.name || "Custom card");
      setRawItems(parsed.rawItems);
      setSize(parsed.size);
      setUseFreeCenter(parsed.useFreeCenter);
      setSeed((s) => s + 1);
    } catch {
      // ignore parse errors
    }
  }, [isClient, session?.user?.email, searchParams]);

  useEffect(() => {
    if (template) {
      setCardName(template.name);
      setRawItems(template.items.join("\n"));
      setSize(template.size);
      setUseFreeCenter(template.useFreeCenter);
      setSeed((s) => s + 1);
    }
  }, [templateId]);

  const items = useMemo(
    () =>
      rawItems
        .split("\n")
        .map((v) => v.trim())
        .filter((v) => v.length > 0),
    [rawItems]
  );

  const grid = useMemo(
    () =>
      isClient ? generateBingoGrid(items, size, useFreeCenter) : ([] as BingoCell[][]),
    [isClient, items, size, useFreeCenter, seed]
  );

  const handleShuffle = () => {
    setSeed((s) => s + 1);
    setGeneratedAt(new Date().toLocaleString());
  };

  const handlePrint = () => {
    window.print();
  };

  const handleSaveCard = () => {
    if (!session?.user?.email) {
      alert("Please log in to save cards.");
      return;
    }
    const email = session.user.email;
    const key = `bingocraft_cards_${email}`;
    const raw = localStorage.getItem(key);
    let existing: any[] = [];
    if (raw) {
      try {
        existing = JSON.parse(raw);
      } catch {
        existing = [];
      }
    }

    const card = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      name: cardName || (template ? template.name : "Custom card"),
      size,
      useFreeCenter,
      rawItems,
      savedAt: new Date().toISOString(),
    };

    const updated = [...existing, card];
    localStorage.setItem(key, JSON.stringify(updated));

    // Also store as "last" card for quick reopen via My cards
    const lastKey = `bingocraft_last_card_${email}`;
    localStorage.setItem(lastKey, JSON.stringify(card));

    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  const accentClass =
    template && TEMPLATE_ACCENT_BY_ID[template.id]
      ? TEMPLATE_ACCENT_BY_ID[template.id]
      : "border-emerald-500/70 shadow-emerald-500/25";

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900 print:bg-white">
      <div className="flex min-h-screen w-full flex-col gap-10 px-4 pb-16 pt-10 md:px-6 lg:px-10 lg:pt-16">
        <header className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center print:hidden">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-wide text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              {cardName}
            </div>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
              Create custom{" "}
              <span className="bg-gradient-to-r from-emerald-300 via-emerald-400 to-teal-300 bg-clip-text text-transparent">
                bingo cards
              </span>{" "}
              in seconds.
            </h1>
            <p className="mt-3 max-w-xl text-sm text-slate-400 sm:text-base">
              Start from a pre-designed template or your own list of items,
              choose the grid size, and instantly generate a beautiful,
              printable bingo card for your next game night, classroom, or
              event.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 self-stretch md:self-auto">
            <Button
              className="w-full md:w-auto cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-95"
              onClick={handlePrint}
            >
              Download PDF
            </Button>
            <Button
              className="w-full md:w-auto cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-95"
              onClick={handleSaveCard}
              disabled={items.length === 0}
            >
              {justSaved ? "Saved!" : "Save card"}
            </Button>
            <Button
              className="w-full md:w-auto cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-95"
              onClick={handleShuffle}
            >
              Shuffle Card
            </Button>
          </div>
        </header>

        <section className="grid gap-5 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.05fr)] lg:items-start print:grid-cols-1">
          <Card
            className={cn(
              "p-5 sm:p-6 border bg-slate-900/95 text-slate-50 print:hidden",
              accentClass
            )}
          >
            <div className="flex items-center justify-between gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-300">
                Card Settings
              </h2>
              <span className="badge">
                {cardName || (template ? template.name : "Custom card")} ·
                Configure
              </span>
            </div>

            <div className="mt-4 space-y-4">
              <div className="space-y-2">
                <label className="field-label" htmlFor="items">
                  Bingo items
                </label>
                <p className="text-[11px] text-muted-foreground">
                  One item per line. We&apos;ll randomly place them on the card. If
                  you provide fewer items than cells, we&apos;ll reuse them.
                </p>
                <Textarea
                  id="items"
                  className="min-h-[200px] font-mono text-xs sm:text-sm"
                  value={rawItems}
                  onChange={(e) => setRawItems(e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="space-y-1.5">
                  <label className="field-label" htmlFor="size">
                    Grid size
                  </label>
                  <Select
                    value={String(size)}
                    onValueChange={(val) => setSize(Number(val))}
                  >
                    <SelectTrigger className="h-9 text-xs sm:text-sm">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {[3, 4, 5, 6].map((n) => (
                        <SelectItem key={n} value={String(n)}>
                          {n} × {n}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5 col-span-2 sm:col-span-1">
                  <span className="field-label">Center cell</span>
                  <label className="mt-1 flex cursor-pointer items-center gap-2 rounded-xl border border-slate-700/70 bg-slate-900/60 px-3 py-2 text-xs text-slate-200 transition hover:border-primary/70 hover:bg-slate-900/80">
                    <Checkbox
                      className="h-4 w-4 rounded border-slate-400 bg-slate-900 data-[state=checked]:bg-emerald-500 data-[state=checked]:border-emerald-500 data-[state=checked]:text-slate-950"
                      checked={useFreeCenter}
                      onCheckedChange={(val) =>
                        setUseFreeCenter(val === true)
                      }
                    />
                    <span>Use FREE space on the card</span>
                  </label>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <p className="text-[11px] text-muted-foreground">
                  Currently using{" "}
                  <span className="font-semibold text-slate-300">
                    {items.length}
                  </span>{" "}
                  unique items for a{" "}
                  <span className="font-semibold text-slate-300">
                    {size} × {size}
                  </span>{" "}
                  card.
                </p>
                <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                  <span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Tip: Use templates as a starting point and then customize the
                  wording.
                </div>
              </div>
            </div>
          </Card>

          <div className="relative print:mx-auto print:w-full print:max-w-[900px]">
            {/* Print-only heading above the card */}
            <div className="mb-4 hidden text-center print:block">
              <p className="text-xl font-semibold text-black">
                {cardName || "Bingo"}
              </p>
              <p className="mt-1 text-xs text-slate-700">
                Numbers or phrases for custom classroom or party bingo.
              </p>
            </div>
            <div className="pointer-events-none absolute -inset-3 -z-10 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_55%)] opacity-70 print:hidden" />
            <Card
              className={cn(
                "relative flex flex-col overflow-hidden border bg-slate-900/95 p-3 text-slate-50 sm:p-4 lg:p-5 print:border print:bg-white print:text-black print:shadow-none",
                accentClass
              )}
            >
              <div className="mb-3 flex items-center justify-between gap-2 print:hidden">
                <div className="space-y-0.5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
                    Bingo
                  </p>
                  <p className="text-xs text-slate-400">
                    {template
                      ? `Template: ${template.name}`
                      : "Auto-generated from your items"}
                  </p>
                </div>
                <div className="text-right text-[10px] text-slate-500">
                  <p>
                    Size: {size} × {size}
                  </p>
                  {useFreeCenter && <p>Center: FREE</p>}
                </div>
              </div>

              {isClient ? (
                <div
                  className="grid flex-1 gap-[1px] rounded-xl border border-slate-700/70 bg-slate-900/90 p-[1px] sm:gap-[2px] sm:p-[2px]"
                  style={{ gridTemplateColumns: `repeat(${size}, minmax(0, 1fr))` }}
                >
                  {grid.flat().map((cell) => (
                    <div
                      key={cell.id}
                      className={`bingo-cell ${
                        cell.isFree ? "bingo-cell-free" : ""
                      }`}
                    >
                      <span className="line-clamp-3">{cell.text}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-1 items-center justify-center rounded-xl border border-dashed border-slate-700/70 bg-slate-900/60 text-[11px] text-slate-500">
                  Preparing your bingo card…
                </div>
              )}

              <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground print:hidden">
                <span>
                  {generatedAt ? `Generated at ${generatedAt}` : "\u00A0"}
                </span>
                <span>Print this page to use your card</span>
              </div>
            </Card>
            {/* Print-only timestamp under the card, right aligned */}
            <div className="mt-2 hidden justify-end text-[10px] text-slate-600 print:flex">
              <span>
                {generatedAt ? `Generated ${generatedAt}` : ""}
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

