export function click (vue, label) {
  console.log('TEST3', label)
  vue.$emit('onClick', { label: label })
}
