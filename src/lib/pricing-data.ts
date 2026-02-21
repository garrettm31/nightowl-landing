export interface PricingTier {
  name: string;
  price: number;
  callsIncluded: number;
  overageRate: number;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "Starter",
    price: 39,
    callsIncluded: 50,
    overageRate: 1.5,
    description: "Perfect for single-chair and solo barbers",
    features: [
      "Up to 50 calls/month",
      "1 local phone number",
      "Appointment booking (Google Calendar)",
      "SMS + email notifications",
      "Custom greeting",
      "After-hours or 24/7 mode",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Pro",
    price: 99,
    callsIncluded: 150,
    overageRate: 1.0,
    description: "For busy shops with multiple barbers",
    features: [
      "Up to 150 calls/month",
      "2 phone numbers",
      "Everything in Starter, plus:",
      "Call recordings + transcripts",
      "Daily digest email",
      "Bilingual (English + Spanish)",
      "Zapier + CRM integrations",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: 199,
    callsIncluded: 500,
    overageRate: 0.75,
    description: "For multi-location and high-volume businesses",
    features: [
      "Up to 500 calls/month",
      "5 phone numbers",
      "Everything in Pro, plus:",
      "Analytics dashboard",
      "Multi-location routing",
      "Custom API access",
      "Dedicated onboarding",
      "Phone + chat support",
      "99.9% uptime SLA",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
];
