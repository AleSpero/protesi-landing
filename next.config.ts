import path from "node:path";
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack ignores lockfiles further up the tree.
  turbopack: { root: path.resolve(".") },
};

// Loads src/i18n/request.ts, which serves the copy in messages/it.json.
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
