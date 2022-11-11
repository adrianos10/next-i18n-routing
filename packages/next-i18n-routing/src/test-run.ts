// FIXME: used only for testing purposes

import { makeTranslatePathsConfig } from './makeTranslatePathsConfig';

const testRun = async () => {
  const result = await makeTranslatePathsConfig();

  // eslint-disable-next-line no-console
  console.log(result);
};

testRun();
