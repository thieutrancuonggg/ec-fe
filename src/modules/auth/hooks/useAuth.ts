"use client";

import { useMutation } from "@apollo/client/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  LOGIN_MUTATION,
  LOGOUT_MUTATION,
  REFRESH_TOKEN_MUTATION,
  REGISTER_MUTATION,
} from "../graphql/mutations";
import { useAuthStore } from "../store/authStore";
import type { AuthPayload, LoginInput, RegisterInput } from "../types";

export function useAuth() {
  const router = useRouter();

  // Granular selectors — each only re-renders when that slice changes,
  // not when unrelated store fields (e.g. accessToken) change.
  const user = useAuthStore((s) => s.user);
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const setAuth = useAuthStore((s) => s.setAuth);
  const clearAuth = useAuthStore((s) => s.clearAuth);

  const [loginMutation, { loading: loginLoading, error: loginError }] =
    useMutation<{ login: AuthPayload }>(LOGIN_MUTATION);

  const [registerMutation, { loading: registerLoading, error: registerError }] =
    useMutation<{ register: AuthPayload }>(REGISTER_MUTATION);

  const [logoutMutation, { loading: logoutLoading }] = useMutation<{
    logout: boolean;
  }>(LOGOUT_MUTATION);

  const [refreshMutation] = useMutation<{ refreshToken: AuthPayload }>(
    REFRESH_TOKEN_MUTATION
  );

  const login = useCallback(
    async (input: LoginInput) => {
      const { data } = await loginMutation({ variables: { input } });
      const payload = data?.login;
      if (!payload) throw new Error("Login failed. Please try again.");
      setAuth(payload.user, payload.accessToken, payload.refreshToken);
      return payload;
    },
    [loginMutation, setAuth]
  );

  const register = useCallback(
    async (input: RegisterInput) => {
      const { data } = await registerMutation({ variables: { input } });
      const payload = data?.register;
      if (!payload) throw new Error("Registration failed. Please try again.");
      setAuth(payload.user, payload.accessToken, payload.refreshToken);
      return payload;
    },
    [registerMutation, setAuth]
  );

  const logout = useCallback(async () => {
    try {
      await logoutMutation();
    } finally {
      // Always clear local state — even if the server call fails,
      // the user expects to be signed out.
      clearAuth();
      router.push("/login");
    }
  }, [logoutMutation, clearAuth, router]);

  const refresh = useCallback(
    async (refreshToken: string) => {
      const { data } = await refreshMutation({
        variables: { input: { refreshToken } },
      });
      const payload = data?.refreshToken;
      if (!payload) return null;
      setAuth(payload.user, payload.accessToken, payload.refreshToken);
      return payload;
    },
    [refreshMutation, setAuth]
  );

  // Reads the latest refreshToken from the store at call time (not from closure)
  // so this is safe to use without adding refreshToken to the deps array.
  const refreshSilent = useCallback(async () => {
    const { refreshToken } = useAuthStore.getState();
    if (!refreshToken) return null;
    const result = await refresh(refreshToken);
    if (!result) clearAuth();
    return result;
  }, [refresh, clearAuth]);

  return {
    user,
    isAuthenticated,
    login,
    register,
    logout,
    refresh,
    refreshSilent,
    loginLoading,
    registerLoading,
    logoutLoading,
    loginError,
    registerError,
  };
}
