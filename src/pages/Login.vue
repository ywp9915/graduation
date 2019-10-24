<template>
    <div id="login"> 
        <div class="form">
            <ul> 
                <li><input type="text" placeholder="请输入用户名"></li>
                <li><input type="password" placeholder="请输入密码"><i class="fa fa-eye" aria-hidden="true"></i></li>
                <li class="login-in"><input type="button" value="登录"></li>
            </ul>
        </div>
    </div>
</template>
<script>
import Back2 from "../components/Back2.vue"
export default {
    name:'login',
    components:{
        Back2,
    }
}
</script>
<style lang="less" scoped>
@import "../style/main.less";

#login{
    width:100%;
    .h(667);
    position:relative;
    background:#fff;
    .form{
        .pd-top(100);
        width:100%;
        ul{
            width:100%;
            .h(500);
            .pd(0,25,0,25);
            li{
                width:100%;
                .h(60);
                position:relative;
                border-bottom:.01rem solid #c20;
                input{
                    outline:none;
                    width:90%;
                    // height:100%;
                    .pd(15,0,0,10); 
                }
                i{
                    position:absolute;
                    .bottom(13);
                    .right(10);
                    color:#bbb;
                    .fs(18);
                } 
            }
            .login-in{
                .mg-top(40);
                border:none;
                input{
                    .border-radius(30);
                    color:#fff;
                    .fs(20);
                    .h(50);
                    width:100%;
                    padding:0;
                    background:#c20;
                }

            }
        }
    }

}
</style>


