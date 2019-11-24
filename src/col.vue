<template>
  <div class="col"
       :class="[`col-${span}`]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    span: {
      type: [Number, String]
    }
  }
}
</script>

<style scoped lang='scss'>
.col {
  height: 100px;
  background: grey;
  width: 50%;
  border: 1px solid red;

  //声明前缀
  $class-prefix: col-;
  // 遍历24次
  @for $n from 1 through 24 {
    // 插值语法 #{}
    &.#{$class-prefix}#{$n} {
      width: ($n / 24) * 100%;
    }
  }
}
</style>
