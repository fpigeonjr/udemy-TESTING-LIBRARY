/**
 *
 * @param {string} string
 * @returns {string}
 */
export function kebabCaseToTitleCase(string) {
  const stringWithSpaces = string.replace(/-/g, ' ');
  const stringWithCaps = stringWithSpaces.replace(/\b\w/g, (char) =>
    char.toUpperCase()
  );
  return stringWithCaps;
}
