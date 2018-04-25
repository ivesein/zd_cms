<template>
  <div>
      <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>添加客户信息</span>
        </div>
        <el-row type="flex" justify="center">
            <el-col :span="12">
            <div class="card-body">
            <el-form  :model="customerForm" ref="customerForm" label-width="120px">
                <el-form-item label="客户姓名">
                <el-input v-model="customerForm.name" name="name"></el-input>
                </el-form-item>
                <el-form-item label="所属院校/医院">
                <el-autocomplete
                    class="inline-input"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    @select="handleSelect"
                    v-model="customerForm.school"
                >
                </el-autocomplete>
                </el-form-item>
                <el-form-item label="实验室/科室">
                <el-input v-model="customerForm.Laboratory" name="Laboratory"></el-input>
                </el-form-item>
                <el-form-item label="老板">
                <el-input v-model="customerForm.leaderName" name="leaderName"></el-input>
                </el-form-item>
                <el-form-item label="客户电话">
                <el-input v-model="customerForm.phone" name="phone"></el-input>
                </el-form-item>
                <el-form-item label="客户邮箱">
                <el-input v-model="customerForm.email" name="email"></el-input>
                </el-form-item>
                <el-form-item label="地址" >
                <el-input name="address" v-model="customerForm.address"></el-input>
                </el-form-item>
                <el-form-item label="测序价格">
                <el-input-number 
                    name="sequencePrice" 
                    v-model="customerForm.sequencePrice" 
                    controls-position="right" 
                    @change="handleChange1" 
                    :min="1" :max="50"
                    suffix-icon="el-icon-date"
                    lable="测序价格"
                >
                </el-input-number>
                </el-form-item>
                <el-form-item label="引物价格">
                <el-input-number 
                    name="primerPrice" 
                    v-model="customerForm.primerPrice" 
                    controls-position="right" 
                    @change="handleChange2" 
                    :min="0" :max="50"
                    lable="引物价格"
                    :step='.1'
                >
                </el-input-number>
                </el-form-item>
                <el-form-item>
                <el-button type="primary" @click="SubmitCusForm">添加客户</el-button>
                <el-button type="danger" @click="resetForm('customerForm')">取消</el-button>
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
      //客户信息form
      customerForm:{
        name:'',
        school:this.state,
        Laboratory:'',
        leaderName:'',
        phone:'',
        email:'',
        address:'',
        sequencePrice:16,
        primerPrice:1.2
      },
      //客户信息表的空字段表 用来重置表单
      customerFormNew:{
        name:'',
        school:this.state,
        Laboratory:'',
        leaderName:'',
        phone:'',
        email:'',
        address:'',
        sequencePrice:16,
        primerPrice:1.2
      },
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
        if(item){this.customerForm.address=item.address;}else{this.customerForm.address='';}
      },
      handleChange1(value) {
        this.customerForm.sequencePrice=value;
      },
      handleChange2(value) {
        this.customerForm.primerPrice=value;
      },
      SubmitCusForm(){
        setTimeout(()=>{
          this.$notify({
          title: '成功',
          message: '添加客户信息成功',
          type: 'success',
          offset:100
          });
          this.resetForm();
          },1000)       
        console.log('提交客户表单');
      },
      resetForm(formName) {
        console.log(formName,this.$refs[formName]);
        // this.$refs['formName'].resetFields(); //不知道为什么 element UI的表单重置不管用
        //定义一个和customerForm内容完全一样的对象 字段为初始值 用Object.assign()来重置
        this.customerForm=Object.assign({},this.customerFormNew);
      }
  },
  components: {
  },
  mounted(){
    this.school=this.loadAll();
  }
}
</script>

<style scoped>
.el-card__header{
    border-bottom: 1px dashed #ccc;
}
</style>
