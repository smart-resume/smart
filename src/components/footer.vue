<template>
    <!-- <body> -->
    <div class="box1">

        <div class="foot-left">
        <i class="b">移动版<img src="../assets/images/移动端.png" alt="" width="15px" height="10px" class="img1"></i>
        <a href="" class="a">关于我们</a>
        <a href="" class="a">加入我们</a>
        <a href="" class="a">意见反馈</a>
        <a href="" class="a">企业服务</a>
        <a href="" class="a">校企合作</a>
        <a href="" class="a">联系我们</a>
        <a href="" class="a">免责声明</a>
        <a href="" class="a">友情链接</a>
        <a href="" class="a">资源导航</a></div>
        <div class="middle"></div>
        <div class="foot-right">
<a href="https://www.qq.com/"><img src="../assets/images/QQ.png" alt="" width="25px" height="25px" class="img"></a>
<a href="https://wx.qq.com/"><img src="../assets/images/微信.png" alt="" width="25px" height="25px" class="img"></a>
<a href="https://m.weibo.cn/"><img src="../assets/images/微博.png" alt="" width="25px" height="25px" class="img"></a>
<a href="https://www.zhihu.com/"><img src="../assets/images/知乎.png" alt="" width="25px" height="25px" class="img"></a>
        </div>
    </div> 
<!-- </body> -->
</template>
<script>
    export default{
        name:'Header'
    }
</script>
<style  scoped>
body{
    /* padding-bottom: 50px;
    background:black; */

}
.box1{
    /* padding-bottom: 50px; */
    background:black;
    /* padding:10px 10px 10px 10px; */
    padding-top:10px;
    margin:10px  0px 10px;
    justify-content: center;
    justify-items: center;
    position: absolute;
    left: 0;
    right:0;
    /* bottom: 0; */
    width: 100%;
    height: 50px;
   
    z-index: 9999;
    display:flex;
}
.foot-left{

    flex:10;

}
middle{
    flex:1;
}
.foot-right{

    flex:2;


}
.a{
    font-size: medium;
    color:grey;

    margin-left:40px;
    text-decoration: none;
    float:left;
}
.b{
    font-size: medium;
    color:grey;
    float:left;
    padding-left:100px;
    
    margin-right:80px;

}
.img{
    padding-left:30px;
}
.img1{
    /* margin-top:10px; */
}
</style>