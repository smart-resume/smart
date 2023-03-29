
<template>

    <div id="box5"></div>

</template>
        
        <script >
import * as echarts from "echarts/core";
import { TitleComponent } from "echarts/components";
import { PieChart } from "echarts/charts";
import { LabelLayout } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { whileStatement } from "@babel/types";

echarts.use([TitleComponent, PieChart, CanvasRenderer, LabelLayout]);
export default {
  data() {
    const data1 = [
      {
        name: "25岁以下",
        value: 17.43,
      },
      {
        name: "25岁-30岁",
        value: 52.96,
      },
      {
        name: "30岁-35岁",
        value: 22.96,
      },
      {
        name: "35岁-40岁",
        value: 5.49,
      },
      {
        name: "40岁-45岁",
        value: 0.88,
      },
      {
        name: "45岁以上",
        value: 0.28,
      },
    ];
    const data2 = [
      {
        name: "3年以下",
        value: 23.25,
      },
      {
        name: "3年-5年",
        value: 28.18,
      },
      {
        name: "5年-8年",
        value: 26.86,
      },
      {
        name: "8年-10年",
        value: 10,
      },
      {
        name: "10年-15年",
        value: 9.49,
      },
      {
        name: "15年以上",
        value: 2.21,
      },
    ];
    return {
      option: {
        title: [
          {
            text: "互联网行业程序员年龄、工作年限情况",
            left: "center",
            top: "10%",
            textStyle:{
              color:"#ffffff"
            }
          },
          {
            subtext: "年龄分布",
            left: "30%",
            top: "68%",
            textAlign: "center",
          },
          {
            subtext: "工作年限分布",
            left: "70%",
            top: "68%",
            textAlign: "center",
          },
        ],
        series: [
          {
            type: "pie",
            radius: "25%",
            center: ["50%", "50%"],
            data: data1,
            label: {
              position: "outer",
              alignTo: "none",
              bleedMargin: 5,
            },
            left: 0,
            right: "40%",
            top: 0,
            bottom: 0,
          },
          {
            type: "pie",
            radius: "25%",
            center: ["50%", "50%"],
            data: data2,
            label: {
              position: "outer",
              alignTo: "labelLine",
              bleedMargin: 5,
            },
            left: "40%",
            right: 0,
            top: 0,
            bottom: 0,
          },
        ],
      },
    };
  },
  mounted() {
    echarts.use([TitleComponent, PieChart, CanvasRenderer, LabelLayout]);
    this.getReports();
  },
  methods: {
    getReports() {
      echarts
        .init(document.getElementById("box5"), "0D2451")
        .setOption(this.option);
    },
  },
};
</script>
      
        <style>
#box5 {
  width: 400px;
  height: 250px;
}
</style>
      
      