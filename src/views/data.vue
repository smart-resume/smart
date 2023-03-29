<template>
    <div class="background">
    <div class="box1">
        <div class="left"><show1/><show2/></div>
        <div class="middle">
            <h1>分析结果</h1>
            <div class="show0"><Show/></div>
        </div>
        <div class="right">            <h2>学生个人能力层次分析图</h2><show3/></div>
    </div>
    <div class="box2">
        <div class="left1"><show5/></div>
        <div class="middle1">
            <!-- <h1>分析结果</h1> -->
            <div class="show00"><show6/></div>
        </div>
        <div class="right1"> <show8/></div>
    </div>

    </div>
</template>

<script>
import show1 from "../components/1.vue"
import show2 from "../components/2.vue"
import show3 from "../components/3.vue"
import show4 from "../components/4.vue"
import show5 from "../components/5.vue"
import show6 from "../components/6.vue"
import show7 from "../components/7.vue"
import show8 from "../components/8.vue"
import Show from "../components/show.vue"
// import { TitleComponent, LegendComponent } from 'echarts/components';
// import { RadarChart } from 'echarts/charts';
// import { CanvasRenderer } from 'echarts/renderers';
export default {
    name:"data",
    data(){
        return{

        }
    },
    components:{
        Show,
        show1,
        show2,   
        show3,
        show4, 
        show5,
        show6, 
        show7,
        show8,      
    }

}
</script>
<style>
.background{
    position: fixed;
    top: 0;
    left:0;
    width:100%;
    height:100%;
    background:#0D2451;
    z-index:10000;
}
.box1{
height:500px;
/* background: yellow; */
display:flex;
}
.left{
    flex:1.2;
    /* background: pink; */
    margin-left:10px;
    margin-top:10px;
    border:2px solid white;
 }
.middle{
    flex:2;

    margin-right:10px;   
     margin-left:10px;
    margin-top:10px;
    border:2px solid white;
}
.right{
    flex:1.2;
    margin-top:10px;
    margin-right:10px;  
    /* background: pink; */
    border:2px solid white;
}
.show0{
    margin-left:80px;
}
.show00{
    margin-left:135px;
}
h1{
    color:white;
    margin-left:-400px;
    line-height:20px;
}
h2{
    color:white;
    margin-left:-100px;
}
.box2{
height:260px;

display:flex;
}
.left1{
    flex:1.2;
    /* background: pink; */
    margin-left:10px;
    margin-top:10px;
    margin-bottom:10px;
    border:2px solid white;
 }
.middle1{
    flex:2;

    margin-right:10px;   
     margin-left:10px;
    margin-top:10px;
    margin-bottom:10px;
    border:2px solid white;
}
.right1{
    flex:1.2;
    margin-top:10px;
    margin-right:10px;  
    /* background: pink; */
    margin-bottom:10px;
    border:2px solid white;
}
</style>