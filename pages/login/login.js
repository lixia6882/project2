//logs.js
var util = require('../../utils/util.js');
//获取应用实例
var app = getApp();
Page({
  data: {
    phone: "",
    showView: false,
    views: "",
    checked:false,
    hideView: false,
    imagesurl:"../../images/zhu1.png"
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  deal: function () {
    wx.navigateTo({
      url: '../do_user/do_user'
    })
  },
  changimg:function(e){
    console.log(this.data.imagesurl);
  },
  checkedd:function(e){
    var that = this;
    that.setData({
      checked: (!that.data.checked)
    })
  },
  formSubmit:function(e){
    var phone = e.detail.value.phone;
    //判断账号是否为空和判断账号是否格式正确
    var that=this;
     console.log(e)
    if ("" == util.trim(phone)) {
      util.isError("请输入手机号码", that);
    } else if (!util.isPhone(phone)){
      util.isError("请输入正确手机号", that);
    }else{
       wx.request({
         url:"http://localhost/project2/pages/data/json.json",
         header:{
           "content-type":"application/json"
         },
         success:function(res){
           wx.showToast({
             title: 'loading',
             icon: 'loading',
             duration: 13000,
             success:function(){
              
             }
           });
            wx.navigateTo({
                 url: '../do_ver/do_ver'
               });
         },
         fail:function(){
      
         }
       })
    }
    
  }
})
