import { Rewrite } from 'next/dist/lib/load-custom-routes';

import { CONFIG_FILENAME } from './consts';
import { logToConsole } from './logger/logToConsole';
import { readTranslatePathsConfig } from './utils/readTranslatePathsConfig';

// TODO: check if all cases are covered
const parseConfigToNextRewrites = () => {
  const config = readTranslatePathsConfig();

  if (!config) {
    logToConsole(`${CONFIG_FILENAME} not found, skipping`);

    return;
  }

  const rewrites = Object.entries(config).reduce<Rewrite[]>(
    (result, [destination, localesToTranslatedPaths]) => {
      Object.entries(localesToTranslatedPaths).forEach(([locale, source]) => {
        if (source !== destination) {
          result.push({
            source: `/${locale}${source}`,
            destination: `/${locale}${destination}`,
            locale: false,
          });
        }
      });

      return result;
    },
    [],
  );

  return rewrites;
};

export { parseConfigToNextRewrites };
