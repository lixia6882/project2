var wxCharts = require('../../utils/wxcharts.js');
var app = getApp();
var lineChart = null;
Page({
  data: {
  },
  touchHandler: function (e) {
    console.log(e);
    console.log(lineChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  },
  createSimulationData: function () {
    var categories = [];
    var data = [];
    for (var i = 0; i < 10; i++) {
      categories.push('2016-' + (i + 1));
      data.push(Math.random() * (20 - 10) + 10);
    }
    // data[4] = null;
    return {
      categories: categories,
      data: data
    }
  },
  //更新图表数据
  updateData: function () {
    var simulationData = this.createSimulationData();
    var series = [{
      name: '成交量1',
      data: simulationData.data,
      format: function (val, name) {
        return val.toFixed(2) + '万';
      }
    }];
    lineChart.updateData({
      categories: simulationData.categories,
      series: series
    });
  },
  onLoad: function (e) {
    //console.log(e);
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    var simulationData = this.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',//canvas-id
      width: windowWidth,//宽度
      height: 200,//高度
      background: '#f5f5f5',//背景颜色
      dataLabel: false,//数据内容值
      dataPointShape: true,//数据点图形标识
      type: 'line',//图表类型
      animation: true,//动画展示
      extra: {
        lineStyle: 'straight'//直线，curve曲线
      },
      categories:['1','2','3','4','5','6','7','8','9','10'],
      series: [{
        name: '成交量3',
        data:[20,12,13,18,14,10,20,16,14,10],
        type:'line',
        color:'#42c02e'
      }],
      xAxis: {
        disableGrid: true,
        fontColor:'#7cb5ec' 
      },
      
    });
    new wxCharts({
      animation:true,
      canvasId:'pieCanvas',
      type:'pie',
      series:[{
        name:' 成交量1',
        data:25
      },
      {
        name:'成交量2',
        data:25,
      },{
        name:'成交量3',
        data:68,
      }],
      width:320,
      height:170,
      dataLabel:false,
      legend:false
    });
  }
});