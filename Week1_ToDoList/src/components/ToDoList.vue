<template>
  <div>
    <div id="page-header">
      <div v-for="page in menuPages" :key="page.name"
        class="menu"
        :class="{'selected-page': selectedPage === page.name}"
        @click="setSelectedPage(page.name)">
        {{ page.name }}
      </div>
    </div>
    <div id="page-content">
      <div id="add-item-block">
        <i class="fas fa-2x fa-plus"></i>
        <span>Add Task</span>
      </div>
      <to-do-item></to-do-item>
      <to-do-edit></to-do-edit>
    </div>
  </div>
</template>
<script>
import ToDoItem from './ToDoItem';
import ToDoEdit from './ToDoEdit';

export default {
  components: {
    ToDoItem,
    ToDoEdit,
  },
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

#page-content {
  display: flex;
  flex-direction: column;
  align-items: center;

  #add-item-block {
    box-sizing: border-box;
    width: $general-width;
    height: 65px;
    margin: 24px 0;
    padding: 18px 32px;
    background-color: $color-white;
    border-radius: 4px;
    border: 2px solid $color-grey;
    color: $color-grey;
    cursor: pointer;
    display: flex;
    align-items: center;
    span {
      @include font-title();
      margin-left: 14px;
    }
  }
}

</style>
