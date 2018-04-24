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
                  label="订单日期"
                  sortable
                >
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="name"
                  label="客户姓名"
                  width="80">
                </el-table-column>
                <el-table-column
                  align="center"
                  prop="school"
                  label="学校/医院"
                  width="160"
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
                  width="160">
                </el-table-column>
                <!-- <el-table-column
                align="center"
                  prop="leaderName"
                  label="老板"
                  :filters="[{text:'牛二',value:'牛二'},{text:'猪三',value:'猪三'},{text:'狗四',value:'狗四'}]"
                  :filter-method="filterHandler"
                  width="80"
                >
                </el-table-column> -->
                <el-table-column
                align="center"
                  prop="phone"
                  label="电话"
                  width="140">
                </el-table-column>
                <el-table-column
                align="center"
                  prop="email"
                  label="邮箱"
                  width="240">
                </el-table-column>
                <!-- <el-table-column
                align="center"
                  prop="address"
                  label="地址"
                  :formatter="formatter"
                  >
                </el-table-column> -->
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
                      :type="scope.row.tag === '基因测序' ? 'primary' : 'success'"
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
                  label="实验进度"
                  width="180">
                  <template slot-scope="scope">
                    <el-switch
                      v-model="scope.row.progress"
                      active-color="#13ce66"
                      inactive-color="#ff4949"
                      active-text="✓"
                      inactive-text="〤"
                      disabled
                    >
                    </el-switch>
                  </template>
                </el-table-column>
                <el-table-column
                  align="center"
                  label="操作"
                  width="140"
                >
                  <template slot-scope="scope">
                    <!-- 控制popover显示或隐藏 用v-model 绑定一个数据循环中未定义的变量（或者说不存在的），然后在点击取消时将这个变量赋值为 false --> 
                    <!-- 表格中最后一行点击不弹出popover 解决方法：绑定点击事件@click="scope.row.popvisibal=true" 设置v-model为true               -->
                    <el-popover
                      ref="popover1"
                      placement="left"
                      width="400"
                      trigger="click"
                      v-model="scope.row.popvisibal"
                      title="修改订单信息"
                    >
                      <el-form ref="ruleForm" label-width="100px" class="demo-ruleForm">
                          <el-form-item label="订单日期" required>
                            <el-date-picker
                              v-model="scope.row.date"
                              align="right"
                              type="date"
                              placeholder="选择日期"
                              :picker-options="pickerOptions1"
                              value-format="yyyy-MM-dd"
                            >
                            </el-date-picker>
                            <!-- <el-input v-model="scope.row.date"></el-input> -->
                          </el-form-item>
                          <el-form-item label="客户姓名" required>
                            <el-input v-model="scope.row.name"></el-input>
                          </el-form-item>
                          <el-form-item label="学校/医院" required>
                            <el-select v-model="scope.row.school" placeholder="请选择学校或医院">
                              <el-option label="西安交大" value="西安交大"></el-option>
                              <el-option label="唐都医院" value="唐都医院"></el-option>
                              <el-option label="西工大" value="西工大"></el-option>
                              <el-option label="西京医院" value="西京医院"></el-option> 
                              <el-option label="陕师大" value="陕师大"></el-option>                                                                                            
                            </el-select>
                          </el-form-item>
                          <el-form-item label="楼/科室" >
                            <el-input v-model="scope.row.Laboratory"></el-input>
                          </el-form-item>
                          <el-form-item label="电话" >
                            <el-input v-model="scope.row.phone"></el-input>
                          </el-form-item>
                          <el-form-item label="邮箱" >
                            <el-input v-model="scope.row.email"></el-input>
                          </el-form-item>
                          <el-form-item label="进度" >
                            <el-switch
                              v-model="scope.row.progress"
                              active-color="#13ce66"
                              inactive-color="#ff4949">
                            </el-switch>
                          </el-form-item>
                          <el-form-item label="服务项目" required>
                            <el-select v-model="scope.row.tag" placeholder="请选择服务项目" change="this.row.tag=this.value">
                              <el-option label="基因测序" value="基因测序"></el-option>
                              <el-option label="引物合成" value="引物合成"></el-option>                                                                                           
                            </el-select>
                          </el-form-item>
                          <el-form-item label="单价" >
                            <el-col :span=6>
                               <el-input v-model="scope.row.price" ></el-input>
                            </el-col>
                          </el-form-item>
                          <el-form-item label="订单数量" >
                            <el-col :span=6>
                              <el-input v-model="scope.row.orderNumber" ></el-input>
                            </el-col>                            
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" @click="submitForm('form')">确定修改</el-button>
                            <el-button @click="scope.row.popvisibal=false">取消</el-button>
                          </el-form-item>
                        </el-form>
                    </el-popover>
                    <el-button type="primary" icon="el-icon-edit" circle size="mini" v-popover:popover1 @click="scope.row.popvisibal=true"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle size="mini" @click.native.prevent="confirmTips(scope.$index, goodData)"></el-button>
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

      //日期选择器
      pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          },
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },

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
      //点击删除按钮删除表格对应行
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
    
      //删除信息
      confirmTips(index,rows){
        this.$confirm('此操作将永久删除该条信息，是否继续','警告！',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning',
        }).then(()=>{
          //在点击确定后调用deleteRow函数 删除对应行
          this.deleteRow(index, rows);
          this.$message({type:'success',message:'删除成功！'})
        }
          )
        .catch(()=>{
          this.$message({type:'info',message:'已取消删除'});
        });
      },

      //修改信息
      submitForm(){
        this.$confirm('此操作会永久修改给条信息，是否继续','提示',{
          confirmButtonText:'确定',
          cancelButtonText:'取消',
          type:'warning'
        }).then(()=>{
          this.$message({type:'success',message:'修改成功'});
        }).catch(()=>{
          this.$message({type:'info',message:'已取消修改'})
        });
      },
      //取消修改
      cancelForm(){
        console.log('quxiaoxiugai')
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
  .el-popover__title{
    border-bottom: 1px solid #ccc;
    color:#67C23A!important;
    padding-bottom: 5px;
  }
</style>
