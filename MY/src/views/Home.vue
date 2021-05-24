<template>
  <div id="home">
      <div v-for="(itme,index) in HomeMessge.slice(0, 4)" :key="index.id">
          <!--整个文章主体 -->
          <div class="HomeMessgecont centent"> 
            <div class="HomeTitle centent">
                <h2>{{itme.title}}</h2> <!--这里显示文章标题 -->
            </div>
            <router-link :to="'/about/'+id" class="Home_link centent">
              <div @click="next(index)">{{itme.messge}}</div>    <!--这里显示文章内容 -->
            </router-link>
            <div class="HomeTime">{{itme.time}}</div> <!--这里显示文章发布时间 -->
          </div>
      </div>
  </div>
</template>

<script>
  export default {
    name:"home",
    data(){
      return {
        HomeMessge:[{id:1,nav:'心情记录',title:"开发中",messge:"开发中，暂无",time:"2021.5.5 23:17"},
                    {id:2,nav:'心情记录',title:"开发中1",messge:"开发中，暂无",time:"2021.5.5 23:17"},
                    {id:3,nav:'每日扯淡',title:"开发中2",messge:"开发中，暂无",time:"2021.5.5 23:17"},
                    {id:4,nav:'技术总结',title:"开发中3-2",messge:"开发中，暂无-2",time:"2021.5.5 00:00"},
                    {id:5,nav:'追溯时光',title:"开发中4-2",messge:"开发中，暂无-2",time:"2021.5.5 00:00"},
                    {id:6,nav:'个人兴趣',title:"开发中5-2",messge:"开发中，暂无-2",time:"2021.5.5 00:00"},
                    {id:7,nav:'关于自己',title:"开发中6-2",messge:"开发中，暂无-2",time:"2021.5.5 00:00"},
                    {id:7,nav:'关于自己',title:"开发中7-2",messge:"开发中，暂无-2",time:"2021.5.5 00:00"}]
                    ,
        id:0,
        kins:[],
        HomeMessge2:[],
        nav:''
      }
    },
    created() {
        this.Updeta()
    },
    methods: {
      next(e){
          this.id = this.HomeMessge[e].id;
      },
      Updeta(){
        let nav =this.$route.params.nav;
        let kin = this.HomeMessge;
        for(let i=0; i<this.HomeMessge.length;i++){
          if(kin[i].nav == nav){
            this.kins.push(kin[i])
            this.HomeMessge = Object.assign(this.kins)
          }
        }
      }
    },

  }
</script>

<style>
#home{
  width: 100%;
  margin: 15px 0 0 0;
}
.HomeMessgecont{
  width:100%;
  height:270px;
  background-color: rgba(255, 2255, 255, 0.9);
  border-radius: 10px;
  margin:20px 0 0 0;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
.HomeMessgecont>div{
  padding:10px;
  vertical-align:middle;
}
.HomeTitle{
  height: 20%;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}
.Home_link{
  height: 20%;
  text-align: center;
  font-size: 14px;
  text-decoration: none;
  color:black
}

 /* 居中*/
.centent{
  display: flex;
  justify-content: space-around;
  flex-direction: column;
}
</style>