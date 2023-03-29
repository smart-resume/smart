
<template>
 
    <div id="box2"></div>

</template>
      
      <script >
import * as echarts from "echarts/core";
import { TooltipComponent, LegendComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { whileStatement } from "@babel/types";

echarts.use([
  TooltipComponent,
  LegendComponent,
  PieChart,
  CanvasRenderer,
  LabelLayout,
]);
export default {
  data() {
    return {
      option: {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)",
        },
        legend: {
          data: ["本科学历", "硕士学历", "大专及以下"],
          textStyle:{
            color:"#ffffff",
          }
        },
        series: [
          {
            name: "男女比例",
            type: "pie",
            selectedMode: "single",
            radius: [0, "30%"],
            label: {
              position: "inner",
              fontSize: 14,
            },
            labelLine: {
              show: false,
            },
            data: [
              { value: 82.75, name: "男" },
              { value: 17.25, name: "女", selected: true },
            ],
          },
          {
            name: "学历",
            type: "pie",
            radius: ["45%", "60%"],
            labelLine: {
              length: 30,
            },
            label: {
              formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              backgroundColor: "#F6F8FC",
              borderColor: "#8C8D8E",
              borderWidth: 1,
              borderRadius: 4,
              rich: {
                a: {
                  color: "#6E7079",
                  lineHeight: 22,
                  align: "center",
                },
                hr: {
                  borderColor: "#8C8D8E",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#4C5058",
                  fontSize: 14,
                  fontWeight: "bold",
                  lineHeight: 33,
                },
                per: {
                  color: "#fff",
                  backgroundColor: "#4C5058",
                  padding: [3, 4],
                  borderRadius: 4,
                },
              },
            },
            data: [
              { value: 69.27, name: "本科学历" },
              { value: 14.53, name: "硕士学历" },
              { value: 16.2, name: "大专及以下" },
            ],
          },
        ],
      },
    };
  },
  mounted() {
    echarts.use([
      TooltipComponent,
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
        .init(document.getElementById("box2"), "0D2451")
        .setOption(this.option);
    },
  },
};
</script>
    
      <style scoped>

#box2 {
  width: 400px;
  height: 250px;
  /* position:fixed; */

  /* background:red; */
}
</style>
    
    