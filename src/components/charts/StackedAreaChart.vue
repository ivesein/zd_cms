<template>
  <div id="sa-chart">

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
          let oSaChart=document.getElementById('sa-chart');
        //   console.log(oSaChart);
          let saChart=this.$echarts.init(oSaChart,'macarons');
        //   console.log(saChart);
          saChart.setOption({
            title: {
                text: '区域销量图'
            },
            tooltip : {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    label: {
                        backgroundColor: '#6a7985'
                    }
                }
            },
            legend: {
                data:['引物','测序','试剂','设备','其它']
            },
            // toolbox: {
            //     feature: {
            //         saveAsImage: {}
            //     }
            // },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['四医大','陕师大','交大','交大医学院','西京医院','唐都医院','西工大','省疾控中心','其他']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'引物',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[120, 132, 101, 134, 90, 230, 210, 114, 45]
                },
                {
                    name:'测序',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[220, 182, 191, 234, 290, 330, 310, 148, 36]
                },
                {
                    name:'试剂',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[150, 232, 201, 154, 190, 330, 410, 157, 22]
                },
                {
                    name:'设备',
                    type:'line',
                    stack: '总量',
                    areaStyle: {normal: {}},
                    data:[320, 332, 301, 334, 390, 330, 320, 133, 14]
                },
                {
                    name:'其它',
                    type:'line',
                    stack: '总量',
                    label: {
                        normal: {
                            show: true,
                            position: 'top'
                        }
                    },
                    areaStyle: {normal: {}},
                    data:[820, 932, 901, 934, 1290, 1330, 1320, 445, 116]
                }
            ]
        });
      }
  }
}
</script>

<style scoped>
#sa-chart{
    width:100%;
    height:400px;
}
</style>
