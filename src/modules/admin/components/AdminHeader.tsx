"use client";

import { Bell, Search } from "lucide-react";
import { Button } from "@/shared/components/ui/Button";
import { useUserStore } from "@/modules/user/store/userStore";

interface AdminHeaderProps {
  title?: string;
}

export function AdminHeader({ title }: AdminHeaderProps) {
  const { user } = useUserStore();

  return (
    <header className="flex h-16 items-center justify-between border-b border-neutral-200 bg-white px-6">
      {title && (
        <h1 className="text-lg font-semibold text-neutral-900">{title}</h1>
      )}
      {!title && <div />}

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" aria-label="Search">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5" />
        </Button>

        <div className="flex items-center gap-2 border-l border-neutral-200 pl-3">
          <div className="h-8 w-8 rounded-full bg-neutral-900 flex items-center justify-center text-xs font-bold text-white">
            {user?.firstName?.charAt(0).toUpperCase() ?? "A"}
          </div>
          {user && (
            <span className="hidden sm:block text-sm font-medium text-neutral-700">
              {user.firstName} {user.lastName}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
