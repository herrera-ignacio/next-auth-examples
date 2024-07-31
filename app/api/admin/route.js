import { NextResponse } from "next/server";
import { authHandler } from "@/app/api/authHandler";
import {auth} from "@/utils/auth";

// export const GET = authHandler(function GET(req) {
//   const message = "Hello from the admin-only API!"
//   return NextResponse.json({ message });
// }, "admin");


export const GET = auth(function GET(req) {
  console.log(req.auth);
  const message = "Hello from the admin-only API!"
  return NextResponse.json({ message });
});