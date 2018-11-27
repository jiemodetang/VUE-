<template>
   <div class="container" v-if="item.item">
        <!-- 图片的warp -->
        <div class="group-warp">
            <div class="module-preview">
                <section class="preview-slider">
                    <div class="preview-scroller">
                        <a href="" class="item">
                            <img :src="item.item.LQTaobaoItem.PicUrl"
                                alt="">
                        </a>
                    </div>
                </section>
            </div>
            <!-- 价格的warp -->
            <div class="module-wrap" data-module="mods/module-jhs/index" id="J_mod1">
                <div class="module-jhs" data-mod-name="detail-m/mods/module-jhs/index">
                    <div class="pricebar" id="J_PriceBar">
                        <div class="subleft avil ">
                            <div class="price ">¥<strong>{{item.item.LQTaobaoItem.Price}}-{{item.item.LQTaobaoItem.DiscountPrice}}</strong></div>
                            <div class="information">
                                <div class="oprice"> ¥<span>{{item.item.LQTaobaoItem.CustomPrice}}-{{item.item.LQTaobaoItem.RealPrice}}</span></div>
                                <div class="soldcount">

                                    <span>{{item.item.LQTaobaoItem.FrontClickCount}}</span>

                                </div>
                            </div>
                        </div>
                        <div class="countdown">
                            <div id="J_CountDownTxt" class="txt">距结束剩余</div>
                            <div class="clockrun">
                                <span class="tuan" id="J_tuanTime"></span>
                                <span class="num" id="J_TimeHour">10</span><span class="dot">:</span>
                                <span class="num" id="J_TimeMin">20</span><span class="dot">:</span>
                                <span class="num" id="J_TimeSec">06</span><span class="dot">:</span>
                                <span class="num" id="J_TimeWSec">02</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 45天发货 -->
                <div class="module-wrap" data-module="mods/module-price/index" id="J_mod3">
                    <div class="info-area">
                        <p class="text">店铺预售,付款后 45 天内发货</p>
                    </div>
                </div>
                <!-- 那个商品标题     -->
                <div class="module-wrap">
                    <div class="module-title">
                        <div class="share-warp mui-flex">
                            <div class="main cell">{{item.item.LQTaobaoItem.Title}}</div>
                            <span class="share-div mui-flex share-hidden">
                                <!-- <div class="share-bd mui-flex">
                                <i class="share-icon"></i>
                                <span>分享</span>
                            </div> -->
                            </span>
                        </div>
                    </div>
                </div>
                <!-- 月销量和地址 -->
                <div class="module-wrap" id="J_mod6">
                    <div class="module-adds">
                        <span class="postage">送货入户并安装</span>
                        <span class="sales">月销量 16件</span>
                        <span class="delivery">广东东莞</span>
                    </div>
                </div>
                <!-- 双11的图 -->
                <div class="module-wrap" id="J_mod7">
                    <div class="module-atmosphere">
                        <div id="s-atmosphere">
                            <img class="bg" src="//img.alicdn.com/tps/TB1QYoaNpXXXXbQXpXXXXXXXXXX-1125-144.png_760x760Q90s50.jpg_.webp"
                                role="presentation">
                            <div class="atmosphere-content">
                                <img src="//img.alicdn.com//L1/279/1/tmc-0.0083104984304606111537776255578-81x81.png_90x60Q50s50.jpg_.webp"
                                    role="presentation">
                                <span style="color:#f10035">此商品正在参加双11，请尽快购买！</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div @click="backshop">
            <div class="props-content clearfix">
                <div class="l">参数</div>
                <div class="r">品牌 系列...</div>
                <div class="icon">
                <svg t="1516605784224" class="icon-viewall" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1221" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13">
                    <path d="M393.390114 512.023536l347.948667-336.348468c20.50808-19.85828 20.50808-51.997258 0-71.792093-20.507056-19.826558-53.778834-19.826558-74.28589 0L281.990954 476.135164c-20.476357 19.826558-20.476357 51.981908 0 71.746044l385.061936 372.236839c10.285251 9.91379 23.728424 14.869662 37.173644 14.869662 13.446243 0 26.889417-4.956895 37.112246-14.901385 20.50808-19.826558 20.50808-51.919487 0-71.746044L393.390114 512.023536" p-id="1222"></path>
                </svg>
                </div>
            </div>
        </div>
        <!-- 店家 -->
        <div class="group-warp">
            <div class="module-wrap" id="J_mod16">
                <div class="module-shop" data-spm="1998338745">
                    <div class="shop-main" data-spm="1998338745">
                        <div class="shop-logo">
                            <img src="//img.alicdn.com/imgextra//9c/e0/T1uYhAFb8cXXb1upjX.jpg_120x120Q50s50.jpg_.webp"
                                aria-label="店铺标志">
                        </div>
                        <div class="shop-info">
                            <div class="shop-name" title="兔宝宝旗舰店">{{item.item.LQTaobaoItem.SellerNick}}</div>
                                <div class="shop-title">
                                    <img src="//img.alicdn.com/tfs/TB1u5sBnlfH8KJjy1XbXXbLdXXa-198-36.png_120x120Q90s50.jpg_.webp?getAvatar=avatar"
                                    aria-label="装饰图">
                                </div>
                        </div>
                        <div class="shop-qualification ">
                        </div>

                    </div>
                    <ul class="score">
                        <li>宝贝描述<b class="up">4.9 </b></li>

                        <li>卖家服务<b class="up">4.9 </b></li>

                        <li>物流服务<b class="up">4.9 </b></li>

                    </ul>
                    <div class="action mui-flex">
                        <a class="all-product cell" href=""
                            target="_blank">全部商品</a>
                        <a class="go-shop cell" href="" target="_blank">进入店铺</a>

                    </div>

                    <mt-popup v-model="popupVisible" position="bottom"  class="popul">
                        <ul class="comment-list">
                            <li class="list">
                                <div class="face"><img src=""></div>
                                <div class="guest">
                                    <div class="info">
                                        <h4 class="name">开心美女小静<span class="level"></span></h4>
                                        <div class="date">2018-3-15</div>
                                    </div>
                                    <div class="star"></div>
                                    <p class="detail">非常好的吃烤肉的地方，我一定会去第二次。 就冲着他们新鲜的活碰乱跳的基围虾</p>
                                    <div class="thumb" thumblist="list2">
                                        <img src="//img.alicdn.com/bao/uploaded/i4/O1CN011rO0ME5QCS2Fa1t_!!0-rate.jpg_110x10000Q50s50.jpg_.webp">
                                        <img src="//img.alicdn.com/bao/uploaded/i4/O1CN011rO0ME5QCS2Fa1t_!!0-rate.jpg_110x10000Q50s50.jpg_.webp">
                                    </div>
                                </div>
                                
                            </li>
                        </ul>
                    </mt-popup>
                    <div class="cover-content" :style="toDisplay">
                        <div class="sku-wrap">
                            <div class="header">
                                <div class="img-wrap"><img :src="item.item.LQTaobaoItem.PicUrl"
                                        class="j-summary-img" aria-label="选中的商品图"></div>
                                <div class="main">
                                    <div class="price-wrap"><span class="price"> ¥{{item.item.LQTaobaoItem.Price}}</span> </div>
                                    <div class="stock">库存 1648件</div>
                                    <div class="sku-info"> 已选择: <span>200g*1袋</span></div>
                                </div><a class="sku-close" aria-label="关闭" @click='goshop'>关闭</a>
                            </div>
                            <div class="body">
                                <div class="body-item">
                                    <div class="pre-mods-wrap"></div>
                                    <div class="address-wrap"></div>
                                    <ul class="sku-list-wrap">
                                        <li>
                                            <h2 id="prop_title_0">食品口味</h2>
                                            <div class="items" role="radiogroup" aria-labelledby="prop_title_0"> 
                                                <a role="radio" href="javascript:void(0)"
                                                    data-value="122216494:24252207" class="checked" aria-checked="true">200g*1袋</a>                                            
                                            </div>
                                        </li>
                                    </ul>
                                    <ul class="bundle-sku-wrap"></ul>
                                    <div class="mods-wrap"></div>
                                    <div class="pickup-wrap">
                                        <section id="s-pickup"> </section>
                                    </div>
                                    <div class="bundle-wrap"></div>
                                    <div class="services-wrap"></div>
                                    <div class="number-wrap">
                                        <div class="number-line"><label for="number">购买数量</label><span class="J_limitTxt limit-txt"></span>
                                            <div class="number">
                                                <InlineXNumber  v-model="inventory"></InlineXNumber>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="installment-wrap"></div>
                                </div>
                            </div>
                            <div class="footer trade">
                                <a class="cart " role="button" @click="goshop">加入购物车</a>
                                <a class="info" role="button"></a>
                                <a class="buy " role="button">立即购买</a>
                                <a class="action disabled" role="button"></a>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        

        <!-- 评论席 -->
        <div class="mui-tagscloud-title">
          商品评价 (5870)
          <div class="mui-tagscloud-more rule-color-main" @click="checkmore">
            查看全部
            <svg t="1516605784224" class="icon-viewall" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1221" xmlns:xlink="http://www.w3.org/1999/xlink" width="13" height="13">
              <path d="M393.390114 512.023536l347.948667-336.348468c20.50808-19.85828 20.50808-51.997258 0-71.792093-20.507056-19.826558-53.778834-19.826558-74.28589 0L281.990954 476.135164c-20.476357 19.826558-20.476357 51.981908 0 71.746044l385.061936 372.236839c10.285251 9.91379 23.728424 14.869662 37.173644 14.869662 13.446243 0 26.889417-4.956895 37.112246-14.901385 20.50808-19.826558 20.50808-51.919487 0-71.746044L393.390114 512.023536" p-id="1222"></path>
            </svg>
          </div>
        </div>
        <p class="more-img">
            <img :src="item.item.LQTaobaoItem.PicUrl" alt="">
            <img :src="item.item.LQTaobaoItem.CustomPicUrl" alt="">
            
        </p>
    </div>
