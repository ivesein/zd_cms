<template>
  <div>
        <ContentTitle cTitle="订单信息"></ContentTitle>
        <el-row>
          <el-col :span="24">
            <el-card class="box-card">
              <el-table
                :data="goodData"
                style="width: 100%"
                :row-class-name="tableRowClassName"
                v-loading="tbLoading"
                element-loading-text="拼命加载中"
                element-loading-spinner="el-icon-loading"
                element-loading-background="rgba(0, 0, 0, 0.8)"
              >
                <el-table-column
                  align="center"
                  prop="date"
                  label="日期"
                  sortable
                  width="100"
                  :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
                  :filter-method="filterHandler"
                >
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="name"
                  label="姓名"
                  width="80">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="school"
                  label="学校/医院"
                  width="140"
                  :filters="[
                    {text:'西安交大生科院',value:'西安交大生科院'},
                    {text:'陕师大',value:'陕师大'},
                    {text:'四医大',value:'四医大'},
                    {text:'西工大',value:'西工大'},
                    {text:'西京医院',value:'西京医院'},
                    {text:'唐都医院',value:'唐都医院'},
                    ]"  
                  :filter-method="filterHandler"
                >
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="Laboratory"
                  label="楼/科室"
                  width="120">
                </el-table-column>
                <el-table-column
                align="center"
                  prop="leaderName"
                  label="老板"
                  :filters="[{text:'牛二',value:'牛二'},{text:'猪三',value:'猪三'},{text:'狗四',value:'狗四'}]"
                  :filter-method="filterHandler"
                  width="80"
                >
                </el-table-column>
                <el-table-column
                align="center"
                  prop="phone"
                  label="电话"
                  width="110">
                </el-table-column>
                <el-table-column
                align="center"
                  prop="email"
                  label="邮箱"
                  width="200">
                </el-table-column>
                <el-table-column
                align="center"
                  prop="address"
                  label="地址"
                  :formatter="formatter"
                  >
                </el-table-column>
                <el-table-column
                align="center"
                  prop="tag"
                  label="标签"
                  width="100"
                  :filters="[{ text: '基因测序', value: '基因测序' }, { text: '引物合成', value: '引物合成' }]"
                  :filter-method="filterTag"
                  filter-placement="bottom-end">
                  <template slot-scope="scope">
                    <el-tag
                      :type="scope.row.tag === '测序' ? 'primary' : 'success'"
                      close-transition>{{scope.row.tag}}</el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                align="center"
                  prop="price"
                  label="单价"
                  width="70">
                </el-table-column>
                <el-table-column
                align="center"
                  prop="orderNumber"
                  label="数量"
                  width="60">
                </el-table-column>
                <el-table-column label="价格合计" align="center" width="90">
                  <template slot-scope="scope">{{parseInt(scope.row.price)*parseInt(scope.row.orderNumber)}}</template>
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="progress"
                  label="进度"
                  width="180">
                  <template slot-scope="scope">
                    <el-switch
                      v-model="scope.row.progress"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      active-text="已完成"
                      inactive-text="未完成"
                    >
                    </el-switch>
                  </template>
                </el-table-column>
              </el-table>

              <div align="center">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    @prev-click="prevClick"
                    @next-click="nextClick"
                    :page-sizes="[10,20,30,40,50,100]"
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
// import store from '../../../store/store'
import {mapState,mapActions,mapMutations,mapGetters} from 'vuex'

export default {
  data() {
    return {              
      //搜索条件
      criteria: '',
      //下拉菜单选项
      select: '',
      //默认每页数据量
      pagesize: 10,
      //默认高亮行数据id
      highlightId: -1,
      //当前页码
      currentPage: 1,
      //查询的页码
      start: 1,
      //默认数据总数
      totalCount: 0,

      //loading标识
      tbLoading:1,

      goodData:[],
      
    }
  },
  methods:{
    
     formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      tableRowClassName({row, rowIndex}) {
        if (!row.progress) {
          return 'warning-row';
        } else{
          return 'success-row';
        }
      },
      //渲染数据
      renderData(){
        this.tbLoading=0;
        this.totalCount=this.$store.state.orderData.length;
        this.$store.state.orderData.forEach((v,k) => {
            if(k >= (this.currentPage-1)*this.pagesize && k <= this.currentPage*this.pagesize-1){
              this.goodData.push(v);
            }
          })
          // return this.goodData;
      },
      // //多选响应
      // handleSelectionChange: function(val) {
      //     this.multipleSelection = val;
      // },

      // //点击行响应
      // handleclick: function(row, event, column){
      //     this.highlightId = row.id;
      // },
      // //改变当前点击的行的class，高亮当前行
      // tableRowClassName: function(row, index){
      //     if(row.id == this.highlightId)
      //     {
      //       return 'info-row';
      //     }
      // },

      //每页显示数据量变更
      handleSizeChange: function(val) {
          this.pagesize = val;
          this.goodData=[];
          this.renderData();
          // this.loadData(this.criteria, this.currentPage, this.pagesize);
      },

      //页码变更
      handleCurrentChange: function(val) {
          this.currentPage = val;
          // this.currentPage++;
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
  created(){
    //分发actions中的getOrderData方法请求数据，回掉renderData函数渲染goodData数组内容
    this.$store.dispatch('getOrderData',this.renderData);
    
    
  },
  mounted(){
    // console.log($store)
  
  },
  components: {
      ContentTitle
  }
}
</script>

<style>
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
</style>
