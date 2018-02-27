//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    img:"",
    showView: false,
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  //拍照
  takePhoto:function(){
    var that=this;
    console.log("请拍照");
    wx.chooseImage({
      sizeType: ["original"],
      sourceType: ['camera'],
      success: function (res) {
       //显示图片
        var localIds = res.tempFilePaths;
       that.setData({
         img: localIds
       })
      }
    })
  },
  //预览
  look:function(){
    var that = this;
    console.log("预览");
    if (this.data.img==""){
      util.isError_bug("请拍照", that);
      return false
    }else{
      wx.previewImage({ 
        urls: this.data.img 
      })
    }
  },
  //上传
  uploading:function(){
    var that=this;
    if (this.data.img == ""){
      util.isError_bug("请拍照", that);
      return false;
    }else{
       wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    });
    }
  }
})