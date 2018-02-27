// pages/do_user/do_user.js
var util = require('../../utils/util.js');
var Charts=require('../../utils/wxcharts.js');
Page({
  /**页面的初始数据*/
  data: {
    time:["今日","昨日","7日","30日"],
    times:[
      {
        number:71,
        text:'新用户数'},
      {
        number:116,
        text:'访问人数'
      },
      {
        number:'297',
        text:'打开次数'
      },
      {
        number:'894',
        text:'访问次数'
      }
    ],
    currentTab:0,
    currentTabs:0
  },

  /** 生命周期函数--监听页面加载  */
  onLoad: function () {
    var windowWidth = wx.getSystemInfoSync().windowWidth;
    var that=this;
    that.chart("pieCanvas","area",windowWidth);
    that.chart("pieCanvas_1","line",windowWidth);
    that.chart("pieCanvas_2", "column", windowWidth);
    that.charts("pieCanvas_3", windowWidth);
  },
  navbarTap:function(e){
    console.log(e.currentTarget.dataset.idx)
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    });
  },
  navbarTaps:function(e){
    this.setData({
      currentTabs: e.currentTarget.dataset.idx
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
   
  },
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  chart: function (name,types,windowWidth){
    new Charts({
      canvasId: name,
      animation: true,
      type: types,
      categories: ['2012', '2013', '2014', '2015', '2016', '2017'],
      series: [
        {
          name: '新用户数',
          data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8]

        }
      ],
      yAxis: {
        gridColor: "#cccccc",

      },
      xAxis: {
        gridColor: '#ffffff'
      },
      extra: {
        lineStyle: 'solid'

      },
      width: windowWidth - 20,
      height: 220,
      dataLabel: false,
    });
  },
  charts: function (name,windowWidth){
    new Charts({
      animation: true, //是否有动画
      canvasId: name,
      type: 'pie',
      series: [{
        name: '成交量1',
        data: 15,
      }, {
        name: '成交量2',
        data: 35,
      }, {
        name: '成交量3',
        data: 78,
      }],
      width: windowWidth-20,
      height: 200,
      dataLabel: true,
    });
  }
})