webpackJsonp([0],{"/zXG":function(t,s){},"2lMp":function(t,s){},"4/As":function(t,s){},E8Ni:function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("7+uW"),i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"navbar"}},[a("div",{attrs:{id:"logo"}},[t._v("SHOPTIME")]),t._v(" "),a("div",{attrs:{id:"menu"}},[a("router-link",{staticClass:"menu-item",attrs:{to:"/"}},[t._v("\n        Home\n      ")]),t._v(" "),a("router-link",{staticClass:"menu-item",attrs:{to:"/order"}},[t._v("\n        Orders\n      ")]),t._v(" "),a("router-link",{staticClass:"menu-item",attrs:{to:"/product"}},[t._v("\n        Products\n      ")])],1),t._v(" "),a("div",{attrs:{id:"login"}},[t._v("ADMIN")])]),t._v(" "),a("div",{attrs:{id:"content"}},[a("router-view")],1)])},staticRenderFns:[]};var r=a("VU/8")({name:"App",data:function(){return{activePage:"home"}},methods:{setActive:function(t){this.activePage=t}}},i,!1,function(t){a("E8Ni")},"data-v-0bd6710a",null).exports,n=a("/ocq"),c={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[t._m(0),t._v(" "),a("div",{staticClass:"row",attrs:{id:"total-row"}},[a("div",{staticClass:"card"},[t._m(1),t._v(" "),a("div",{directives:[{name:"thousands",rawName:"v-thousands",value:t.totalRevenue,expression:"totalRevenue"}],staticClass:"stat-num",attrs:{id:"total-revenue"}})]),t._v(" "),a("div",{staticClass:"card"},[t._m(2),t._v(" "),a("div",{directives:[{name:"thousands",rawName:"v-thousands",value:t.totalCost,expression:"totalCost"}],staticClass:"stat-num",attrs:{id:"total-cost"}})]),t._v(" "),a("div",{staticClass:"card"},[t._m(3),t._v(" "),a("div",{directives:[{name:"thousands",rawName:"v-thousands",value:t.netIncome,expression:"netIncome"}],staticClass:"stat-num",attrs:{id:"net-income"}})])]),t._v(" "),t._m(4),t._v(" "),a("div",{staticClass:"row",attrs:{id:"detail-row"}},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[t._v("Transaction Website")]),t._v(" "),a("div",{attrs:{id:"transaction-block"}},t._l(t.website,function(s){return a("div",{key:s.url,staticClass:"web-item"},[a("i",{staticClass:"icon fab fa-2x",class:s.icon}),t._v(" "),a("span",{staticClass:"web-url"},[t._v(t._s(s.url))]),t._v(" "),a("span",{directives:[{name:"thousands",rawName:"v-thousands",value:s.total,expression:"web.total"}],staticClass:"web-total"}),t._v(" "),a("span",{staticClass:"web-increase",class:s.increase>0?"increase":"decrease"},[s.increase>0?a("i",{staticClass:"fas fa-arrow-up"}):a("i",{staticClass:"fas fa-arrow-down"}),t._v(" "),a("span",{staticClass:"increase-num"},[t._v(t._s(Math.abs(s.increase))+"%")])])])}))]),t._v(" "),a("div",{staticClass:"card"},[a("div",{staticClass:"card-title"},[t._v("Lastest Orders")]),t._v(" "),a("div",{attrs:{id:"order-block"}},t._l(t.latestOrders,function(s,e){return a("div",{key:e,staticClass:"order-item"},[a("div",{staticClass:"order-image",style:{background:"url("+s.imgsrc+") no-repeat center center"}}),t._v(" "),a("div",{staticClass:"order-info"},[a("div",{staticClass:"order-product"},[t._v(t._s(s.product))]),t._v(" "),a("div",{staticClass:"order-time"},[a("i",{staticClass:"icon fas fa-sm fa-clock"}),t._v("\n              "+t._s(s.orderTime)+"\n            ")]),t._v(" "),a("div",{staticClass:"order-account"},[a("i",{staticClass:"icon fas fa-male"}),t._v("\n              "+t._s(s.account)+"\n            ")])]),t._v(" "),a("div",{staticClass:"order-total"},[a("span",[t._v("Total")]),t._v(" "),a("span",{directives:[{name:"thousands",rawName:"v-thousands",value:s.price,expression:"order.price"}],staticClass:"order-price"})])])}))])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row",attrs:{id:"title-row"}},[s("div",{attrs:{id:"title"}},[this._v("OVERVIEW")]),this._v(" "),s("div",{attrs:{id:"toolbar"}},[s("span",{staticClass:"toolname"},[this._v("2018/06/06")]),this._v(" "),s("span",{staticClass:"toolname"},[this._v("2018/06/18")]),this._v(" "),s("span",{staticClass:"toolname"},[this._v("Weekly")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"total-title"},[s("i",{staticClass:"icon fas fa-lg fa-hand-holding-usd"}),this._v(" "),s("span",[this._v("TOTAL REVENUE")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"total-title"},[s("i",{staticClass:"icon fas fa-lg fa-boxes"}),this._v(" "),s("span",[this._v("TOTAL COST")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"total-title"},[s("i",{staticClass:"icon fas fa-lg fa-money-bill"}),this._v(" "),s("span",[this._v("NET INCOME")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"row",attrs:{id:"chart-row"}},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-title"},[this._v("Activity")]),this._v(" "),s("div",{attrs:{id:"chart"}})])])}]};var o=a("VU/8")({data:function(){return{totalRevenue:54540,totalCost:12660,netIncome:42880,website:[{icon:"fa-facebook-square",url:"Facebook.com",total:45836,increase:20},{icon:"fa-google",url:"google.com",total:23582,increase:12},{icon:"fa-ebay",url:"Ebay.com",total:2489,increase:-15},{icon:"fa-wordpress",url:"Wordpress.com",total:1057,increase:-30}],latestOrders:[{product:"Vintage T-shirt",orderTime:"2018/6/13  13:42",account:"Belle Willis",price:"3200",imgsrc:"https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"},{product:"Cowboy Jacket",orderTime:"2018/6/13  10:45",account:"Adrian Cummings",price:"2800",imgsrc:"https://images.pexels.com/photos/1173847/pexels-photo-1173847.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"},{product:"Coach Coat",orderTime:"2018/6/13  8:26",account:"Lura Holland",price:"1600",imgsrc:"https://images.pexels.com/photos/158648/girl-coat-old-coat-brown-coat-158648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100&w=100"}]}}},c,!1,function(t){a("oAuv")},"data-v-65e45886",null).exports,l={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("div",{staticClass:"toolbar"},[s("select-button",{attrs:{width:"200px",icon:"plus"}},[this._v("ADD NEW PRODUCT")])],1),this._v(" "),s("general-table")],1)},staticRenderFns:[]};var d=a("VU/8")({},l,!1,function(t){a("4/As")},"data-v-580ebe8e",null).exports,v={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  Products\n")])},staticRenderFns:[]};var u=a("VU/8")({},v,!1,function(t){a("uKah")},"data-v-d3ee8090",null).exports;e.a.use(n.a);var p=new n.a({routes:[{path:"/",name:"Home",component:o},{path:"/order",name:"Order",component:d},{path:"/product",name:"Product",component:u}]}),_={props:{type:{type:String,default:"primary"},width:{type:String,default:"150px"},icon:{type:String,default:"triangle"}}},m={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"button",class:this.type,style:{width:this.width}},[s("span",[this._t("default")],2),this._v(" "),"triangle"===this.icon?s("div",{staticClass:"triangle"}):"plus"===this.icon?s("i",{staticClass:"fas fa-plus fa-sm"}):this._e()])},staticRenderFns:[]};var h=a("VU/8")(_,m,!1,function(t){a("g2r3")},"data-v-4a1e5734",null).exports,f={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"table-container"},[s("div",{staticClass:"table-header-container"},[s("table",[s("th")])]),this._v(" "),s("div",{staticClass:"table-content-container"},[s("table",[s("tr")])])])}]};var C=a("VU/8")({},f,!1,function(t){a("mru9")},"data-v-840ccc0e",null).exports;function g(t,s){t.innerHTML=s.value.toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,function(t,s,a){return s+a.replace(/\d{3}/g,",$&")})}a("/zXG"),a("2lMp"),e.a.config.productionTip=!1,e.a.component("select-button",h),e.a.component("general-table",C),e.a.directive("thousands",{inserted:function(t,s){return g(t,s)},update:function(t,s){return g(t,s)}}),new e.a({el:"#app",router:p,components:{App:r},template:"<App/>"})},g2r3:function(t,s){},mru9:function(t,s){},oAuv:function(t,s){},uKah:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.982335097414d3fcf902.js.map