import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const PRICE_IDS: Record<string, string | undefined> = {
  starter: process.env.STRIPE_PRICE_ID_STARTER,
  pro: process.env.STRIPE_PRICE_ID_PRO,
  enterprise: process.env.STRIPE_PRICE_ID_ENTERPRISE,
};

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Stripe is not configured" },
      { status: 500 }
    );
  }

  const stripe = new Stripe(secretKey, { apiVersion: "2026-01-28.clover" });

  let tierName: string;
  try {
    const body = await req.json();
    tierName = (body.tier as string)?.toLowerCase() ?? "pro";
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const priceId = PRICE_IDS[tierName];
  if (!priceId) {
    return NextResponse.json(
      { error: `No price configured for tier: ${tierName}` },
      { status: 400 }
    );
  }

  const origin = req.nextUrl.origin;

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/?checkout=success`,
      cancel_url: `${origin}/#pricing`,
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown error";
    console.error("[checkout]", msg);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
