import fs from 'fs';

import { CONFIG_FILENAME } from './consts';
import { logToConsole } from './logger/logToConsole';
import { makePathsFromPages } from './makePathsFromPages';
import { readNextConfig } from './readNextConfig';
import { makePathAbsolute } from './utils/makePathAbsolute';

const makeTranslatePathsConfig = async () => {
  const { i18n } = await readNextConfig();
  const locales = i18n?.locales;

  if (!locales) {
    logToConsole('locales are not defined in next.config.js, skipping');

    return;
  }

  const paths = makePathsFromPages();

  const translatePathsConfig = paths.reduce<
    Record<string, Record<string, string>>
  >((result, path) => {
    const absolutePath = makePathAbsolute(path);

    return {
      ...result,
      [absolutePath]: locales.reduce(
        (innerResult, locale) => ({ ...innerResult, [locale]: absolutePath }),
        {},
      ),
    };
  }, {});

  fs.writeFileSync(
    CONFIG_FILENAME,
    JSON.stringify(translatePathsConfig, null, 4),
  );
};

export { makeTranslatePathsConfig };
