<template>
    <div id="share">
        <div class="header">
            <i v-on:click="$router.go(-1)" class="fa fa-angle-left" aria-hidden="true"></i>
            <span> 消息</span>
            <router-link to="/user" tag="i" class="fa fa-user" aria-hidden="true"></router-link>
        </div>
        <div class="main"> 
            <div class="news-items">
                <div class="left-img"><img src="../../assets/user.png" alt=""></div>
                 <div class="right-name">
                     <div class="nickname">
                        <span class="user-nickname">渡嘉手</span>
                        <span class="time">20:20</span>
                     </div>
                     <div class="signature">特里布毒性，给你一点点甜点.在屋顶唱着你的歌，和我最爱的人.在屋顶唱着你的歌，和我最爱的人</div>
                 </div>
            </div>
            <div class="news-items">
                <div class="left-img"><img src="../../assets//user/flower.png" alt=""></div>
                 <div class="right-name">
                     <div class="nickname">
                        <span class="user-nickname">山茶花</span>
                        <span class="time">20:20</span>
                     </div>
                     <div class="signature">特里布毒性，给你一点点甜点.在屋顶唱着你的歌，和我最爱的人.在屋顶唱着你的歌，和我最爱的人</div>
                 </div>
            </div>
             
        </div>
        <div class="top" @click="goTop" v-show="toTopIsShow">
            <i class="fa fa-arrow-up" aria-hidden="true"></i>
        </div>
        <Tabs>
        </Tabs>
    </div>
</template>
<script>
import Tabs from '../../components/Tabs.vue';
export default {
    name:"share",
    data(){
        return{
            toTopIsShow:false,
        }
    },
    components:{
        Tabs,
    },
    methods:{
        scrollToTop () {  
             var _this=this;
            this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            if(document.documentElement.scrollTop>200){
                _this.toTopIsShow=true;
            }else{
                _this.toTopIsShow=false;
            }
        },
        goTop () {
            let that = this
            let timer = setInterval(() => {
                let ispeed = Math.floor(-that.scrollTop / 5)
                document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
                if (that.scrollTop === 0) {
                clearInterval(timer)
                }
            }, 16) 
        }  
    },
    created (){
            
    },
    mounted () {
        window.addEventListener('scroll', this.scrollToTop)
    },
    destroyed () {
        window.removeEventListener('scroll', this.scrollToTop)
    },
 

}
</script>
<style lang="less" scoped>

@import "../../style/main.less";
#share{
    width:100%;
    .header{
        position: fixed;
        .top(0);
        .left(0);
        .right(0);
        .h(50);
        .lh(50);
        z-index:999;
        background:#fff;
        border-bottom:1px solid #eee;
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
        .fa-angle-left{
            text-align:left;
            .pd-left(20);
            .fs(28);
        }
        span{
            text-align:center;
        }
        .fa-user{
            text-align: right;
            .pd-right(20);
        }
    }
    .main{
        position:absolute;
        .top(55);
        .left(0);
        .right(0);
        .pd-bottom(90);
        width:100%;
        overflow: hidden;
        .news-items{
            .h(70);
            .pd(0,10,0,10);
            background:#fff;
            border-bottom:1px solid #eee;
            display:flex;
            justify-content: space-around;
            flex-flow:row nowrap;
            .left-img{
                .w(70);
                .h(70); 
                flex:.2;
                img{
                    display: inline-block;
                    .w(60);
                    .h(60);
                    .mg-top(5);
                    border:1px solid #ccc;
                }
            }
            .right-name{
                flex:.8;
                .fs(14);
                .h(70); 
                .nickname{
                    .h(40);
                    .lh(40); 
                    .user-nickname{
                        display: inline-block;
                        width:65%;
                        .fs(18);
                        font-weight:800;
                    }
                    .time{
                        display:inline-block;
                        width:30%;
                        text-align: right;
                        .fs(14);
                        color:#666;
                    }
                }  
                .signature{
                    .lh(20);
                    .h(20);
                    .w(240);
                    text-overflow:ellipsis;
                    white-space: nowrap;
                    overflow: hidden; 
                    .lh(22);
                }
            }
        }
    }
    .top{
        position: fixed;
        .bottom(60);
        .right(0);
        z-index:998;
        .w(50);
        .h(50);
        i{
            .fs(26);
            color:#c20;
            opacity:.8;
        }
    }
    Tabs{
        position: fixed;
        .top(0);
        .left(0);
        .right(0);
        
    }

}
</style>


