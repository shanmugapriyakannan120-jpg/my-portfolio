"use client";

import { DataSenseDemo } from "./DataSenseDemo";
import { HrAnalyticsDemo } from "./HrAnalyticsDemo";
import { BrazilianEcommerceDemo } from "./BrazilianEcommerceDemo";
import { AshokLeylandDemo } from "./AshokLeylandDemo";

const demos: Record<string, () => React.ReactElement> = {
  "datasense-ai": DataSenseDemo,
  "hr-analytics": HrAnalyticsDemo,
  "brazilian-ecommerce": BrazilianEcommerceDemo,
  "ashok-leyland-finance": AshokLeylandDemo,
};

export function ProjectDemo({ slug }: { slug: string }) {
  const Demo = demos[slug];
  return Demo ? <Demo /> : null;
}
