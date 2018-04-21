<template>
  <div class="content-title">
      <div class="ct-left"><h2>{{cTitle}}</h2></div>
      <div class="ct-right">
          <span class="ct-home"><router-link to="overview">Home</router-link></span>
          <span class="ct-slash">/</span>
          <span class="ct-current">{{cTitle}}</span>
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:['cTitle'],
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.content-title{
    height:60px;
}
.ct-left{
    float: left;
    color:#666;
}
.ct-right{
    float:right;
}
.ct-home{
    font-size: 20px;
}
.ct-slash{
    color:#ccc;
}
a{
    color:darkcyan;
}
</style>
