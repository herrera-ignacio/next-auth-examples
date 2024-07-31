import { NextResponse } from "next/server";
import { authHandler } from "@/app/api/authHandler";

export const GET = authHandler(function GET(req) {
  const message = "Hello from the admin-only API!"
  return NextResponse.json({ message });
}, "admin");
