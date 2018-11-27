<template>
    <section class="jfl_idt" v-if="item.LQTaobaoItem.IsJFL">       
          <aside class="tag">         
            </aside>       
                <a href="">      
                <figure>   
                    <!-- v-lazy="item.LQTaobaoItem&&item.LQTaobaoItem.RealPicUrl"        -->
                <img  class="lazy" alt="" :src="item.LQTaobaoItem&&item.LQTaobaoItem.RealPicUrl"  style="display: block;">  
                </figure>      
                <div class="info">             
                <p class="ttl">{{item.LQTaobaoItem && item.LQTaobaoItem.Title}}</p>           
                <p class="des">{{item.LQTaobaoItem && item.LQTaobaoItem.SubTitle}}</p>
                <p class="price">￥{{item.LQTaobaoItem && item.LQTaobaoItem.CustomPrice}}<span class="dark_orange">(返{{item.LQTaobaoItem && item.LQTaobaoItem.FanRate}})</span></p>  
                <p class="jfb">
                    <span class="dark_orange">-1.60</span>&nbsp;购后返
                    <label class="w_t_d">去抢购 &gt;</label>
                </p>        
            </div>
        </a>
    </section>
</template>

<script>
export default {
    props:{
        item:Object
    }
};
</script>

<style lang="stylus" scoped>
.jfl_idt 
    background-color: #fff;
    box-shadow: 0px .02rem .03rem #ccc;
    padding: .65rem 0 .15rem .1rem;
    overflow: hidden;
    margin-bottom: 15px;
    position: relative;
    
    figure 
        float: left;
        width: 1.2rem;
        height: 1.2rem;
        overflow: hidden;
        position: relative;
        img
            width: 100%;
            height: 100%;
        img[lazy=loading] 
            width: 100%;
            height: 100%;
            background #fcc

    .info 
        margin-left: 1.3rem;
        text-align: left;
        > p.ttl 
            font-size: .14rem;
            color: #3f3d48;
            line-height: .18rem;
            height: .36rem;
            overflow: hidden;
        > p.des 
            font-size: .13rem;
            color: #717070;
            line-height: .20rem;
            height: .20rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
         > p.price 
            font-size: .16rem;
            color: #000;
            margin-top: .15rem;
            span 
                font-size: .13rem;
                color: #ff4e49 !important;
        > p.jfb 
            font-size: .13rem;
            color: #717070;
            overflow: hidden;
            height: .3rem;
            line-height: .3rem;
            span 
                color: #ff4e49 !important;
            > label 
                display: block;
                float: right;
                height:.3rem;
                line-height: .3rem;
                font-size: .14rem;
                font-weight: bold;
                background-color: #ff4e49;
                color: #fff;
                padding: 0px .08rem;
</style>

