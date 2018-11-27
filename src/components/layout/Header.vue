<template>
  <div class="common_search">
        <figure>
          <a href="/"><img src="../../assets/image/logo.png" alt=""></a>
          <input type="text" class="icon_search" placeholder="输入淘宝/天猫商品标题，或京东等商城链接，购物拿返利...
            ">
        </figure>

    </div>
</template>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
.common_search
  background #26aea4
  height .55rem
  position relative
  z-index 111
  figure
    display flex
    justify-content space-around
    align-items  center
    height 100%
    img
      width  .65rem
      height .3rem
    input
      width 70%
      height 70%
      border-radius 10%
      border none
      padding .1rem
      color #848181
  
</style>
