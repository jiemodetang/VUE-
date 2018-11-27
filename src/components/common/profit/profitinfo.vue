<template>
     <div id="container">
         <profitlist :item='value' v-for="(value,key) in profitinfo" :key="key"></profitlist>  
     </div>
</template>

<script>
import profitlist from '../../layout/profitlist'
import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui';
import http from 'utils/http'
import { Lazyload } from 'mint-ui';
export default {
    data(){
        return{
            profitinfo:[]
        }
    },
    components:{
        profitlist
    },
    watch:{
        profitinfo(){
            this.bscroll = new BScroll('#profitinfo-scroll',{
                probeType:1,
                pullUpLoad: {
                threshold: 50
                }
            })
        }
    },
    async beforeCreate() {
           Indicator.open({
            text: '加载中...',
            spinnerType: 'fading-circle'
            });
        let data = await http({
            method:'get',
            url:'/Home/AjaxJFLItems',
            data:{
                page: 1
            }
        })
        Indicator.close();
        this.profitinfo = data.Data 
        // console.log( this.profitinfo );
    },
}
</script>

<style>

</style>
