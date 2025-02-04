import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing page",
  description: "Pricing description",
  keywords: ["Pricing, mypage"],
};

export default function PricingPage() {
  return <span className="text-7xl">Pricing Page</span>;
}
