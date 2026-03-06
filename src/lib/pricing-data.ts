export interface PricingTier {
  name: string;
  price: number;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "After-Hours",
    price: 49,
    description: "After Hours Calls",
    features: [
      "Evenings + weekend coverage",
      "1 local phone number",
      "Appointment booking (Google Calendar)",
      "SMS notifications on every call",
      "Custom greeting & business info",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "24/7",
    price: 99,
    description: "24/7 Receptionist Service",
    features: [
      "24/7 coverage, always on",
      "1 local phone number",
      "Appointment booking (Google Calendar)",
      "SMS notifications on every call",
      "Call recordings + transcripts",
      "Priority support",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "24/7 Pro",
    price: 249,
    description: "Receptionist Service for High Volume Businesses",
    features: [
      "Everything in 24/7, plus:",
      "Higher call volume capacity",
      "Analytics dashboard",
      "Dedicated onboarding",
      "Phone + chat support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
];
