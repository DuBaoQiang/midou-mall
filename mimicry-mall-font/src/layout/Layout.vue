<template>
  <div class="mimicry-main">
    <div class="mimcry-header">
      <Header />
    </div>
    <div class="mimicry-content">
      <div class="mimicry-sidebar">
        <Sidebar />
      </div>
      <div class="mimicry-view">
        <router-view></router-view>
      </div>
    </div>
    <div class="mimicry-footer">
      <Footer />
    </div>
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
export default {
  name: "Layout",
  components: {
    Header,
    Footer,
    Sidebar
  }
};
</script>
<style lang="less" scoped>
.mimicry-main {
  width: 100vw;
  height: auto;
  .mimicry-content {
    display: flex;
    .mimicry-sidebar {
      width: 300px;
      height: calc(100vh - 120px);
    }
    .mimicry-view {
      flex: 1 1 300px;
    }
  }
}
</style>
