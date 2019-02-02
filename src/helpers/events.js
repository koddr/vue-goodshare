export function click (vue, label) {
  vue.$emit('onClick', { label })
}
