<template>
  <div id="app" >
    <div class="Up">
      <top></top>
      <div class="SearchModule"></div>
    </div>  
    <div class="middle">
      <div class="left">
        <UserMod></UserMod>
        <music @window="win()"></music>
      </div>
      <div class="content">
        <navigation>导航栏</navigation>
        <Content></Content>
      </div>
      <div class="right">
          <right></right>
      </div>
    </div>
    <div class="bottom">
      <div class="bottomColumn"></div>
    </div>
  </div>
</template>

<script>
import Content from './components/content/content'
import top from './components/top'
import navigation from './components/content/navigation'
import UserMod from './components/left/UserModule'
import music from './components/left/music'
import right from './components/right/right'

export default {
  name: 'Home',
  components: {
    Content,
    top,
    navigation,
    UserMod,
    music,
    right,
  },
  created() {
    this.win()
  },
  methods: {
    win(){
      console.log(this.$emit('window',window)+"8888")
    }
  },
}
</script>

<style>
*{
  padding:0;
  margin:0;
}
body{
  background-image: url(./assets/top/background4.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed ;
}

.middle{
  margin: 0 auto;
  width: 80%;
  max-width: 1300px;
  min-width: 1000px;
  display: flex;
}
.middle>div{
  margin: 0 3px;
}
.SearchModule{
  width: 100%;
  height: 100px;
}

nav{
  width: 100%;
  height: 20px;
}
.left{
  width: 25%;
}
.right{
  width: 25%;
  height: 200px;
}
.content{
  width: 50%;
}
.content1{
  width: 100%;
}
.bottomColumn{
  width: 100%;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.9);
  margin:30px 0 0 0 ;
}


</style>
