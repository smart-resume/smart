<template>
  <div>
    <!-- <h1>插值</h1>
    <p>Hello </p>
    <p v-for="i in B " :key="i">{{ i }}</p>
    <p>{{ fun('heooo') }}</p>
    <button @click="C--">-</button>
    <b v-if="C>=0">{{fun1()}}</b>
    <b v-else>{{fun2()}}</b> -->
    <!-- <button @click="C++">+</button> -->
    <form action="">
      username:<input type="text" v-model.lazy="userinfo.username"><br>
      password:<input type="password" v-model="userinfo.password"><br>
      <button @click="login()">Login</button>
      
    </form>
    <div>
      <label for="one">
        <input id='one' type="radio" v-model="sex" value="1">male
      </label>
      <label for="two">
        <input id='two' type="radio" v-model="sex" value="2">demale
      </label>
      <label for="three">
        <input id='three' type="radio" v-model="sex" value="3">uncertion
      </label>
    </div>

  </div>
    
</template>

<script>
// import { METHODS } from 'http';



export default {
  name: 'HelloWorld',
  data(){
    return{
      a:'hello',
      B:['123','456'],
      C:0,
      show:true,
      userinfo:{username:'',password:''},
      sex:1,
    }
  },
  methods:{
    fun(){
      console.log('hello1');
    } ,
    fun1(){
      return this.C;
    },
    fun2(){
      return ++this.C;
    },
    login(){
      console.log(this.userinfo);
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  font-size: 10px;
}
</style>
