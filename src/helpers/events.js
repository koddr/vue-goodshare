export default {
  click (vue, label) {
    vue.$emit('onClick', { label })
  }
}
