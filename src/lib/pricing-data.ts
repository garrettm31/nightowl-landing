export interface PricingTier {
  name: string;
  price: number;
  minutesIncluded: number;
  overageRate: number;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

export const PRICING_TIERS: PricingTier[] = [
  {
    name: "After-Hours",
    price: 49,
    minutesIncluded: 70,
    overageRate: 0.50,
    description: "After Hours Calls",
    features: [
      "70 minutes/month included",
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
    minutesIncluded: 150,
    overageRate: 0.50,
    description: "24/7 Receptionist Service",
    features: [
      "150 minutes/month included",
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
    price: 199,
    minutesIncluded: 250,
    overageRate: 0.50,
    description: "Receptionist Service for High Volume Businesses",
    features: [
      "250 minutes/month included",
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
