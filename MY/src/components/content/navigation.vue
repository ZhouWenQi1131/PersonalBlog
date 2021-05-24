<template>
  <div id="navigation">
    <div class="navigation_1">
      <router-link :to="'/Home/'+ '首页'" class="link" >
          <div class="nav_left"  @mouseenter="Onl()" @mouseleave="Outl()" :style="color">
            <div class="Nav_home"></div>
            <div>首页</div>
          </div>
      </router-link>
      <div class="nav_right">
        <ul>
            <li v-for="(itme,index) in list" :key="index.id" @click="kins(index)" @mouseenter="On(index)" @mouseleave="Out(index)" :class="{color:index==active1}">{{list[index]}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  data(){
    return {
      list:["心情记录","每日扯淡","技术总结","追溯时光","个人兴趣","关于自己","关于自己"],
      active1:-1,
      index:"",
      color:"",
      nav:""
    }
  },
  created() {

  },
  methods:{
    On(index){
      this.active1 = index
    },
    Out(index){
      if(this.active1 === index){
        this.active1 = "rgba(0,0,0)"
      }
    },
    Onl(){
      this.color = "color:rgba(255,0,0)";
      
    },
    Outl(){
      this.color = "color:rgba(0,0,0)"
    },
    kins(e){
        let nav = this.list;
        this.$router.push('/Home/'+ nav[e]);
    }
  },
  
  }

</script>


<style scoped>
#navigation{
  background-color: rgba(255, 2255, 255, 0.9);
  border-radius: 10px;
}
.navigation_1{
  padding:5px 0 5px 0;
  display: flex;
  justify-content: center;
}
.nav_left{
  width:100%;
  text-align: center;

  border-right: 2px rgba(255, 0, 0) solid;
  margin: auto;
  cursor: pointer;
}
.Nav_home{
  width: 30px;
  height: 30px;
  margin: auto;
  border-radius: 50px;
  background-image: url(../../assets/home.png);
  background-color:rgba(255, 92, 124);
  background-repeat: no-repeat;
  background-size: cover -5px;
  background-position: 50% 50%;
}
.link{
  width: 10%;
  text-decoration: none;
  color:black;
  margin: auto 10px;
}
.nav_right{
  margin: 0 10px 0 10px;
}
ul,li{
  list-style: none;
}
ul{
  display: flex;
  flex-flow: wrap;
  justify-content:space-around;
}
li{
  font-size:16px;
  margin:5px 5px;
  padding:0 5px;
  cursor: pointer;
}
.color{
  color:rgba(255, 0, 0);
}

</style>
