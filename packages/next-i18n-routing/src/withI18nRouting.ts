import { parseConfigToNextRewrites } from './parsers/parseConfigToNextRewrites';
import { parseRewritesToNextRedirects } from './parsers/parseRewritesToNextRedirects';

import type { NextConfig } from 'next';

const withI18nRouting = async (nextConfig: NextConfig) => {
  const pluginRewrites = parseConfigToNextRewrites() || [];
  const pluginRedirescts = parseRewritesToNextRedirects(pluginRewrites) || [];

  const providedRewrites = (await nextConfig.rewrites?.()) || [];
  const providedRedirects = (await nextConfig.redirects?.()) || [];

  // FIXME: handle beforeFiles, afterFiles and fallback
  const providedRewritesArray = Array.isArray(providedRewrites)
    ? providedRewrites
    : [];

  return {
    ...nextConfig,
    rewrites: async () => [...pluginRewrites, ...providedRewritesArray],
    redirects: async () => [...pluginRedirescts, ...providedRedirects],
  };
};

export { withI18nRouting };
