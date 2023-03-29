<template>
    <div class="hello">
        <div id="form-border2">
			<div class="h1">请上传你的简历</div>
			<div class="h2">支持DOC、DOCX、PDF格式简历文件<br>文件大小不超过 8 M</div>
			<form class="form1">
				<el-upload
    v-model:file-list="fileList"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    multiple
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :limit="3"
    :on-exceed="handleExceed"
  >
  <!-- <template #tip>
      <div class="el-upload__tip">
        jpg/png files with a size less than 500KB.
      </div>
    </template> -->
	<!-- <p>{{ $store.state.num }}</p> -->
    <el-button class="button1">上传简历</el-button>

  </el-upload>
				<el-button class="button1">在线编写</el-button>

			</form>
			<p @click="$router.back();$store.state.num=1" >返回</p>

		</div>
    </div>


 </template>
 <script>
     export default{
        name:'update',
        data(){
            return{
                num:0,
            }
        },  
        methods:{
			show(){
				return $router.go(-1)
			}
        }
     }
 </script>
 <style  scoped>
 .hello{
	/* width: 100%;
	height: 100%; */
	position: fixed;
	margin: auto;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
			background: url(../assets/images/picture/x.jpg) top left;
			background-size: 100%;
            z-index:10000;
		}
	#form-border2 {
	background-color: rgb(248, 240, 240);
	width: 500px;
	height: 600px;
	position: absolute;
	margin: auto;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
    border-radius:20px 20px;
}
.form1{
	margin-top:170px;
}
.button1{
width:250px;
height:70px;
margin-top:20px;
background-color: rgb(230, 238, 235);
font-size:20px;

}
.h1{
	font-size: 30px;
	padding-top:30px;
}
.h2{
	font-size: 20px;
	padding-top:30px;
}

p{
	font-size: 18px;
	margin-top:30px;
	font-family: 'Gill Sans';
	cursor: pointer;
}

 </style>