/**
 * Slice thousand integer and add `k` letter.
 *
 * @param {number} number - thousand integer
 * @return {string} a integer with letter
 */
export function sliceThousandInt(number) {
  return `${(number / 1000).toFixed(1)}k`;
}
