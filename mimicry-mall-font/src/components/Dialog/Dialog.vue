<template>
  <div class="vue-dialog">
    full dialog
  </div>
</template>
<script>
export default {
  name: 'Dialog',
  props: ['options'],
  data() {
    return {
      title: 'Dialog'
    }
  },
  methods: {

  },
}
</script>
<style lang="less" scoped>
.vue-dialog{
  width: 100vw;
  height: 100vh;
  background: pink;
}
</style>
