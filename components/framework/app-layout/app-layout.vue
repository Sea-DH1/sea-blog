<template>
  <div class="app-layout-wrapper">
    <app-header></app-header>
    <div class="app-content">
      <slot></slot>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from '@/components/framework/app-header/app-header'
import AppFooter from '@/components/framework/app-footer/app-footer'

export default {
  name: 'AppLayout',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="scss" rel="stylesheet/scss">
.app-layout-wrapper {
  height: 100%;
  .app-content {
    min-height: 100%;
  }
}
</style>
