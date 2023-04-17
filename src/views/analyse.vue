<template>
    <div class="main">
        <div class="flex-box" style="flex-direction: column; margin-top: 110px;">
            <div class="flex-box" style="justify-content: space-between; text-align: left; ">
                <div>
                    <h2>你为什么需要一份好的简历</h2>
                    <p>你为什么需要一份好的简历</p>
                    <p>企业hr每天查看上千份各式各样的简历</p>
                    <p>平均每份简历查看6秒钟</p>
                    <p>只有一份规范、专业的简历，才能引起hr注意</p>
                    <p>智能简历已帮12,863位候选人分析简历，通过率提高90%</p>
                    <div class="flex-box" style="justify-content: center; ">
                        <el-button type="danger" size="large" round v-if="$store.state.num  == 0" @click="$router.push({path:'/update'})">点击体验</el-button>
                        <el-button type="danger" size="large" round v-else-if="$store.state.num  == 1" @click="$router.push({path:'/data'})">点击体验</el-button>
                    </div>
                </div>
                <el-image style="height: 200px; width: 320px; margin-top: 20px;" src="/analyse/1.png" />
            </div>
            <div style="margin-top: 30px; "><h2>产品简介</h2></div>
            <div style="margin-top: 50px; ">
                <div v-for="(item, index) in data" :key="index" class="flex-box" style="justify-content: space-between; margin-bottom: 120px; ">
                    <el-image style="width: 450px; height: 330px; " :src="item.url" />
                    <div class="flex-box" style="width: 470px; align-items: center; ">
                        <div>
                            <h3>{{ item.title }}</h3>
                            <p style="text-align: left; ">{{ item.content }}
                            </p>
                            <div style="margin-top: 50px; ">
                                <el-button type="info">了解更多</el-button>
                                <el-button>立即体验</el-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>
<script>
import router from '@/router';
import { method } from 'lodash';
 import Footer from '../components/footer.vue';
 import Speech from "speak-tts";
 export default{
     name: 'analyse',
     data() {
         return {
             data: [
                 {
                     url: '/analyse/a1.png',
                     title: '对于求职者简历关键信息进行智能识别和转化',
                     content: '从简历文本中智能抽取关键内容，基于海量数据样本，智能解析出结构化简历数据，汇总反馈，分析简历优势可识别处理150余种人才特征支持多种简历格式批量上传'
                 },
                 {
                     url: '/analyse/a2.png',
                     title: '对求职者简历的进行全方位的扫描探测',
                     content: '提炼简历的亮点：技能领域、教育背景、公司背景等风险提示：时间冲突、教育经历、频繁跳槽、转行等'
                 },
                 {
                     url: '/analyse/a3.png',
                     title: '关联大数据知识图谱，帮助求职者纠正简历错误信息',
                     content: '对简历中的公司、学校、技能、证书等文本信息进行标注和解释，提示准确含义及相关标签，便于HR准确判断人才与职位的匹配度'
                 },
                 {
                     url: '/analyse/a4.png',
                     title: '提炼求职者人才特征，更好的寻求合适岗位',
                     content: '提取简历中提到的技能特长、工作经验、公司经历、学校经历等，深度挖掘求职者的特征标签'
                 }
             ]
         }
         

     },
     
 }
</script>

<style scoped>
 .main {
     height: 1000px;
     width: 1000px;
     /*background-color: #f5f5f5;*/
     margin: auto;
 }
 .content-container {
     box-sizing: border-box;
     width: 100%;
     height: 100%;
     transition: width 0.3s ease;
 }
 .flex-box {
     display: flex;
 }
</style>
