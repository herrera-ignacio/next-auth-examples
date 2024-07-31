import {NextResponse} from "next/server";
import { auth } from "@/utils/auth";

/**
 *
 * @param {function} routeHandler
 * @param {string} [role]
 */
export const authHandler = (routeHandler, role) => auth((req => {
  console.log("REQ AUTH", req.auth);
  if (!req.auth) return NextResponse.json({ message: "Not authenticated" }, { status: 401 });

  if (role && req.auth?.user?.role !== role) {
    console.log("FAILS AUTHORIZATION")
    return NextResponse.json({ message: "Forbidden" }, { status: 403 });
  }

  return routeHandler(req);
}));
