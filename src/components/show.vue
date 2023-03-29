
<template>
  <div class="a1">
    <div id="box"></div>
  </div>
</template>
      
      <script >
import * as echarts from "echarts";
import { TitleComponent, LegendComponent } from "echarts/components";
import { RadarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";
echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer]);
export default {
  data() {
    return {
      option: {
        title: {
          text: "",
        },
        legend: {
          data: ["分析结果", "平均水平"],
          textStyle:{
            color:"#ffffff",
          },
          top:"0%"
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: "学业成绩", max: 1000 },
            { name: "实习经历", max: 1000 },
            { name: "项目水平", max: 1000 },
            { name: "个人能力", max: 1000 },
            { name: "性格契合度", max: 1000 },
            { name: "工作岗位契合度", max: 1000 },
          ],
        },
        series: [
          {
            name: "Budget vs spending",
            type: "radar",
            data: [
              {
                value: [500, 400, 800, 650, 420, 710],
                name: "分析结果",
              },
              {
                value: [600, 600, 400, 500, 600, 610],
                name: "平均水平",
              },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    echarts.use([TitleComponent, LegendComponent, RadarChart, CanvasRenderer]);
    this.getReports();
  },
  methods: {
    getReports() {
      echarts
        .init(document.getElementById("box"), "0D2451")
        .setOption(this.option);
    },
  },
};
</script>
    
      <style>
#box {
  padding-top: 30px;
  padding-left: 80px;
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background:red; */
}
</style>
    
    