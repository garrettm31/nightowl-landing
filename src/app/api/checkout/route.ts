import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const PRICE_IDS: Record<string, string | undefined> = {
  starter: process.env.STRIPE_PRICE_ID_STARTER,
  pro: process.env.STRIPE_PRICE_ID_PRO,
  enterprise: process.env.STRIPE_PRICE_ID_ENTERPRISE,
};

export async function GET(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json({ error: "Stripe is not configured" }, { status: 500 });
  }

  const tier = req.nextUrl.searchParams.get("tier")?.toLowerCase() ?? "pro";
  const priceId = PRICE_IDS[tier];

  if (!priceId) {
    return NextResponse.json({ error: `Unknown tier: ${tier}` }, { status: 400 });
  }

  const stripe = new Stripe(secretKey, { apiVersion: "2026-01-28.clover" });
  const origin = req.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${origin}/?checkout=success`,
    cancel_url: `${origin}/#pricing`,
    allow_promotion_codes: true,
  });

  return NextResponse.redirect(session.url!);
}
