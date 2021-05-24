<template>
  <div class="diary">
    <div class="diaryAL">
        <div class="diaryCont" v-for="(itme,index) in diary" :key="index.id">
            <div class="diaryTitle"><h2>{{itme.title}}</h2></div>
            <div class="diaryText">{{itme.text}}</div>
            <div class="diaryTime">{{itme.time}}</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"diary",
    data(){
        return {
            diary:[{id:1,title:"闲来无事1",text:"正在测试1",time:"2021.5.18"},
                    {id:1,title:"闲来无事2",text:"正在测试2",time:"2021.5.18"},
                    {id:1,title:"闲来无事3",text:"正在测试3",time:"2021.5.18"}]
        }
        
    }
}
</script>

<style>
.diaryAL{
    width: 100%;
    background-color: rgba(0, 0, 0,0.5);
    margin:20px auto;
    padding:10px 0;
    border-radius: 5px;
}
.diaryCont{
    width:98%;
    height: 200px;
    background-color: rgba(255, 255, 255,0.9);
    margin:15px auto;
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
}
.diaryCont>div{
    padding: 10px;
    
}
.diaryText{
    height: 35%;
}
</style>