import { NextConfig } from 'next';
import path from 'path';
import { cwd } from 'process';

const NEXT_CONFIG_FILENAME = 'next.config.js';

const readNextConfig = async () => {
  const config = (await import(
    path.join(cwd(), NEXT_CONFIG_FILENAME)
  )) as NextConfig;

  return config;
};

export { readNextConfig };
