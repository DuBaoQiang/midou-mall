<template>
  <div class="mimicry-sidebar">
    {{count.count}}
    <button @click="changeName">Click</button>
    <br/>
    {{name}}
  </div>
</template>
<script>
import {ref, onMounted, toRefs, reactive} from 'vue'
export default {
  name: 'Sidebar',
  setup(props, context) {
    const count  = ref({
      count: 1
    })

    const changeName = () => {
      state.name = '111'
    }

    const state = reactive({
      name: 'baoqiang',
      age: 18
    })
    onMounted(() => {
      console.log(context)
      console.log(props)
    })
    return {
      ...toRefs(state),
      count,
      changeName
    }
  }
}
</script>
<style lang="less" scoped>
.mimicry-sidebar{
  width: 300px;
  height: 100%;
  background: pink;
}
</style>