</template>

<script>
import { Popup } from 'mint-ui';
import {  Checker, CheckerItem,InlineXNumber } from 'vux'
import {mapState,mapMutations,mapActions} from 'vuex'
import Vue from 'vue'
Vue.component(Popup.name, Popup);
export default {
    components:{
            Checker,
            CheckerItem,
            InlineXNumber
    },
    props:{
        item:[Array,Object]
    },
    data(){
        return{
            //购买的数量
            inventory:1,
            toDisplay:{
                display: 'none',
             },
             popupVisible:false
        }
    },
    updated() {

        
    },
    methods:{
        backshop(){
            this.toDisplay.display='block'
        },
        //加入购物车商品和数量
        goshop(){
            this.$store.dispatch('cart/addToCart',{...this.item,inventory:this.inventory})
            this.toDisplay.display='none'
        },
        checkmore(){
            this.popupVisible = true
        }

    }
};
</script>
<style lang="stylus" scoped>
.popul
    width 100%
    height 40%
    .comment-list
        width 100%
        padding .2rem
        .list
            width 100%
            height 100%
            .face
                width 12%
                img 
                    width 100%
            .guest
                width 82%
                .star
                    margin-top 0.1rem;
                    img
                        width 23%
                .detail
                    margin-top 0.1rem;
                    color #000
                    
                .thumb
                    margin .1rem 0;
                    img 
                        width 23%;
                        margin-right  1.5%;
                        display inline-block;
                .info
                    width 100%
                    .name
                        display inline-block;
                        font-size .12rem;
                        font-weight 500;
                    .date
                        float right;
                        margin-right 3%;
                        color #999;
              

