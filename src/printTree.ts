import type {PrintChild} from './types';

export const printTree = (tab = '', children: (PrintChild | null)[]): string => {
  let str = '';
  const length = children.length;
  const last = length - 1;
  for (let i = 0; i < length; i++) {
    const fn = children[i];
    if (!fn) continue;
    const isLast = i === last;
    const child = fn(tab + (isLast ? ' ' : '│') + '  ');
    const branch = child ? (isLast ? '└─' : '├─') : '│';
    str += '\n' + tab + branch + (child ? ' ' + child : '');
  }
  return str;
};
