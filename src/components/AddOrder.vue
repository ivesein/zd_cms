<template>
  <div>
      <ContentTitle cTitle="添加信息"></ContentTitle>
      <el-row :gutter="40">
          <el-col :span="12">
            <CustomerForm cHeader="添加客户信息"></CustomerForm>
          </el-col>
          <el-col :span="12">
            <OrderForm cHeader="添加订单信息"></OrderForm>
          </el-col>
      </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import ContentTitle from '@/components/common/content/ContentTitle'
import OrderForm from '@/components/forms/OrderForm'
import CustomerForm from '@/components/forms/CustomerForm'
export default {
  data() {
    return {
      
    }
  },
  methods:{
     
  },
  components: {
    ContentTitle,
    OrderForm,
    CustomerForm
  },
  mounted(){
   
  }
}
</script>

<style scoped>
</style>
