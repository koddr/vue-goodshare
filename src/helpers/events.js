/**
 * @return {object} onClick event
 */
export function clickEvent(vue, label) {
  vue.$emit("onClick", { label: label });
}
