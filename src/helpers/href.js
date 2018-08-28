/**
 * @return {String} document location href without hash
 */
export function documentHrefWithoutHash() {
  return document.location.href.replace(document.location.hash, "");
}

/**
 * @return {String} document location
 */
export function documentHref() {
  return document.location.href;
}
