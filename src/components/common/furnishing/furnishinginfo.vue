<template>
    <div id="furnishinginfo-bscroll" >
        <div>
             <furnishinglist :item='value' v-for="(value,key) in furnishinginfo" :key="key"></furnishinglist>
        </div>
    </div>
</template>

<script>
import furnishinglist from '../../layout/allinfoitem'
import BScroll from 'better-scroll'
import { Indicator } from 'mint-ui';
import http from 'utils/http'
export default {
    data(){
        return{
            furnishinginfo:[]
        }
    },
    components:{
        furnishinglist
    },
    watch:{
        furnishinginfo(){
            this.bscroll = new BScroll('#furnishinginfo-bscroll',{
            probeType:1,
            click:true,
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
                url:'/Home/AjaxItems',
                params:{
                   category: 3,
                    page: 2
                }
            })
        Indicator.close();
        this.furnishinginfo = data.Data
        // console.log( this.furnishinginfo );
        
    },
}
</script>

<style lang="stylus" scoped>
    #furnishinginfo-bscroll
        height: 100%
        position relative
        z-index 1
        >div
            overflow hidden

</style>

