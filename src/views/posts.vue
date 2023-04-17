<template>
    <div>
        <div class="box1">
            <div class="box3">
                <div class="box4">
                <select class="xiala">
                    <option>全职</option>
                    <option>实习</option>
                </select>
                <input type="text" name="fname" class="form1" placeholder="搜索职位，公司" autocomplete="off">

                <el-button type="info"  class="button1">搜索</el-button>

                </div>
            </div>
            <div class="box5">
                <select class="xiala1" ref="ad">
                    <option disabled selected hidden>公司行业</option>

                    <option>互联网/it/电子/通信</option>
                </select>
                <select class="xiala1" ref="ad">
                    <option disabled selected hidden>职位类型</option>
                    <option>技术</option>
                    <option>产品</option>
                    <option>设计</option>
                </select>
                <select class="xiala1" ref="ad">
                    <option disabled selected hidden>工作经验</option>
                    <option>在校生</option>
                    <option>应届生</option>
                </select>
                <select class="xiala1" ref="ad">
                    <option disabled selected hidden> 求职类型</option>
                    <option>全职</option>
                    <option>兼职</option>
                </select>
                <select class="xiala1" ref="ad">
                    <option disabled selected hidden>薪资待遇</option>
                    <option>3k以下</option>
                    <option>3k-5k</option>
                    <option>5k以上</option>
                </select>
                <select class="xiala1" ref="ad">
                    <option disabled selected hidden>学历要求</option>
                    <option>大专</option>
                    <option>本科</option>
                    <option>硕士</option>
                </select>
                <select class="xiala1" ref="ad">
                    <option disabled selected hidden>公司规模</option>
                    <option>0-20</option>
                    <option>20-100</option>
                    <option>100-1000</option>
                </select>
                <select class="xiala1" ref="ad">
                    <option disabled selected hidden>融资阶段</option>
                    <option>未融资</option>
                    <option>天使轮</option>
                    <option>A轮</option>

                </select>
                <b class="b" @click="run()">清空筛选条件</b>
            </div>
            
        </div>

        

        <div class="box2">

            <div class="box2_1">
                <el-menu
                :default-active="activeIndex"
                class="el-menu-demo"
                mode="horizontal"
                background-color=rgb(131,149,167)
                text-color="#fff"
                active-text-color="#ffd04b"
                @select="handleSelect"
                >
                <el-menu-item index="1" @click="one()">智能匹配</el-menu-item>
                <el-menu-item index="2" @click="two()">最新发布</el-menu-item>
  
            </el-menu>
          <div v-show="page == 1">      
                <div v-show="currentPage == 1">
                    <div class="show1">
                        <div class="left">
                        <p class="p1">土建工程师</p>
                        <p class="p3"><span class="p2">7k-13k</span><span class="p4"> 南京 | 3-5年 | 社招 | 大专</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">浙江喜来登度假村有限公司</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                    <div class="show1">
                        <div class="left">
                        <p class="p1">Web前端工程师</p>
                        <p class="p3"><span class="p2">面议</span><span class="p4"> 上海 | 不限 | 校招 | 本科</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">合合信息</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                    <div class="show1">
                        <div class="left">
                        <p class="p1">软件测试工程师</p>
                        <p class="p3"><span class="p2">面议</span><span class="p4"> 深圳 | 不限 | 校招 | 本科</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">保诚Prudential</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                    <div class="show1">
                        <div class="left">
                        <p class="p1">服务端开发工程师</p>
                        <p class="p3"><span class="p2">面议</span><span class="p4"> 杭州 | 不限 | 校招 | 本科</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">浙江无端科技股份有限公司</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                    <div class="show1">
                        <div class="left">
                        <p class="p1">SSD工程师</p>
                        <p class="p3"><span class="p2">12k-25k</span><span class="p4"> 杭州 | 1-3年 | 社招 | 本科</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">北京网迅科技有限公司杭州分公司</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                    <div class="show1">
                        <div class="left">
                        <p class="p1">Web前端高级研发工程师</p>
                        <p class="p3"><span class="p2">15k-30k</span><span class="p4"> 南京 | 3-5年 | 社招 | 本科</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">易安联</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                    <div class="show1">
                        <div class="left">
                        <p class="p1">Web前端初级研发工程师</p>
                        <p class="p3"><span class="p2">10k-15k</span><span class="p4"> 南京 | 3-5年 | 社招 | 本科</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">易安联</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                    <div class="show1">
                        <div class="left">
                        <p class="p1">Web前端中级研发工程师</p>
                        <p class="p3"><span class="p2">12k-20k</span><span class="p4"> 南京 | 3-5年 | 社招 | 本科</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">易安联</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                </div>
                <div v-show="currentPage == 2">
                    <div class="show1">
                        <div class="left">
                        <p class="p1">EDA产品测试工程师-正式</p>
                        <p class="p3"><span class="p2">10-30K
</span><span class="p4"> 北京 | 1-3年 | 社招 | 本科</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">芯思维
</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                    <div class="show1">
                        <div class="left">
                        <p class="p1">游戏QA
