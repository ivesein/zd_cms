<template>
<div class="headerbar">
  <el-row> 
    <div class="header-box">    
        <!-- logo-box -->
        <el-col :xs="12" :sm="12" :md="4">
          <div class="logo-box">
          <span class="zd">ZhuoDing</span><span class="admin">Admin</span>
          </div>
        </el-col>
        <!-- search-box -->
        <el-col :xs="12" :sm="12" :md="6" >
          <div class="search">
            <el-input placeholder="Search for..." clearable size="small"><el-button slot="append" icon="el-icon-search"></el-button></el-input>
          </div>
        </el-col>
        <!-- weburl-box -->
        <el-col :xs="12" :sm="12" :md="4">
          <div class="weburl-box">
          <span class="website">website:</span><span class="weburl">www.zhuoding.com</span>
          </div>
        </el-col>
        <!-- message-box -->
        <el-col :xs="8" :sm="12" :md="{span:4,offset:4}">          
          <div class="message-box">
            <!-- messages-drop -->
            <div class="ms-drop">
              <el-dropdown placement="bottom-start">
                <span class="icon-bt">
                  <el-badge :value="5" class="item">
                  <i class="el-icon-message"></i>
                  </el-badge>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <span class="pop-title">You have new messages!</span>
                  </el-dropdown-item>
                  <el-dropdown-item  v-for="dialog in dialogs" :key="dialog.time" divided>
                      <div class="pop-div">
                          <span class="pop-image">
                              <img :src="dialog.header" width="50px" >
                          </span>
                          <span class="pop-content">
                          {{dialog.content}}
                          </span>
                          <span class="pop-time">
                              {{dialog.time}}分钟前
                          </span>
                      </div>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
            <!-- tasks-drop -->     
            <div class="task-drop">      
                <el-dropdown placement="bottom-start">
                  <span class="icon-bt">
                    <el-badge :value="3" class="item">
                    <i class="el-icon-date"></i>
                    </el-badge>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>
                      <span class="pop-title">You have new tasks!</span>
                    </el-dropdown-item>
                    <el-dropdown-item v-for="task in tasks" :key="task.id" divided>
                      <span class="task-span task-tag">
                        <el-tag type="danger"  v-if="task.rank==1">紧急</el-tag>
                        <el-tag type="warning" v-if="task.rank==2">重要</el-tag>
                        <el-tag type="success" v-if="task.rank==3">一般</el-tag>
                      </span>
                      <span class="task-span task-content">
                        {{ task.content }}<br>
                      <span class="task-time">截止：{{task.overTime}}</span>
                      </span>
                      <span class="task-span task-btn"><el-button type="primary" size="mini">完成</el-button></span>
                    </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
              </div> 
          </div>
        </el-col>
              <el-col :xs="8" :sm="8" :md="2">
                <!-- img-head -->
                <div class="user-head-img">
                  <el-dropdown placement="bottom-start" trigger="click">
                    <img src="../../../static/images/b_header.jpg" alt="">
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item divided>
                        <div class="setting-div">
                          <span class="setting-icon"><i class="iconfont icon-profile"></i></span>
                          <span class="setting-string">Profile 个人</span>
                        </div>
                      </el-dropdown-item>
                      <el-dropdown-item divided>
                        <div class="setting-div">
                          <span class="setting-icon"><i class="iconfont icon-setting"></i></span>
                          <span class="setting-string">Setting 设置</span>
                        </div>
                      </el-dropdown-item>
                      <el-dropdown-item divided>
                        <div class="setting-div">
                          <span class="setting-icon"><i class="iconfont icon-accountlogout"></i></span>
                          <span class="setting-string">Logout 注销</span>
                        </div>
                      </el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </div>
              </el-col>  
      </div>
  </el-row>
</div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      dialogs:[
          {header:'../../../static/images/b_header2.jpg',content:'我有一个Style样式需要您帮忙处理以下。',time:'3'},
          {header:'../../../static/images/b_header3.jpg',content:'中午一起吃个饭吧，我请客。',time:'15'},
          {header:'../../../static/images/b_header.jpg',content:'需要处理一下POP展示的白边样式。',time:'18'},
          {header:'../../../static/images/b_header2.jpg',content:'下午3点开需求会议，准时参加。',time:'24'},
          {header:'../../../static/images/b_header3.jpg',content:'晚上我开车送你回家，你请我吃晚饭。',time:'45'},
      ],
      tasks:[
          {id:1,rank:1,content:'完成JSPangAdmin头部头部组件的编写。',overTime:'2017/3/9'},
          {id:2,rank:2,content:'完成GitHub仓库的初始化工作。',overTime:'2017/3/15'},
          {id:3,rank:3,content:'在阿里云进行网站备案，完成后通知组长。',overTime:'2017/3/20'}
          
      ]
    }
  },
  components: {

  }
}
</script>

<style scoped>
.header-box{
  position: relative;
  width:100%;
  height:66px;
  background: #336699;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  box-shadow:0px 2px 3px rgba(0,0,0,.5);   
  z-index: 1000; 
}
/* .el-row{
} */
.logo-box{
  float: left;
  padding-left: 20px;
}
.zd{
  line-height: 66px;
  font-size: 22px;
  /* color:#209e91; */
  color:#009999;
  cursor: pointer;
  /* font-weight: 800; */
}
.admin{
  font-size: 22px;
  color: #fff;
  line-height: 66px;
}
.header-box .search{
  line-height: 66px;
  width:100%;
  /* float: left; */
}
.weburl-box span{
  line-height: 66px;
}
.website{
  font-size: 16px;
  color: #fff;
}
.weburl{
  font-size: 16px;
  color: #209e91;
  cursor: pointer;
}
.el-icon-date,.el-icon-message{
  font-size: 22px;
  color:#fff;
}
.el-icon-date:hover,.el-icon-message:hover{
  color: #209e91;
}
.el-dropdown{
  /* padding:0 10px; */
  float: left;
}
.el-dropdown .icon-bt{
  width:20px;
  /* line-height: 66px; */
}
.message-box{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height:66px;
 }
 .ms-drop{
   margin-right: 20px;
 }
.pop-title{
  color:#209e91;
  font-size: 16px;
}
.pop-image{
  display: block;
  float: left;
}
.pop-image img{
  border-radius: 50%;
}
.pop-div{
    height:55px;
    clear:both;
}
.pop-content{
    display:block;
    font-size:12px;
    line-height:14px;
    padding-top:15px;
    margin-left:60px;
}
.pop-time{
    display:block;
    float:right;
    font-size:10px;
    color:#ccc;
}
.task-div{
  height:55px;
}
.task-span{
    display:inline-block;
    font-size:12px;
    vertical-align: middle;
}
.task-content{
  width:160px;
  margin: 0 5px;
  line-height: 16px;
  font-size: 12px;
}
.task-time{
  float:right;
  color:#ccc;
}
.task-tag{
  padding-right: 10px;
}
.task-btn{
  padding-left:10px;
}
.user-head-img{
  height: 66px;  
  padding: 0 25px;
  width: 100px;
  display: table-cell;
  vertical-align: middle;
}
.user-head-img img{ 
  border: none;
  width:50px;
  height:50px;
  border-radius: 50%;
}
.setting-div{
  height:30px;
  line-height: 30px;
}
.setting-div span{
  display:block;
  float: left;
  font-size: 12px;
}
.setting-icon{
  font-size: 18px;
  padding-right: 10px;
  /* padding-top: 5px; */
}
</style>
<style>
.el-badge__content{
  border:none!important;
}
</style>
