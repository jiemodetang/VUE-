<template>
    <div>
       <ul>
           <li>
               <span></span>
                <b>淘宝返利</b>
           </li>
           <li>
               <span></span>
                <b> 巨返利</b>
           </li>
           <li>
               <span></span>
                <b>趣秒杀</b>
           </li>
           <li>
               <span></span>
                <b>9块9</b>
           </li>
       </ul>
      
    </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
    ul
        display flex
        justify-content space-around
        padding-left   .1rem
        padding-right  .1rem
        padding-top .1rem
        &>li:nth-child(1)
            display flex
            flex-direction column
            height .87rem
            width .7rem
            span 
                background url("../../../assets/image/alllist.png")
                background-position 0 0
                background-size cover
                height .55rem
            b
                color: #666;
                font-size: .13rem;
                text-align: center;
                font-weight  100
        &>li:nth-child(2)
            display flex
            flex-direction column
            height .87rem
            width .7rem
            span 
                background url("../../../assets/image/alllist.png")
                background-position 0 -.54rem
                background-size cover
                height .55rem
            b
                color: #666;
                font-size: .13rem;
                text-align: center;
                font-weight  100
        &>li:nth-child(3)
            display flex
            flex-direction column
            height .87rem
            width .7rem
            span 
                background url("../../../assets/image/alllist.png")
                background-position 0 -1.08rem
                background-size cover
                height .55rem
            b
                color: #666;
                font-size: .13rem;
                text-align: center;
                font-weight  100
        &>li:nth-child(4)
            display flex
            flex-direction column
            height .87rem
            width .7rem
            span 
                background url("../../../assets/image/alllist.png")
                background-position 0 -1.62rem
                background-size cover
                height .55rem
            b
                color: #666;
                font-size: .13rem;
                text-align: center;
                font-weight  100

          
            
          
        
</style>
