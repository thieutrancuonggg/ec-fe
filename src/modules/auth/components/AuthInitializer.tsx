"use client";

import { useEffect, useRef } from "react";
import { useAuthStore } from "../store/authStore";
import { env } from "@/config/env";
import type { AuthUser } from "../types";

/**
 * Runs once on app mount.
 * If a refresh token is persisted but the access token is gone (page reload),
 * we silently exchange it for a new access token so the user stays logged in.
 */
export function AuthInitializer() {
  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    const { accessToken, refreshToken, setAuth, clearAuth } =
      useAuthStore.getState();

    if (accessToken || !refreshToken) return;

    fetch(env.graphqlUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `
          mutation RefreshToken($input: RefreshTokenInput!) {
            refreshToken(input: $input) {
              accessToken
              refreshToken
              user { id email name role createdAt updatedAt }
            }
          }
        `,
        variables: { input: { refreshToken } },
      }),
    })
      .then((r) => r.json())
      .then((json) => {
        const payload = json?.data?.refreshToken as
          | { accessToken: string; refreshToken: string; user: AuthUser }
          | undefined;
        if (payload) {
          setAuth(payload.user, payload.accessToken, payload.refreshToken);
        } else {
          clearAuth();
        }
      })
      .catch(() => clearAuth());
  }, []);

  return null;
}
