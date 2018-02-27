//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    array: ['美国', '中国', '巴西', '日本'],
    index:0,
    Industry:""
  },
  onLoad: function () {
    var that=this;
   //请求接口
     wx.request({
      url: "http://localhost/project2/pages/data/data_data.json",
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        var obj = res.data;
        console.log(obj);
        that.setData({
          Industry: res.data
        })
      },
      fail: function () {
        console.log("请求失败");
      }
    })
  },
  bindPickerChange:function(e){
    this.setData({
      index: e.detail.value
    })

  }
})