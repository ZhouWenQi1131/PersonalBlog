<template>
    <div id="music">
        <div class="music_top">音乐盒</div>
        <div class="music_play">
            <div class="music_picture" @click="Play()">
                <div :class="{music_PL:inActive, music_PA:inLive}" >
                    <div :class="{music_sjx:disbox, music_zt:disbox1}"></div>
                </div>
            </div>
            <div id="Songe" class="Songe" >
                <div class="SongTitle">
                    <span>{{Playing.SongName}}</span>
                    <span>-{{Playing.name}}</span>
                </div>
                <div class="music_slider">
                    <div class="bckgSlider" ref="runfatbar">
                        <div class="Slider"  ref="runbar" >
                            <div class="SliderCircular" ref="runCircular" @mousedown="MueicBor($event)" ></div>
                        </div>
                    </div>
                    <div class="SongTime">{{cTime}}/{{dTime}}</div>
                </div>
            </div>
        </div>
        <div class="music_list">
            <musicScroll  @canplay="OnChild" :sendData="Playing"></musicScroll>
            <audio id="audioDom" :src="songUrl" @canplay="gentime()"   ref="audio"  ></audio>
        </div>
    </div>
</template>

<script>

import musicScroll from './musicScroll'
export default {
    name:"muisc",
    components:{
        musicScroll
    },
    data(){
        return {
            songUrl:require("../../music/yycy.mp3"),
            inActive:true /*"正在播放时的圆"*/,
            inLive:false  /*"播放暂停时的圆"*/,
            disbox:true   /*"播放暂停时的三角形"*/,
            disbox1:false /*"正在播放时的标志"*/,
            Playing:"",
            dTime:'00:00',
            cTime:'00:00',
            duration:"",
            isPlay:true,
            music:"",
        }
    },
    created(){
        
    },
    methods: {
        Play:function(){ 
           if(this.inActive!=false){
               this.inLive=true;
               this.inActive=false;
               if(this.isPlay == true){
                   this.play()
                   console.log(this.isPlay)
               }
           }else if(this.inActive!=true){
               this.inLive=false;
               this.inActive=true;
               if(this.isPlay == false){
                   this.stop()
                    console.log(this.isPlay)
            }
           }if(this.disbox==true){
               this.disbox1=true;
               this.disbox=false;
           }else if(this.disbox==false){
               this.disbox1=false;
               this.disbox=true;
           }
        },
        OnChild(msg){
            this.Playing = msg, //接收需要播放歌曲信息
            this.songUrl = require("../../music/" + this.Playing.url);
            this.$refs.audio.addEventListener('canplay', () => {
                this.play() //播放开始
                if(this.isPlay == false){ // 歌曲列表绑定播放暂停样式
                    this.inLive=true;
                    this.inActive=false;
                    this.disbox1=true;
                    this.disbox=false;
                }
            })
        },
        play(){
            this.music=this.$refs.audio;
            if(this.music.paused == true){
                this.music.play()
                this.isPlay = false;
            }
        },
        stop(){
           this.music=this.$refs.audio;
           console.log(this.music)
            if(this.music.paused == false){
            console.log(this.music.pause)
              this.music.pause(); 
               this.isPlay = true;
            }
        },
        gentime(){
            const musicTime = this.$refs.audio.duration
            const branch = Math.floor(musicTime / 60) // 计算音频分钟
            const second = Math.floor(musicTime % 60) // 计算音频秒
            if (branch < 10 && second < 10) {         // 四种情况判断音频总时间
                this.dTime = `0${branch}:0${second}`
            } else if (branch < 10) {
                this.dTime = `0${branch}:${second}`
            } else if (second < 10) {
                this.dTime = `${branch}:0${second}`
            } else {
                this.dTime = `${branch}:${second}`
            }
        },
        MueicBor(){
            const music = this.$refs.audio                      // 音频所在对象
            const musicBar = this.$refs.runbar                  // 颜色进度条所在对象
            const musicCircular = this.$refs.runCircular        // 圆点所在对象  
            const musicWidth = this.$refs.runfatbar.offsetWidth // 底部进度条总宽
            
            function move(e){                           // 鼠标移动时的处理
                const posX = e.clientX;                 // 鼠标移动时的坐标
                const BorX = musicBar.offsetLeft+8      // 颜色进度条所在的坐标
                const moveX = posX - BorX;              // 鼠标移动后的距离
                const musicTime = music.duration        // 获得音频时长
                if(moveX < musicWidth-5&&moveX>-8){     //将鼠标移动后的距离以底部进度条总宽为条件赋值
                    musicCircular.style.left = moveX+"px";
                    const musicBarWidth =parseInt(`${( moveX/ musicWidth) * 100}%`)// 计算进度条所在比例宽度
                    const muictimes = ((musicBarWidth+6)/100) * musicTime
                    music.currentTime = muictimes;
                    
                }
            }
            function mousUp(e){      //赋予圆点鼠标抬起事件
                const stopX = e.clientX;                //鼠标抬起时的坐标
                const BorX = musicBar.offsetLeft+8;      //颜色进度条所在的坐标
                const upX =  stopX - BorX;              //鼠标抬起后移动的距离
                if(upX < musicWidth-5&&upX>-8){         //将鼠标抬起后移动的距离以底部进度条总宽为条件赋值
                    window.removeEventListener("mousemove",move,true); //删除鼠标移动事件
                    musicCircular.style.left = upX+"px"
                    window.removeEventListener("mouseup",mousUp,true);
                }
            }
            // 获得音频播放预备时的处理
            music.addEventListener('canplay', () => {
                musicCircular.addEventListener('mousedown',() =>{ //赋予圆点鼠标按下事件
                    document.onselectstart=new Function("event.returnValue=false;"); 
                    window.addEventListener('mousemove',move,true) //赋予圆点鼠标移动事件
                    window.addEventListener('mouseup',mousUp,true)
                })
            })
            // 获得音频播放时的处理
            music.addEventListener('timeupdate', () => {
                const musicTime = music.duration // 获得音频时长
                const stopTime = music.currentTime // 获得已播放的音频时长
                const musicBarWidth =`${(stopTime / musicTime) * 100}%`// 计算进度条所在比例宽度
                    musicBar.style.width =  musicBarWidth
                const Circular = (musicWidth-4) * (parseInt(musicBarWidth) / 100) // 计算进度条所在宽度赋值给圆点
                    musicCircular.style.left = Circular-4+"px"
                const branch = Math.floor(stopTime / 60) // 计算已播放的音频分钟
                const second = Math.floor(stopTime % 60) // 计算已播放的音频秒
                if (branch < 10 && second < 10) { // 四种情况判断显示音频已播放时间
                    this.cTime = `0${branch}:0${second}`
                } else if (branch < 10) {
                    this.cTime = `0${branch}:${second}`
                } else if (second < 10) {
                    this.cTime = `${branch}:0${second}`
                } else {
                    this.cTime = `${branch}:${second}`
                }
                console.log(this.cTime)
            })
             music.addEventListener('ended', () => {
                this.inActive = true;
                this.inLive = false;
                this.disbox = true
                this.disbox1=false
            })
        },
    },
    mounted() {    
        this.MueicBor()
        this. gentime()
    }, 
    
}
</script>

