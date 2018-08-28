/**
 * @return {String} apple-touch-icon link source
 */

export function linkAppleTouchIcon() {
  const link = document.querySelector('link[rel="apple-touch-icon"]');
  return link ? link.src : "";
}
