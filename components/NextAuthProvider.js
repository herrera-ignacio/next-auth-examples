"use client";

import { SessionProvider } from "next-auth/react";

// This is needed for accessing the session client-side
// https://authjs.dev/getting-started/session-management/get-session
export const NextAuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
