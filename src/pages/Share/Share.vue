<template>
    <div id="share">
        <Back> </Back>
        <div class="main">
            <div class="notice">
                <div class="left-img"><img src="../../assets/user/flower.png" alt=""></div>
                <div class="right-body">
                    <div class="notice-title">公告：图书交换活动</div>
                    <div class="activity">3月10日至4月1日举行图书交换活动，如果你有一本让别人觉得有趣的书，对方有令你喜欢的书，你们就可以相互赠予或交换阅读。愿你们在文字的海洋里相遇相识相知！</div>
                </div>
            </div>
            <ul class="share-content">
                <li class="share-content-item">
                    <div class="content-header">
                        <img src="../../assets/user/beauty.png" alt="">
                        <span class="username">人民日报</span>
                        <span class="time">9:39</span>
                    </div>
                    <div class="main-content">全国两会，为农民工转发呼吁！让社保多在网上走，让民工少跑腿</div>
                    <div class="content-img">
                        <img src="../../assets/user/beauty.png" alt="">
                        <img src="../../assets/user/girl.png" alt="">
                    </div>
                    <div class="comment-like">
                        <div class="like">
                            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                            <span class="likenum">1123</span>
                        </div>
                        <div class="comment">
                            <i class="fa fa-comment-o" aria-hidden="true"></i>
                            <span class="comment-count">248</span>
                        </div>
                        
                    </div>
                </li>
                <li class="share-content-item">
                    <div class="content-header">
                        <img src="../../assets/user/beauty.png" alt="">
                        <span class="username">人民日报</span>
                        <span class="time">9:39</span>
                    </div>
                    <div class="main-content">全国两会，为农民工转发呼吁！让社保多在网上走，让民工少跑腿</div>
                    <div class="content-img">
                        <img src="../../assets/user/beauty.png" alt="">
                        <img src="../../assets/user/girl.png" alt="">
                    </div>
                    <div class="comment-like">
                        <div class="like">
                            <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                            <span class="likenum">1123</span>
                        </div>
                        <div class="comment">
                            <i class="fa fa-comment-o" aria-hidden="true"></i>
                            <span class="comment-count">248</span>
                        </div>
                        
                    </div>
                </li>
            </ul>
            <div class="dixian">客官，人家也是有底线的(๑• . •๑)</div>
        </div>
        <div class="share-btn" @click="newShare">
            <span>+</span>
        </div>
        <Tabs></Tabs>
        
        <!-- <router-view></router-view> -->
    </div>
</template>
<script>
import Tabs from '../../components/Tabs.vue';
import Back from '../../components/Back.vue';
export default {
    name:"share",
    data(){
        return{

        }
    },
    components:{
        Back,
        Tabs,
    },
    methods:{
        newShare(){ 
            this.$router.push("/newshare")
        }
    }
}
</script>
<style lang="less" scoped>
@import "../../style/main.less";
#share{
    width:100%;
    position: relative;
    Back{
        position: fixed;
        .top(0);
        .left(0);
        .right(0);
        z-index:997;
    }
    .main{
        width:100%;
        position:absolute;
        .top(60);
        .left(0);
        .right(0);
        .pd-bottom(60);
        overflow: hidden;
        .notice{
            width:100%;
            .h(100);
            display: flex;
            background:#fff;
            .pd(0,15,0,15);
            flex-flow:row nowrap;
            .left-img{
                flex:1;
                img{
                    display: block;
                    .w(90);
                    .h(90);
                    .mg(5,10,0,0);
                }
            }
            .right-body{
                flex:2;
                .notice-title{
                    .h(30);
                    .lh(30);
                    .fs(16);
                    font-weight:800;
                }
                .activity{
                    .h(60);
                    .lh(20);
                    width:90%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: wrap;
                }
            }
        }
        .share-content{
            width:100%;
            .mg-top(10);
            .share-content-item{
                .mg-top(10);
                .pd(0,10,0,10);
                background:#fff;
                .content-header{
                    .h(52);
                    .lh(52);
                    border-bottom:1px solid #eee;
                    img{
                        display:inline-block;
                        .w(46);
                        .h(46);
                        .mg-bottom(3);
                        border-radius:50%;
                    }
                    .username{
                        .fs(16);
                        .pd-left(10);
                        font-weight:800;
                    }
                    .time{
                        float:right;
                        .pd-right(10);
                    }
                }
                .main-content{
                    .mg(10,10,20,10);
                    .lh(20);
                    
                }
                .content-img{
                    .mg(0,10,0,10);
                    img{
                       display:inline-block;
                        .w(150);
                        .h(150); 
                    }
                }
                .comment-like{
                    .h(40);
                    .lh(40);
                    .mg-top(10);
                    display:flex;
                    justify-content: space-around;
                    border:1px solid #eee;
                    border-left:none;
                    border-right: none;
                    div{
                        i{
                            .fs(20);
                        }
                        .active-i{
                            color:#c20;
                        }
                        span{
                            .fs(18);
                        }
                    }
                }
            }
        }
        .dixian{
            width:100%;
            .h(40);
            .lh(40);
            text-align:center;
            .mg-top(20);
            font-family: "新宋体";
        }
    }
    .share-btn{
        position: fixed;
        .bottom(70);
        .right(10);
        z-index:998;
        .w(40);
        .h(40);
        background:#c20c0c;
        border-radius:50%;
        opacity:.78;
        span{
            display:block;
            color:#fff;
            text-align:center;
            .lh(40);
            .fs(50);
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


