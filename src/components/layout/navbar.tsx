"use client";

import { useState } from "react";
import { Bell, Menu } from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between border-b border-neutral-200 bg-white px-4 py-3 md:px-6">
      <button
        className="rounded-md p-2 hover:bg-neutral-100 md:hidden"
        onClick={() => setOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <Menu className="h-5 w-5" />
      </button>
      <div className="hidden text-sm text-neutral-500 md:block">
        Smart tools for smarter farming
      </div>
      <div className="flex items-center gap-3">
        <LanguageSwitcher />
        <button className="rounded-full p-2 hover:bg-neutral-100" aria-label="Notifications">
          <Bell className="h-5 w-5 text-neutral-600" />
        </button>
        <div className="h-8 w-8 rounded-full bg-primary-100" aria-hidden />
      </div>
    </header>
  );
}
