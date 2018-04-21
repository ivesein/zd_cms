<template>
  <div id="loginBg">
      <el-row>
        <el-col :span="8" :offset="8">
          <div class="login-box">
            <form action="javascript:;">
              <input type="text" name="username" id="username" placeholder="username" autofocus :span="8">
              <input type="password" name="password" id="password" placeholder="password" :span="8">
              <button type="submit" @click="go"><i class="el-icon-caret-right"></i></button>
            </form>
          </div>
        </el-col>
      </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  methods:{
    go(){
    var um = document.querySelector("input[name='username']");
    var pw = document.querySelector("input[name='password']");
    var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
    
      var um_v = um.value;
      var pw_v = pw.value;
      console.log(typeof pw_v)
      if(um_v === "f" && pw_v === "1"){
         
              this.$message({
              message: `登录成功，2秒后跳转！`,
              type: 'success',
              duration:1000}
            );
        setTimeout(() => {
          // clearInterval(itimer);
          this.$router.push('/Home');
        },2000)
   
      }else{
          this.$message.error({message:'用户名或密码错误！请重新输入', duration:1000}
           
          )
      }
    }
  },
  mounted:function(){
 
  },
  components: {

  }
}
</script>

<style scoped>
#loginBg{
    height: 100%;
    background:url(../../static/images/loginbg.png) no-repeat;
    background-size: cover;
    overflow: hidden;
}
input{
  width:100%;
  display:block;
  line-height: 38px;
  margin: 0 auto;
  font-size: 22px;
  color:#9fa9bd;
  background:rgba(28,30,33,0);
  text-indent: 10px;
  border-bottom: 1px solid #444954;
}
input[name="password"]{
  border-bottom:none;
  border-top: 1px solid #444954;
}
.login-box{
margin-top:400px;
}
form{
  width:300px;
  /* height:100px; */
  padding:8px 20px;
  border-radius: 6px;
  margin: 0 auto;
  background: rgba(28,30,33,.5);
  position: relative;
}
button{
  position: absolute;
  top:22px;
  left:316px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 6px solid #444954;
  background:#6f7787;
  color: #42474c;
  font-size: 30px;
  cursor: pointer;
}
button:hover{
  color: #fff;
}
</style>
