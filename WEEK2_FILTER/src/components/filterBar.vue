<template>
  <div id="filter-container">
    <div class="filter-block">
      <div class="filter-title">Location</div>
      <div class="filter-content">
        <input type="select">
      </div>
    </div>
    <div class="filter-block">
      <div class="filter-title">Date</div>
      <div class="filter-content">
        <div class="filter-time">
          <div>from</div>
          <input type="text">
        </div>
        <div class="filter-time">
          <div>to</div>
          <input type="text">
        </div>
      </div>
    </div>
    <div class="filter-block">
      <div class="filter-title">Categories</div>
      <div class="filter-content filter-check">
        <div>
          <input id="checkAll" type="checkbox"><label for="checkAll">All</label>
        </div>
        <div>
          <input id="checkEntertainment" type="checkbox"><label for="checkEntertainment">Entertainmen</label>
        </div>
        <div>
          <input id="checkFood" type="checkbox"><label for="checkFood">Food</label>
        </div>
        <div>
          <input id="checkLearning" type="checkbox"><label for="checkLearning">Learning</label>
        </div>
        <div>
          <input id="checkOutdoors" type="checkbox"><label for="checkOutdoors">Outdoors</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

#filter-container {
  @include font-paragraph();
  box-sizing: border-box;
  background-color: $color-gray-2;
  padding: 20px 40px;
  border-radius: 2px;
  width: 300px;

  &:not(:last-child) {
    border-bottom: 1px solid $color-gray-3;
  }
}

input {
  @include font-paragraph();
  box-sizing: border-box;
  padding: 3px 5px;
}

.filter-block {
  padding: 25px 0;
  .filter-title {
    @include font-title-sm();
    margin-bottom: 10px;
  }

  .filter-content {
    .filter-time {
      display: flex;
      align-items: center;
      margin: 4px 0;
      div{
        flex: 0 0 35px;
        text-align: right;
        margin-right: 10px;
      }
      input {
        flex: 1;
        width: 160px;
      }
    }

    &.filter-check {
      display: flex;
      flex-direction: column;
      input {
        &:hover {
          cursor: pointer;
        }
      }
      label{
        cursor: pointer;
      }
    }
  }
}
</style>
