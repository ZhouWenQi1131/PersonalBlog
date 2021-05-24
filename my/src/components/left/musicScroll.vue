<template>
    <div id="musicScroll" >
        <div class="Scroll">
            <div v-for="(item,index) in musicList" :key="index.id" class="MsicList" @canplay="onp()" @click="onCLk(index)" @mouseenter="Ov(index)" @mouseleave="Out(index)" :class="{ScrollColor:index==active1,ScrollColorClick:index==active2}">
                <div>{{musicList[index].id}}</div>
                <div>{{musicList[index].SongName}}</div>
                <div>{{musicList[index].name}}</div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:"musicScroll",
    data(){
        return {
            musicList:[
                {id:1,url:"yycy.mp3",SongName:"云烟成雨",name:"房东的猫"},
                {id:2,url:"thz.mp3",SongName:"童话镇",name:"陈一发"},
                {id:3,url:"dy.mp3",SongName:"大鱼",name:"周深"},
                {id:3,url:"dy.mp3",SongName:"大鱼",name:"周深"},
                {id:3,url:"dy.mp3",SongName:"大鱼",name:"周深"},
            ],
            active1:0,
            active2:0,
            song:"",
        }
    },
     created(){
        this.song = this.musicList[0];
        this.$emit('canplay',this.musicList[0]);
        
    },
    methods: {
        onCLk(index){
            if(index == index){
                this.song = this.musicList[index];
                this.active2 = index;
                this.$emit('canplay',this.song)
            }
        },
        Ov(index){
            this.active1 = index;
        },
        Out(index){
            if(index === index ){
                this.active1 = "ScrollColor:rgb(0,0,0)"
            }
        },
    },
    mounted() {    
        
    }, 
}
</script>

<style>
.Scroll{
    width: 94%;
    height: 330px;
    overflow: scroll;
    font-size: 14px;
    margin: 0 10px;
    background-color: rgb(229, 231, 235);
    border:1px rgb(211, 212, 214) solid;
}
.MsicList{
    display: flex;
    justify-content: space-around;
    cursor: pointer;
}
.MsicList>div{
    width: 40%;
    padding:5px 0;
    
}
.MsicList>div:first-child{
    width: 10%;
}
.MsicList>div:last-child{
    display:flex;
    justify-content: flex-end;
}
.Scroll::-webkit-scrollbar{
    width: 6px;
    height: 0;
    background-color: transparent;
}
.Scroll::-webkit-scrollbar-thumb {
      background-color: rgb(191, 191, 192);
      border-radius: 5px;
}
.ScrollColor{
    color:rgb(0, 0, 0);
    background-color:rgba(182, 183, 185, 0.5);
    border-left:3px rgba(80, 130, 230) solid ;
}
.ScrollColorClick{
    color:rgb(0, 0, 0);
    background-color:rgba(182, 183, 185, 0.5);
    border-left:3px rgba(80, 130, 230) solid ;
}
</style>