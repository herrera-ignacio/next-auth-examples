import {NextResponse} from "next/server";
import { auth } from "@/utils/auth";

/**
 *
 * @param {function} routeHandler
 * @param {string} [role]
 */
export const authHandler = (routeHandler, role) => auth((req => {
  if (!req.auth) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  if (role && req.auth?.user?.role !== role) {
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  return routeHandler(req);
}));
