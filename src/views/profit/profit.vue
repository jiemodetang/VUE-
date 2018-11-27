<template>
   <div class="profitBar">
        <childrenHeader></childrenHeader>
    <main id="profitinfo-scroll">
        <profitinfo></profitinfo>
    </main>

    </div>
</template>

<script>

import childrenHeader from 'components/layout/ChildHeader'

import profitinfo from 'components/common/profit/profitinfo'
export default {
      components:{  
         profitinfo,
         childrenHeader
        },
}
</script>

<style lang="stylus" scoped>
.profitBar
    height 100%
main
    height 100%

</style>

