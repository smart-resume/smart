
<template>

    <div id="box3"></div>

</template>
        
        <script >
import * as echarts from "echarts/core";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import { FunnelChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  LegendComponent,
  FunnelChart,
  CanvasRenderer,
]);
export default {
  data() {
    return {
      option: {
        title: {
          // text: "学生个人能力层次分析图",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%",
        },
        toolbox: {
          feature: {
            dataView: { readOnly: false },
            restore: {},
            saveAsImage: {},
          },

        },
        legend: {
          data: ["实习经历", "项目经历", "荣誉奖项", "能力特长", "学业成绩"],
          textStyle:{
            color:"#ffffff",
          },
        },
        series: [
          {
            name: "Funnel",
            type: "funnel",
            left: "10%",
            top: 60,
            bottom: 60,
            width: "80%",
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside",
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid",
              },
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1,
            },
            emphasis: {
              label: {
                fontSize: 20,
              },
            },
            data: [
              { value: 60, name: "学业成绩" },
              { value: 40, name: "能力特长" },
              { value: 20, name: "荣誉奖项" },
              { value: 80, name: "项目经历" },
              { value: 100, name: "实习经历" },
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
      TooltipComponent,
      LegendComponent,
      FunnelChart,
      CanvasRenderer,
    ]);
    this.getReports();
  },
  methods: {
    getReports() {
      echarts
        .init(document.getElementById("box3"), "0D2451")
        .setOption(this.option);
    },
  },
};
</script>
      
        <style>
#box3 {

  width: 400px;
  height: 450px;

}
</style>
      
      