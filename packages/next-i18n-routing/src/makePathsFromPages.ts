#!/usr/bin/env node

import klawSync from 'klaw-sync';
import path from 'path';
import { cwd } from 'process';

const PAGES_DIR = 'pages';

const pagesPath = path.join(cwd(), PAGES_DIR);
const skippedPathsRegexp = new RegExp('(^(_|api|404|500))|^\\[(...)?\\w*\\]$');

// TODO: replace dynamic segments with rewrites equivalent
const makePathsFromPages = () =>
  klawSync(pagesPath, {
    nodir: true,
  })
    .map(({ path }) =>
      path
        .replace(`${pagesPath}/`, '')
        .replace(/\.(js(x)?|ts(x)?)/, '')
        .replace(/(^)?(\/)?index$/, ''),
    )
    .filter(Boolean)
    .flatMap((path) => (!skippedPathsRegexp.test(path) ? path : []));

export { makePathsFromPages };
