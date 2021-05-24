<template>
    <div id="UserModule">
        <div class="user_0"></div>
        <div class="user_1">
            <div class="user_headPortrait" @mousemove="Us" @mouseout="Uo" :style="active">
                <img src="../../assets/headPortrait/headPortrait.png" alt="">
            </div>
            <div class="user_cont" :style="top">
                <div class="user_name">非鱼祀鱼</div>
                <div class="autograph">{{autograph}}</div>
                <div class="user_text">
                    <div v-for="(item , index) in text" :key="item.id" @click="link(index)"  @mousemove="Ua(index)" @mouseout="Ub(index)" :class="{color:index==active1}">
                        <div style="color:rgb(167, 174, 238)">{{text[index].number}}</div>
                        <div>{{text[index].name}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  
  name: 'UserModule',
  data(){
      return {
        autograph:"暂时没有",
        text:[
            {name:"文章",number:1,},
            {name:"日记",number:1,},
            {name:"留言",number:1,},
        ],
        active:"",
        active1:3,
        top:""
      
      }
  },
  methods: {
    Us:function(){
    this.active = " width:125px;height:125px;margin-top:-70px";
    this.top = "margin-top:60px"
    },
    Uo:function(){
    this.active = " width:100px;height:100px";
    this.top = "margin-top:70px"
    },
    Ua:function(index){   
        this.active1 = index;
    },
    Ub:function(index){
      if(index === index ){
          this.active1 = "color:rgb(0,0,0)"
      }
    },
    link(e){
        if(e == 2){
            this.$router.push('/messageBoard/'+ e);
        }else{
            this.$router.push('/diary/'+ e);
        }
    }

  },
  
}
</script>

<style scoped>
#UserModule{
    height: 400px;
    background-color:rgba(255, 255, 255, 0.9);
    border-radius: 20px;
}
.user_0{
    width: 100%;
    height: 150px;
    background-image: url(../../assets/headPortrait/back.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px 20px  0;
}
.user_1{
    width: 100%;
    position:relative;
}
.user_headPortrait{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    border:4px rgba(162, 224, 243, 0.9) solid;
    transition: all 0.3s;
    cursor: pointer;
    margin: -55px auto;

}
.user_headPortrait>img{
    width: 170%;
}
.autograph{ 
    font-size: 14px;
    padding:10px 0;
    color:rgb(119, 118, 118)
}
.user_cont{
    text-align: center;
    margin-top: 70px;
    transition: all 0.3s;
}
.user_name{
    font-size: 20px;
    font-weight: bold;
}
.user_text{
    margin-top:20px;
    padding: 30px 0;
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    color:rgba(0, 0, 0);
}
.color{
    color:rgba(255, 0, 0);
}
</style>
