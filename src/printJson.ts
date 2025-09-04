export const printJson = (tab = '', json: unknown, space: number | string = 2): string =>
  (JSON.stringify(json, null, space) || 'nil').split('\n').join('\n' + tab);
