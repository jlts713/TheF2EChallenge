<template>
  <div>
    <div class="toolbar">
      <select-button :width="'200px'" :icon="'plus'">ADD NEW PRODUCT</select-button>
    </div>
    <general-table></general-table>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

