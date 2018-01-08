<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <!--<el-menu-item index="2">
              消息中心
          </el-menu-item>
          <el-menu-item index="3">论坛</el-menu-item>-->
        </el-menu>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
      <el-footer>
        <span>
          求打赏：i6W9ktjofNj6KbFm6NvsSkrqKWSRMkZCUs
          <h4>copy right: ABCD@qq.com</h4>
        </span></el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
      return {
        activeIndex :  '1'
      }
  }
}
</script>

<style>
  .el-header {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
.el-footer{
  background-color: #393d49;
  color: #fff;
  text-align: center;
  font-weight: 500;
  margin-top: -8px;
}

</style>
