import type {PrintChild} from './types';

export const printBinary = (tab = '', children: [left?: null | PrintChild, right?: null | PrintChild]): string => {
  const left = children[0],
    right = children[1];
  let str = '';
  if (left) str += '\n' + tab + '← ' + left(tab + '  ');
  if (right) str += '\n' + tab + '→ ' + right(tab + '  ');
  return str;
};
