<template>
    <div id="home">
        <Header>
        </Header>
        <div class="main">
            <div class="swiper">

            </div>
            <div class="nav">

            </div>
            <div class="book_list">
                

            </div>
        </div>
        <Tabs>
        </Tabs>
    </div>
</template>
<script>
import '../../common.Tabs.vue';
import '../../common.Header.vue';
export default {
    name:"Home",
    data(){
        return{

        }
    },
    components:{
        Header,
        Tabs,
    },
    methods(){

    }
}
</script>
<style lang="less" scoped>

@import "../../style/main.less";
#home{
    width:100%;
    Header{
        position: fixed;
        .top(0);
        .left(0);
        .right(0);

    }
    Tabs{
        position: fixed;
        .top(0);
        .left(0);
        .right(0);
        
    }

}
</style>


