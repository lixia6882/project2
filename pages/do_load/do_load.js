// pages/do_load/do_load.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    source:"../../images/loadMsgBg.png",
    showView: false,
    current:""

  },
  takePhotos:function(e){
    var that=this;
    var src ="../../images/loadMsgBg.png";
    //console.log(this.data.source)
    if (src === this.data.source){
      wx.chooseImage({
        count:1,  //选择图片的张数,默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function(res) {
          //返回选定照片的本地文件路径列表,tempFilePath可以作为img标签的src属性显示图片
          that.setData({
            source: res.tempFilePaths
          })
        }
      })
    }else{
      this.setData({
        showView:true,
        current: e.target.dataset.src
      })
    }
  },
  bindhide:function(e){
   this.setData({
     showView: false
   })
  },
  //预览
  readphoto:function(e){
    this.setData({
      showView: false
    })
    wx.previewImage({
      urls: this.data.source // 需要预览的图片http链接列表  
    }) 
  },
  //重新拍照
  back:function(){
    var that=this;
    this.setData({
      showView: false
    })
    wx.chooseImage({
      count: 1,  //选择图片的张数,默认9
      sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        console.log(res.tempFilePaths)
        //返回选定照片的本地文件路径列表,tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          source: res.tempFilePaths
        })
      }
    })
  },
  //取消
  cancel:function(){
    this.setData({
      showView: false
    })
  }

})