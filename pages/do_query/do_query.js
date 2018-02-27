//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    name:"xinm",
    name_id:"",
    ishidden:false,
    showView:false,
    showViews:true,
    time:"00:00",
    times:"00:00",
    time_ms:"00:00",
    times_ms:"00:00",
    menus: [
      {
        "number":"12312",
        "number2":"21321321321321321",
        "name":"北京银行",
        "number3":"312412421421211212"
      },
      {
        "number": "1231231231",
        "number2": "21321321321321321",
        "name": "交通银行",
        "number3": "312412421421211212"
      },
      {
        "number": "2312312321",
        "number2": "21321321321321321",
        "name": "兴业银行",
        "number3": "312412421421211212"
      },
      {
        "number": "1231312321",
        "number2": "21321321321321321",
        "name": "招商银行",
        "number3": "312412421421211212"
      },
      {
        "number": "12312312321",
        "number2": "21321321321321321",
        "name": "建设银行",
        "number3": "312412421421211212"
      }
    ]
  },
  onLoad: function () {
    var that=this;
    wx.getStorage({
      key: 'name',
      success: function (res) {
        var names = res.data;
        console.log(res)
        that.setData({
         name:names
        })
      }
    });
    wx.getStorage({
      key: 'name_id',
      success: function (res) {
        var name_id = res.data;
        console.log(res)
        that.setData({
          name_id: name_id
        })
      }
    });
  },
  load:function(){
    wx.navigateTo({
      url: '../upload/upload'
    })
  },
  query_a:function(res){
    console.log(res.currentTarget.id);
    var id = res.currentTarget.id;
    this.setData({
      ishidden:false,
      showView:false,
      showViews:true
    })
  },
  query_b: function (res) {
    this.setData({
      ishidden: true,
      showView:true,
      showViews:false
      
    })
  },
  //时间
  bindTimeChange:function(res){
    console.log(res);
    this.setData({
      time: res.detail.value
    }) 
  },
  //时间
  bindTimeChanges: function (res) {
    console.log(res);
    this.setData({
      times: res.detail.value
    })
  },
  //时间
  bindTimeChange_ms: function (res) {
    console.log(res);
    this.setData({
      time_ms: res.detail.value
    })
  },
  //时间
  bindTimeChanges_ms: function (res) {
    console.log(res);
    this.setData({
      times_ms: res.detail.value
    })
  },
})