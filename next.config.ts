import path from "node:path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack ignores lockfiles further up the tree.
  turbopack: { root: path.resolve(".") },
  // 90 is for screenshots full of small text (browser frames, the patient
  // document), which blur at the default 75.
  images: { qualities: [75, 90] },
};

// Loads src/i18n/request.ts, which serves the copy in messages/it.json.
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
