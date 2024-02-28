export function processAssetCode(code: string) {
  if (code.substr(-1) === 'c') return code.replace(/[a-z]/g, '').replace('RPCIEGE', 'RPCIEGE0');

  return code;
}

export function padEndArray<T1, T2 = undefined>(
  originalArray: T1[],
  targetLength: number,
  padValue?: T2
) {
  // If the original array is already longer or equal to the target length, return the original array.
  if (originalArray.length >= targetLength) {
    return originalArray;
  }

  // Create a new array with the desired length filled with the pad value.
  const paddedArray = new Array(targetLength).fill(padValue) as (T1 | T2)[];

  // Copy elements from the original array to the beginning of the padded array.
  for (let i = 0; i < originalArray.length; i++) {
    paddedArray[i] = originalArray[i];
  }

  return paddedArray;
}
