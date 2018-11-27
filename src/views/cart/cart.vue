<template>
    <div>
        <header class="o-c-header" data-reactid=".0.0">
            <div class="back" data-reactid=".0.0.0">
                <p data-reactid=".0.0.0.0"> <a href="javascript:history.go(-1);">&lt;  </a>
                </p>
            </div>
            <div class="title" data-reactid=".0.0.1">
                <span data-reactid=".0.0.1.0">购物车</span><span ><span >(</span><span
                        data-reactid=".0.0.1.1.1">{{allcount}}</span><span>)</span></span>
            </div>
            <div  class="place" @click="place"><span v-if="!city">收货地点</span><span v-else>({{(city)}})</span></div>
        </header>
        <main>
           <div id="cart" >
			<div style="position: relative;" class="cart-one" v-for="(item,index) of products" :key="index">
                <div class="cart-one-o">
                     <div class='ritem_radio'>
                         <!-- <checker v-model="checkIcon" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected" >
                            <checker-item :value="{'pri':item.item.LQTaobaoItem.ShowPrice,'nub':item.inventory}" :key="item.value" @on-item-click='itemclick' ></checker-item>
                        </checker> -->
                        <input type="checkbox" :data-index='index' @click="switchClick($event)" style="width:.3rem;height:.2rem">
                        <!-- <button style="width:.3rem;height:.2rem"></button> -->
                       <!-- <span:style="item.ischecked?'background:#fcc':'background:#000'"></span> -->
                     </div>
                     <div class="cart-img">
                         <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAMAAADW3miqAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpFRjQ4QTZBMjczMkYxMUU1OTIxNEVBNEM3N0VGQTM4QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpFRjQ4QTZBMzczMkYxMUU1OTIxNEVBNEM3N0VGQTM4QiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVGNDhBNkEwNzMyRjExRTU5MjE0RUE0Qzc3RUZBMzhCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkVGNDhBNkExNzMyRjExRTU5MjE0RUE0Qzc3RUZBMzhCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+cikVKAAAAwBQTFRF0Ds6aWFg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" alt="">
                     </div>
                     <div class="title">
                         <span class="title-t">{{item.item.LQTaobaoItem&&item.item.LQTaobaoItem.SellerNick}}</span>
                         <span>&gt;</span>
                     </div>
                     <div class="lingq">
                         <span>领券</span>
                            <b>|</b>
                        <span>编辑</span>
                     </div>
                </div>
                <!-- v-for="(item,idx) in products" :key="idx" -->
				<div class="ritem" >
                    <!-- 选中的图片 -->
					<div class='ritem_radio' >
                         <!-- <checker v-model="checkIcon" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                            <checker-item :value="item.item.LQTaobaoItem.ShowPrice" :key="item.value"></checker-item>
                        </checker> -->
					</div>
					<!-- 图片 -->
					<div class='ritem_l'>
						<img :src="item.item.LQTaobaoItem&&item.item.LQTaobaoItem.PicUrl" mode='aspectFit' />
					</div>
                    <div class='ritem_r'>
						<!-- 标题 -->
                        <!-- {{item.title}}{{item.spec}} -->
						<div class='title twoline'>{{item.item.LQTaobaoItem&&item.item.LQTaobaoItem.Title}}</div>
						<!-- 状态 -->
						<div class='status'>
							<span>{{item.item.LQTaobaoItem&&item.item.LQTaobaoItem.SubTitle}}</span>
						</div>
						<!-- 价格加购物车 -->
						<div class='desc'>
							<!-- 价格 -->
							<div class='price'>
								<span class='pri'>￥{{item.item.LQTaobaoItem&&item.item.LQTaobaoItem.ShowPrice}}</span>
								<!-- <span class='orig'>￥{{item.orig}}</span> -->
							</div>
							<!-- 购物车 -->
							<div class='count'>
                          
								<span class='bor jian' :data-index='index' @click="jianClick($event)">-</span>
								<span class='num'>{{item.inventory}}</span>
								<span class='bor jia' :data-index='index' v-on:click='jiaClick($event)'>+</span>
						
						
							</div>
						</div>
					</div>
				</div>
			</div>

		    </div>
        </main>
        <mt-popup
        v-model="popup"
        position="bottom" style="width:100%">
         <mt-picker :slots="slots" @change="onValuesChange" style="width:100%"></mt-picker>
        </mt-popup>
      <div>
        <!-- <checker type="checkbox" >
            <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
        </checker> -->
      </div>
       <cartBar @allClick="allClick" :totalmoney='{totalmoney,allcount}'></cartBar>
    </div>
</template>

