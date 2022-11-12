// TODO: used only for testing purposes

import { parseConfigToNextRewrites } from './parsers/parseConfigToNextRewrites';
import { parseRewritesToNextRedirects } from './parsers/parseRewritesToNextRedirects';

const testRun = async () => {
  const rewrites = parseConfigToNextRewrites();

  if (!rewrites) {
    return;
  }

  const redirects = parseRewritesToNextRedirects(rewrites);

  // eslint-disable-next-line no-console
  console.log(redirects);
};

testRun();