<style scoped>
#music{
    width:100%;
    height: 500px;
    background-color:rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    margin: 20px 0 0 0;
}
.music_top{
    padding:20px 0px 10px;
    margin:0 10px;
    border-bottom: 1px rgba(105, 102, 102, 0.9) solid;
    font-weight: bold;
}
.music_play{
    padding: 10px ;
    display: flex;
}
.music_picture{ 
    width: 90px;
    height: 90px;
    background-image: url(../../assets/headPortrait/back.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    cursor: pointer;
}
.Songe{
    width:70%;
    margin-left: 20px;
}
.music_PL{
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    transition: all 0.3s;
}
.music_sjx{
    width: 1px;
    height: 1px;
    border:10px rgb(133, 131, 131) solid; 
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid transparent;
    margin: 10px 5px 0 20px;
    display: flex;
    justify-content: center;
}
.music_PA{
    width: 25px;
    height: 25px;
    background-color: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    display: flex;
    position: relative;
    right:-30px;
    bottom: -60px;
    cursor: pointer;
    transition: all 0.3s;
}
.music_zt{
    height: 10px;
    border-left:3px rgb(133, 131, 131) solid; 
    border-right: 3px rgb(133, 131, 131) solid;
    margin: auto;
    padding:2px;
    display: flex;
    justify-content: center;
}
.Songe{
    margin-top:10px;
}
.SongTitle{
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    margin-bottom: 10px;
}
.SongTitle>span:last-child{
    font-size: 12px;
    color:rgb(133, 131, 131)
}

 /*播放进度条*/
.bckgSlider{
    width: 100%;
    height: 3px;
    border:1px rgb(173, 171, 171) solid;
}
.Slider{
    width:0%;
    height: 3px;
    border:1px rgb(0, 0,0) solid;
    background-color:rgb(114, 89, 255);
    margin-top: -1px;
}
.SliderCircular{
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color:rgb(114, 89, 255);
    margin-top: -4px;
    position: relative;
    left: -6px;
}
.SongTime{
    text-align: right;
    font-size: 13px;
    color: rgba(0, 0, 0,0.8);
    margin-top:10px;
}
</style>


