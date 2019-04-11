<template>
    <div id="header">
        <router-link to="/" class="logo">
            <img src="../assets/booklogo.png" alt="">
        </router-link>
        <span class="title">unicore二手图书</span>
        <router-link to="/user" tag="div" class="user">
            <i class="fa fa-user-o" aria-hidden="true"></i>
        </router-link>
    </div>
</template>
<script>
export default {
    name:"Header",
    data(){
        return{

        }
    } 
}
</script>
<style lang="less" scoped>
@import "../style/main.less";
#header{
    width:100%;
    .h(44);
    .lh(44);
    color:#fff;
    .fs(16);
    position: fixed;
    .top(0);
    .left(0);
    .right(0);
    z-index:997;
    background:#C20 ;
    display: flex;
    justify-content: space-around;
    flex-flow:row nowrap;
    .logo{
        width:20%;
        height:100%;
        .h(44);
        .lh(44);
        text-align:center;
        img{
            display: block;
            .w(26);
            .h(26);
            .mg(9,0,9,15);
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
        width:30%;
        height:100%;
        text-align:right;
        padding-right:.2rem;
        box-sizing:border-box;
        i{
            .fs(18);
        }
    }
}
</style>


