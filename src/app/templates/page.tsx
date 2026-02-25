import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  TEMPLATES,
  TEMPLATE_ACCENT_BY_ID,
  type TemplateId,
} from "@/data/bingo-templates";

const TEMPLATE_CARD_META: { id: TemplateId; badge: string }[] = [
  { id: "party-food", badge: "Most popular" },
  { id: "team-meeting", badge: "Remote work" },
  { id: "classroom-vocab", badge: "Teachers" },
  { id: "movie-night", badge: "Friends & family" },
  { id: "holiday-party", badge: "Seasonal" },
  { id: "baby-shower", badge: "Family" },
  { id: "wedding-shower", badge: "Weddings" },
  { id: "sports-night", badge: "Sports" },
  { id: "coding-buzzwords", badge: "Developers" },
  { id: "travel-bucket", badge: "Travel" },
  { id: "kids-party", badge: "Kids" },
  { id: "music-festival", badge: "Music" },
  { id: "book-club", badge: "Readers" },
  { id: "workout", badge: "Fitness" },
  { id: "conference", badge: "Events" },
  { id: "icebreaker", badge: "Icebreaker" },
  { id: "classroom-math", badge: "Math" },
  { id: "language-learning", badge: "Languages" },
  { id: "office-retirement", badge: "Office" },
  { id: "family-reunion", badge: "Family" },
];

export default function TemplatesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
      <div className="flex min-h-screen w-full flex-col gap-10 px-4 pb-16 pt-10 md:px-6 lg:px-10 lg:pt-16">
        <header className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Template gallery
          </h1>
          <p className="max-w-2xl text-sm text-slate-400 sm:text-base">
            Pick a template that matches your event. You can always customize
            the text, grid size, and FREE space once you open it in the
            generator.
          </p>
        </header>

        <section className="space-y-4">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {TEMPLATE_CARD_META.map(({ id, badge }) => {
              const tpl = TEMPLATES.find((t) => t.id === id);
              if (!tpl) return null;
              const accent = TEMPLATE_ACCENT_BY_ID[id];
              const previewItems = tpl.items.slice(0, 9);

              return (
                <Link key={id} href={`/generator?template=${id}`}>
                  <Card
                    className={cn(
                      "group flex h-full flex-col justify-between border bg-slate-900/95 text-slate-50 shadow-lg transition hover:-translate-y-1 hover:bg-slate-900",
                      accent
                    )}
                  >
                    <CardHeader className="space-y-3 pb-3">
                      <div className="flex items-center justify-between gap-2">
                        <CardTitle className="text-base font-semibold">
                          {tpl.name}
                        </CardTitle>
                        <span className="rounded-full bg-slate-900/90 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-primary">
                          {badge}
                        </span>
                      </div>
                      <CardDescription className="text-sm text-slate-200">
                        {tpl.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3 pt-0 text-[11px] text-slate-300">
                      <div className="grid grid-cols-3 gap-[3px] rounded-lg bg-slate-950/80 p-[3px]">
                        {previewItems.map((item, i) => (
                          <div
                            key={i}
                            className={cn(
                              "flex h-7 items-center justify-center rounded-md border border-slate-700/70 bg-slate-900/80 text-[10px] font-semibold text-slate-100",
                              i === 4 &&
                                "bg-primary text-primary-foreground shadow-sm shadow-primary/40"
                            )}
                          >
                            {i === 4 && tpl.useFreeCenter ? "FREE" : item}
                          </div>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="inline-flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-primary/80 group-hover:bg-primary" />
                          {tpl.size} × {tpl.size} layout · Editable
                        </span>
                        <span className="text-primary group-hover:text-primary/80">
                          Use template →
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}

