<template>
    <div id="home">
        <Header>
        </Header>
        <div class="main">
            <div class="search">
                <!-- <mt-search
                    :value.sync="value"
                    cancel-text="取消"
                    placeholder="搜索">
                </mt-search> -->
                <mt-search  placeholder="搜索">
                    <!-- <mt-cell
                        v-for="item in result"
                        :title="item.title"
                        :value="item.value">
                    </mt-cell> -->
                </mt-search>
            </div>
            <div class="swiper">
                <mt-swipe :auto="8000">
                    <mt-swipe-item><img src="../../assets/banner/banner1.png" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../assets/banner/banner2.png" alt=""></mt-swipe-item>  
                    <mt-swipe-item><img src="../../assets/banner/banner1.png" alt=""></mt-swipe-item>
                    <mt-swipe-item><img src="../../assets/banner/banner2.png" alt=""></mt-swipe-item>       
                </mt-swipe>
            </div>
            
            <div class="nav">


            </div>
            <div class="book_list">
                <ul  v-for="(item,index) in list" :key="index">
                    <li>
                        <img :src="item.img" class="list_img" alt="未显示图片">
                        <div class="des">{{item.des}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <Tabs>
        </Tabs>
    </div>
</template>
<script>
import Tabs from '../../components/Tabs.vue';
import Header from '../../components/Header.vue';
export default {
    name:"home",
    data(){
        return{
            result:[],
            list:[
                {img:"../../assets/list/an.jpg",des:"android开发艺术探索"},
                {img:"../../assets/list/php.jpg",des:"PHP从入门到精通"},
                {img:"../../assets/list/ps.jpg",des:"Photoshop开发艺术探索"},
                {img:"../../assets/list/java.jpg",des:"Java从入门到精通"},
                {img:"../../assets/list/python.jpg",des:"python开发艺术探索"},
                {img:"../../assets/list/math.jpg",des:"math开发艺术探索"},
                {img:"../../assets/list/ex.jpg",des:"excel开发艺术探索"}
            ]
        }
    },
    components:{
        Header,
        Tabs,
    },
    methods:{

    }
}
</script>
<style lang="less" scoped>

@import "../../style/main.less";
#home{
    width:100%; 
    .main{
        position: absolute;
        .top(44);
        .left(0);
        .right(0);
        overflow: auto;
        .search{
            width:100%;
            .h(44);
            .mint-search{
                width:100%;
                height: 100%;
            }
        }
        .swiper{
            width:100%;
            .h(200);
            .mt-swipe{
                .mt-swipe-item{
                    img{
                        display: inline-block;
                        width:100%;
                        .h(200);
                    }
                }
            }
        }
        .book_list{
            ul{
                li{
                    border:1px solid #ccc;
                    border-bottom:none;
                    border-radius: 5px;
                    // .mg(10 10);
                    img{
                        display: inline-block;
                        .w(50);
                        .h(50);
                    }
                    .des{
                        .fs(14);
                        color:#777;
                        overflow:hidden;
                    }
                }
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


