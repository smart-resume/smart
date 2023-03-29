<template>
    <div class="hello">
        <div id="form-border">
            <img src="../assets/images/演示.jpg" class="form-img">
			<form method="post">
				<input id="account" class="form-input" type="text" placeholder="请输入用户名" required="required"/><br>
				<input id="password" class="form-input2" type="password" placeholder="请输入密码" required="required"/><br>
				<label id="register" class="form-label" for="password">没有账号？      <a @click="$router.push({path:'/enroll'})">点击注册</a></label>
				<label id="register" class="form-label1" for="password"><a @click="$router.push({path:'/forgetpassword'})">忘记密码</a></label><br>
				<input id="login" class="form-button" type="submit" value="登陆" @click="$router.push({path:'/'})"/>
			</form>
		</div>
    </div>
</template>
<script>
    export default{
        name:'login'
    }
</script>
<style  scoped>
.hello{
	/* width: 100%;
	height: 100%; */
	position: absolute;
	margin: auto;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
			background: url(../assets/images/picture/223.png) top left;
			background-size: 100%;
			z-index:10000;
		}
.form-img {
            width: 70px;
            height:70px;
            padding-left: 10px;
            padding-top: 50px;


}

#form-border {
	background-color: rgb(248, 240, 240);
	width: 500px;
	height: 580px;
	position: absolute;
	margin: auto;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
    border-radius:20px 20px;
}
 
.form-input {
	

    width: 300px;
	height: 36px;
	margin-top: 50px;
	margin-left: 10px;
	font-size: 16px;
    background-color: rgb(252, 248, 248);
	font-family: "微软雅黑";
    border-radius:4px 4px;
    border:rgb(15, 15, 15) 1px solid;
    background: url(../assets/images/用户名.jpg) no-repeat 0;
    background-size: 36px 36px;
            padding-left: 42px;
}

.form-input2 {
	

    width: 300px;
	height: 36px;
	margin-top: 10px;
	margin-left: 10px;
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
    margin-top: 10px;
	padding-left: 70px;
    height: 30px;
	float:left;
}
.form-label1{
    margin-top: 10px;
	padding-left: 120px;
    height: 30px;
	float:left;
}
 
.form-button {
	width: 300px;
	height: 36px;
	margin-top: 50px;
	margin-left: 10px;
	font-size: 20px;
    background-color: rgb(250, 57, 57);
	font-family: "宋体";
    border-radius:5px 5px;
    border:rgb(255, 255, 255) 1px solid;
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
	margin-left: 10px;
}
</style>