</p>
                        <p class="p3"><span class="p2">10-30K</span><span class="p4"> 上海 | 3-5年 | 社招 | 本科</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">秒世界</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                    <div class="show1">
                        <div class="left">
                        <p class="p1">智慧商业产品线-测试工程师</p>
                        <p class="p3"><span class="p2">面议</span><span class="p4"> 深圳 | 3-5年 | 社招 | 本科</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">暗物智能DMAI</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                    <div class="show1">
                        <div class="left">
                        <p class="p1">自动驾驶系统工程师</p>
                        <p class="p3"><span class="p2">20-26K</span><span class="p4"> 广州 | 3-5年 | 社招 | 本科</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">文远知行</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                    
                </div>
                <el-pagination 
                layout="prev, pager, next"
                :total="20"     
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange" class="pagin">
</el-pagination>
            </div>
            <div v-show="page == 2">
                <div v-show="currentPage == hi(i) " v-for="(index,i) in posts1" v-bind:key="index.职位">
                    <div class="show1">
                        <div class="left">

                        <p class="p1">{{index.职位}}</p>
                        <p class="p3"><span class="p2">{{index.薪酬}}</span><span class="p4"> {{index.工作地点+" | "+ index.招聘性质+" | "+ index.招聘性质+" | "+ index.学历要求}}</span></p>
                        </div>
                        <div class="middle"></div>
                        <div class="right"><p class="p2_1">{{index.公司名称}}</p><el-button type="danger" class="right1">申请职位</el-button></div>
                    </div>
                    </div>
                    <el-pagination
                layout="prev, pager, next"
                :total="hi1(post2)"     
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange" class="pagin">
</el-pagination>
            </div>           
                <!-- <el-pagination
                layout="prev, pager, next"
                :total="50"     
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange" class="pagin">
</el-pagination> -->

</div>

            <div class="box2_2">
                <img src="../assets/images/picture/f.jpg" alt="" width="300" height="400" class="picture1"><br>
                <img src="../assets/images/picture/ap.jpg" alt="" width="130" height="130" class="picture2">
                <img src="../assets/images/picture/ao.jpg" alt="" width="130" height="130" class="picture3">
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
<script>

import posts1 from "../text.json"

import Footer from '../components/footer.vue';
    export default{
        
        name:'posts',

        data(){
            return{
                data: [],
                currentPage:1,
                pagesize:5,
                page:1,
                posts1,
                post2:0,
            }
        },
        mounted(){
            const {职位,薪酬,工作地点,工作经验,招聘性质,学历要求,公司名称}=this.posts1;
        },
        methods:{
            run(){
                this.$refs.ad.clearSelection();
            },
            handleSizeChange: function (size) {
                this.pagesize = size;
            },
            handleCurrentChange: function(currentPage){
                this.currentPage = currentPage;
            },
            one(){
                this.page=1;
            },
            two(){
                this.page=2;
            },
            three(){
                this.page=3;
            },
            hi(i){
                this.post2=i;
                return parseInt((i+8)/8);
            },
            hi1(i){
                return parseInt(((i)/8)*10);

            }
        },
        components:{
            Footer
        },
    }
</script>
<style  scoped>
.box1{
    width:auto;
    height:200px;
    /* background:yellow; */
}
.box2{
    display:flex;
    background-color:rgb(237,247,248);
}
.box2_1{
    flex:7;

    margin-top:50px;
}
.box2_2{
    flex:3;

    margin-top:50px;
}
.box3{
    width:auto;
    height:100px;
    /* background:red; */

}
.box4{
    width:auto;
    padding-top:30px;
    display:flex;

    padding-left:90px;

}
.box5{
    width:auto;
    padding-top:30px;
    /* height:100px; */
    /* background:yellow; */
    float:left;
    /* margin-left:200px; */
    padding-left:10px;
}
.xiala{
    font-size:large;
    text-align: center;
    width:100px;
    height:50px;
    /* color:grey; */
}

.xiala1{
    font-size:smaller;
    text-align: center;
    width:90px;
    height:48px;

    margin-left:80px;

    background-color:rgba(241, 236, 236, 0.699);
}
.form1{
    width:700px;
    /* height:50px; */
    /* font-size: 100px; */
}

select{
    border-radius:5px;

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
  

.b{
    font-size:15px;
    margin-left:40px;
    vertical-align:baseline;
    
    /* padding-bottom:15px; */
    /* top:10px; */
    /* background:yellow; */
}
/* .picture1{
position:fixed;
right:200px;
} */
.picture2{
margin-top:30px;
float:left;

margin-left:74px;

} 
.picture3{
    margin-top:30px;
float:left;
margin-left:40px;
} 

.el-menu-demo{
    margin-left:90px;

}
.pagin{
margin-top:30px;
margin-left:450px;
    /* bottom:0px; */
}
.show1{
    height:100px;
    width:auto;
    margin-left:90px;
    margin-top:8px;
    
    border-radius:6px ;
    background: rgb(255, 255, 255);
    display:flex;
}
.left{
flex:6;
}
.middle{
    flex:2;
}
.right{
    flex:3;
}
.p1{

    display: flex;
    align-items:left;
    color:rgb(31, 28, 28);
    font-weight:bold;
    font-size: 18px;
    padding:20px 0 0px 30px;
    margin-bottom:0px;
    border:0;
    line-height:0px;

}
.p1:hover{
    color:rgb(0,190,189)
}
.p2{
    display: flex;
    align-items:left;
    color:rgb(241, 82, 54);
    font-weight:bold;
    font-size:20px;
    padding:15px 0 0px 30px;
    margin-bottom:0px;
    border:0;
    line-height:0px;
}
.p2_1{
    margin-top:20px;
    line-height:10px;
    color:rgb(118, 120, 121);

}
.p2_1:hover{
    color:rgb(0,190,189)
}
/* .p2{

    color:red;
    font-weight:bold;
    margin-top:0px;
} */
.p3{
    display:flex;
}
.p4{
    margin-left:30px;
}
.right1{
    margin-top:0px;
    background-color: #6eb1e7;
    border: none;
}
.right1:hover{
    color:rgb(250, 223, 102)
}

</style>