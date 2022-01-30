<template src="./input.html"></template>
<style src="./style.scss" lang="scss" scoped></style>
<script>
export default {
  name: 'inputcomponent',
  props: {
    text: {
      type: String,
      required: true
    }
  },
  computed: {
    inputTextarea: {
      get () {
        return this.text
      },
      set (val) {
        // console.log(val)
        this.$emit('TextChange', val)
      }
    }
  }
}
</script>
