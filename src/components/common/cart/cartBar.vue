<template>
    <div class="cartBar">
        <div class='total'>

                <div :style="allchecked?'background:#28a968':'background:#ccc'"  v-on:click='allClick($event)' class="frist"></div>
				<div class='all'>
                    全选
                </div>
				
				<div class='allm'>
					<span>总价￥{{totalmoney.totalmoney}}</span>
				</div>
                <div class="allr">
                    <span @click="jiesuan">结算<b>({{totalmoney.allcount}})</b></span>
                </div>
			</div>
             <div >
                <alert v-model="show"  >就两毛钱了,小伙子!
                    快去学习吧！
                </alert>
            </div>
    </div>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
import { Alert } from 'vux'

export default {
props:{
    totalmoney:[Object]
},
mounted() {
    console.log(this.totalmoney);
    
},
data(){
    return{
        show: false,
    }
},
components:{
    Alert
},


    computed:{
         ...mapState('cart',{
            allchecked:'allchecked'
        }),
    },
    methods:{
        allClick($event){
             this.$emit('allClick',$event)
        },
        jiesuan(){
            this.show = !this.show
        }

    },
}
</script>

<style >
.total {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: .5rem;
  background: #efefef;
  display:flex;
  align-items: center;
  justify-content:space-around;
  padding: 0 .08rem
}
.total>input{
    width: .3rem;
    height: .3rem;
    border-radius: 50%
}
.total .frist{
    width: .2rem;
    height: .2rem;
    border-radius: 50%
}

.total .all {
 font-size:.2rem;
  width: .7rem;
  line-height: 0.2rem;
  text-align: left;
  padding-left: .2rem
}

.total .allm {
    flex: 1;
    text-align: right;
    padding-right: .1rem
}

.total .allr {
    height: 100%;
    width: 30%;
    color: #fff;
    background: #f50;
    line-height: .5rem;
    text-align: center

}



</style>
