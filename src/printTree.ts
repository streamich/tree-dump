import type {PrintChild} from './types';

export const printTree = (tab = '', children: (PrintChild | null)[]): string => {
  let str = '';
  let last = children.length - 1;
  for (; last >= 0; last--) if (children[last]) break;
  for (let i = 0; i <= last; i++) {
    const fn = children[i];
    if (!fn) continue;
    const isLast = i === last;
    const child = fn(tab + (isLast ? ' ' : '│') + '  ');
    const branch = child ? (isLast ? '└─' : '├─') : '│';
    str += '\n' + tab + branch + (child ? ' ' + child : '');
  }
  return str;
};
