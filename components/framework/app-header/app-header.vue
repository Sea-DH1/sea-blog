<template>
  <div class="app-header-wrapper">
    <div class="app-header">头部</div>
  </div>
</template>

<script>
export default {
  name: 'Appheader',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.app-header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: #000;
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    color: #fff;
  }
}
</style>
