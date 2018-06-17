<template>
  <div id="content-container">
  <div id="filter-info">
    <div id="filter-result">Showing <span id="result-num">{{ resultNum }}</span> results by</div>
    <div id="filter-tags">
      <template v-for="tag in tags">
        <span class="tag" :key="tag">
          {{ tag }}
          <i class="far fa-times-circle remove-button"></i>
        </span>
      </template>
    </div>
  </div>
  <div id="result-container">
    <div v-for="(result, idx) in results" :key="idx" class="result-card">
      <div class="result-img"></div>
      <div class="result-info">
        <div class="result-title">{{ result.title }}</div>
        <div class="result-paragraph">
          {{ result.paragraph }}
        </div>
        <div class="result-row result-row-first">
          <span class="result-name">{{ result.name }}</span>
          <span v-for="tag in label" :key="tag" class="result-tag">{{ tag }}</span>
        </div>
        <div class="result-row result-row-second">
          <div class="result-mark">
            <i class="fas fa-map-marker-alt"></i>
            <span>{{ result.city }}</span>
          </div>
          <div class="result-mark">
            <i class="far fa-calendar-alt"></i>
            <span>{{ result.time }}</span>
          </div>
        </div>
      </div>
    </div>  
  </div>
  <div id="pager-container">
    <div class="pager-block prev"> << </div>
    <div class="pager-block active"> 1 </div>
    <div class="pager-block"> 2 </div>
    <div class="pager-block"> 3 </div>
    <div class="pager-block"> 4 </div>
    <div class="pager-block"> 5 </div>
    <div class="pager-block next"> >> </div>
  </div>
  </div> 
</template>
<script>
export default {
  data() {
    return {
      resultNum: 15,
      tags: ['Koahsiang', 'Entertainment'],
      results: [
        {
          title: 'Kogi Cosby sweater.',
          paragraph: 'Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id.',
          name: 'Ethan Foster',
          label: ['Entertainment'],
          city: 'Kaohsiung City',
          time: '2018/5/24 - 2018/5/31',
        },
        {
          title: 'Kogi Cosby sweater.',
          paragraph: 'Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id.',
          name: 'Ethan Foster',
          label: ['Entertainment'],
          city: 'Kaohsiung City',
          time: '2018/5/24 - 2018/5/31',
        },
        {
          title: 'Kogi Cosby sweater.',
          paragraph: 'Donec euismod scelerisque ligula. Maecenas eu varius risus, eu aliquet arcu. Curabitur fermentum suscipit est, tincidunt mattis lorem luctus id.',
          name: 'Ethan Foster',
          label: ['Entertainment'],
          city: 'Kaohsiung City',
          time: '2018/5/24 - 2018/5/31',
        },
      ]
    };
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

#content-container {
  display: flex;
  flex-direction: column;
  #pager-container {
    flex: 0 0 42px;
  }
}
#filter-info {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  #filter-result {
    @include font-title();
    margin-bottom: 8px;
    #result-num {
      color: $color-purple;
    }
  }
  #filter-tags {
    display: flex;
    :not(:last-child) {
      margin-right: 8px;
    }
    .tag {
      @include font-label();
      border: 1px solid $color-purple;
      color: $color-purple;
      border-radius: 100px;
      padding: 8px 16px;

      .remove-button {
        &:hover {
          cursor: pointer;
        }
      }
      &:hover {
        background-color: $color-purple;
        color: $color-white;
      }
    }
  }
}


#result-container {
  .result-card {
    height: 220px;
    width: 100%;
    margin: 12px 0;
    background: $color-white;
    display: flex;
    .result-img {
      flex: 0 0 220px;
      background: $color-gray-4;
    }
    .result-info {
      flex: 1;
      padding: 24px 20px;
      display: flex;
      flex-direction: column;
      .result-title {
        @include font-title();
        color: $color-purple;
        margin-bottom: 16px;
      }
      .result-paragraph {
        flex: 1;
      }
      .result-row {
        flex: 0 0 24px;
        display: flex;
        align-items: center;
        &.result-row-first {
          margin: 16px 0;
        }
        .result-name {
          font-weight: bold;
          margin-right: 20px;
        }
        .result-tag {
          @include font-label();
          color: $color-white;
          background: $color-gray-3;
          border-radius: 100px;
          padding: 3px 16px;
        }
      }

      .result-row-second {
        .result-mark {
          margin-right: 20px;
          color: $color-gray-4;
        }
      }
    }
  }
}

#pager-container {
  @include font-paragraph();
  display: flex;
  justify-content: flex-end;
  .pager-block {
    display: inline-block;
    box-sizing: border-box;
    width: 42px;
    height: 42px;
    padding: 10px 16px; 
    background-color: $color-white;
    color: $color-purple;
    vertical-align: center;
    text-align: center;

    &:hover{
      background-color: $color-gray-1;
      cursor: pointer;
    }

    &.active {
      background-color: $color-purple;
      color: $color-white;
    }
  }
}
</style>
