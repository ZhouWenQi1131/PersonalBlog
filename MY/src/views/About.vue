<template>
  <div class="about">
    <div class="aboutNav">
      <div class="aboutNavChild">
        <router-link to="/home/主页" class="about_link">
          <span>主页</span>
        </router-link>  / 
        <router-link :to="'/home/'+ this.article[this.kins].nav" class="about_link">
          <span>{{article[this.kins].nav}}</span>
        </router-link> / 
        <span>{{article[this.kins].title}}</span>
      </div>
    </div>
    <div class="articleCont">
      <div class="articleBackImge">
        <canvas class="articleBack" ref="canvas"></canvas>
      </div>
      <div class="articleText">
          <div class="articleTitle">
            <h1>{{article[this.kins].title}}</h1>
          </div>
          <div class="articleTX">{{article[this.kins].messge}}</div>
          <div class="articlebot">
            <div>标签：
              <router-link :to="'/home/'+ this.article[this.kins].nav" class="about_link">
                <div class="articleName">{{article[this.kins].nav}}</div>
              </router-link>
            </div>
            <div class="articleTime">编辑时间：{{article[this.kins].time}}</div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name:"about",
    computed:{
        
    },
    data() {
      return {
        article:[{id:1,nav:'心情记录',title:"开发中",messge:"开发中，暂无1",time:"2021.5.5 23:17"},
                    {id:2,nav:'心情记录',title:"开发中1",messge:"开发中，暂无2",time:"2021.5.5 23:17"},
                    {id:3,nav:'每日扯淡',title:"开发中2",messge:"开发中，暂无3",time:"2021.5.5 23:17"},
                    {id:4,nav:'技术总结',title:"开发中3",messge:"开发中，暂无4222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222",time:"2021.5.5 00:00"},
                    {id:5,nav:'追溯时光',title:"开发中4",messge:"开发中，暂无5-2",time:"2021.5.5 00:00"},
                    {id:6,nav:'个人兴趣',title:"开发中5",messge:"开发中，暂无6-2",time:"2021.5.5 00:00"},
                    {id:7,nav:'关于自己',title:"开发中6",messge:"开发中，暂无7-2",time:"2021.5.5 00:00"},
                    {id:8,nav:'关于自己',title:"开发中7",messge:"开发中，暂无8-2",time:"2021.5.5 00:00"}]
                    ,
        kins:0,
      }
    },
    created(){
      this.navchinge()
    },
    mounted() {    
      this.canvas()
    },
    methods: {
      navchinge(){
       let id = this.$route.params.id; //获取主页传来的参数
        for(let i in this.article){
          let kin = this.article[i].id;
          if(kin == id){
            return this.kins = i;
          }
        }
      },
      canvas(){
        //context.closePath(); 闭合图形防止有缺角; rect(x, y, width, height，)方法绘制矩形
        // const canvas =this.$refs.canvas;
        // canvas.width = 600;
        // canvas.height = 210;
        // const context = canvas.getContext("2d"); //获取画布
        // // context.moveTo(50,50); //起始点（x，y）轴
        // // context.lineTo(60,60);   //结束点（x，y）轴
        // // context.lineWidth = 4;   //画笔大小
        // // context.strokeStyle = "#000000"; //画笔颜色
        // // context.stroke(); //fill()为填充，stroke()为描边
        // context.beginPath();
        // context.arc(200, 100,5, 0, Math.PI * 2, true );
        // context.arc(150, 200,5, 0, Math.PI * 2, true );
        // context.arc(170, 200,5, 0, Math.PI * 2, true );
        // context.arc(190, 200,5, 0, Math.PI * 2, true );
        // context.arc(240, 200,5, 0, Math.PI * 2, true );
        // context.arc(270, 200,5, 0, Math.PI * 2, true );
        // context.arc(50, 200,5, 0, Math.PI * 2, true );
        // context.lineWidth = 1; 
        // context.fillStyle = "red";
        // context.fill();
      }
    },
  }
</script>

<style>
/*主体*/
.about{
  width: 100%;
  border-radius: 15px;
}
.aboutNav{
  display:flex;
  width: 100%;
  margin:20px 0 0 0;
  border-radius: 5px;
  background-color:rgba(255, 255, 255, 0.9);
}
.aboutNavChild{
  display:flex;
  margin:10px;
}
.about_link{
  text-decoration: none;
}
.about_link>span{
  color:rgba(255, 0, 0);
  font-weight: bold;
}
span{
  margin:0 5px;
}
.articleCont{
  margin-top:10px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
}
.articleBack{
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  margin:10px 0 0 0;
  border-radius:5px;
}
.articleBack{
  width: 100%;
  height: 180px;
  position: relative;
  top: -10px;
  background-color: rgba(78, 78, 78, 0.2);
}
.articleBackImge{
  width: 100%;
  height: 180px;
  background-image: url("../assets/top/background2.jpg");
  background-size: cover;
  border-radius:5px;
}
.articleText{
  padding:10px;
  margin:10px 0 0 0;
}
.articleText>div{
  width: 90%;
  margin: 10px auto;
}
.articleTitle{
  text-align: center;
  padding-bottom: 5px;
  border-bottom: 1px rgba(78, 78, 78) solid;
}
.articleTX{
  word-wrap:break-word
}
.articlebot{
  display:flex;
  justify-content:space-between;
  font-size: 12px;
  color: rgb(97, 96, 96);
}
.articlebot>div{
  display:flex;
  align-items:center;
}
.articleName{
  border: 1px rgb(97, 96, 96) solid;
  box-shadow:  darkgrey 3px 3px 3px 1px ;
  padding:2px 10px;
  background-color:rgba(215, 219, 175, 0.5)
}

</style>
