  // eslint-disable-next-line
  /* eslint-disable */
<style>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  font-family: "微软雅黑";
  color: #f5f7f9;
}
.layout-nav {
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
.layout-footer-center {
  text-align: center;
}
</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo">笔墨屋</div>
          <div class="layout-nav">
            <MenuItem name="1">
              <router-link to="/home"><Icon type="ios-home-outline" tag="sapn"></Icon>主页</router-link>
            </MenuItem>
            <MenuItem name="2">
              <router-link to="/authors"><Icon type="ios-man-outline"></Icon>笔者</router-link>
            </MenuItem>
            <MenuItem name="3">
              <router-link to="/works"><Icon type="ios-create-outline"></Icon>作品</router-link>
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <router-view></router-view>
      </Content>
      <Footer class="layout-footer-center">2016-2019 &copy; Tombstone233</Footer>
    </Layout>
  </div>
</template>
