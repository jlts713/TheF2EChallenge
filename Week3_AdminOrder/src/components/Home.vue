<template>
  <div>
    <div id="title-row" class="row">
      <div id="title">OVERVIEW</div>
      <div id="toolbar">
        <span class="toolname">2018/06/06</span>
        <span class="toolname">2018/06/18</span>
        <span class="toolname">Weekly</span>
      </div>
    </div>
    <div id="total-row" class="row">
      <div class="card">
        <div class="total-title">
          <i class="icon fas fa-lg fa-hand-holding-usd"></i>
          <span>TOTAL REVENUE</span>
        </div>
        <div id="total-revenue" class="stat-num" v-thousands="totalRevenue">
        </div>
      </div>
      <div class="card">
        <div class="total-title">
          <i class="icon fas fa-lg fa-boxes"></i>
          <span>TOTAL COST</span>
        </div>
        <div id="total-cost" class="stat-num" v-thousands="totalCost">
        </div>
      </div>
      <div class="card">
        <div class="total-title">
          <i class="icon fas fa-lg fa-money-bill"></i>
          <span>NET INCOME</span>
        </div>
        <div id="net-income" class="stat-num" v-thousands="netIncome">
        </div>
      </div>
    </div>

    <div id="chart-row" class="row">
      <div class="card">
        <div class="card-title">Activity</div>
        <div id="chart"></div>
      </div>
    </div>

    <div id="detail-row" class="row">
      <div class="card">
        <div class="card-title">Transaction Website</div>
        <div id="transaction-block">
          <div class="web-item" v-for="web in website" :key="web.url">
            <i class="icon fab fa-2x" :class="web.icon"></i>
            <span class="web-url">{{ web.url }}</span>
            <span class="web-total" v-thousands="web.total"></span>
            <span class="web-increase" :class="web.increase > 0 ? 'increase':'decrease'">
              <i v-if="web.increase > 0" class="fas fa-arrow-up"></i>
              <i v-else class="fas fa-arrow-down"></i>
              <span class="increase-num">{{ Math.abs(web.increase) }}%</span>
            </span>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-title">Lastest Orders</div>
        <div id="order-block">
          <div class="order-item" v-for="(order, idx) in latestOrders" :key="idx">
            <div class="order-image" :style="{background: `url(${order.imgsrc}) no-repeat center center`}">
            </div>
            <div class="order-info">
              <div class="order-product">{{order.product}}</div>
              <div class="order-time"> 
                <i class="icon fas fa-sm fa-clock"></i>
                {{order.orderTime}}
              </div>
              <div class="order-account">
                <i class="icon fas fa-male"></i>
                {{order.account}}
              </div>
            </div>
            <div class="order-total">
              <span>Total</span>
              <span class="order-price" v-thousands="order.price"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      totalRevenue: 54540,
      totalCost: 12660,
      netIncome: 42880,
      website: [{
        icon: 'fa-facebook-square',
        url: 'Facebook.com',
        total: 45836,
        increase: 20,
      }, {
        icon: 'fa-google',
        url: 'google.com',
        total: 23582,
        increase: 12,
      }, {
        icon: 'fa-ebay',
        url: 'Ebay.com',
        total: 2489,
        increase: -15,
      }, {
        icon: 'fa-wordpress',
        url: 'Wordpress.com',
        total: 1057,
        increase: -30,
      }],
      latestOrders: [{
        product: 'Vintage T-shirt',
        orderTime: '2018/6/13  13:42',
        account: 'Belle Willis',
        price: '3200',
        imgsrc: 'https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100',
      }, {
        product: 'Cowboy Jacket',
        orderTime: '2018/6/13  10:45',
        account: 'Adrian Cummings',
        price: '2800',
        imgsrc: 'https://images.pexels.com/photos/1173847/pexels-photo-1173847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100',
      }, {
        product: 'Coach Coat',
        orderTime: '2018/6/13  8:26',
        account: 'Lura Holland',
        price: '1600',
        imgsrc: 'https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100',
      }],
    };
  },
}
</script>
<style lang="scss" scoped>
@import '@/assets/style/variables.scss';

.row {
  margin: 20px 0;
  display:flex;
  .card:not(:last-child) {
    margin-right: 20px;
  }
  .card {
    box-sizing: border-box;
    background: $color-white;
    padding: 30px 40px;
    .card-title {
      @include font-title();
      font-weight: bold;
    }
  }
}
#title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  #title {
    @include font-title();
  }
  .toolname{
    @include font-16px();
    color: $color-gray-4;
  }
}

#total-row {
  height: 138px;
  .card {
    width: calc(100% / 3);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .total-title {
      font-weight: bold;
      display: flex;
      align-items: center;
      justify-content: center;
      .icon {
        margin-right: 10px;
      }
    }
    .stat-num {
      @include font-title-lg();
      text-align: center;
    }
    #total-revenue {
      color: $color-green;
    }
    #total-cost {
      color: $color-red;
    }
    #net-income {
      color: $color-blue;
    }
  }
}

#chart-row {
  height: 400px;
  .card{
    width: 100%;
    display: flex;
    flex-direction: column;
    #chart {
      border: 1px solid red;
    }
  }
}

#detail-row {
  height: 460px;
  .card{
    width: 50%;
  }

  #transaction-block {
    .web-item {
      &:not(:last-child) {
        border-bottom: 1px solid $color-gray-3;
      }
      display: flex;
      align-items: center;
      height: 90px;

      :not(:last-child) {
        margin-right: 20px;
      }
      .icon {
        flex: 0 0 40px;
      }
      .web-url{
        @include font-16px();
        flex: 1;
        color: #9B9B9B;
      }
      .web-total{
        flex: 0 0 60px;
        @include font-title-sm();
        text-align: right;
      }
      .web-increase{
        flex: 0 0 70px;
        @include font-16px();

        display: flex;
        align-items: center;
        justify-content: space-between;
        &.increase {
          color: $color-red;
        }
        &.decrease {
          color: $color-green;
        }
      }
    }
    
  }

  #order-block {
    .order-item{
      height: 100px;
      display: flex;
      padding: 8px 0;
      &:not(:last-child) {
        border-bottom: 1px solid $color-gray-3;
      }
      .order-image {
        flex: 0 0 100px;
        overflow: hidden;
      }
      .order-info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px 20px;
        .order-product {
          @include font-title-sm();
          margin: 5px 0;
        }
        .order-time, .order-account {
          color: $color-gray-4;
          margin: 5px 0;
          display: flex;
          align-items: center;
          .icon {
            width: 16px;
            margin-right: 3px;
          }
        }
      }
      .order-total {
        flex: 0 0 60px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 10px 0;
        span {
          text-align: right;
        }
        .order-price {
          @include font-title-sm();
        }
      }
    }
  }
}
</style>
