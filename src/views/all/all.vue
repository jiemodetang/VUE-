<template>
   <div class="home-wrap">
       <Header></Header>
        <List></List>
        <!-- <AlertModule></AlertModule> -->

        <main id="all-scroll">

          <div >
            <!-- <alllist></alllist> -->
            <router-view>
              
            </router-view>
            <allinfo></allinfo>
          </div>
        </main> 
    </div>
</template>

<script>
import Header from 'components/layout/Header'
import List from 'components/layout/List'
import alllist from 'components/common/all/alllist'
import allinfo from 'components/common/all/allinfo'
import BScroll from 'better-scroll'
export default {
  data(){
    return {

    }
  },
  components:{
    Header,
    List,
    alllist,
    allinfo,

  },
  mounted() {
 
  },
  updated() {
  
    // BScroll.finishPullUp()
  },
}
</script>

<style lang="stylus" scoped>
.home-wrap
  height 100%
  display flex
  flex-direction column
  background #fff
  main
    flex 1
    overflow hidden
</style>
