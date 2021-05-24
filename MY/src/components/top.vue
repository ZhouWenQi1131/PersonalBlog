<template>
  <div class="top">
    <div class="top-content">
      <a :href="home" @mouseover="on(1)" @mouseout="ont(1)" :style="active">Home</a>
      <a :href="me"  @mousemove="on(2)" @mouseout="ont(2)" :style="active1">关于我们</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data(){
    return {
      home:"http://192.168.1.101:8080/Home/主页",
      me:'',
      active:'',
      active1:'',
    }
  },
  methods:{
    on:function(e){
      
      if(e==1){
        this.active = "color: rgb(255, 0, 0);"
      }else{
        this.active1 = "color: rgb(255, 0, 0);"
      }
    },
    ont:function(e){
       if(e==1){
        this.active = "color: rgb(131, 130, 130);"
      }else{
        this.active1 = "color: rgb(131, 130, 130);"
      }
    }
  },
  
  }

</script>


<style scoped>
.top{
  border-radius: 0  0 5px ; 
  border:1px rgb(255, 255, 255) solid;
  background-color: rgb(255, 255, 255);
  box-shadow: 2px 2px 2px 0px rgb(255, 255, 255);
  
}
.top-content{
  width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
}
a{
  text-decoration: none;
  margin: 5px  10px;
  color: rgb(131, 130, 130);
}

</style>
