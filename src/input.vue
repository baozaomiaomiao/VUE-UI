<template>
  <div class="wrapper"
       :class="{ error }">
    <input :value="value"
           type="text"
           :disabled="disabled"
           :readonly="readonly"
           @change="$emit('change', $event.target.value)"
           @input="$emit('input', $event.target.value)"
           @focus="$emit('focus', $event.target.value)"
           @blur="$emit('blur', $event.target.value)" />
    <template v-if="error">
      <!--通过判断error 来确认是否展示提示信息。 -->
      <icon name="error"
            class="icon-error"></icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
import Icon from './icon'
export default {
  components: { Icon },
  name: 'g-input', // name 可以方便 vue开发者工具调试。自定义名字描述
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-raduis: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }
  > input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-raduis;
    padding: 0 8px;
    font-size: inherit;
    &:hover {
      border-color: #666;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled],
    &[readonly] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
  &.error {
    input {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .error-message {
    color: $red;
  }
}
</style>
