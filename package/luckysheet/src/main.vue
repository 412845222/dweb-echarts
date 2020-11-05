<template>
  <div id="luckysheet" class="luckysheet">
  </div>
</template>

<script>
  export default {
    name: 'luckysheet',
    props: ['width'],
    data() {
      return {
        total: 0,
        echarts_data: {
          xAxis: ['橘子', '苹果','梨'],
          yAxis: ['周一', '周二', '周三','周四','周五','周六','周日'],
          series: [{
            name: '橘子',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [320, 302, 301,209,399,102,144]
          },
          {
            name: '苹果',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [320, 302, 301,209,399,102,144]
          },
          {
            name: '梨',
            type: 'bar',
            stack: '总量',
            label: {
              show: true,
              position: 'insideRight'
            },
            data: [320, 302, 301,209,399,102,144]
          }
        ]
        }
      }
    },
    mounted() {
      // this.insertScriptTag();
      this.$nextTick(() => {
        // console.log(window.luckysheet)
        if (window.luckysheet) {
          let self = this
          var options = {
            container: 'luckysheet', //luckysheet is the container id
            title: 'Dweb数据可视化', // 设定表格名称
            lang: 'zh', // 设定表格语言
            showinfobar: false,
            showsheetbar: false,
            showtoolbar: false,
            showstatisticBar: false,
            showConfigWindowResize: false,

            column: 20,
            row: 50,
            hook: {
              cellRenderAfter: function (cell, postion, sheetFile, ctx) {
                // console.log(cell, postion, sheetFile, ctx);
                self.cellRenderAfter(cell, postion, sheetFile, ctx)
              },
            }
          }
          this.instance = window.luckysheet.create(options)
        }

      })
    },
    methods: {
      initData() {
        this.echarts_data.xAxis.forEach((obj, index) => {
          window.luckysheet.setCellValue(0, index + 1, obj)
          this.echarts_data.series.forEach((item) => {
            if (item.name == obj) {
              item.data.forEach((data, i) => {
                window.luckysheet.setCellValue(i + 1, index + 1, data)
              })
            }
          })
        })
        this.echarts_data.yAxis.forEach((obj, index) => {
          window.luckysheet.setCellValue(index + 1, 0, obj)
        })
      },
      cellRenderAfter(cell, ops) {
        // console.log(cell, ops)
        let checkData = window.luckysheet.getCellValue(0, 1)
        if (!checkData) {
          this.initData()
          return
        }
        //推入xAxios
        if (ops.r == 0 && ops.c > 0) {
          if (cell == null) {
            return
          }
          if (this.echarts_data.xAxis.indexOf(cell.v) == -1) {
            if (this.echarts_data.xAxis.length < ops.c) {
              this.echarts_data.xAxis.push(cell.v)
              let series_item = {
                name: cell.v,
                type: 'bar',
                stack: '总量',
                label: {
                  show: true,
                  position: 'insideRight'
                },
                data: []
              }
              this.echarts_data.series.push(series_item)
            } else {
              this.echarts_data.xAxis[ops.c - 1] = cell.v
              this.echarts_data.series[ops.c - 1].name = cell.v
            }

          }
        }
        //推入yAxis
        if (ops.r > 0) {
          if (cell == null) {
            return
          }
          if (ops.c == 0) {
            if (this.echarts_data.yAxis.indexOf(cell.v) == -1) {
              if (this.echarts_data.yAxis.length < ops.r) {
                this.echarts_data.yAxis.push(cell.v)
              } else {
                this.echarts_data.yAxis[ops.r - 1] = cell.v
              }
            }
          } else {
            let getCname = window.luckysheet.getCellValue(0, ops.c)
            if (getCname) {
              this.echarts_data.series.forEach((obj) => {
                if (obj.name == getCname) {
                  obj.data[ops.r - 1] = cell.v
                }
              })
            }

          }
        }
        // console.log(this.echarts_data)
        // this.$emit("changedata",this.echarts_data)
        this.$store.commit('changeEchartsOpthon',this.echarts_data)
        
      }
    },
  }
</script>