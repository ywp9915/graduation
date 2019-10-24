<template>
    <div id="user"> 
        <Back2>
        </Back2>
        <div class="main">
             <router-link to="/userindex" class="user-info" tag="div">
                 <div class="left-img"><img src="../../assets/user/beauty.png" alt=""></div>
                 <div class="right-name">
                     <div class="nickname">一枝独秀</div>
                     <div class="signature">特里布毒性，给你一点点甜点.在屋顶唱着你的歌，和我最爱的人.在屋顶唱着你的歌，和我最爱的人</div>
                 </div>
             </router-link >
             <router-view></router-view>
             <ul class="user-item">
                 <li class="user-items" v-for="(items,index) in list" :key="index">
                    <router-link :to="items.link" tag="div" class="arrow-right">
                        <div class="pro-nav-left">
                            <i
                                :class="items.icon" 
                                aria-hidden="true"
                            ></i>
                            <span class="items-name">{{items.name}}</span>
                        </div>
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                    </router-link>
                </li>
            </ul>
            <div class="usersetting">
                <router-link to="/about" tag="div" class="about">关于</router-link>
                <div class="setting">设置</div>
                <div class="exit" @click="loginOut">退出</div>
            </div>
        </div>
         
        <Tabs>
        </Tabs>
    </div>
</template>
<script>
import Tabs from '../../components/Tabs.vue';
import Back2 from '../../components/Back2.vue';
export default {
    name:"user",
    data(){
        return{
            list: [
                    {link: "/news", name: "我的消息", icon: "fa fa-commenting"},
                    {link: "/publish", name: "我的发布", icon: "fa fa-share-alt-square"},
                    {link: "/user/photo", name: "我的相册", icon: "fa fa-picture-o"},
                    {link: "/share", name: "我的分享", icon: "fa fa-heartbeat"} 
                ],
        }
    },
    components:{
        Back2,
        Tabs,
    },
    methods:{
        loginOut(){
            var firm=confirm("您确定要退出登录吗？")
        },
        goUserIndex(){
            this.$router.push({ path: '/user/userindex' })
        }

    }
}
</script>
<style lang="less" scoped>
@import "../../style/main.less";
#user{
    width:100%;
    .main{
        position:absolute;
        .top(50);
        .left(0);
        .right(0);
        .mg-bottom(60);
        overflow:auto;
        width:100%;
        .user-info{
            width:100%;
            .h(90);
            .mg-top(10);
            .pd(0,10,0,10);
            background:#fff;
            display:flex;
            justify-content: space-around;
            flex-flow:row nowrap;
            .left-img{
                .w(90);
                .h(90); 
                flex:.2;
                img{
                    display: inline-block;
                    .w(60);
                    .h(60);
                    .mg-top(15);
                    border-radius: 50%;
                }
            }
            .right-name{
                flex:.7;
                .fs(14);
                .h(90); 
                .nickname{
                    .fs(20);
                    font-weight:900;
                    .lh(45);
                }  
                .signature{
                    overflow: hidden; 
                    .h(40);
                    .lh(20);
                }
            }
        }
        .user-item{
            width:100%;
            .mg-top(10);
            background:#fff;
            .user-items{
                .h(50);
                .lh(50);
                border-bottom:.009rem solid #eeeeee;
                .mg(0,15,0,15);
                .fs(14);
                .arrow-right{
                    display:flex;
                    .pro-nav-left{
                        flex:1;
                        .fs(16);
                        i{
                            display: inline-block;
                            .w(30);
                            .h(50);
                            color:#c20;
                            text-align: center;
                        }
                        
                    }
                    .fa{
                        flex:1;
                        .fs(20);
                        .lh(50);
                        text-align:right;
                    }
                }
            }
        }
        .usersetting{
            width:100%;
            background:#fff;
            .mg-top(20); 
            .fs(18);
            .lh(40);
            font-weight:900;
            div{
                .pd-left(30);
                border-bottom:.009rem solid #eeeeee;
            }
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


