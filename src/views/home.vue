<template>
  <div class="swiper1">
    <div class="swiper">
      <div class="banner">
        <img
          v-for="(v, i) in img"
          v-bind:key="i"
          :src="v"
          v-show="i == n"
          height="150"
          class="img1"
        />
        <div class="banner-circle">
          <ul>
            <li
              v-for="(v, i) in img"
              :key="i"
              :class="i == n ? 'selected' : ''"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="box6">
    <div class="box7">
      <select class="xiala">
        <option>全职</option>
        <option>实习</option>
      </select>
      <input 
        
        type="text"
        name="fname"
        class="form1"
        placeholder="  搜索职位，公司"
        autocomplete="off"
      />

      <el-button type="info" class="button1">搜索</el-button>
    </div>
  </div>
  <div class="yellow">
    <div class="swiper2">
      <div class="banner">
        <img
          v-for="(v, i1) in img1"
          v-bind:key="i1"
          :src="v"
          v-show="i1 == n1"
          height="350"
          class="img2"
        />
        <div class="banner-circle1">
          <ul>
            <li
              v-for="(v, i1) in img1"
              :key="i1"
              :class="i1 == n1 ? 'selected' : ''"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <div class="box1">
    <div class="left"></div>
    <div class="box2">
      <img
        src="../assets/images/1.png"
        width="150"
        height="150"
      /><br />高薪名企
    </div>
    <div class="box2">
      <img
        src="../assets/images/2.png"
        width="150"
        height="150"
      /><br />智能分析
    </div>
    <div class="box2">
      <img
        src="../assets/images/3.png"
        width="150"
        height="150"
      /><br />快速入职
    </div>
    <div class="box2">
      <img
        src="../assets/images/3.png"
        width="150"
        height="150"
      /><br />有投必应
    </div>
    <div class="right"></div>
  </div>
  <div class="hi">知名企业</div>
  <div class="box3">
    <div class="left"></div>
    <div class="middle">
      <div class="box4">
        <img
          v-for="(item, index) in item"
          :key="index"
          :src="item"
          width="250"
          height="150"
          class="box5"
        />

        <br /><br />
      </div>
    </div>
    <div class="right"></div>
  </div>
  <Footer></Footer>
</template>
<script>
import Footer from "../components/footer.vue";
export default {
  name: "home",
  data() {
    return {
      item: [
        require("../assets/images/picture/a.jpg"),
        require("../assets/images/picture/aa.jpg"),
        require("../assets/images/picture/ab.jpg"),
        require("../assets/images/picture/ad.jpg"),
        require("../assets/images/picture/ae.jpg"),
        require("../assets/images/picture/ag.jpg"),
        require("../assets/images/picture/a.jpg"),
        require("../assets/images/picture/ah.jpg"),
        require("../assets/images/picture/ak.jpg"),
        require("../assets/images/picture/al.jpg"),
        require("../assets/images/picture/am.jpg"),
        require("../assets/images/picture/ao.jpg"),
      ],

      img: [
        require("../assets/images/picture1/357.jpg"),
        require("../assets/images/picture1/555.jpg"),
        require("../assets/images/picture1/572.jpg"),
      ],
      img1: [
        require("../assets/images/picture1/666.jpg"),
        require("../assets/images/picture1/759.jpg"),
        require("../assets/images/picture1/772.jpg"),
        require("../assets/images/picture1/777.jpg"),
        require("../assets/images/picture1/828.jpg"),
      ],
      n: 2,
      n1: 1,
    };
  },
  methods: {
    fun: function () {
      //setInterval(函数体,时间)
      setInterval(this.play, 5000);
    },
    play: function () {
      this.n++;
      this.n1++;
      if (this.n == this.img.length) {
        this.n = 0;
      }
      if (this.n1 == this.img1.length) {
        this.n1 = 0;
      }
    },
  },
  mounted: function () {
    //生命周期  钩子函数   挂载完成
    this.fun();
  },

  components: {
    Footer,
  },
};
</script>
<style  scoped >
.swiper1 {
  height: 160px;
}
.swiper {
  width: auto;
  position: absolute;
  right: 0;
  left: 0;
  top: 40px;

  /* background:yellow; */
}
.swiper2 {
  width: auto;
  position: absolute;
  right: 0;
  left: 0;
  top: 370px;

  /* background:yellow; */
}
.swiper-context {
  position: absolute;
  left: 0;
  display: flex;
}
/* .swiper-item{
    height:400px;
    width: 800px;
} */
.box1 {
  height: 200px;
  /* width:100%; */
  position: absolute;
  background: rgb(205, 190, 190);
  left: 0;
  right: 0;
  display: flex;
  margin-left: 0px;
  margin-right: 0px;
}
.box2 {
  font-family: " FZKaTong-M19S";
  font-size: 20px;
  flex: 1;
}
.left {
  flex: 0.5;
}
.right {
  flex: 0.5;
}
.hi {
  font-family: "SimHei";
  font-size: xx-large;
  margin-top: 200px;
  padding: 100px;
  height: 30px;
  color: black;
}
.box3 {
  /* width:100%; */
  /* background:rgb(205, 190, 190); */
  display: flex;
}
.middle {
  flex: 3;
  display: flex;
}
.box4 {
  flex: 1;
}
.box5 {
  margin-left: 40px;
  margin-right: 35px;
  margin-bottom: 40px;
  border-radius: 10px;
}
.box6 {
  width: auto;
  height: 150px;
  margin-top: 0px;
  /* background:red; */
}
.box7 {
  width: auto;
  padding-top: 30px;
  display: flex;
  padding-left: 300px;
  
}

select{
    border-radius:5px;

}

input{
    outline-style: none ;
    border: 1px solid #ccc; 
    border-radius: 3px;
    padding: 13px 14px;
    width: 620px;
    font-size: 15px;
    font-weight: 700;
    font-family: "Microsoft soft";
    border-radius: 0;
}

input:focus{
    border-color: #6eb1e7;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)
}


.button1 {
    
    width: 120px;
    height: 50px;
    background-color: #6eb1e7;
    border-radius: 7px;
    display: flex;
    font-size: 20px;
    border: none;   
      outline: none;  
  
    /* color:grey; */
  }
  
.xiala {
  font-size: large;
  text-align: center;
  width: 100px;
  height: 50px;
  /* color:grey; */
}
.form1 {
  width: 700px;
  /* height:50px; */
}

.img1 {
  position: absolute;
  width: 100%;

  object-fit: cover;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
.img2 {
  position: absolute;
  width: 100%;

  object-fit: cover;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
.banner-circle li {
  display: inline-block;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
}
.banner-circle ul {
  text-align: center;
}
.banner-circle {
  position: absolute;
  top: 100px;
  /* bottom: 5px; */
  left: 0;
  right: 0;
  color: #f8f3f3;
  z-index: 1;
}
.banner-circle1 li {
  display: inline-block;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  padding: 5px;
  margin: 2px;
}
.banner-circle1 {
  position: absolute;
  top: 300px;
  /* bottom: 5px; */
  left: 0;
  right: 0;
  color: #f8f3f3;
  z-index: 1;
  text-align: center;
}
.banner-circle1 .selected {
  background: rgba(0, 0, 0, 0.8);
}
.banner-circle .selected {
  background: rgba(0, 0, 0, 0.8);
}
.banner {
  margin: 0;
}
.yellow {
  width: auto;
  height: 350px;
  background: blanchedalmond;
}
</style>