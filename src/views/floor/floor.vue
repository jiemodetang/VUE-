<template>
    <div class="floorBar">

        <Header></Header>
       
        <!-- <List></List> -->
        <!-- <router-view></router-view> -->
        <flooritem></flooritem>   
    </div>
</template>

<script>

import flooritem from 'components/common/floor/flooritem'
import floorinfo from 'components/common/floor/floorinfo'
import Header from 'components/layout/Header'
import List from 'components/layout/List'
export default {
    components:{
        Header,
        flooritem,
        floorinfo,
        List
    },
    async beforeCreate() {
        
    },
}
</script>

<style lang="stylus" scoped>
.floorBar
    height 100%
        

</style>
