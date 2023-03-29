
<template>

    <div id="box8"></div>

</template>
        
        <script >
import * as echarts from "echarts/core";
import {
  DatasetComponent,
  GridComponent,
  VisualMapComponent,
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  DatasetComponent,
  GridComponent,
  VisualMapComponent,
  BarChart,
  CanvasRenderer,
]);

export default {
  data() {
    return {
      option: {
        dataset: {
          source: [
            ["score", "amount", "product"],
            [10, 5.5, "<=5000元"],
            [20, 18.5, "5001-8000"],
            [30, 49.2, "8000-17000"],
            [40, 20.5, "17001-30000"],
            [50, 3.9, "30001-40000"],
            [60, 1.6, "40001-60000"],
            [70, 0.3, "60001-85000"],
            [80, 0.5, ">=85001元"],
          ],
        },
        grid: { containLabel: true },
        xAxis: { name: "amount" },
        yAxis: { type: "category" },
        visualMap: {
          orient: "horizontal",
          left: "center",
          min: 10,
          max: 100,
          text: ["High Score", "Low Score"],
          // Map the score column to color
          dimension: 0,
          inRange: {
            color: ["#65B581", "#FFCE34", "#FD665F"],
          },
        },
        series: [
          {
            type: "bar",
            encode: {
              // Map the "amount" column to X axis.
              x: "amount",
              // Map the "product" column to Y axis
              y: "product",
            },
          },
        ],
      },
    };
  },
  mounted() {
    echarts.use([
      DatasetComponent,
      GridComponent,
      VisualMapComponent,
      BarChart,
      CanvasRenderer,
    ]);
    this.getReports();
  },
  methods: {
    getReports() {
      echarts
        .init(document.getElementById("box8"), "0D2451")
        .setOption(this.option);
    },
  },
};
</script>
      
        <style>
#box8 {
  width: 400px;
  height: 200px;
}
</style>
      
      