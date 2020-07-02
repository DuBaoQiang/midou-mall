<template>
  <div class="vue-loading">
    full loading
  </div>
</template>
<script>
export default {
  name: 'Loading',
  props: ['options'],
  data() {
    return {
      title: 'Loading'
    }
  },
  methods: {

  },
}
</script>
<style lang="less" scoped>
.vue-loading{
  width: 100vw;
  height: 100vh;
  background: pink;
}
</style>
