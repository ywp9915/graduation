 <template>
    <div id="reg">
        <!-- <Back2></Back2> -->
        <div class="form">
            <ul> 
                <li><input type="text" placeholder="请输入用户名"></li>
                <li><input type="password" placeholder="请输入密码"><i class="fa fa-eye" aria-hidden="true"></i></li>
                <li><input type="password" placeholder="请确认密码"><i class="fa fa-eye" aria-hidden="true"></i></li>
                <li class="register"><input type="button" value="注册"></li>
            </ul>
        </div>
    </div>
</template>
<script>
import Back2 from "../components/Back2.vue"
export default {
    name:'reg',
    components:{
        Back2,
    }
}
</script>
<style lang="less" scoped>
@import "../style/main.less";

#reg{
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
                    height:100%;
                    .pd(20,0,0,10); 
                }
                i{
                    position:absolute;
                    .bottom(13);
                    .right(10);
                    color:#bbb;
                    .fs(18);
                }
            }
            .register{
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




