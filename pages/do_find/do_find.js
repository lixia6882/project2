//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    showView: false,
    phone:""
  },
  showTitle:function(e){
    var phone = e.detail.value.phone;
    var that=this;
    if ("" == util.trim(phone)){
      util.isError("请输入手机号码", that);
    } else if (!util.isPhone(phone)){
      util.isError("请输入正确手机号", that);
    }else{
      util.GET({
        success:function(res){
          console.log(res.data)
          if (res.data.State==1){
             wx.showToast({
            icon:"loading",
            title: '加载数据',
            success:function(){
              wx.setStorageSync('phone', phone);
              wx.navigateTo({
                url: '../do_verify/do_verify'
              })
            }
          })
          }else{
            util.isError("没有该用户", that);
          }
         

        },
        fail:function(){
          wx.showToast({
            icon: "loading",
            title: '加载数据',
            success:function(){
              util.isError("请求数据失败", that);
            }
          })
        }
      })

    }    
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})