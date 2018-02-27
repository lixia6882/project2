// pages/preview/preview.js
Page({
  data: {
    pictureSrc: '',
    previewHide: false,
    date: '2016-11-08',
    time: '12:00',
    array: ['中国', '巴西', '日本', '美国'],
    index: 0
  },
  photographFn: function(){
    var that = this;

    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
        console.log(res);
        that.setData({
          pictureSrc: res.tempFilePaths[0]
        })
      }
    });
  },
  previewFn: function(){
    wx.previewImage({
      current: this.data.pictureSrc, // 当前显示图片的http链接
      urls: this.data.pictureSrc // 需要预览的图片http链接列表
    });

    this.setData({
      previewHide: true
    })
  },

  hideFn: function(){
    this.setData({
      previewHide: false
    })
  },
  // 点击时间组件确定事件 
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  }
 
})