import path from 'path';
import { cwd } from 'process';

import type { NextConfig } from 'next';

const NEXT_CONFIG_FILENAME = 'next.config.js';

const readNextConfig = async () => {
  const config = (await import(path.join(cwd(), NEXT_CONFIG_FILENAME)))
    .default as NextConfig;

  return config;
};

export { readNextConfig };
