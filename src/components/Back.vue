<template>
    <div id="back">
        <i v-on:click="$router.go(-1)" class="fa fa-angle-left" aria-hidden="true"></i>
        <span> 分享</span>
        <router-link to="/news" tag="i" class="fa fa-commenting-o" aria-hidden="true"></router-link>
         
    </div>
</template>
<script>
export default {
    name:'Back',

}
</script>
<style lang="less" scoped>
@import "../style/main.less";
#back{
    width:100%;
    .h(50);
    position: fixed;
    .top(0);
    .left(0);
    .right(0);
    z-index:997;
    background:#fff;
    color:#c20c0c;
    display: flex;
    .fs(20);
    flex-flow:row nowrap;
    justify-content: space-around;
    *{
        display: inline-block;
        flex:1;
    }
    i{
        .h(50);
        .lh(50);
    }
    span{
        text-align:center;
        .lh(50);
    }
    .fa-angle-left{
        text-align:left;
        .pd-left(20);
        .fs(28);
    }
    .fa-commenting-o{
        text-align: right;
        .pd-right(20);
    }
}
</style>

