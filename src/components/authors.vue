<style>
.font-li{
  list-style: none;
  font-size: 16px;
  font-family: "微软雅黑";
  height: 20px;
  margin-top: 10px;
  cursor: pointer;
}
</style>

<template>
  <div style="margin-top: 50px;min-height: 700px;">
    <Card style="padding: 30px;">
      <p slot="title" style="font-size: 24px;height: 30px;line-height: 30px;">笔者列表</p>
      <ul>
        <li class="font-li" v-for="item in authorsList" :key="item.name" @click="routeToAuthorItem(item.name)">{{item.name}}</li>
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
          name:'笔者1'
        },
        {
          name:'笔者2'
        },
        {
          name:'笔者3'
        },
        {
          name:'笔者4'
        },
        {
          name:'笔者5'
        }
      ]
    }
  },
  methods :{
    routeToAuthorItem(name){
      // console.log(name);
      this.$router.push({path: '/authoritem', query:{authorname: name}})
    }
  }
}
</script>