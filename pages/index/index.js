//index.js
var util = require('../../utils/util.js'); 
//获取应用实例
var app = getApp()
Page({
  data: {
    phone:"",
    pwd:"",
    showView:false,
    views:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../login/login'
    })
  },
  //获取输入账号
  phoneInput:function(e){
    this.setData({
      phone:e.detail.value
    })
  },
  //获取输入密码
  passInput:function(e){
     this.setData({
       pwd:e.detail.value
     })
  },
  //登录
  logIn:function(e){
    var phone = this.data.phone;
    var pwd=this.data.pwd;
    var that=this;
    console.log("nihao")
    if (phone==""){
      util.isError("请输入手机号码", that);
    } else if (!util.isPhone(phone)){
      util.isError("请输入正确手机号", that);
    }else if(pwd==""){
      util.isError("请输入手机密码", that);
    } else if (!util.isPwd(pwd)){
      util.isError("请输入正确密码", that);
    }else{
      wx.setStorageSync('phone', phone);
      wx.setStorageSync("pwd",pwd);
      /*wx.request({
        url: "http://localhost/project2/pages/data/json.json",
        header: {
          "content-type": "application/json"
        },
        success: function (res) {
          if (res.data.code=="200"){
            wx.switchTab({
              url: "../enter/enter"
            })
          }else{
            console.log("登录失败")
          }
          
        },
        fail: function () {

        }
      })*/
      wx.switchTab({
        url: "../enter/enter"
      });
    }
      
  },
  formSubmit: function (e) {
    //表单取值 
    console.log(e)
   var phone=e.detail.value.phone;
   var pwd=e.detail.value.pwd;
   console.log(phone,pwd);
   var that=this;
   //判断账号是否为空和判断账号是否格式正确
   if(""==util.trim(phone)){
     util.isError("账号不能为空",that);
   }
  },
  //忘记密码
  bindpass:function(){
     wx.navigateTo({
       url:"../do_find/do_find"
     })
  },
  onLoad: function (options) { 
    var that=this;
  }
})