.mui-tagscloud-title
    line-height: .2rem;
    color: #666;
    margin:.06rem;
    margin-bottom:.2rem
    .mui-tagscloud-more
        float: right;
        font-size: .13rem;
        line-height: .20rem;
        text-align: center;
        color: #FF0036;
        svg
            text-align: center;
            fill: currentColor;
            transform: rotate(180deg);
            -webkit-transform: rotate(180deg);
            position: relative;
            top: .02rem;
    

.props-content 
    background-color: #FFF;
    padding: .12rem .10rem;
    color: #051b28;
    position: relative;
    line-height: .18rem;
    .l
        float: left;
        width: .3rem;
        height: auto;
        color: #999;
        overflow: hidden;
    .r
        margin-left: .30rem;
        margin-right: .24rem;
        color: #333;
        overflow: hidden;
        white-space: nowrap;
    .icon 
        position: absolute;
        right: .12rem;
        top: .16rem;
        height: .13rem;
        color: #ccc;
        svg
            margin-right: -3rem
            fill: currentColor;
            transform: rotate(180deg);
            -webkit-transform: rotate(180deg);



.container {
    background: #fff;
    height 100%
    overflow-y scroll
}

.module-preview:after {
    padding-top: 100%;
    display: block;
    content: '';
}

.module-preview {
    position: relative;

    .preview-slider {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        position: absolute;
        overflow: hidden;

        .preview-scroller {
            height: 100%;

            .item {
                position: relative;
                display: block;
                background-position: center center;
                background-size: contain;
                background-repeat: no-repeat;
                width: 100%;
                -webkit-flex-shrink: 0;
                height: 100%;

                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    max-width: 100%;
                    max-height: 100%;
                    width: 100%;
                    min-height: 100%;
                    -o-object-fit: contain;
                    object-fit: contain;
                }
            }
        }
    }
}

