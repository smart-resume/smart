<template>
    <div class="box6">
        <div class="box7">
            <select class="xiala">
                <option>全职</option>
                <option>实习</option>
            </select>
            <input type="text" name="fname" class="form1" placeholder="搜索职位，公司" autocomplete="off">

            <el-button type="info"  class="button1">搜索</el-button>
        </div>
        
    </div>

    <div class="box1">
        <div class="left"><el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    background-color=rgb(131,149,167)
                text-color="#fff"
                active-text-color=rgb(69,170,242)
                
                
    @select="handleSelect"
  >
    <el-menu-item index="1" @click="one()">关注</el-menu-item>
    <el-menu-item index="2" @click="two()">推荐</el-menu-item>

    <el-menu-item index="3" @click="three()">WEB前端</el-menu-item>
    <el-menu-item index="4" @click="four()">测试工程师</el-menu-item>
    <!-- <el-menu-item index="5" @click="five()">圈子</el-menu-item> -->
  </el-menu>
  <div v-show="page==1">
        <div v-show="currentPage == parseInt((i+8)/8)" v-for="(index,i) in opinion" v-bind:key="i">
            <div class="show1">
                <div class="leftpro"> <img :src="index.url" alt="" height="150" width="200"></div>
                <div class="rightpro"> <p class="ti">{{ index.title }}{{ change(i) }}</p></div>
            </div>

        </div>       
          
        <el-pagination
                layout="prev, pager, next"
                :total="change1()"     
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange" class="pagin">
</el-pagination>
</div>
  <div v-show="page==2">
        <div v-show="currentPage == parseInt((i+8)/8)" v-for="(index,i) in test" v-bind:key="i">
            <div class="show1">
                <div class="leftpro"> <img :src="index.url" alt="" height="150" width="200"></div>
                <div class="rightpro"> <p class="ti">{{ index.标题 }}{{ change(i) }}</p></div>
            </div>

        </div>       
          
        <el-pagination
                layout="prev, pager, next"
                :total="change1()"     
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange" class="pagin"></el-pagination>
        </div>
  <div v-show="page==3">
    <div v-show="currentPage == parseInt((i+8)/8)" v-for="(index,i) in qianduan" v-bind:key="i">
            <div class="show1">
                <div class="leftpro"> <img :src="index.url" alt="" height="150" width="200"></div>
                <div class="rightpro"> <p class="ti">{{ index.标题1 }}{{ change(i) }}</p></div>
            </div>

        </div>       
          
        <el-pagination
                layout="prev, pager, next"
                :total="change1()"     
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange" class="pagin"></el-pagination>

</div>
  <div v-show="page==4">
    <div v-show="currentPage == parseInt((i+8)/8)" v-for="(index,i) in ceshi" v-bind:key="i">
            <div class="show1">
                <div class="leftpro"> <img :src="index.url" alt="" height="150" width="200"></div>
                <div class="rightpro"> <p class="ti">{{ index.title1 }}{{ change(i) }}</p></div>
            </div>

        </div>       
          
        <el-pagination
                layout="prev, pager, next"
                :total="change1()"     
                @size-change="handleSizeChange" class="pagin"></el-pagination>
</div>
  <div v-show="page==5">5</div>
</div>
        <div class="right">
            <div class="right1">
                <h2>全站热榜</h2>
                <p class="boxmax"><span class="span1">1.</span><a href="https://www.nowcoder.com/discuss/466376167394648064
" class="a1">美团后端Java面试(base北京)一面凉经</a></p>
                <p class="boxmax"><span class="span1">2.</span><a href="https://www.nowcoder.com/discuss/466360036508311552
" class="a1">同花顺C++二面，被锤了，希望能过</a></p>
                <p class="boxmax"><span class="span1">3.</span><a href="https://www.nowcoder.com/feed/main/detail/abfeeb7af6744a6fba61a8c1f484308d
" class="a1">2023.3.16美团暑期实习一面</a></p>
                <p class="boxmax"><span class="span1">4.</span><a href="https://www.nowcoder.com/feed/main/detail/50e82a67bea74e0c901772d0ab2674c7
" class="a1">美团暑期C++—面</a></p>
                <p class="boxmax"><span class="span1">5.</span><a href="https://www.nowcoder.com/discuss/466578522291585024
" class="a1">3.18上午美团暑期实习第二次笔试AK</a></p>
                <p class="boxmax"><span class="span1">6.</span><a href="https://www.nowcoder.com/discuss/466293741507080192
