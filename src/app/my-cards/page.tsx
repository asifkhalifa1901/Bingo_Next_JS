"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type SavedCard = {
  id: string;
  name: string;
  size: number;
  useFreeCenter: boolean;
  rawItems: string;
  savedAt: string;
};

export default function MyCardsPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [cards, setCards] = useState<SavedCard[]>([]);

  useEffect(() => {
    if (status === "loading") return;
    if (!session?.user?.email) {
      router.push("/login?redirect=/my-cards");
      return;
    }
    const key = `bingocraft_cards_${session.user.email}`;
    const stored =
      typeof window !== "undefined" ? localStorage.getItem(key) : null;
    if (stored) {
      try {
        setCards(JSON.parse(stored) as SavedCard[]);
      } catch {
        setCards([]);
      }
    }
  }, [status, session?.user?.email, router]);

  const handleOpen = (card: SavedCard) => {
    if (!session?.user?.email) return;
    const key = `bingocraft_last_card_${session.user.email}`;
    localStorage.setItem(key, JSON.stringify(card));
    router.push("/generator?saved=1");
  };

  const handleDelete = (id: string) => {
    if (!session?.user?.email) return;
    const email = session.user.email;
    const key = `bingocraft_cards_${email}`;
    const updated = cards.filter((c) => c.id !== id);
    setCards(updated);
    localStorage.setItem(key, JSON.stringify(updated));
  };

  if (status === "loading") return null;

  if (!session?.user) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
      <div className="flex min-h-screen w-full flex-col gap-8 px-4 pb-16 pt-10 md:px-6 lg:px-10 lg:pt-16">
        <header className="space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            My cards
          </h1>
          <p className="max-w-2xl text-sm text-slate-400">
            These are bingo cards you&apos;ve saved while using the generator.
            You can reopen any card to tweak it or print again.
          </p>
        </header>

        <section className="space-y-4">
          {cards.length === 0 ? (
            <p className="text-sm text-slate-400">
              You haven&apos;t saved any cards yet. Create a card in the
              generator and click &quot;Save card&quot; to see it here.
            </p>
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => (
                <Card
                  key={card.id}
                  className="flex h-full flex-col justify-between border-slate-700 bg-slate-900/90"
                >
                  <CardHeader className="space-y-2 pb-3">
                    <CardTitle className="text-sm font-semibold text-slate-50">
                      {card.name}
                    </CardTitle>
                    <p className="text-[11px] text-slate-400">
                      {card.size} × {card.size} ·{" "}
                      {card.useFreeCenter ? "with FREE" : "no FREE"}
                    </p>
                  </CardHeader>
                  <CardContent className="flex items-end justify-between pt-0 text-[11px] text-slate-400">
                    <div>
                      <p className="line-clamp-2">
                        {card.rawItems.split("\n").slice(0, 5).join(", ")}
                        {card.rawItems.split("\n").length > 5 ? "…" : ""}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <p className="text-[10px]">
                        Saved{" "}
                        {new Date(card.savedAt).toLocaleString(undefined, {
                          dateStyle: "short",
                          timeStyle: "short",
                        })}
                      </p>
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="px-3 py-1 text-xs cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-95"
                          type="button"
                          onClick={() => handleOpen(card)}
                        >
                          Open
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          className="px-3 py-1 text-xs cursor-pointer transition-transform hover:-translate-y-0.5 active:scale-95"
                          type="button"
                          onClick={() => handleDelete(card.id)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}