.module-jhs {
    .pricebar {
        position: relative;
        height: 0.54rem;
        background: -webkit-gradient(linear, 0 0, 0 100%, from(#fef391), to(#fbe253));
        overflow: hidden;
        color: #fff;

        .subleft.avil, .module-jhs {
            background: #fa215f;
        }

        .subleft {
            position: relative;
            margin-right: 100px;
            height: 0.54rem;

            .price {
                padding: 0 10px;
                display: inline-block;
                height: 0.54rem;
                line-height: 0.54rem;
                vertical-align: text-bottom;
                font-size: 0.14rem;

                strong {
                    font-size: 0.18rem;
                    font-weight: 400;
                }
            }

            .information {
                position: absolute;
                top: 0;
                display: inline-block;
                color: rgba(255, 255, 255, 0.7);

                .oprice {
                    margin-top: 0.09rem;
                    padding: 0 0.04rem;
                    height: 0.16rem;
                    line-height: 0.16rem;
                    font-size: 0.16rem;

                    span {
                        padding-left: 0.02rem;
                        text-decoration: line-through;
                        font-size: 0.12rem;
                    }
                }

                .soldcount {
                    margin-top: -0.02rem;
                    display: inline-block;
                    padding: 0 0.06rem;
                    height: 0.18rem;
                    line-height: 0.18rem;
                    font-size: 0.11rem;
                    -webkit-border-radius: 0.03rem;
                    background: rgba(0, 0, 0, 0.15);
                }
            }
        }

        .countdown {
            position: absolute;
            right: 0;
            top: 0.1rem;
            width: 0.9rem;
            height: 0.54rem;
            text-align: center;

            .txt {
                height: 0.16rem;
                text-align: center;
                line-height: 0.16rem;
                font-size: 0.12rem;
                color: #f61d4b;
            }
        }
    }
}

.info-area {
    padding: 0 0.1rem;
    color: #999;
    font-size: 0.12rem;
    line-height: 0.16rem;
    margin-top: 0.04rem;
}

// 商品标题
.share-warp {
    padding: 0.03rem 0.1rem 0 !important;
    background-color: #FFF;

    .main {
        font-size: 0.14rem;
        color: #051B28;
        line-height: 0.2rem;
        -webkit-line-clamp: 2;
        -webkit-box-pack: center;
        max-height: 0.42rem;
        overflow: hidden;
        word-break: break-all;
    }
}

// 月销量和地址
.module-adds {
    display: flex;
    background-color: #FFF;
    line-height: 0.3rem;
    padding: 0 0.1rem;
    font-size: 0.12rem;
    color: #999;
    justify-content: space-between;
}
// 11
.module-atmosphere 
    position relative
    height .48rem
    #s-atmosphere 
        .bg
            position: absolute;
            top: 0;
            left: 0;
            background: #FFF4F4;
            z-index: 1;
            width: 100%;
            height: .48rem;
        .atmosphere-content
            position: absolute;
            top: 0;
            left: 0;
            z-index: 2;
            height: .48rem;
            line-height: .48rem;
            width: 100%;
            color: #EE0A3B;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            img 
                float: left;
                margin: .1rem;
                height: .28rem;
                width: auto;
.more-img
    img     
        width 100%

.module-shop
    padding: .1rem;
    background-color: #FFF;
    .shop-main
        display: flex;
        position: relative;
        margin-top .10rem
        .shop-logo 
            width: .54rem;
            min-width: .54rem;
            height: .54rem;
            border: 1px solid rgba(151,151,151,.5);
            img 
                width: 100%;
                height: 100%;
        .shop-info
            flex: 1;
            padding: .05rem .1rem;
            line-height: .18rem;
            display: block;
    .score
        display: flex;
        text-align: center;
        color: #999;
        font-size: .12rem;
        margin:.12rem 0 .10rem;
        li
            display: block
            flex 1
    .action 
        display: flex;
        justify-content center
        a
            flex: 1;
            border: 1px solid rgba(255,0,54,.5);
            height: .24rem;
            line-height:  .24rem;
            font-size: .13rem
            color: rgba(255,0,54,.8);
            border-radius: .12rem;
            text-align: center;
            display: block;
            max-width: .96rem;
            margin-right .1rem

.cover-content
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 20%;
    background #fff
    z-index 9999
    .sku-wrap
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        transition: transform .3s cubic-bezier(0,0,.25,1) 80ms;

        .header
            padding: .1rem 0 .1rem 1.26rem;
            position: relative;
            .img-wrap
                width: 1rem;
                height: 1rem;
                position: absolute;
                top: -.28rem;
                left: .1rem;
                border-radius: .04rem;
                overflow: hidden;
                border: 1px solid rgba(0,0,0,.1);
                padding: 1px;
                background-color: #fff;
                img
                    width 100%
                    height 100%
            .main
                color: #051b28;
                font-size: .13rem;
                line-height: .18rem;
                padding-right: .20rem;
                .price-wrap
                    width 2.1rem
                    .price  
                        font-family: arial;
                        font-size: .16rem;
                        color: #FF0036
                        word-wrap: break-word;
            .sku-close
                    position: absolute;
                    top: .06rem;
                    right: .1rem;
        .body
            padding: 0 .15rem .1rem;
            position: absolute;
            bottom: .48rem;
            top: .93rem;
            left: 0;
            right: 0;
            overflow: auto;
            .number-wrap
                border-top: 1px solid #ccc;
                margin-top .2rem
                .number-line
                    padding-bottom: .1rem;
                    padding-top: .1rem;
                    line-height: .36rem;
                    label
                        color: #666;
                        font-size: .13rem;
                        font-weight: 400;
                    .number
                        height: .36rem;
                        border-radius:.03rem;
                        float: right;
                        button 
                            outline: 0;
                            line-height: .32rem;
                            height: .34rem;
                            width: .36rem;
                            font-size: .24rem;
                            border: 1px solid #f5f5f5;
                            background-color: #f5f5f5;
                        .disabled
                            color: #cfcfcf;
                            border-right: 1px solid #fff;
                        input[type=number]
                            line-height: .32rem;
                            height: .34rem;
                            width: .36rem;
                            text-align: center;
                            font-size: .13rem;
                            font-weight: 700;
                            border: 1px solid #f5f5f5;
                            background-color: #f5f5f5;
                            box-sizing: border-box;
                            -webkit-appearance: none;
                        
            .items
                a
                    border-color: #FF0036;
                    background-color: #FF0036;
                    color: #fff;
        .footer
            display: flex;
            height: .48rem;
            text-align: center;
            line-height: .48rem;
            color: #FFF;
            width: 100%;
            position: absolute;
            bottom: 0;
            .cart
                font-size: 15px;
                line-height: 50px;
                display: block;
                flex: 1;
                color: #fff;
                background-color: #FF9500;
            .buy
                flex: 1;
                color: #fff;
                display: block;
                background-color: #FF0036;

            
</style>
