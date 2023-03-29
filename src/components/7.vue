
<template>

    <div id="box7"></div>

</template>
        
        <script >
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  LegendComponent,
} from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);
export default {
  data() {
    return {
      option: {
        legend: {
          top: "bottom",
        },
        title: {
          text: "IT行业热门岗位需求量分析图",
          subtext: "Data",
          left: "center",
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true },
          },
        },
        series: [
          {
            name: "Nightingale Chart",
            type: "pie",
            radius: [50, 300],
            center: ["50%", "50%"],
            roseType: "area",
            itemStyle: {
              borderRadius: 10,
            },
            data: [
              { value: 33, name: "后台开发工程师" },
              { value: 18, name: "算法工程师" },
              { value: 16, name: "前端/交互/美工" },
              { value: 14, name: "移动端开发工程师" },
              { value: 13, name: "产品经理" },
              { value: 6, name: "云计算、大数据" },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    echarts.use([
      TitleComponent,
      ToolboxComponent,
      LegendComponent,
      PieChart,
      CanvasRenderer,
      LabelLayout,
    ]);
    this.getReports();
  },
  methods: {
    getReports() {
      echarts
        .init(document.getElementById("box7"), "0D2451")
        .setOption(this.option);
    },
  },
};
</script>
      
        <style>
#box7 {
  width: 400px;
  height: 250px;
}
</style>
      
      