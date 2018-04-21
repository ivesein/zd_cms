<template>
  <el-row :gutter="10">
    <div class="hello">
      <!-- <el-col span="4"> -->
      <el-col :xs="12" :sm="4" :md="4">
        <div class="box1"></div>
      </el-col>
      <!-- <el-col span="6"> -->
      <el-col :xs="12" :sm="6" :md="6">        
        <div class="box2"></div>
      </el-col>
      <!-- <el-col span="4" offset="2"> -->
      <el-col :xs="12" :sm="4" :md="{span:4,offset:2}">                
        <div class="box3"></div>
      </el-col>
      <!-- <el-col span="8"> -->
        <el-col :xs="12" :sm="8" :md="8">   
        <div class="box4"></div>
      </el-col>
    </div>
   </el-row>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    width:100%;
    height:66px;
    background: #336699;
    overflow: hidden;
  }
  .box1{
    height: 66px;
    background: red;
  }
    .box2{
    height: 66px;
    background: blue;
  }
    .box3{
    height: 66px;
    background: black;
  }
    .box4{
    height: 66px;
    background: pink;
  }
</style>
