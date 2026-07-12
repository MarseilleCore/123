import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body as {
      name?: string;
      email?: string;
      message?: string;
    };

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // In production, you would send an email or save to DB here.
    // For this demo, we simply log and return success.
    console.log("[Contact form]", { name, email, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
