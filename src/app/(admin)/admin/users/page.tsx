import type { Metadata } from "next";
import { cacheLife } from "next/cache";
import { Users } from "lucide-react";

export const metadata: Metadata = { title: "Users" };

async function getAdminUsers() {
  "use cache";
  cacheLife("minutes");
  return [];
}

export default async function AdminUsersPage() {
  const users = await getAdminUsers();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-neutral-900">Users</h1>

      {users.length === 0 && (
        <div className="rounded-lg border border-dashed border-neutral-300 bg-white p-12 text-center">
          <Users className="mx-auto h-10 w-10 text-neutral-300" />
          <p className="mt-3 text-sm font-medium text-neutral-900">No users yet</p>
          <p className="mt-1 text-sm text-neutral-500">Registered users will appear here.</p>
        </div>
      )}
    </div>
  );
}
