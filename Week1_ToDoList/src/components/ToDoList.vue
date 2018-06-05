<template>
  <div id="page-header">
    <div v-for="page in menuPages" :key="page.name"
      class="menu"
      :class="{'selected-page': selectedPage === page.name}"
      @click="setSelectedPage(page.name)">
      {{ page.name }}
    </div>
  </div>
</template>
<script>
export default {
   data(){
     return {
       selectedPage: 'My Tasks',
       menuPages: [
        {
          name: 'My Tasks',
        },
        {
          name: 'In Progress',
        },
        {
          name: 'Completed',
        }
       ],
     };
   },
   methods: {
     setSelectedPage(pagename) {
       this.selectedPage = pagename; 
     },
   },
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';

$header-height: 76px;
#page-header {
  @include font-title();
  width: 100%;
  height: $header-height;
  background: $color-light-blue;
  display: flex;
  align-items: center;
  justify-content: center;
  .menu {
    box-sizing: border-box;
    color: $color-dark-blue;
    flex: 0 0 220px;
    height: $header-height;
    line-height: $header-height;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: $color-white;
    }
    &.selected-page {
      color: $color-white;
      border-bottom: 5px solid $color-dark-blue;
    }
  }
}

</style>
