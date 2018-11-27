<template>
<div   class="floorinfo">
     <ul>
         <router-link to="1" tag="li" class="floor-router">
            男装
         </router-link>
          <router-link to="/floor/item/2" tag="li" >
            女装
         </router-link>
          <router-link to="/floor/item/3" tag="li" >
            衣服
         </router-link>
          <router-link to="/floor/item/4" tag="li" >
            护肤
         </router-link>
    </ul>
</div>
   
</template>

<script>
export default {
  methods:{
    disnone(){
      console.log(1);
      
    }
  }
}
</script>

<style lang="stylus" scoped>
.floor-router1

.floorinfo
    height 100%
    ul
        padding-left: .1rem;
        width 30%
        border-bottom 0.01rem solid #cccccc
        background #fff
        padding-top .3rem
        height 100%
        overflow-y scroll
        li
            height 12%
            line-height .7rem
            text-align center

</style>

