
<template>
<div class="a1">
  <div id="box"></div>
</div>
  </template>
  
  <script >
import * as echarts from 'echarts';
import { TitleComponent, LegendComponent } from 'echarts/components';
import { RadarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer]);
  export default {
    data(){
      return{
        option:{
          title: {
            text: ''
         },
          legend: {
            data: ['Allocated Budget', 'Actual Spending']
        },
          radar: {
    // shape: 'circle',
    indicator: [
      { name: '学业成绩', max: 1000 },
      { name: '实习经历', max: 1000 },
      { name: '项目水平', max: 1000 },
      { name: '个人能力', max: 1000 },
      { name: '性格契合度', max: 1000 },
      { name: '工作岗位契合度', max: 1000 }
    ]
        },
        series: [
        {
          name: 'Budget vs spending',
          type: 'radar',
          data: [

          {
          value: [500, 400, 800, 650, 420, 710],
          name: '分析结果'
        }
            ]
          }
        ]
        }
      }
    },
    mounted(){
      echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer]);
      this.getReports()
  },
  methods:{
    getReports() {
      echarts.init(document.getElementById("box"),'dark').setOption(this.option);
    }
  }
}
  
  </script>

  <style>
  #box{
    padding-top:30px;
    padding-left:80px;
    width:600px;
    height:300px;
    /* background:red; */
  }
</style>

