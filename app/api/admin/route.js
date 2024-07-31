import { NextResponse } from "next/server";

export async function GET() {
  const message = "Hello from the admin-only API!"
  return NextResponse.json({ message });
}