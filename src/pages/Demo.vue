<template>
    <div class="father">
        <div class="mask" v-show="maskShow" @click="setMaskShow"></div>
        <div class="child" id="child" v-show="maskShow">
            <button @click="setMaskShow">关闭</button>
        </div>
        <button @click="setMaskShow">click</button>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            maskShow: false,
        }
    },
    methods: {
        setMaskShow(){
            this.maskShow = !this.maskShow;
        }
    }
}
</script>

<style>
.father{
    width: 100%;
    height: 100%;
}
.mask{
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #000;
    opacity: 0.3;
}
button{
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.child{
    position: fixed;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;
    text-align: center;
    line-height: 400px;
    top: calc(50% - 200px);
    left: calc(50% - 200px);
    background: #fff;
}
</style>
