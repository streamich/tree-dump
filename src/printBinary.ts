type Child = (tab: string) => string;

export const printBinary = (tab = '', children: [left?: null | Child, right?: null | Child]): string => {
  const left = children[0], right = children[1];
  let str = '';
  if (left) str += '\n' + tab + '← ' + left(tab + '  ');
  if (right) str += '\n' + tab + '→ ' + right(tab + '  ');
  return str;
};
