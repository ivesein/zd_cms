<template>
  <div>
        <ContentTitle cTitle="概况总揽"></ContentTitle>
        <el-row :gutter="10">
          <el-col :xs="4" :sm="4" :md="12">
            <el-card class="el-card-body">
              <pie-chart></pie-chart>
            </el-card>
          </el-col>
          <el-col :xs="4" :sm="4" :md="12">
            <el-card class="el-card-body">
              <StackedAreaChart></StackedAreaChart>
            </el-card>
          </el-col>
        </el-row>
  </div>
</template>
<script type="text/ecmascript-6">
import ContentTitle from '@/components/common/content/ContentTitle'
import PieChart from '@/components/charts/PieChart'
import StackedAreaChart from '@/components/charts/StackedAreaChart'

export default {
  data() {
    return {
      
    }
  },
  components: {
    ContentTitle,
    PieChart,
    StackedAreaChart
  },
  
}
</script>

<style scoped>

/* .el-card-body{
    background: #303133;
} */
</style>
