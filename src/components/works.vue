<style>
.font-li{
  list-style: none;
  font-size: 16px;
  font-family: "微软雅黑";
  height: 20px;
  margin-top: 10px;
}
</style>

<template>
  <div style="margin-top: 50px;min-height: 700px;">
    <Card style="padding: 30px;">
      <p slot="title" style="font-size: 24px;height: 30px;line-height: 30px;">作品列表</p>
      <ul>
        <li class="font-li" v-for="item in authorsList" :key="item">{{item.name}}</li>
      </ul>
    </Card>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  data(){
    return{
      authorsList: [
        {
          name:'这是作品案例'
        },
        {
          name:'这是作品案例'
        },
        {
          name:'这是作品案例'
        },
        {
          name:'这是作品案例'
        },
        {
          name:'这是作品案例'
        }
      ]
    }
  }
}
</script>