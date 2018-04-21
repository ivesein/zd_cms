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
              >
                <el-table-column
                  align="center"
                  prop="date"
                  label="日期"
                  sortable
                  width="120"
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
                  width="140">
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
                  width="160">
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
                  width="80"
                  :filters="[{ text: '测序', value: '测序' }, { text: '引物合成', value: '引物合成' }]"
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
                  width="70">
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


export default {
  data() {
    return {
      //表格当前页数据
      tableData: [],              
      //搜索条件
      criteria: '',
      //下拉菜单选项
      select: '',
      //默认每页数据量
      pagesize: 3,
      //默认高亮行数据id
      highlightId: -1,
      //当前页码
      currentPage: 1,
      //查询的页码
      start: 1,
      //默认数据总数
      totalCount: 100,
      goodData:[],
      tableData: [{
          date: '2018-04-02',
          name: '王小虎',
          school:'西安交大生科院',
          Laboratory:'实验楼2楼203室',
          leaderName:'牛二',
          phone:'13891759137',
          email:'112345@qq.com',
          address: ' 陕西省西安市咸宁西路28号',
          tag: '测序',
          price:'16',
          orderNumber:'16',
          progress:true

        }, {
          date: '2018-03-04',
          name: '李小狗',
          school:'陕师大',
          Laboratory:'实验楼3楼303室',
          leaderName:'猪三',
          phone:'13891445896',
          email:'223412345@qq.com',
          address: '陕西省西安市长安区西长安街620号',
          tag: '引物合成',
          price:'18',
          orderNumber:'6',
          progress:false 
        }, {
          date: '2018-04-01',
          name: '刘小鸡',
          school:'西工大',
          Laboratory:'实验楼2楼203室',
          leaderName:'狗四',
          phone:'13894456433',
          email:'1123dxd45@qq.com',
          address: '陕西省西安市咸宁西路28号',
          tag: '测序',
          price:'18',
          orderNumber:'11',
          progress:true          
        }, {
          date: '2017-12-03',
          name: '王小虎',
          school:'西安交大生科院',
          Laboratory:'实验楼2楼203室',
          leaderName:'狗四',
          phone:'13891759137',
          email:'112345@qq.com',
          address: '陕西省西安市咸宁西路28号',
          tag: '引物合成',
          price:'16',
          orderNumber:'14',
          progress:false          
        }, {
          date: '2017-12-03',
          name: '王小虎',
          school:'陕师大',
          Laboratory:'实验楼2楼203室',
          leaderName:'牛二',
          phone:'13891759137',
          email:'112345@qq.com',
          address: '陕西省西安市咸宁西路28号',
          tag: '测序',
          price:'16',
          orderNumber:'15',
          progress:false
        }, {
          date: '2018-03-03',
          name: '王小虎',
          school:'西工大',
          Laboratory:'实验楼2楼203室',
          leaderName:'猪三',
          phone:'13891759137',
          email:'112345@qq.com',
          address: '陕西省西安市长安区西长安街620号',
          tag: '引物合成',
          price:'14',
          orderNumber:'15',
          progress:true
        }, {
          date: '2018-04-03',
          name: '王小虎',
          school:'唐都医院',
          Laboratory:'实验楼2楼203室',
          leaderName:'猪三',
          phone:'13891759137',
          email:'112345@qq.com',
          address: '陕西省西安市长安区西长安街620号',
          tag: '引物合成',
          price:'18',
          orderNumber:'15',
          progress:false
        }, {
          date: '2018-04-03',
          name: '赵小猫',
          school:'西京医院',
          Laboratory:'实验楼2楼203室',
          leaderName:'狗四',
          phone:'13891759137',
          email:'112345@qq.com',
          address: '陕西省西安市长安区西长安街620号',
          tag: '测序',
          price:'18',
          orderNumber:'9',
          progress:true
        }, {
          date: '2016-05-03',
          name: '王小虎',school:'西安交大生科院',
          Laboratory:'实验楼2楼203室',
          leaderName:'牛二',
          phone:'13891759137',
          email:'112345@qq.com',
          address: '陕西省西安市咸宁西路28号',
          tag: '引物合成',
          price:'16',
          orderNumber:'20',
          progress:false
        }]
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
          this.tableData.forEach((v,k) => {
            if(k >= (this.currentPage-1)*3 && k <= this.currentPage*3-1){
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
          this.loadData(this.criteria, this.currentPage, this.pagesize);
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
  mounted(){
    this.renderData();
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
