<template>
    <div class="allinfo" >
        <allinfoitem :item='value' v-for="(value,index) in goinfoResource" :key="index" v-if="value.LQTaobaoItem"></allinfoitem>
    </div>
</template>

<script>
import allinfoitem from '../../layout/allinfoitem'
import http from 'utils/http'
// import { InfiniteScroll } from 'mint-ui';
import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui';
export default {
    data(){
        return {
            allinfoResource:[],
            goinfoResource:[],
            num:10,
            zn:[]
        }
    },
    components:{
        allinfoitem
    },
    // watch:{
    //     allinfoResource(oldValue,newValue){
    //         this.goinfoResource= oldValue.slice((this.num),10)

    //          console.log(newValue) 
    //     }
     
    // },
       mounted() {
            Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
            });
       },
    async beforeCreate() {
   
        let data = await http({
            method:'get',
            url:'/Home/AjaxItems',
            data:{
                category: 1,
                page: 1
            }
        })
        Indicator.close();
        this.allinfoResource = data.Data 
        this.goinfoResource =  this.allinfoResource.slice(0,9)
        this.zn= 1
         this.bscroll = new BScroll('#all-scroll',{
                probeType:1,
                click: true,
                pullUpLoad: {
                threshold: 50
            }
         })
        // console.log(this.zn)
        // console.log( data.Data)
    },
    watch:{
        zn(){    
            let that = this
            this.bscroll.on('pullingUp',function(){
                Indicator.open({
                text: '亲，稍等',
                spinnerType:'triple-bounce'
                });
                //时间到后让他渲染页面，并告诉bscroll可以下次滚了
                setTimeout(()=>{
                    that.goinfoResource.push(...that.allinfoResource.slice(that.num,that.num+9))
                    that.num+=10
                    that.bscroll.finishPullUp()
                    Indicator.close();
                    
                },800)
            
                //dom重新渲染一次后，重新计算高度
                that.$nextTick(() => {
                    that.bscroll.refresh()
                })

            })  
        },
        // allinfoResource(){
        //     this.$store.dispatch('products/get')
        // }
    },
}
</script>

<style lang="stylus" scoped>
    .allinfo
        background-color #ededed;
        padding .05rem
        overflow hidden;
</style>

