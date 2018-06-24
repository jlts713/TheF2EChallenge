<template>
  <div class="button" :class="type" :style="{width: width}">
    <span><slot></slot></span>
    <div v-if="icon === 'triangle'" class="triangle"></div>
    <i v-else-if="icon === 'plus'" class="fas fa-plus fa-sm"></i>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary',
    },
    width: {
      type: String,
      default: '150px',
    },
    icon: {
      type: String,
      default: 'triangle',
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

.button {
  @include font-14px();
  box-sizing: border-box;
  border-radius: 4px;
  height: 34px;
  color: $color-white;
  padding: 8px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
  &:active {
    opacity: 0.9;
    cursor: pointer;
  }

  &.primary {
    background-color: $color-black;
  }
  &.green {
    background-color: $color-green;
  }
  &.orange {
    background-color: $color-orange;
  }
  &.gray {
    background-color: #9B9B9B;
  }

  .triangle {
    width: 0;
    height: 0;
    border-top: 6px solid white;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
  }
}
</style>
