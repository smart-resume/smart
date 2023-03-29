<template>
    <div class="hello">
    <div id="form-border2">
            <img src="../assets/images/演示.jpg" class="form-img2"><br>
			<span class="form-span">重置密码</span>

			<form method="post">
				<input id="account" class="form-input11" type="text" placeholder="请输入用户名" required="required"/><br>
				<input id="password" class="form-input11" type="password" placeholder="请输入重置后密码" required="required"/><br>
				<input id="password" class="form-input11" type="password" placeholder="请确认密码" required="required"/><br>	
				<label id="retuenLogin" class="form-label2" for="password"><a @click="$router.push({path:'/login'})">返回登陆</a></label><br>
				<input id="login" class="form-button2" type="submit" value="修改密码" @click="$router.push({path:'/login'})"/>
			</form>
		</div>
    </div>
</template>
<script>
    export default{
        name:'forgetpassword'
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
			background: url(../assets/images/picture/223.png) top left;
			background-size: 100%;
            z-index:10000;
		}
.form-img2 {
	width: 50px;
	height:50px;
	padding-left: 5px;
	padding-top: 25px;
    float:center;

}
.form-span{
	font-family: "宋体";
	font-size: 20px;
	line-height: normal;
    padding-left:4px;

	
}


 
#form-border2 {
	background-color: rgb(248, 240, 240);
	width: 600px;
	height: 500px;
	position: absolute;
	margin: auto;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
    border-radius:20px 20px;
}



.form-input11 {
	

    width: 320px;
	height: 35px;
	margin-top: 50px;
	margin-left: 4px;
	font-size: 16px;
    background-color: rgb(252, 248, 248);
	font-family: "微软雅黑";
    border-radius:4px 4px;
    border:rgb(15, 15, 15) 1px solid;
    background: url(../assets/images/密码.jpg) no-repeat 0;
    background-size: 36px 36px;
            padding-left: 42px;
}

.form-input22 {
	

    width: 320px;
	height: 36px;
	margin-top: 150px;
	margin-left: 55px;
	font-size: 16px;
    background-color: rgb(252, 248, 248);
	font-family: "微软雅黑";
    border-radius:4px 4px;
    border:rgb(15, 15, 15) 1px solid;
    background: url(../assets/images/密码.jpg) no-repeat 0;
    background-size: 36px 36px;
            padding-left: 42px;
}
 
.form-label {
    margin-top: 50px;
	margin-left: 100px;
    height: 30px;
}

 
.form-label2 {
    padding-top: 10px;
    margin-right: 110px;
	font-size: 16px;
    /* color:rgb(4, 4, 138); */
}


.form-button2 {
	width: 320px;
	height: 40px;
	margin-top: 50px;
	margin-left: 4 px;
	font-size: 20px;
    background-color: rgb(248, 80, 80);
	font-family: "宋体";
    border-radius:5px 5px;
    border:rgb(255, 255, 255) 1px solid;
}

.form-button:hover{
    background-color:rgb(13, 159, 243);/*边框颜色*/
}

 
h3 {
	font-size: 40px;
	font-family: "微软雅黑";
}
 
#password {
	margin-top: 30px;
	margin-bottom: 10px;
}
 
#register {
	margin-left: 100px;
}

#retuenLogin {
	margin-left: 410px;
}


</style>