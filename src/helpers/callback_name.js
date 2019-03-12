/**
 * @return {string} callback name with random int
 */
export function getCallbackName(name, min, max) {
  let randomInt = Math.floor(Math.random() * (max - min + 1) + min);
  return `${name}_${randomInt}`;
}
