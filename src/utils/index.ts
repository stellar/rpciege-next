export function processAssetCode(code: string) {
  if (code.substr(-1) === 'c') return code.replace(/[a-z]/g, '').replace('RPCIEGE', 'RPCIEGE0');

  return code;
}
