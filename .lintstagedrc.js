// {
//   "app/*.ts": ["prettier --write", "npm run lint"],
//   "ignore": ["node_modules", "dist", "package-lock.json"]
// }

import { ESLint } from 'eslint';

const removeIgnoredFiles = async files => {
  const eslint = new ESLint();
  const isIgnored = await Promise.all(
    files.map(file => {
      return eslint.isPathIgnored(file);
    })
  );
  const filteredFiles = files.filter((_, i) => !isIgnored[i]);
  return filteredFiles.join(' ');
};

export default {
  '**/*.{ts,js,}': async files => {
    const filesToLint = await removeIgnoredFiles(files);
    return ['npm run prettier', `npm run lint ${filesToLint}`];
  },
};
