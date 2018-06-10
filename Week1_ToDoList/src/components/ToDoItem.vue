<template>
  <div class="todo-item">
    <div class="item-header">
      <div class="item-title">
        <input type="checkbox">
        <span class="item-name">Type Something Here</span>
      </div>
      <div class="item-action">
        <i class="icon far fa-lg fa-star"></i>
        <!-- <i class="fas fa-lg fa-star"></i> -->
        <i class="icon icon-edit far fa-lg fa-edit"></i>
      </div>
    </div>
    <div class="item-subheader">
      <i class="icon far fa-calendar-alt"></i>
      <span class="item-date">6/18</span>
      <i class="icon far fa-file"></i>
      <i class="icon far fa-comment-dots"></i>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.todo-item {
  box-sizing: border-box;
  border-radius: 4px;
  margin: 4px 0;
  padding: 20px 30px;
  width: $general-width;
  background-color: $color-lighter-grey;

  display: flex;
  flex-direction: column;

  .item-header{
    margin-bottom: 15px;
    display: flex;
    justify-content: space-between;
    .item-title {
      @include font-title();
      display: flex;
      justify-content: center;
      .item-name {
        margin-left: 16px;
      }
      input[type=checkbox] {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }
    .item-action {
      display: flex;
      align-items: center;
      .icon {
        cursor: pointer;
      }
      .icon-edit {
        margin-left: 32px;
      }
    }
  }

  .item-subheader{
    display: flex;
    align-items: center;
    margin-left: 48px;
    color: $color-dark-grey;
    .icon {
      margin: 0 8px;
    }
    .item-date{
      @include font-paragraph();
      width: 42px;
    }
    :first-child{
      margin-left: 0px;
    }

  }
}

</style>
