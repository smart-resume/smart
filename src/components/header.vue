<template>

    <div class="nav">

        <div class="lefter">智能招聘<i>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;</i><img class="image" src="../assets/images/photo2.png" width="15" height="15">&thinsp;杭州</div>
        <div class="header-left">
        <router-link class="a" to = '/'>
            <div class="icon"><i></i></div> 
            <div>首页</div>
        </router-link>
        <router-link class="a" to = '/posts'>
            <div class="icon"><i></i></div> 
            <div>职位</div>
        </router-link>
        <router-link class="a" to = '/forum'>
            <div class="icon"><i></i></div> 
            <div>论坛</div>
        </router-link>
        <router-link class="a" to = '/analyse'>
            <div class="icon"><i></i></div>  
            <div>智能分析</div>
        </router-link>
        </div>
        <div class="middle"></div>
        <div class="header-right">
            <router-link class="b" to = '/update'>
            <div class="icon"><i></i></div> 
            <div>上传简历</div>
        </router-link>
        <router-link class="c" to = '/login'>
            <div class="icon"><i></i></div>  
            <div>登录/注册</div>
        </router-link>
        </div>
    </div> 



</template>

<script>
    export default{
        name:'Header'
    }
</script>

<style  scoped>


.nav{

    background: rgb(10, 17, 1);
    padding:15px 15px 10px 10px;
    justify-content: center;
    justify-items: center;
    position:fixed;
    left:0;
    right:0;
    top: 0;
    display: flex;

    height:30px;
    

    z-index:10;
}
.image{
    width: 20px;
    height: 20px;
    color:white;
}
.lefter{
    flex:1;
    font-size: 20px;
    color:rgba(86, 125, 253, 0.747);
}
.middle{
    flex:2.5;
}
.header-left{
    float:left;
    display: flex;
    flex:2.5;
    /* background:rgb(28, 173, 78); */
}
.header-right{
    display: flex;
    flex:1.5;
    /* background:yellow; */
}
.a{
    padding-left:10px;
    justify-content: flex-start;
    flex:1;
    /* background: #882f2f; */
    color: rgba(255, 255, 255, 0.747);
    text-decoration: none;
}
.a:hover{
    color:rgb(0,190,189)
}
.b{

justify-content: flex-start;

flex:1.5;
/* background: #882f2f; */
color: rgba(255, 255, 255, 0.747);
text-decoration: none;

}
.c{

justify-content: flex-start;
flex:4;
/* background: #882f2f; */
color: rgba(255, 255, 255, 0.747);

text-decoration: none;

}
</style>