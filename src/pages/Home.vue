<template>
  <div>
    <!-- <div class="header"> -->
      <Header></Header>
    <!-- </div> -->
      <SiderBar></SiderBar>
      <div class="content">
        <keep-alive v-if="$route.meta.keepAlive"><router-view></router-view></keep-alive>
        <keep-alive v-if="!$route.meta.keepAlive"><router-view></router-view></keep-alive>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Header from '@/components/common/Header'
import SiderBar from '@/components/common/SiderBar'
// import axios from 'axios'

    
// var arr=axios.post('http://www.zhuoding/api/data')
//             .then((response) =>{
//             return response.data.list;
//             })
//             .catch(function (error) {
//             console.log(error);
//             });
// let tableData=Array.from(arr)  
export default {
  data() {

    return {
      // tableData:tableData
    }
  },
  components: {
    Header,
    SiderBar
  }
}
</script>
<style scoped>
/* .header{
  box-shadow:0px 2px 3px rgba(0,0,0,.5);    
} */
.content{
  /* background: #f0f3f4 none repeat scroll 0 0 ;  */
  width: auto;
  position: absolute;
  top:66px;
  left:200px;
  right: 0;
  bottom: 0;
  overflow-y: scroll;
  padding:25px 40px 25px 40px;
  box-sizing: border-box;
}
</style>

