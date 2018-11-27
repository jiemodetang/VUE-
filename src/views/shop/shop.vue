<template>
    <div class="shop">
        <!-- 头部     -->
        <div id="head" class="header-dom">
            <div class="mui-flex main-dom">
                <div class="left-btns">
                    <a href="javascript:history.go(-1);"
                        class="icon-link back-link">
                        <svg t="1516605784224" class="icon" style="" viewBox="0 0 1024 1024"
                            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1221" xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="200" height="200">
                            <path d="M393.390114 512.023536l347.948667-336.348468c20.50808-19.85828 20.50808-51.997258 0-71.792093-20.507056-19.826558-53.778834-19.826558-74.28589 0L281.990954 476.135164c-20.476357 19.826558-20.476357 51.981908 0 71.746044l385.061936 372.236839c10.285251 9.91379 23.728424 14.869662 37.173644 14.869662 13.446243 0 26.889417-4.956895 37.112246-14.901385 20.50808-19.826558 20.50808-51.919487 0-71.746044L393.390114 512.023536"
                                p-id="1222"></path>
                        </svg> 
                        <!-- <span>返回</span> -->
                    </a> 
                </div>
                <!-- <ul class="cell header-nav">
                    <li data-index="0" data-x="0">商品</li>
                    <li data-index="1" data-x="75">评价</li>
                    <li data-index="2" data-x="150">详情</li>
                </ul> -->
                <div class="right-btns">
                    <a href="#/cart" class="icon-link cart-link " >
                        <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 1077 1024">
                            <path d="M267 879a70 70 0 1 1 0 139 70 70 0 0 1 0-139zm605 0a70 70 0 1 1 0 139 70 70 0 0 1 0-139zm37-131H255l-50-474h776l-72 474zm145-537a38 38 0 0 0-29-13H197L179 31a38 38 0 0 0-38-34H18v76h89l76 717c2 19 19 34 38 34h720a38 38 0 0 0 38-33l84-549a38 38 0 0 0-9-31z"></path>
                        </svg>
                         <!-- <span>购物车</span> -->
                    </a> 
                </div>
            </div>
            <div id="J_smartjump" class="smart-jump"></div>
        </div>
        <router-view></router-view>
        <shopinfo :item='shop'></shopinfo>       
        <shopBar :item='shop'></shopBar>
    
    </div>
</template>

<script>
import shopinfo from 'components/common/shop/shopinfo'
import shopBar from 'components/common/shop/shopBar'
export default {
    data(){
      return{
          shop:[]
      }  
    },
    components:{
        shopinfo,
        shopBar
    },
    watch:{
        $route(to,from) {
            console.log(to,from);
        this.shop=this.$route.params

                
        }
        
      
    },
    methods:{
        // addTocart(){
            // this.$router.push({name:'cart',params:{item:this.shop}})
        // }
    }
};
</script>

<style lang="stylus" scoped>
.shop
    height 100%
.header-dom 
    position: fixed;
    z-index: 1;
    left: 0;
    right: 0;
    top: 0;
    line-height: .44rem;
    height: .44rem;
    overflow: visible;

    .main-dom
        background: linear-gradient(rgba(0,0,0,.15),transparent);
        display flex
        justify-content space-between
        .left-btns
            padding: .07rem 0 .07rem .1rem;
            a
                margin-right: .05rem;
        .right-btns
                padding:.07rem  .1rem .07rem 0;
                display: flex;
                -webkit-flex-wrap: wrap;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap;
                a
                    margin-left:.05rem;
        .icon-link
                position: relative;
                height: .3rem;
                width:.3rem;
                display: block;
                transition: color ease .2s,
                background-color ease .2s,
                fill ease .2s;
                border-radius: 50%;
                background-color: rgba(0,0,0,.4);
                svg 
                    font-size: .2rem;
                    color: #fff;
                    position: absolute;
                    height: .2rem;
                    width: .2rem;
                    margin: .05rem;
                    text-align: center;
                    fill: currentColor;
</style>
