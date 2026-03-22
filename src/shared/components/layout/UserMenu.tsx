"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { User, LogOut, ChevronDown } from "lucide-react";
import { useAuth } from "@/modules/auth/hooks/useAuth";
import { cn } from "@/shared/lib/cn";

export function UserMenu() {
  const { user, isAuthenticated, logout, logoutLoading } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="hidden sm:flex items-center gap-2">
        <Link
          href="/login"
          className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-2 py-1"
        >
          Sign in
        </Link>
        <Link
          href="/register"
          className="text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors px-3 py-1.5 rounded-md"
        >
          Register
        </Link>
      </div>
    );
  }

  const initials = [user?.firstName, user?.lastName]
    .filter(Boolean)
    .map((n) => n![0].toUpperCase())
    .join("") || "U";

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm font-medium transition-colors",
          open
            ? "bg-blue-50 text-blue-700"
            : "text-slate-700 hover:bg-neutral-100 hover:text-neutral-900"
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
          {initials}
        </span>
        <span className="hidden sm:block max-w-[120px] truncate">
          {user?.firstName}
        </span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-slate-400 transition-transform duration-200",
            open && "rotate-180"
          )}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-52 rounded-xl border border-neutral-200 bg-white shadow-lg shadow-neutral-200/60 py-1 z-50">
          <div className="px-3 py-2.5 border-b border-neutral-100">
            <p className="text-sm font-semibold text-neutral-900 truncate">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-neutral-500 truncate mt-0.5">{user?.email}</p>
          </div>

          <div className="py-1">
            <Link
              href="/account"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5 px-3 py-2 text-sm text-neutral-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
            >
              <User className="h-4 w-4" />
              My Account
            </Link>
          </div>

          <div className="border-t border-neutral-100 py-1">
            <button
              onClick={() => {
                setOpen(false);
                logout();
              }}
              disabled={logoutLoading}
              className="flex w-full items-center gap-2.5 px-3 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50"
            >
              <LogOut className="h-4 w-4" />
              {logoutLoading ? "Signing out…" : "Sign out"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
