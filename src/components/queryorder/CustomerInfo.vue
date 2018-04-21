<template>
  <div>
    <ContentTitle cTitle="客户信息"></ContentTitle>
    <el-row>
        <el-col :span="24">
          <el-card class="box-card">
            <el-table
              :data="goodData"
              style="width: 100%"
              stripe
              v-loading="tbLoading"
              element-loading-text="拼命加载中"
              element-loading-spinner="el-icon-loading"
              element-loading-background="rgba(0, 0, 0, 0.8)"
            >
              <el-table-column
                prop="name"
                label="姓名"
                width="100">
              </el-table-column>
              <el-table-column
                prop="school"
                label="学校"
                width="180">
              </el-table-column>
              <el-table-column
                prop="Laboratory"
                label="实验室"
                width="200">
              </el-table-column>
              <el-table-column
                prop="leaderName"
                label="老板"
                width="100">
              </el-table-column>
              <el-table-column
                prop="phone"
                label="电话"
                width="140">
              </el-table-column>
              <el-table-column
                prop="email"
                label="邮箱"
                width="260">
              </el-table-column>
              <el-table-column
                prop="address"
                label="学校地址"
                :formatter="formatter"
                >
              </el-table-column>
              <el-table-column
                prop="sequencePrice"
                label="测序价格"
                width="100">
              </el-table-column>
              <el-table-column
                prop="primerPrice"
                label="引物价格"
                width="100">
              </el-table-column>
            </el-table>

            <div align="center">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    @prev-click="prevClick"
                    @next-click="nextClick"
                    :page-sizes="[10,20,30,40]"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="totalCount">
                </el-pagination>
              </div>
          </el-card>
        </el-col>
      </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import ContentTitle from '@/components/common/content/ContentTitle'
import axios from 'axios'
export default {
  // props:['tableData'],
  data() {
    return {
      //设置loading标识
      tbLoading:true,

      //表格当前页数据
      tableData: [], 

      //搜索条件
      criteria: '',

      //下拉菜单选项
      select: '',
      
      //默认每页数据量
      pagesize: 10,

      //当前页码
      currentPage: 1,

      //查询的页码
      start: 1,

      //默认数据总数
      totalCount: 0,

      //要渲染的数据内容
      goodData:[],
    }},
  created(){
    axios.post('http://www.zhuoding/api/data')
    .then((response) =>{
    //由于axios异步请求数据 mount()会先执行 所以要在异步请求到数据后直接渲染tableData 
    this.tableData=response.data.list;
    // 获取总数据条数
    this.totalCount=this.tableData.length;
    // 将loading画面关闭
    this.tbLoading=false;
    this.renderData();
    })
    .catch(function (error) {
      console.log(error);
    });  
    // this.renderData();
  },
  methods:{

    formatter(row, column) {
        return row.address;
      },
    //渲染数据
    renderData(){
          this.tableData.forEach((v,k) => {
            if(k >= (this.currentPage-1)*this.pagesize && k <= this.currentPage*this.pagesize-1){
              this.goodData.push(v);
            }
          })
      },
      //每页显示数据量变更
      handleSizeChange: function(val) {
        
          this.pagesize = val;
          console.log(this.pagesize)
          this.goodData=[];
          this.renderData();
          // this.loadData(this.criteria, this.currentPage, this.pagesize);
      },

      //页码变更
      handleCurrentChange: function(val) {
          this.currentPage = val;
          // 要清空goodData数组 再渲染
          this.goodData = [];
          // console.log(this.currentPage)
          this.renderData()
          // this.loadData(this.criteria, this.currentPage, this.pagesize);
      }, 
      //上一页
      prevClick(){ 
        if(this.currentPage<=0){
          this.currentPage = 0;
        } else{
          this.currentPage--;
        }
        this.renderData();
      },
      //下一页
      nextClick(){
        this.currentPage++;
        this.renderData();
      }     
  },
  mounted(){
  },
  components: {
    ContentTitle
  }
}
</script>

<style scoped>
</style>
