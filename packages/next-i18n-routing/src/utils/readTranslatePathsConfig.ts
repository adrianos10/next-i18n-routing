import fs from 'fs';

import { CONFIG_FILENAME } from '../consts';
import { TranslatePathsConfig } from '../types';

// TODO: handle errors
const readTranslatePathsConfig = () => {
  if (!fs.existsSync(CONFIG_FILENAME)) {
    return undefined;
  }

  const fileContent = fs.readFileSync(CONFIG_FILENAME, 'utf-8');

  return JSON.parse(fileContent) as TranslatePathsConfig;
};

export { readTranslatePathsConfig };
