
<template>

    <div id="box1"></div>

</template>
        
        <script >
import * as echarts from "echarts/core";
import {
  DatasetComponent,
  TitleComponent,
  GridComponent,
  TransformComponent,
} from "echarts/components";
import { BarChart } from "echarts/charts";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([
  DatasetComponent,
  TitleComponent,
  GridComponent,
  TransformComponent,
  BarChart,
  CanvasRenderer,
]);
export default {
  data() {
    return {
      option: {
        title: {
          text: "软件和信息技术服务业从业人数图（万人）",
          textStyle:{
            color:"#ffffff",
          }
        },
        dataset: [
          {
            dimensions: ["name", "age", "profession", "score", "date"],
            source: [
              ["2013", 470, "Engineer", 100, "2011-02-12"],
              ["2014", 546, "Teacher", 99, "2011-03-01"],
              ["2015", 576, "Musician", 98, "2011-02-14"],
              ["2016", 586, "Teacher", 97, "2011-02-18"],
              ["2017", 618, "Engineer", 96, "2011-04-02"],
              ["2018", 645, "Teacher", 95, "2011-01-16"],
              ["2019", 682, "Engineer", 94, "2011-03-19"],
              ["2020", 705, "Musician", 93, "2011-02-24"],
              ["2021", 738, "Engineer", 1, "2011-03-12"],
            ],
          },

          {
            transform: {
              type: "sort",
              config: { dimension: "score", order: "desc" },
            },
          },
        ],
        xAxis: {
          type: "category",
          axisLabel: { interval: 0, rotate: 30 },
        },
        yAxis: {},
        series: {
          type: "bar",
          encode: { x: "year", y: "Number of people" },
          datasetIndex: 1,
        },
      },
    };
  },
  mounted() {
    echarts.use([
      DatasetComponent,
      TitleComponent,
      GridComponent,
      TransformComponent,
      BarChart,
      CanvasRenderer,
    ]);
    this.getReports();
  },
  methods: {
    getReports() {
        echarts
        .init(document.getElementById("box1"), "0D2451")
        .setOption(this.option);
    },
  },
};
</script>
      
        <style scoped>

#box1 {

  width: 400px;
  height: 250px;
  /* position:fixed;
  left:0; */
  /* background:red; */
}
</style>
      
      