<template>
  <div class="mimicry-main">
    <div class="mimcry-header">
      <Header/>
    </div>
    <div class="mimicry-content">
      <router-view></router-view>
    </div>
    <div class="mimicry-footer">
      <Footer/>
    </div>
  </div>
</template>
<script>
import Header from "./Header";
import Footer from "./Footer";
export default {
  name: "Layout",
  components: {
    Header,
    Footer
  }
};
</script>
