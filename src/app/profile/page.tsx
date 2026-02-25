"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

type ProfileData = {
  name: string;
  phone: string;
  gender: string;
  dob: string;
};

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [profile, setProfile] = useState<ProfileData>({
    name: "",
    phone: "",
    gender: "",
    dob: "",
  });
  const [showSaved, setShowSaved] = useState(false);

  useEffect(() => {
    if (!session?.user?.email) return;
    const key = `bingocraft_profile_${session.user.email}`;
    const stored =
      typeof window !== "undefined" ? localStorage.getItem(key) : null;
    const baseName = session.user.name ?? "";
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as ProfileData;
        setProfile({
          name: parsed.name || baseName,
          phone: parsed.phone || "",
          gender: parsed.gender || "",
          dob: parsed.dob || "",
        });
      } catch {
        setProfile((prev) => ({ ...prev, name: baseName }));
      }
    } else {
      setProfile((prev) => ({ ...prev, name: baseName }));
    }
  }, [session?.user?.email, session?.user?.name]);

  if (status === "loading") {
    return null;
  }

  if (!session?.user) {
    router.push("/login");
    return null;
  }

  const email = session.user.email ?? "";

  const handleChange = (field: keyof ProfileData, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    const key = `bingocraft_profile_${email}`;
    localStorage.setItem(key, JSON.stringify(profile));
    setShowSaved(true);
    setTimeout(() => setShowSaved(false), 2000);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950 to-slate-900">
      <div className="flex min-h-[calc(100vh-4rem)] w-full items-center justify-center px-4 pb-10 pt-10 md:px-6 lg:px-10">
        <form
          onSubmit={handleSave}
          className="w-full max-w-md space-y-5 rounded-xl border border-slate-800 bg-slate-900/90 p-6"
        >
          <div className="space-y-1">
            <h1 className="text-xl font-semibold text-slate-50">
              Your profile
            </h1>
            <p className="text-sm text-slate-400">
              Edit your basic information. Email comes from your Google account
              and can&apos;t be changed here.
            </p>
          </div>

          {showSaved && (
            <div className="rounded-md border border-emerald-500/60 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-200 transition-opacity">
              Profile saved.
            </div>
          )}

          <div className="space-y-3 text-sm text-slate-200">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Name
              </p>
              <input
                value={profile.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-0 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Email
              </p>
              <input
                value={email}
                disabled
                className="mt-1 w-full cursor-not-allowed rounded-md border border-slate-700 bg-slate-800 px-3 py-2 text-sm text-slate-300"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Phone number
              </p>
              <input
                value={profile.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-0 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
                placeholder="+1 555 012 3456"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Gender
              </p>
              <select
                value={profile.gender}
                onChange={(e) => handleChange("gender", e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-0 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
              >
                <option value="">Select…</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                Date of birth
              </p>
              <input
                type="date"
                value={profile.dob}
                onChange={(e) => handleChange("dob", e.target.value)}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm outline-none ring-0 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/40"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <button
              type="submit"
              className="w-full cursor-pointer rounded-md bg-emerald-500 px-3 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400 active:scale-95 transition-transform"
            >
              Save profile
            </button>
            <button
              type="button"
              className="w-full cursor-pointer rounded-md bg-slate-800 px-3 py-2 text-sm font-semibold text-slate-50 hover:bg-slate-700 active:scale-95 transition-transform"
              onClick={() => signOut({ callbackUrl: "/" })}
            >
              Log out
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