" class="a1">java后开实习面试记录(40min)</a></p>
                <p class="boxmax"><span class="span1">7.</span><a href="https://www.nowcoder.com/feed/main/detail/4025413d316040f2a1e90758795ec79b
" class="a1">滴滴一面 </a></p>
                <p class="boxmax"><span class="span1">8.</span><a href="https://www.nowcoder.com/discuss/466704090857226240
" class="a1">3.17-24转正实习-美团一面</a></p>
                <p class="boxmax"><span class="span1">9.</span><a href="https://www.nowcoder.com/feed/main/detail/3c7cfaac9dde4ef387c0d510c5793fb0
" class="a1">24届百度c++暑期实习面经</a></p>
                <p class="boxmax"><span class="span1">10.</span><a href="https://www.nowcoder.com/discuss/466234178573451264
" class="a1">3.15携程一面Java凉经</a></p>
            </div>
            <div class="right2">
                <h2>热议话题</h2>
                <p v-for="(index,i) in data" v-bind:key=i class="boxmax"><a :href="index.url" class="a1">{{ (i+1)+". "+index.title }}</a></p>
            </div>
        </div>
        
    </div>
    <div class="setup">
        <hr>
        <br><br><br>
         <div class="input">
    <el-input
    v-model="textarea"
    :rows="10"
    type="textarea"
    placeholder="此刻你想分享什么"
    class="input1"
  />
  <el-button type="primary" class="button">发布</el-button>
         </div>
         <br><br><br>

    </div>
    <Footer></Footer>
</template>
<script>
import Footer from '../components/footer.vue';
import test from "../tuijian.json"
import ceshi from "../ceshi.json"
import qianduan from "../qianduan.json"
import opinion from "../opinion.json"
    export default{
        name:'forum',
     
        data(){
            return{
                data: [
                    {
                    title:"#2023考研你上岸了吗",
                    url:"https://www.nowcoder.com/creation/subject/f4278c308b8e424d8e98bcfe338e04b6?entranceType_var=%E9%A6%96%E9%A1%B5%E7%83%AD%E8%AE%AE%E6%A6%9C"
                    },
                    {
                    title:"#简历被挂麻了，求建议",
                    url:"https://www.nowcoder.com/creation/subject/3c79972262a542f3a28fe5280fdae18f?entranceType_var=%E9%A6%96%E9%A1%B5%E7%83%AD%E8%AE%AE%E6%A6%9C"
                    },
                    {
                    title:"#我的成功项目解析",
                    url:"https://www.nowcoder.com/creation/subject/2b7c17e952e0445ab511abed97c622f3?entranceType_var=%E9%A6%96%E9%A1%B5%E7%83%AD%E8%AE%AE%E6%A6%9C"
                    },
                    {
                    title:"#秋招签约后的心态变化",
                    url:"https://www.nowcoder.com/creation/subject/57196259a46140a2b8cd8cba67b8a395?entranceType_var=%E9%A6%96%E9%A1%B5%E7%83%AD%E8%AE%AE%E6%A6%9C"
                    },
                    {
                    title:"#我的失利项目复盘",
                    url:"https://www.nowcoder.com/creation/subject/41b34c64d79043a9b5019781af864b26?entranceType_var=%E9%A6%96%E9%A1%B5%E7%83%AD%E8%AE%AE%E6%A6%9C"
                    },
                    {
                    title:"#我在牛爱网找对象",
                    url:"https://www.nowcoder.com/creation/subject/4e5d79cfddf446178eb6a1a2dc7338b6?entranceType_var=%E9%A6%96%E9%A1%B5%E7%83%AD%E8%AE%AE%E6%A6%9C"
                    },
                    {
                    title:"#为什么那么多公司毁约",
                    url:"https://www.nowcoder.com/creation/subject/705fcaceac6f415a8ec0974163e9078d?entranceType_var=%E9%A6%96%E9%A1%B5%E7%83%AD%E8%AE%AE%E6%A6%9C"
                    },
                    {
                    title:"#Ooffer是寒冬太冷还是我太菜",
                    url:"https://www.nowcoder.com/creation/subject/dcd44229756b43e2a480bdc698bbb0cb?entranceType_var=%E9%A6%96%E9%A1%B5%E7%83%AD%E8%AE%AE%E6%A6%9C"
                    },
                    {
                    title:"#一人推荐一个机械人值得去的公司",
                    url:"https://www.nowcoder.com/creation/subject/da4d1cc50e71467f9bdae359f2364889?entranceType_var=%E9%A6%96%E9%A1%B5%E7%83%AD%E8%AE%AE%E6%A6%9C"
                    },
                    {
                    title:"#机械制造2023笔面经",
                    url:"hhttps://www.nowcoder.com/creation/subject/210e464ac2a544d1a873733779c878f7?entranceType_var=%E9%A6%96%E9%A1%B5%E7%83%AD%E8%AE%AE%E6%A6%9C"
                    },
                    
],
                currentPage:1,
                pagesize:5,
                page:1,
                page1:1,
                opinion,
                o:0,
                test,
                ceshi,
                qianduan
            }
        },   
        mounted(){
            const {title,url}=this.opinion
            const {标题,图片}=this.test
            const {标题1,图片1}=this.qianduan
            const {title1,picture}=this.ceshi
        },
        components:{
            Footer
        },
        methods:{
            one(){
                this.page=1;
            },
            two(){
                this.page=2;
            },
            three(){
                this.page=3;
            },
            four(){
                this.page=4;
            },
            five(){
                this.page=5;
            },
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            },
            change(i){
                this.o=i;
            },
            change1(){
                return parseInt((this.o/8)*10) 
            }  
        }

    }
