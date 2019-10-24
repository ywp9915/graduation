<template>
    <div id="back">
        <i v-on:click="$router.go(-1)" class="fa fa-angle-left" aria-hidden="true"></i>
        <span></span>
         
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
    background:#fff;
    color:#c20c0c;
    display: flex;
    .fs(20);
    position: fixed;
    .top(0);
    .left(0);
    .right(0);
    z-index:997;
    flex-flow:row nowrap;
    border-bottom:1px solid #ccc;
    justify-content: space-around;
    *{
        display: inline-block;
        flex:1;
    }
    i{
        .h(50);
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

