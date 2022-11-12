// TODO: used only for testing purposes

import { parseConfigToNextRewrites } from './parsers/parseConfigToNextRewrites';

const testRun = async () => {
  const rewrites = parseConfigToNextRewrites();

  // eslint-disable-next-line no-console
  console.log(rewrites);
};

testRun();
