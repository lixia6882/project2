//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  bindViewTap: function () {
    wx.navigateTo({
      url: '../do_mer_auth/do_mer_auth'
    })
  },
  bindViewTap1: function () {
    wx.navigateTo({
      url: '../do_mer_authlist/do_mer_authlist'
    })
  },
  callTap:function(){
    wx.makePhoneCall({
      phoneNumber:"400-112-5883"
    })
  },
  bindViewTaps: function () {
    wx.navigateTo({
      url: '../do_Us/do_Us'
    })
  },
  //安全退出
  quit:function(){
    wx.openBluetoothAdapter({
      success: function (res) {
        console.log(res)
      }
    })
  }
})