</script>
<style  scoped>
.box5{
    margin-left:50px;
    margin-right:50px;
    margin-bottom:40px;
}
.box6{
    width:auto;

    height:140px;

    /* background:red; */

}
.box7{
    width:auto;
    padding-top:30px;
    display:flex;

    padding-left:300px;

}
.xiala{
    font-size:large;
    border-radius:5px ;
    text-align: center;
    width:100px;
    height:50px;
    /* color:grey; */
}
.form1{
    width:700px;
    /* height:50px; */
}
.button1{
    width:130px;

    height:50px;
    /* color:grey; */
}
.box1{
    display:flex;
    background-color: rgb(237,247,248);
}
.left{
    /* height:1500px; */
    flex:7;
    /* background:red; */
}
.right{
    /* height:1500px; */
    flex:3;
    /* background:yellow; */
}
.el-menu-demo{
    margin-left:100px;
}
.right1{
    height:500px;
    width:400px;
    margin-left:30px;
    margin-top:60px;
    background:linear-gradient(rgb(253, 216, 222),rgb(247, 247, 247));
    border-radius: 2%;
}
.right2{
    height:500px;
    width:400px;
    margin-left:30px;
    margin-top:60px;
    background:linear-gradient(rgb(169, 252, 169),rgb(255, 255, 255));
    border-radius: 2%;
}
h2{
    text-align: left;
    padding-top:20px;
    margin-left:20px;
}
.span1{
    color:red;
    padding-right:10px;
}
.a1{
    text-decoration: none;
    color:rgb(14, 13, 13);
}
.a1:hover{
    color:rgb(77, 123, 248)
}
.boxmax{
    float: left;
    padding-left:50px;
    padding-right:50px;
    line-height:7px;
}
.show1{
    
    height:150px;
    width:auto;
    margin-left:100px;
    margin-top:10px;
    border-bottom:none ;
    border-radius:10px ;
    background: rgb(255, 255, 255);
    display:flex;
}
.leftpro{
    flex:0;
}
.rightpro{
    flex:8;
}
.pagin{
margin-top:30px;
margin-left:450px;
    /* bottom:0px; */
}
.ti{
    text-align:left;
    padding-left:35px;
    padding-top:10px;
    font-size:20px;
}
.ti:hover{
    color:rgb(0,190,189)
}
.setup{
    margin-top:30px;
}
input{
    outline-style: none ;
    border: 1px solid #ccc; 
    border-radius: 3px;
    padding: 10px 13px;
    width: 620px;
    font-size: 15px;
    font-weight: 700;
    
    border-radius: 0;
}

input:focus{
    border-color: #6eb1e7;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
}


.button1 {
    
    width: 120px;
    height: 50px;
    background-color: #6eb1e7;
    border-radius: 7px;
    display: flex;
    font-size: 20px;
    border: none;   
      outline: none;  
  
    /* color:grey; */
  }
  
  .button{
    margin-left:50px ;
  }
  .input1{
    
    width: 800px;
  }
</style>