/**
 * @return {string} description meta content
 */
export function metaDescription() {
  const meta = document.querySelector('meta[name="description"]');
  return meta ? meta.content : "";
}
