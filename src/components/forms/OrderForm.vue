<template>
  <div>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>{{cHeader}}</span>
        </div>
        <el-row type="flex" justify="center">
            <el-col :span="12">
                <div class="card-body">
                    <el-form :model="orderForm" ref="orderForm" label-width="120px">
                        <el-form-item label="订单日期">
                            <el-date-picker
                                v-model="orderForm.date"
                                align="right"
                                type="date"
                                placeholder="选择日期"
                                :picker-options="pickerOptions"
                                value-format="yyyy-MM-dd"
                            >
                            </el-date-picker>
                        </el-form-item>
                        <el-form-item label="客户姓名">
                            <el-input v-model="orderForm.name"></el-input>
                        </el-form-item>
                        <el-form-item label="学校/医院">
                            <el-autocomplete
                                class="inline-input"
                                :fetch-suggestions="querySearch"
                                placeholder="请输入内容"
                                @select="handleSelect"
                                v-model="orderForm.school"
                            >
                            </el-autocomplete>
                        </el-form-item>
                        <el-form-item label="实验室/科室">
                            <el-input v-model="orderForm.Laboratory"></el-input>
                        </el-form-item>
                        <el-form-item label="客户电话">
                            <el-input v-model="orderForm.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="客户邮箱">
                            <el-input v-model="orderForm.email"></el-input>
                        </el-form-item>
                        <el-form-item label="服务项目">
                            <el-select 
                            v-model="orderForm.tag"  
                            multiple
                            filterable
                            allow-create
                            default-first-option         
                            placeholder="请选择服务项目"
                            >
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item label="单价">
                            <el-input-number 
                                name="price" 
                                v-model="orderForm.price" 
                                controls-position="right" 
                                @change="handleChange1" 
                                :min="1" :max="50"
                                suffix-icon="el-icon-date"
                                lable="单价"
                            >
                            </el-input-number>
                        </el-form-item>
                        <el-form-item label="数量">
                            <el-input-number 
                                name="number" 
                                v-model="orderForm.number" 
                                controls-position="right" 
                                @change="handleChange2" 
                                :min="1" :max="50"
                                suffix-icon="el-icon-date"
                                lable="数量"
                            >
                            </el-input-number>
                        </el-form-item>
                        <el-form-item>
                            <el-button type="primary" @click="SubmitOrdForm">添加订单</el-button>
                            <el-button type="danger" @click="resetForm('orderForm')">取消</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    </el-card>   
  </div>
</template>

<script type="text/ecmascript-6">
export default {
    props:['cHeader'],
  data() {
    return {
        //学校/医院 建议选择项 对象数组
        school:[],
        //
        state:'',
        //订单form
        orderForm:{
            date:'',
            name:'',
            school:'',
            Laboratory:'',
            phone:'',
            email:'',
            tag:'',
            price:'',
            number:0
        },
        //订单表的空字段表 用来重置表单
        orderFormNew:{
            date:'',
            name:'',
            school:'',
            Laboratory:'',
            phone:'',
            email:'',
            tag:'',
            price:'',
            number:0
        },
        //日期选择器
        pickerOptions: {
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
        options: [{
            value: '基因测序',
            label: '基因测序'
            }, {
            value: '引物合成',
            label: '引物合成'
            }, {
            value: '试剂',
            label: '试剂'
            }]
        }
        
    },
  methods:{
      querySearch(queryString, cb) {
        var school = this.school;
        var results = queryString ? school.filter(this.createFilter(queryString)) : school;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (school) => {
          return school.value;
        };
      },
      loadAll() {
        return [
          { "value": "西安交大", "address": "陕西省西安市咸宁西路28号" },
          { "value": "陕师大", "address": "陕西省西安市长安区西长安街620号" },
          { "value": "西工大", "address": "西安市友谊西路127号" },
          { "value": "西京医院", "address": "陕西省西安市长乐西路15号" },
          { "value": "唐都医院", "address": "新城区长乐西路127号" },
          { "value": "交大一附院", "address": "西安市雁塔西路277号" },
        ];
      },
      handleSelect(item) {
        console.log(item);
      },
      handleChange1(value) {
        this.orderForm.price=value;
      },
      handleChange2(value) {
        this.orderForm.number=value;
      },
       SubmitOrdForm(){
          console.log('点击了提交按钮');
          setTimeout(() => {
              this.$notify({
                  title:'成功',
                  message:'添加订单信息成功！',
                  type:'success',
                  offset:100
              });
              this.resetForm();
          }, 1000);
      },
      resetForm(){
        console.log('点击了取消按钮');
        this.orderForm=Object.assign({},this.orderFormNew);
      },
  },
  components: {

  },
  mounted(){
    this.school=this.loadAll();
  }
}
</script>

<style>
.el-card__header {
    border-bottom: 1px dashed #ccc;
}
.box-card:hover .el-card__header{
    background:#336699;
    color:#ccc;
}
</style>

