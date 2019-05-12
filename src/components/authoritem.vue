// 笔者详情页面
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
      <p slot="title" style="font-size: 24px;height: 30px;line-height: 30px;">{{this.$route.query.authorname}}</p>
    </Card>
  </div>
</template>
