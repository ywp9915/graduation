<template>
    <div id="header">
        <div class="logo"><img src="../../assets/booklogo.png" alt=""></div>
        <div class="title">二手图书</div>
        <div class="user"><i class="fa fa-user-o" aria-hidden="true"></i></div>
    </div>
</template>
<script>
export default {
    name:"Header",
    data(){
        return{

        }
    },
    methods(){

    }
}
</script>
<style lang="less" scoped>

@import "../../style/main.less";
#header{
    width:100%;
    .h(44);
    .lh(44);
    color:#fff;
    .fs(16);
    background:rgb(248, 248, 50);
    display: flex;
    justify-content: space-around;
    flex-flow:row nowrap;
    .logo{
        width:25%;
        height:100%;
        .h(44);
        .lh(44);
        text-align:center;
        img{
            display: block;
            .w(25);
            .h(25);

        }
    }
    .title{
        width:50%;
        height:100%;
        .h(44);
        .lh(44);
    }
    .user{
        .h(44);
        .lh(44);
        width:25%;
        height:100%;
        text-align:right;
        padding-right:.2rem;
        box-sizing:border-box;
    }

}
</style>


