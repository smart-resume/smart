
<template>

    <div id="box44"></div>

</template>
      
      <script >
import * as echarts from "echarts/core";
import {
  TitleComponent,
  GridComponent,
  DataZoomComponent,
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  TitleComponent,
  GridComponent,
  DataZoomComponent,
  BarChart,
  CanvasRenderer,
]);
export default {
  data() {
    const zoomSize = 6;
    myChart.on("click", function (params) {
      console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
      myChart.dispatchAction({
        type: "dataZoom",
        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
        endValue:
          dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)],
      });
    });
    return {
      option: {
        title: {
          text: "就业学生年龄分布占比",
        },
        xAxis: {
          data: dataAxis,
          axisLabel: {
            inside: true,
            color: "#fff",
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            show: false,
          },
          z: 10,
        },
        yAxis: {
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#999",
          },
        },
        dataZoom: [
          {
            type: "inside",
          },
        ],
        series: [
          {
            type: "bar",
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "#83bff6" },
                { offset: 0.5, color: "#188df0" },
                { offset: 1, color: "#188df0" },
              ]),
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#2378f7" },
                  { offset: 0.7, color: "#2378f7" },
                  { offset: 1, color: "#83bff6" },
                ]),
              },
            },
            data: data,
          },
        ],
      },
    };
  },
  mounted() {
    echarts.use([
      TitleComponent,
      GridComponent,
      DataZoomComponent,
      BarChart,
      CanvasRenderer,
    ]);
    this.getReports();
  },
  methods: {
    getReports() {
      echarts
        .init(document.getElementById("box4"), "0D2451")
        .setOption(this.option);
    },
  },
};
</script>
    
      <style>
#box4 {
  width: 400px;
  height: 250px;
}
</style>
    
    