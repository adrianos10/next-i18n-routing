import fs from 'fs';

import { CONFIG_FILENAME } from './consts';
import { logToConsole } from './logger/logToConsole';
import { makePathsFromPages } from './makePathsFromPages';
import { TranslatePathsConfig } from './types';
import { makePathAbsolute } from './utils/makePathAbsolute';
import { readNextConfig } from './utils/readNextConfig';

const makeTranslatePathsConfig = async () => {
  const { i18n } = await readNextConfig();
  const locales = i18n?.locales;

  if (!locales) {
    logToConsole('locales are not defined in next.config.js, skipping');

    return;
  }

  const paths = makePathsFromPages();

  const translatePathsConfig = paths.reduce<TranslatePathsConfig>(
    (result, path) => {
      const absolutePath = makePathAbsolute(path);

      return {
        ...result,
        [absolutePath]: locales.reduce(
          (innerResult, locale) => ({ ...innerResult, [locale]: absolutePath }),
          {},
        ),
      };
    },
    {},
  );

  // TODO: handle case for existing file - add override options?
  fs.writeFileSync(
    CONFIG_FILENAME,
    JSON.stringify(translatePathsConfig, null, 2),
  );
};

export { makeTranslatePathsConfig };
