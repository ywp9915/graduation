<template>
    <div id="newshare">
        <router-view></router-view>
        <div class="header">
            <i v-on:click="$router.go(-1)" class="fa fa-times" aria-hidden="true"></i>
            <span class="title"> 分享你的动态</span>
            <span class="btn">发布</span>
        </div>
        <div class="content">
            <textarea @keydown="limit" placeholder="有什么好看的书或者想吐槽的书，欢迎畅所欲言"></textarea>
             
        </div>
        <div class="upload-img">
            <div class="img-item"><img src="../../assets/user/flower.png" alt=""></div>
            <div class="img-item"><img src="../../assets/user/flower.png" alt=""></div> 
            <div class="photos"><i class="fa fa-camera" aria-hidden="true"></i></div>
        </div>
    </div>
</template>
<script>
export default {
    name:'newshare',
    methods:{
        limit(){
            if (this.value.length>=10){
                alert("输入的字符长度不能超过140个字符");
                event.returnValue=false
            }
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../style/main.less";
#newshare{
    .header{
        .h(50);
        width:100%;
        background:#fff;
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
        i{
            .h(50);
            .lh(50);
            .fs(22);
            .pd-left(15);
            flex:1;
        }
        span{
            text-align:center;
            .lh(50);
        }
        .title{
            flex:2;
        }
        .btn{
            flex:1;
            text-align:right;
            .pd-right(10);
        }
    }
    .content{
        width:100%;
        .h(200);
        .mg-top(50);
        background:#fff;
        border-bottom:1px solid #ddd;
        textarea{
            display:block;
            .h(190);
            width:100%;
            .pd(10,15,0,15);
            outline:none;
            .lh(20);
            border:0;
        }
    }
    .upload-img{
        .mg-top(15);
        border:1px solid #ddd;
        border-left:none;
        border-right:0;
        background:#fff;
        width:100%;
        .h(120);
        display: flex;
        justify-content: flex-start;
        flex-flow:row nowrap;
        .img-item{
            .w(100);
            .h(100);
            float: left;
            .mg(10,10,10,10);
            position:relative;
            border:1px solid #dbdbdb;
            img{
                display: inline-block;
                .w(100);
                .h(100);
            }

        }
        .photos{
            display: inline-block;
            .w(100);
            .h(100);
            .mg(10,5,10,5);
            border:1px solid #dbdbdb;
            position:relative;
            i{
                .fs(40);
                text-align:center;
                .lh(100);
                position:absolute;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                color:rgb(121, 113, 113)
            }
        }
    }
}
</style>


