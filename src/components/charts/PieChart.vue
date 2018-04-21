<template>
  <div id="pi-chart">

  </div>
</template>

<script type="text/ecmascript-6">
require('echarts/theme/macarons');
export default {
  data() {
    return {

    }
  },
  components: {

  },
  mounted(){
      this.drawChart();
  },
  methods:{
      drawChart(){
        let piChart=this.$echarts.init(document.getElementById('pi-chart'),'macarons');
        piChart.setOption(
                {            
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['四医大','陕师大','交大','交大医学院','西京医院','唐都医院','西工大','省疾控中心','其他']
                },
                series: [
                    {
                        name:'订单来源',
                        type:'pie',
                        selectedMode: 'single',
                        radius: [ 0, '50%'],

                        label: {
                            normal: {
                                position: 'inner'
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:335, name:'其它'},
                            {value:679, name:'引物'},
                            {value:1548, name:'测序', selected:true}
                        ]
                    },
                    {
                        name:'订单来源',
                        type:'pie',
                        radius: ['60%', '90%'],

                        data:[
                            {value:335, name:'四医大'},
                            {value:310, name:'陕师大'},
                            {value:234, name:'交大'},
                            {value:135, name:'交大医学院'},
                            {value:1048, name:'西京医院'},
                            {value:251, name:'唐都医院'},
                            {value:147, name:'西工大'},
                            {value:102, name:'省疾控中心'},
                            {value:33, name:'其他'}
                        ]
                    }
                ]
            }
        )
      }
  }
}
</script>

<style scoped>
#pi-chart{
    width: 100%;
    height:400px;
}
</style>
