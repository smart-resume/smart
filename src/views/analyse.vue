<template>
    <div class="total">

        <div class="h11">
        <div class="h1">智能简历分析</div></div>
        <div class="update">
        <div class="left">
            <img src="../assets/update.jpg" alt="" width="200" height="150">
        <el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
  >
    <el-button type="primary">Click to upload</el-button>
    <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 10MB.
      </div>
      <!-- <div id="main1"></div> -->
    </template>
        </el-upload>
        </div>
        <div class="middle"></div>
        <div class="right"><h3 class="h3"> 会根据用户上传的简历进行分析,提取出关键字段,对简历和求职者能力进行分析,同时再根据求职需求匹配相对应的岗位。</h3></div>
    </div>
    </div>
    <div class="total1">
        <div class="h11">
            
        <div class="h2">简历分析结果</div>  </div>
        <div v-if="show==1" class="h12">
            <br><br><br>
            <h2>请点击生成按钮</h2>
            <el-button type="danger" plain @click="show2" >一键生成结果</el-button>
        </div>
        <div v-else-if="show==2" >
            <div class="h13">
            <Show/>
            <div class="h14">
                <div v-if="show11==1">
                    <img src="../assets/R-C.gif" alt="" width="200" height="200"><br>
    
                <el-button @click="speak">获取权威分析</el-button>
                </div>
                <div plain v-else-if="show11==2">
                    <p class="wenzi">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp智能简历分析结果:小明同学在校期间的学业成绩水平一般,但是具有丰富的实习经历加分,参与到企业提供的真实项目中,熟悉前端知识路线,具有VUE、REACT项目框架开发经验,根据学生个人综合能力,适合担任WEB前端开发人员工作"</p>
                </div>
            </div>
            </div>
            <div id="main1"><el-button @click="show1">返回</el-button>
            </div>
        </div>
        </div>
  
    <div class="total2">
        <div class="h11">
        <div class="h2">岗位推荐</div>
        </div>
        <br><hr>
        <h3 class="h4">在招岗位</h3>
        <div class="select">
        <el-select v-model="value" class="m-1" placeholder="求职类型" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      
    />

  </el-select>
  <el-select v-model="value" class="m-2" placeholder="职位类型" >
    <el-option
      v-for="item in options1"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
  <el-input v-model="input" placeholder="请输入公司名或者职位名搜索" class="m-3"/>
  <el-button type="primary" plain class="m-4">查询</el-button>
</div>
            <div class="boxs">
                <div class="left1"></div>
                <div class="middle1" >

                        <div class="boxmax" v-for="(index,i) in posts1" v-bind:key="i" > 
                            <p class="o-1">{{ index.职位.substring(0,9)+"..."}}<span class="o-2">{{index.薪酬}}</span></p>
                            <p class="o-3">{{index.工作地点+"|"+ index.招聘性质+"|"+ index.招聘性质+"|"+ index.学历要求}}</p>
                            <p class="o-4">{{index.公司名称}}</p>
                        </div>


                </div>
                <div class="right1"></div>
            </div>
    </div>

   <Footer></Footer>
</template>
<script>
import Footer from '../components/footer.vue';
import Show from './show.vue';
import posts1 from "../text.json"
import * as echarts from 'echarts';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { RadarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import Speech from "speak-tts";
import { set } from 'lodash';
echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer]);


    export default{
        name:'analyse',
        // mounted(){
        //     document.title="智能分析"
        // }

        data(){
            return{
                show:1,
                show11:1,
                options:[
                    {
                    value:"社招",
                    label:"社招"
                    },
                    {
                    value:"校招",
                    label:"校招"
                    }
                ],
                options1:[
                    {
                    value:"WEB前端",
                    label:"WEB前端"
                    },
                    {
                    value:"测试工程师",
                    label:"测试工程师"
                    }
                ],
                posts1,
                speech:null
      }
            },
        mounted(){
            this.speechInits();
            const {职位,薪酬,工作地点,工作经验,招聘性质,学历要求,公司名称}=this.posts1;
            // setTimeout(this.speak,2000)
        },
        methods:{
            picture() {

            },
            show2(){
                this.show=2;
            },
            show1(){
                this.show=1;
                this.show11=1;
            },
            speechInits(){
                this.speech = new Speech();
                this.speech.setLanguage("zh-CN");
                this.speech.init().then(()=>{})
            },
            speak(){
                this.show11=2;
                this.speech.speak({text:"智能简历分析结果：小明同学在校期间的学业成绩水平一般,但是具有丰富的实习经历加分,参与到企业提供的真实项目中,熟悉前端知识路线,具有VUE、REACT项目框架开发经验,根据学生个人综合能力,适合担任WEB前端开发人员工作"}).then(()=>{
                    console.log("读取成功");
                })
            },
            speak1(){
                this.show1=2
            }
        },

        components:{
            Footer,
            Show
        },


    }
</script>

<style  scoped>
.total{
    height:300px;
    width:auto;
    /* border-bottom:2px groove grey; */
}

.total1{

    height:auto;
    width:auto;
    /* border-bottom:1px solid black; */
    /* background:yellow; */
}
.total2{
    height:auto;
    width:auto;
    /* background:red; */
}
.total3{
    height:auto;
    width:auto;
    /* background:lavender; */

}

.h1{

    font-size: 30px;
    padding-left:100px;
    /* padding-bottom:30px; */
    float:left;
    /* border-bottom:10px solid black; */
}
.h2{
/* margin-top:30px; */
font-size: 25px;
padding-left:100px;

float:left;
/* border-bottom:10px solid black; */
}


.update{
    float:left;
    margin-left:200px;
    margin-top:20px;
    display:flex;
}
.left{
    flex:0.5;
}
.middle{
    flex:0.3;
}
.right{
    flex:1;
}
.h3{

margin-top:100px;
text-align: left;
font-size:21px;
padding-right:100px;
}
.h4{
    text-align: left;
    margin-left:150px;
}
.m-1{
    float:left;
    margin-left:150px;
    width:150px;
}
.m-2{
    float:left;
    width:150px;
    margin-left:20px;
    /* height:300px; */
}
.m-3{
    width:500px;
    float:left;
    height:33px;
    margin-left:20px;
}
.m-4{
    float:left;
}
.boxmax{
    width: 270px;
    height:120px;
    background: rgb(238, 229, 229);
    margin-right:20px;
    margin-bottom:20px;
    border-radius: 7px;
}
.select{
    height:100px;
}
.boxs{
display:flex;
}
.left1{
    flex:1;
}
.right1{
    flex:1;
}
.middle1{
    flex:8;
    display:flex;
    flex-flow:row wrap;
}
.middle2{
    display:flex;
    width:auto;
    height: 500px;
    background:red;
}
.o-1{
    text-align: left;
    margin-left:20px;
    line-height: 15px;
}
.o-2{
    float: right;
    margin-right:20px;
    font-size:18px;
    color:red;
    font-weight: bold;
}
.o-3{
    text-align: left;
    margin-left:20px;
    line-height: 15px;
    color:grey;
}
.o-4{
    text-align: left;
    margin-left:20px;
    line-height: 25px;
}
.h11{
    height:40px;
    /* background:green; */
}
.h12{
    height:200px;
}
.h13{
    height:400px;
    display:flex
}
.h14{
    margin-left:100px;
    margin-top:30px;
    height:300px;
    width:500px;
    border:1px solid black;
}
.wenzi{
    font-size: 21px;
    text-align: left;
    padding-left:20px;
    padding-right:20px;
}
</style>