<template>
  <div class="furnishing">
        <Header></Header>
        <List></List>
        <router-view></router-view>
        <!-- <furnishinginfo></furnishinginfo>    -->
  </div>
</template>

<script>
import Header from "components/layout/Header";
import List from "components/layout/List";
import furnishinginfo from "components/common/furnishing/furnishinginfo";
export default {
     components:{
        Header,
        List,
        furnishinginfo
    },
};
</script>
<style lang="stylus" scoped>
.furnishing{
    height 100%
}
</style>

