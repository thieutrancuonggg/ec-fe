import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import type { AuthUser } from "../types";

interface AuthState {
  user: AuthUser | null;
  /** In-memory only – NOT persisted. Cleared on page reload. */
  accessToken: string | null;
  /** Persisted to localStorage so we can silently re-issue access tokens. */
  refreshToken: string | null;
  isAuthenticated: boolean;
}

interface AuthActions {
  setAuth: (user: AuthUser, accessToken: string, refreshToken: string) => void;
  setAccessToken: (accessToken: string) => void;
  clearAuth: () => void;
}

export type AuthStore = AuthState & AuthActions;

export const useAuthStore = create<AuthStore>()(
  devtools(
    persist(
      (set) => ({
        user: null,
        accessToken: null,
        refreshToken: null,
        isAuthenticated: false,

        setAuth: (user, accessToken, refreshToken) =>
          set(
            { user, accessToken, refreshToken, isAuthenticated: true },
            false,
            "auth/setAuth"
          ),

        setAccessToken: (accessToken) =>
          set({ accessToken }, false, "auth/setAccessToken"),

        clearAuth: () =>
          set(
            {
              user: null,
              accessToken: null,
              refreshToken: null,
              isAuthenticated: false,
            },
            false,
            "auth/clearAuth"
          ),
      }),
      {
        name: "ec-auth",
        // accessToken intentionally excluded – it lives in memory only
        partialize: (state) => ({
          user: state.user,
          refreshToken: state.refreshToken,
          isAuthenticated: state.isAuthenticated,
        }),
      }
    ),
    { name: "AuthStore" }
  )
);
