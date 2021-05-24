<template>
  <div class="MBoard">
    <div class="TextBox">
        <div class="TBTitle"><h3>留个言吧</h3></div>
        <div>
            <div class="TBNamePort">
                <div class="TBPortrait"><img></div>
                <div class="TBName"><input type="text" required="required" maxlength="7" placeholder="请输入昵称，最多7字">*</div>
            </div>
            <div class="TBText">
                <textarea class="TBTextarea" maxlength="100" cols="hard"  placeholder="期待大佬的精彩留言"></textarea>
            </div>
            <div class="TBSubmit">
                <input  type="submit" value="留言"/>
            </div>
        </div>
    </div>
    <div class="MBCont">
        <div class="MBMessge" v-for="(itme,index) in MessageBoard"  :key="index.id" @click="link(itme)">
    <div >
        <img  class="MBportrait" ref="img">
    </div>
        <div class="MBText" >
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
    name:"MessageBoard",
    data() {
        return {
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
            }],
            MBportrait:""
        }
    },
    methods: {
        portrait(){
            const img = this.$refs.img;
            for(let i=0;i<this.MessageBoard.length;i++){
                const portURl = this.MessageBoard[i].touxing
                let url = require("../assets/headPortrait/"+portURl)
                img[i].src = url
                console.log(img.src)
            }
        },
        link(e){
            
            this.$router.push('/about/'+ e.id);
        }
    },
    mounted() {    
      this.portrait()
    },
}
</script>

<style>
input,textarea{
    outline:none;
}
.MBCont{
    width:100%;
    display: flex;
    justify-content: space-around;
    margin:10px 0 0 0;
}
/*留言框*/
.TextBox{
    width: 100%;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
    margin:10px 0 0 0;
    padding:10px 0;
}
.TextBox>div{
    margin:10px;
    padding:5px;
}
.TBTitle{
    border-bottom:2px rgb(176, 176, 216) solid;
}
.TBNamePort{
    display: flex;
}
.TBPortrait{
    width: 50px;
    height: 50px;
    margin-right: 5px;
}
.TBPortrait>img{
    width: 50px;
    height: 50px;
    border: 1px red solid;
    border-radius: 50%;
}
.TBName{
    font-size: 14px; 
    color:rgb(102, 102, 104);
    display: flex;
    align-items: center;
}
.TBName>input{
    outline:none;
    height: 20px;
    padding: 4px 5px;
    margin:0 3px 0 0 ;
    border:1px rgb(176, 176, 216) solid;
    font-size: 12px;
}
.TBText{
    width:100%;
    margin:10px 55px;
}
.TBTextarea{
    width: 80%;
    height: 100px;
    padding:5px;
    resize:none;
    border:1px rgb(176, 176, 216) solid;
}
.TBSubmit{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.TBSubmit>input{
    width: 70px;
    height: 30px;
    cursor: pointer;
    border-radius: 5px;
    color:rgb(255, 255, 255);
    box-shadow: rgba(112, 112, 112,0.8) 2px 2px 0px 0px;
    border:1px rgb(63, 63, 238) solid;
    background-color: rgba(63, 63, 238,0.8);
}


.MBMessge{
    width: 45%;
    height: 150px;
    background-color:rgba(255, 255, 255, 0.9);
    border-radius: 10px;
    display: flex;
    margin: 10px 15px 0px;
    padding:0 10px;
    cursor: pointer;
    align-items:center;
}
.MBportrait{
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;
    margin:0 5px 0;
    border:2px rgb(176, 176, 216) solid
}
.MBText{
    width: 70%;
    height: 90%;
    margin-left: 5px;
}
.MBText>p:first-child{
    height: 25%;
    font-size: 15px;
    margin:0 0 5px  0;
    display:flex;
    align-items:center;
}
.MBText>p:nth-child(2){
    width: 100%;
    height: 50%;
    font-size: 13px;
    color: rgb(111, 111, 114);
    margin:0 0 5px  0;
    overflow: hidden;
    word-wrap:break-word;
}
.MBText>p:last-child{
    height: 25%;
    font-size: 12px;
    color: rgb(134, 134, 139);
    text-align: right;
}
</style>