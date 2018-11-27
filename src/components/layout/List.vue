<template>
  <nav>
    <ul>
      <router-link to="/all" tag="li" active-class="active">
        <b>全部分类</b>
      </router-link>
      <router-link to="/ninetonine" tag="li" active-class="active">
        <b>9块9</b>
      </router-link>
        <router-link to="/profit" tag="li" active-class="active">
        <b>巨返利</b>
      </router-link>
      <router-link to="/furnishing" tag="li" active-class="active">
        <b>家居</b>
      </router-link>
       <router-link to="/floor" tag="li" active-class="active">
        <b>楼层</b>
      </router-link>
      
    </ul>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      activeColor: '#e54847'
    }
  }
}
</script>


<style lang="stylus" scoped>
// @import '~styles/variables.styl'
@import '~styles/border.styl'
nav
  position relative
  z-index 111
  height: .48rem
  background #fff
  overflow-x:scroll 
  ul
    background-color #F5F5F5
    height 100%
    width 6rem
    // display flex
    // justify-content space-around
    border 1px 0 0 0, #ccc
    li
      width 1rem 
      // float left
      display inline-block
      text-align center
      // flex 1
      // display flex
      // justify-content center
      // align-items  center
      b
        font-size .12rem
        font-weight 100
        height 100%
        line-height .48rem
        font-size  .15rem
      &.active b
        color: #26aea4;
        border-bottom: 3px solid #26aea4;
</style>

