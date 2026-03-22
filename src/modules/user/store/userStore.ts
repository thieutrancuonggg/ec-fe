import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { type UserStore } from "../types";

export const useUserStore = create<UserStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        isAuthenticated: false,

        setUser: (user) =>
          set({ user, isAuthenticated: !!user }, false, "user/setUser"),
        logout: () =>
          set({ user: null, isAuthenticated: false }, false, "user/logout"),
      }),
      {
        name: "ec-user",
        partialize: (state) => ({
          user: state.user,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    { name: "UserStore" }
  )
);
