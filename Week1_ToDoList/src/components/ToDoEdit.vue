<template>
  <div class="todo-edit">
    <div class="edit-header">
      <div class="edit-title">
        <input type="checkbox">
        <input type="text" class="edit-name" v-model="title" placeholder="Type Something Here">
      </div>
      <div class="edit-action">
        <i class="icon far fa-lg fa-star"></i>
        <!-- <i class="fas fa-lg fa-star"></i> -->
        <i class="icon icon-edit fas fa-lg fa-edit"></i>
      </div>
    </div>
    <div class="edit-content">
      <div class="edit-content-block edit-datetime">
        <div class="edit-row-title">
          <i class="icon far fa-calendar-alt"></i>
          <span>Deadline</span>
        </div>
        <div class="edit-row-content">
          <input type="text" placeholder="yyyy/mm/dd">
          <input type="text" placeholder="hh/mm">
        </div>
      </div>
      <div class="edit-content-block edit-file">
        <div class="edit-row-title">
          <i class="icon far fa-file"></i>
          <span>File</span>
        </div>
        <div class="edit-row-content">
          <div class="add-file-button"></div>
        </div>
      </div>
      <div class="edit-content-block edit-comment">
        <div class="edit-row-title">
           <i class="icon far fa-comment-dots"></i>
           <span>Comment</span>
        </div>
        <div class="edit-row-content">
          <textarea name="comment" rows="5" placeholder="Type your memo here..."></textarea>
        </div>
      </div>
    </div>
    <div class="edit-footer">
      <div class="footer-btn cancel-btn">Close</div>
      <div class="footer-btn save-btn">Save</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: 'Type Something Here',
    }
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/styles/variables.scss';
.todo-edit {
  box-sizing: border-box;
  border-radius: 4px;
  margin: 4px 0;
  height: 520px;
  width: $general-width;
  background-color: $color-lighter-grey;

  display: flex;
  flex-direction: column;

  .edit-header{
    flex: 0 0 auto;
    padding: 20px 30px;
    border-bottom: 2px solid $color-grey;
    display: flex;
    justify-content: space-between;
    .edit-title {
      @include font-title();
      display: flex;
      justify-content: center;
      .edit-name {
        @include font-title();
        margin-left: 16px;
        border: 0;
        outline: none;
        background-color: $color-lighter-grey;
      }
      input[type=checkbox] {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }
    }
    .edit-action {
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

  .edit-content {
    flex: 1 1 auto;
    padding: 0 75px;
    display: flex;
    flex-direction: column;
    .edit-content-block {
      margin-bottom: 25px;
    }
    .edit-row-title {
      @include font-subtitle();
      margin: 8px 0;
      display: flex;
      align-items: center;
      .icon {
        width: 24px;
      }
      span {
        margin-left: 5px;
      }
    }

    .edit-row-content {
      input {
        @include font-paragraph();
        border: 0px;
        border-radius: 2px;
        padding: 8px 16px;
      }
      textarea {
        @include font-paragraph();
        width: 100%;
        border: 0px;
        border-radius: 2px;
        padding: 8px 16px;
      }
    }
  }
  .edit-footer {
    flex: 0 0 60px;
    box-sizing: content-box;
    height: 60px;
    display: flex;
    .footer-btn {
      @include font-title();
      width: 50%;
      height: 60px;
      line-height: 60px;
      text-align: center;
      cursor: pointer;
    }

    .cancel-btn {
      border-bottom-left-radius: 4px;
      background: $color-white;
      color: $color-red;
      &:hover {
        background: #FDFDFD;
      }
    }
    .save-btn {
      border-bottom-right-radius: 4px;
      background: $color-light-blue;
      color: $color-white;
      &:hover {
        background: #3982D7;
      }
    }

  }
}
</style>
