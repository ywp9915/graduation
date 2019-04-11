<template>
    <div id="user-index">  
        <Back2></Back2>
        <div class="user-info">
            <ul>
                <li><img src="../../assets/user/beauty.png" alt=""></li>
                <li class="items"><input class="nickname" type="text" value="一枝独秀"> </li>
                <li>
                    <textarea class="signature" name="" id="" cols="35" rows="2" value="给你一点点甜点.在屋顶唱着你的歌，和我最爱的人.在屋顶唱着你的歌，和我最爱的人"></textarea>
                </li>
                <li><input class="btn" type="button" value="修改"></li>
            </ul> 
        </div>
    </div>
</template>
<script> 
import Back2 from '../../components/Back2.vue';
export default {
    name:"userindex",
    data(){
        return{
             
        }
    },
    components:{
        Back2,
        
    },
    methods:{
         
    }
}
</script>
<style lang="less" scoped>
@import "../../style/main.less";
#user-index{
    width:100%;
    .h(667);
    background:#fff;
    .user-info{
        position:absolute;
        .top(50);
        width:100%; 
        ul{
            li{
                text-align:center;
                .mg-top(10);
                .pd(0,10,0,10); 
                img{
                    .w(80);
                    .h(80);
                    border-radius:50%;
                }
                input{
                    text-align:center;
                }
                textarea{
                    text-align:center;
                    .lh(22);
                }
            }
            .items{
                display:block;
                width:100%;
                .h(50);
                input{
                    display:block;
                    width:100%;
                    .pd(0,20,0,20);
                    .h(50);
                }
            }
            
        }
     }

}
</style>


