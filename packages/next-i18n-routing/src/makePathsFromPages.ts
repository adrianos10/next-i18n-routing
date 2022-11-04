#!/usr/bin/env node

import klawSync from 'klaw-sync';
import path from 'path';
import { cwd } from 'process';

const PAGES_DIR = 'pages';

const pagesPath = path.join(cwd(), PAGES_DIR);

const skippedPathsRegExp = /(^(_|api|404|500))|^\[(...)?\w*\]$/;
const fileExtRegExp = /\.(js(x)?|ts(x)?)/;
const indexPagesRegExp = /(^)?(\/)?index$/;

// TODO: replace dynamic segments with rewrites equivalent
const makePathsFromPages = () =>
  klawSync(pagesPath, {
    nodir: true,
  })
    .map(({ path }) =>
      path
        .replace(`${pagesPath}/`, '')
        .replace(fileExtRegExp, '')
        .replace(indexPagesRegExp, ''),
    )
    .filter(Boolean)
    .flatMap((path) => (!skippedPathsRegExp.test(path) ? path : []));

export { makePathsFromPages };
