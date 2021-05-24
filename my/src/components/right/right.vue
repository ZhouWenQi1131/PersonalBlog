<template>
  <div id="right">
    <div class="right_Notice">
        <p>公告栏</p>
        <p>{{Notice}}</p>
    </div>
    <div class="right_Notice"></div>
    <div class="right_Notice"></div>
    <div class="MessageBoard">
        <div>留言板</div>
        <div class="MesBod" v-for="(itme,index) in MessageBoard" :key="index.id" @click="link(itme)">
            <div class="touxiang"><img class="MBport" ref="imge" ></div>
            <div class="Mes_messge">
                <p>{{itme.name}}</p>
                <p>{{itme.Message}}</p>
                <p>{{itme.time}}</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"right",
    data(){
        return {
            Notice:"正在开发中，测试文字",
            MessageBoard:[{
                id:1,
                touxing:"headPortrait.png",
                name:"非鱼祀鱼",
                Message:"1.不要生气要争气,不要看破要突破,不要嫉妒要欣赏,不要拖延要积极,不要心动要行动。2.少说多做,句句都会得到别人的重视;多说少做,句句都会受到别人的忽视。3.做好手中事,珍惜眼前人。4.寒冷到了极致时,太阳就要光临。5.微笑比皱眉好看,请求比呵斥自然。",
                time:"2021.4.29"
            },
            {
                id:2,
                touxing:"back.jpg",
                name:"缇可",
                Message:"1.不要生气要争气,不要看破要突破,不要嫉妒要欣赏,不要拖延要积极,不要心动要行动。2.少说多做,句句都会得到别人的重视;多说少做,句句都会受到别人的忽视。3.做好手中事,珍惜眼前人。4.寒冷到了极致时,太阳就要光临。5.微笑比皱眉好看,请求比呵斥自然。",
                time:"2021.4.29",
            }]
        }
    },
    methods: {
        link(e){  
            this.$router.push('/MessageBoard/'+ e.id);
        },
        portrait(){
            const img = this.$refs.imge;
            for(let i=0;i<this.MessageBoard.length;i++){
                const portURl = this.MessageBoard[i].touxing
                let url = require("../../assets/headPortrait/"+portURl)
                img[i].src = url
                console.log(img.src)
            }
        },
    },
    mounted() {    
      this.portrait()
    },
}
</script>

<style>
.right_Notice{
    width: 100%;
    height: 200px;
    background-color:rgba(255, 255, 255,0.9);
    border-radius: 15px;
    margin-bottom: 15px;
}
.right_Notice>p{
    padding: 0px 15px 0;
    margin: 0 20px 5px;
}
.right_Notice>p:first-child{
    padding: 30px 20px 10px;
    border-bottom: 1px rgb(135, 144, 223) solid;
    font-size:17px;
    font-weight: bold;
}
.MessageBoard{
    width: 100%;
    padding-bottom: 5px;
    background-color:rgba(255, 255, 255,0.9);
    border-radius: 15px;
}
.MessageBoard>div:first-child{
    padding: 20px 20px 10px;
    margin: 0px 15px 0;
    border-bottom: 1px rgb(135, 144, 223) solid;
    font-size:17px;
    font-weight: bold;
}
.MesBod{
    display: flex;
    margin: 10px 15px 0px;
    padding-bottom: 5px;
    border-bottom: 1px rgb(135, 144, 223) solid;
    cursor: pointer;
}
.MBport{
    width: 60px;
    height: 60px;
    background-color:rgba(255, 0, 0,0.9);
    border-radius: 50%;
    margin:0 5px 0;
    object-fit: cover;
}
.Mes_messge{
    width: 70%;
    margin-left: 5px;
}
.Mes_messge>p:first-child{
    font-size: 15px;
    margin:0 0 5px  0;
}
.Mes_messge>p:nth-child(2){
    width: 100%;
    height: 40px;
    font-size: 13px;
    color: rgb(111, 111, 114);
    margin:0 0 5px  0;
    overflow: hidden;
    word-wrap:break-word;
}
.Mes_messge>p:last-child{
    font-size: 12px;
    color: rgb(134, 134, 139);
    text-align: right;
}

</style>