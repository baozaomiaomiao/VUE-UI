<template>
  <div class="row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'GuluRow',
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  computed: {
    rowStyle() {
      let { gutter } = this
      return {
        marginLeft: -gutter / 2 + 'px',
        marginRight: -gutter / 2 + 'px'
      }
    }
  },
  mounted() {
    // 将 gutter 属性传给子组件
    this.$children.forEach(vm => {
      vm.gutter = this.gutter
    })
  }
}
</script>
<style scoped lang="scss">
.row {
  display: flex;
}
</style>