<script>
import {  CheckIcon,Checker, CheckerItem  } from 'vux'
import { Checklist,Picker,Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);
Vue.component(Picker.name, Picker);
import Vue from 'vue'
Vue.component(Checklist.name, Checklist);
import {mapState,mapGetters,mapActions} from 'vuex'
import cartBar from 'components/common/cart/cartBar'
export default {
    components:{
        CheckIcon,
        Checker,
        CheckerItem,
        cartBar
    },
   data() {
    return {
        allcount:0,
        totalmoney:0,
        zongjia:'',
        demo1:false,
        checkIcon:null,
        check1: false,
        demo2: true,
        popup:false,
      slots: [
        {
          flex: 1,
          values: ['山西', '北京',"河南",'上海' ],
          className: 'slot1',
          textAlign: 'right'
        }, {
          divider: true,
          content: '-',
          className: 'slot2'
        }, {
          flex: 1,
          values: ['1', '2', '3', '4', ],
          className: 'slot3',
          textAlign: 'left'
        }
      ]
    };
  },

    computed:{
        ...mapState('cart',{
            products:'items'
        }),
        ...mapState('citypick',{
            city:'city'
        }),
         ...mapState('cart',{
            allchecked:'allchecked'
        }),
     
     
    },
    updated() {
        
        // console.log(this.products);
        
    },
    methods:{
        count: function() {
            var that = this;
            var list = this.products;
            var allcount = 0; //被选中个数
            var len = list.length; //加入购物车个数
           var totalmoney = 0 
            var discount = 0;
            for(var i = 0; i < len; i++) {
                if(list[i].ischecked) {
                    var c = list[i].inventory; //个数
                    allcount += parseInt(c);
                    var p = 100;
                    totalmoney += c * p;
                }
            }
            this.allcount =allcount
            this.totalmoney = totalmoney
            console.log(this.allcount);
            
            console.log(this.totalmoney);
            
            //						that.setData({
            // vue.allcount = allcount,
            //     vue.totalmoney = totalmoney.toFixed(2),
            //     vue.total = (totalmoney - discount).toFixed(2)
            //						});
            //购物车显示选中的数量
            //						if(allcount <= 0) {
            //							wx.removeTabBarBadge({
            //								index: 2,
            //							})
            //						} else {
            //							wx.setTabBarBadge({
            //								index: 2,
            //								text: allcount + "",
            //							})
            //
            //
        },
    //全选/反选
            allClick: function(e) {
    
                var list = this.products;
                var allchecked = this.allchecked;
                for(var i = 0; i < list.length; i++) {
                    list[i].ischecked = !allchecked;
                }
            //     //						this.setData({
              
                this.$store.dispatch('cart/allc',!allchecked)
                console.log(this.allchecked);
                 console.log(this.products);
                this.$store.dispatch('cart/prod',list)
                //						});
                this.count();
                
            },
        //选中未选中
            switchClick: function(e) {
                var that = this;
                var idx = e.currentTarget.dataset.index;
                var list = this.products;
                list[idx].ischecked = !list[idx].ischecked;
                var aaa;
                for(var i = 0; i < list.length; i++) {
                    if(!list[i].ischecked) {
                        aaa = false;
                        break;
                    } else {
                        aaa = true;
                    }
                }
                //						this.setData({
                this.$store.dispatch('cart/prod',list)

                this.$store.dispatch('cart/allc',aaa)

                
                //						});
                this.count();
            },
        // jian
        jianClick: function(e) {
            var that = this;          
            var idx = parseInt(e.target.dataset.index);
            var list = that.products;
            var count = parseInt(list[idx].inventory);
            if(count <= 1) {
                count = 1;
            } else {
                list[idx].inventory = count - 1;
            }
            //						that.setData({
             this.$store.dispatch('cart/prod',list)
            //						});
            this.count();
        },
        // 加
        jiaClick: function(e) {
            // console.log(JSON.stringify(e));
            var that = this;
            var idx = parseInt(e.target.dataset.index);
            var list = that.products;
            var count = parseInt(list[idx].inventory);
            if(count < 0) {
                count = 1;
            } else {
                list[idx].inventory = count + 1;
            }
            //						that.setData({
            this.$store.dispatch('cart/prod',list)
            //						});
            this.count();
        },
        onValuesChange(picker, values) {
        this.$store.dispatch('citypick/savecity',(values[0]+"-"+values[1]))
        // console.log((values[0],values[1]))
  
        },
     
        place(){
            this.popup = true
        },
        onItemClick (value, disabled) {
            console.log(value, disabled)
        }
    }
}
</script>

<style lang="stylus" scoped>
.demo1-item 
  border: 1px solid #ececec;
  padding: .12rem .12rem;
  border-radius 50%

.demo1-item-selected 
  border: 1px solid green;


.o-c-header 
    width: 100%;
    height: .5rem;
    background: #fff;
    display flex
    font-size: .20rem
    justify-content space-around
    >div.back   
        text-align left 
        p
            width 100%
            padding-left .2rem
    >div
        display flex
        justify-content: center
        height: .5rem;
        line-height: .5rem;
        width .33rem
        flex 1
    .place
        font-size 0.14rem
        justify-content: flex-end
        padding-right .1rem
.cart-one
    background #fff
    margin-top .2rem
.cart-one-o
    height .4rem
    display flex
    justify-content space-around
    align-items center
    background #fff
    margin 0 .1rem
    .ritem_radio
        width .3rem
        height .3rem
        span 
            display flex
            width 100%
            height 100%
            border-radius 50%
            padding .05rem
            background #96949461
    .title
        min-width 50%
        .title-t
            margin-right .1rem
    .cart-img
        img 
            margin 0 .1rem
    .lingq
        display flex
        min-width 25%
        justify-content space-between
.ritem
    height 1.2rem
    display flex
    justify-content space-around
    align-items center
    background #fff
    padding 0 .18rem
    .ritem_radio

        div
            font-size .16rem
    .ritem_l
        height 1rem
        img     
            height 100%
    .ritem_r
        min-width 1.8rem
        display flex
        flex-direction column
        margin-left .1rem
        .desc
            display flex
            justify-content space-between
            .price
                .pri
                    color #f60
            .count
                margin-right .2rem
                font-size .2rem
                span
                    display inline-block
                    margin-left .1rem
        .status
            span 
                color #ccc


</style>
