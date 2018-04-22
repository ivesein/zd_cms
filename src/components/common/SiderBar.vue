<template>
  <div class="sider-box">
    <el-menu :default-active="$router.path" class="el-menu-vertical-demo" router unique-opened 
              background-color="#336699" text-color="#f0f3f4" active-text-color="#FFCC00" >
        <el-menu-item index="overview">
          <span slot="title">
            <i class="iconfont icon-navicon-qghztj"></i>
            <span slot="title">概况总览</span>
          </span>
        </el-menu-item>
        <!-- <el-menu-item index="2">
          <i class="el-icon-document"></i>
          <span slot="title">查询订单</span>
        </el-menu-item> -->
        <el-submenu index="">          
          <template slot="title">
            <span><i class="iconfont icon-chaxun1"></i></span>
            <span>信息查询</span>
          </template>
          <el-menu-item index="customerinfo">客户信息查询</el-menu-item>
          <el-menu-item index="orderinfo">订单信息查询</el-menu-item>
          <el-menu-item index="someinfo" >其它信息查询</el-menu-item>
        </el-submenu>
        <el-menu-item index="addorder">
          <i class="iconfont icon-tianjiaxinxi"></i>
          <span slot="title">添加订单</span>
        </el-menu-item>
        <el-menu-item index="summaryorder">
          <i class="iconfont icon-daohang-shujufenxi"></i>
          <span slot="title">订单汇总</span>
        </el-menu-item>
        </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'

export default {
  data() {
    return {

    }
  },
  components: {

  },
  methods:{
    // ...mapActions(['getOrderData']),
    // show(){
    //   console.log('点击了按钮')
    // }
  },
  mounted(){
    // console.log(this.$store);
  }
}
</script>

<style scoped>
.sider-box{
  width:200px;
  height:100%;
  position: absolute;
  left: 0;
  top: 66px;
  background: #336699;
  /* z-index: -1; */
}
.sider-box ul{
  padding-top: 60px;
  background: #336699;
  height: 100%;
  /* z-index: 1000; */
}
 /* .sider-box ul li{
  padding-left: 10px;
}  */
.el-menu{
  border-right: none;
  
}
.iconfont{
  font-size: 14px;
  color: #f0f3f4;
  margin-right: 10px;
}

</style>
<style>
 .sider-box .el-menu--inline li{
  /* background: #001122!important; */
  padding-left:60px!important;
}
.sider-box .el-submenu__icon-arrow{
  font-size: 14px!important;
  color: #f0f3f4!important;
}
/*
.el-menu--inline li:hover{
  background: #003366!important;
} */
</style>

