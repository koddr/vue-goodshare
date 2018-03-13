/**
 * default page url prop value
 * @return {String} document location href without hash
 */
export default function defaultHref() {
  return document.location.href.replace(
    document.location.hash,
    ''
  );
}
