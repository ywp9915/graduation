<template> 
<div id="about">
    <div class="header">
        <div class="main">
            <img src="../../assets/booklogo.png" alt="">
            <div class="version">图书1.0.0</div>
        </div>
    </div>
    <div class="about">
        <p>
             《小王子》是法国作家安托万·德·圣·埃克苏佩里于1942年写成的著名儿童文学短篇小说。本书的主人公是来自外星球的小王子。书中以一位飞行员作为故事叙述者，讲述了小王子从自己星球出发前往地球的过程中，所经历的各种历险。作者以小王子的孩子式的眼光，透视出成人的空虚、盲目，愚妄和死板教条，用浅显天真的语言写出了人类的孤独寂寞、没有根基随风流浪的命运。同时，也表达出作者对金钱关系的批判，对真善美的讴歌。
        </p>
    </div>
</div>
    
</template>
<script>
export default {
    name:'about'
}
</script>
<style lang="less" scoped>
@import "../../style/main.less";
#about{ 
    width:100%; 
    background:#fff;
    .header{
        background:#eee;
        width:100%;
        .h(110);
        .fs(14);
        .main{
            .w(200);
            height:100%;
            margin:0 auto;
            text-align: center;
            img{
                .mg(20,0,10,0);
                .w(50);
                .h(50);
            }
        }
    }
    .about{
        background:#eee;
        .fs(16);
        color:#333;
        .mg-top(30);
        p{
            .lh(24);
            .pd(20,20,20,20);
        }
    }

}
</style>


