<template>
    <div class="allinfoBar"  @click="goshop(item.LQTaobaoItem&&item.LQTaobaoItem.Id)">
        <div class="allinfoitem"  >
            <figure :id="item.LQTaobaoItem&&item.LQTaobaoItem.Id">
                <header>
                    <aside class="tag">
                        <!-- :style="'background:url('+itimg+')' "  -->     
                        <span></span>  
                    </aside>
                    <div style="height:173.375px; overflow:hidden; "  class="tag-1">
                        <img class="lazy" v-lazy='item.LQTaobaoItem&&item.LQTaobaoItem.PicUrl' :src="item.LQTaobaoItem&&item.LQTaobaoItem.PicUrl " :alt="item.LQTaobaoItem&&item.LQTaobaoItem.Title" style="display: block; width: 100%; height: auto;">   
                    </div>
                </header>
                <p class="ttl">{{item.LQTaobaoItem&&item.LQTaobaoItem.Title}}</p>
                <p class="price">￥{{item.LQTaobaoItem&&item.LQTaobaoItem.CustomPrice}} <span class="strike">￥{{item.LQTaobaoItem&&item.LQTaobaoItem.Price}}</span></p>
                <footer>
                    返<span>{{item.LQTaobaoItem && item.LQTaobaoItem.FanFJB}}</span>集分宝
                </footer>
            </figure>
         </div>
        
    </div>
    
</template>

<script>
export default {
  
    props:{
        item:Object
    },
    data(){
        return{
            itimg:this.item.LQTaobaoItem&&this.item.LQTaobaoItem.PicUrl 
        }
    },
     methods:{
        goshop(key){

           this.$router.push({ name: 'shop', params: { value:key,item:this.item}})
           
        },
       },
    // updated() {
    //     console.log(item.LQTaobaoItem&&item.LQTaobaoItem.PicUrl || {} )
    // },

};
</script>
<style lang="stylus" scoped>
.allinfoBar
    width 100%
    height 100%
.allinfoitem
    width: 50%;
    float: left;
    display: block;
    text-decoration: none;
    margin: 0px !important;
    figure
        box-shadow: 0px 2px 3px #ccc;
        background-color: #fff;
        text-align: left;
        width: 95%;
        margin: 5px auto;
        header
            position relative
            .tag
                width: .3rem
                height: .33rem;
                position: absolute;
                right: -.04rem;
                top: .04rem;
                z-index: 10;
                span
                    background url(../../assets/image/juyouhui.png) 
                    background-size: contain;
                    position: absolute;
                    display: block;
                    width: .3rem;
                    height: .33rem;
                    margin-top: -.04rem;
            
            .lazy[lazy=loading] 
                width 20%
                height 20%
                // background #000
                background url(../../assets/image/waitingimg.png) center center no-repeat
                background-size .5rem .5rem
        p.ttl
            color: #666;
            font-size: .13rem;
            line-height: .22rem;
            height: .22rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            padding: 0px .05rem;
        p.price
            color: #000;
            font-weight: bold;
            font-size: .15rem;
            padding: .03rem .05rem;
            .strike
                color: #666;
                font-weight: normal;
                font-size: .12rem;
                text-decoration: line-through;
        footer
            font-size: .13rem;
            color: #666;
            padding: 0px .05rem;
            border-top: .01rem solid #ebebeb;
            height: .2rem;
            line-height: .2rem;
            span
                color #ff4e49 
</style>

