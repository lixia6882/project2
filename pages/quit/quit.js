// pages/do_user/do_user.js
Page({
  /**页面的初始数据*/
  data: {
    status:"",//状态值
    msg:'',//消息
    msg1:'',
    sousuo:'',//搜索
    connectedDeviceId: '',//已连接设备uuid  
    devices:"",
    services: ''//连接设备的服务
  },

  /** 生命周期函数--监听页面加载  */
  onLoad: function () {
    if (wx.openBluetoothAdapter) {
      wx.openBluetoothAdapter()
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示  
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      });
    }

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
  //初始化蓝牙适配器
  lanya1:function(){
    var that=this;
    wx.openBluetoothAdapter({
      success: function(res) {
        that.setData({
          msg:"初始化蓝牙适配器成功！"
        });
      },
      fail:function(err){
        that.setData({
          msg: "初始化蓝牙适配器失败！"
        });
      }
    });
        //监听蓝牙适配器状态
        wx.onBluetoothAdapterStateChange(function(res){
         // console.log(res)
          that.setData({
            status: res.available ? "可用。" : "不可用。",
            sousuo: res.discovering ? "在搜索。" : "未搜索。", 
          });  
        });
  },
  //本机蓝牙适配器状态
  lanya2:function(){
    var that=this;
    wx.getBluetoothAdapterState({
      success:function(res){
        that.setData({
          msg:"本机蓝牙适配器状态ok!",
          sousuo: res.discovering ? "在搜索。" : "未搜索。", 
          status: res.available ? "可用。" : "不可用。"
        });
      }
    });
      //监听蓝牙适配器状态
      wx.onBluetoothAdapterStateChange(function (res) {
       // console.log(res)
        that.setData({
          status: res.available ? "可用。" : "不可用。",
          sousuo: res.discovering ? "在搜索。" : "未搜索。",
        });
      });
  },
  //搜索设备
  lanya3:function(){
    var that=this;
    wx.startBluetoothDevicesDiscovery({
        success:function(res){
          that.setData({
            msg:"搜索设备"
          });
        }
    });
      //监听蓝牙适配器状态
      wx.onBluetoothAdapterStateChange(function (res) {
       // console.log(res)
        that.setData({
          status: res.available ? "可用。" : "不可用。",
          sousuo: res.discovering ? "在搜索。" : "未搜索。",
        });
      });
  },
  //获取所有已发现的设备 
  lanya4:function(){
    var that = this;
    wx.getBluetoothDevices({
      success:function(res){
        console.log(res)
        //是否有已连接设备
        wx.getConnectedBluetoothDevices({
          success:function(res){
            //console.log(res.device)
            that.setData({
              connectedDeviceId: res.deviceId  
            });
          }
        });
          that.setData({
            msg:"搜索设备",
            devices:res.devices
          });
          //监听蓝牙适配器状态
          wx.onBluetoothAdapterStateChange(function (res) {
            //console.log(res)
            that.setData({
              status: res.available ? "可用。" : "不可用。",
              sousuo: res.discovering ? "在搜索。" : "未搜索。",
            });
          });
      }
    });
  },
  //停止搜索眼前的设备
  lanya5:function(){
    var that=this;
    wx.stopBluetoothDevicesDiscovery({
      success:function(res){
        that.setData({
          msg:'停止搜索周边设备',
          status: res.available ? "可用。" : "不可用。",
          sousuo: res.discovering ? "在搜索。" : "未搜索。"
        });
      },
    });
  },
  //连接设备
  connectTO:function(e){
    var that=this;
    wx.createBLEConnection({
      deviceId: e.currentTarget.id,
      success:function(res){
          console.log(res)
          that.setData({
            connectedDeviceId: e.currentTarget.id,
            msg:'已连接',
            msg1:''
          });
      },
      fail:function(){
        that.setData({
          msg: '连接失败'
        });
      },
      complete: function () {
        that.setData({
          msg: '调用结束'
        });
      }  
    });
  },
   // 获取连接设备的service服务 
   lanya6:function(){
     var that=this;
     wx.getBLEDeviceServices({
       deviceId: that.data.connectedDeviceId,
       success:function(res){
            that.setData({
              services:res.services,
              msg:JSON.stringify(res.services)
            });
       }
     });
   },
   //获取连接设备的所有特征值  for循环获取不到值 
   lanya7:function(){
     var that=this;
     wx.getBLEDeviceCharacteristics({
       deviceId: that.data.connectedDeviceId,
       serviceId:that.data.services[0].uuid,
       success:function(res){
            for(var i=0;i<res.characteristics.length;i++){
              if(res.characteristics[i].properties.notify){
                console.log("111111",that.data.services[0].uuid);
                console.log("22222",res.characteristics[i].uuid);
                that.setData({
                  notifyServicweId:that.data.services[0].uuid,
                  notifyCharacteristicsId:res.characteristics[i].uuid
                });
              }
              if (res.characteristics[i].properties.write) {
                that.setData({
                  writeServicweId: that.data.services[0].uuid,
                  writeCharacteristicsId: res.characteristics[i].uuid,
                });
              } else if (res.characteristics[i].properties.read){
                that.setData({
                  readServicweId: that.data.services[0].uuid,
                  readCharacteristicsId: res.characteristics[i].uuid,
                }) ;
              }
            }
       },
       fail: function () {
         console.log("fail");
       },
       complete: function () {
         console.log("complete");
       } 
     });

     wx.getBLEDeviceCharacteristics({
       // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取  
       deviceId: that.data.connectedDeviceId,
       // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取  
       serviceId: that.data.services[1].uuid,
       success: function (res) {
         for (var i = 0; i < res.characteristics.length; i++) {
           if (res.characteristics[i].properties.notify) {
             that.setData({
               notifyServicweId: that.data.services[1].uuid,
               notifyCharacteristicsId: res.characteristics[i].uuid,
             });
           }
           if (res.characteristics[i].properties.write) {
             that.setData({
               writeServicweId: that.data.services[1].uuid,
               writeCharacteristicsId: res.characteristics[i].uuid,
             });

           } else if (res.characteristics[i].properties.read) {
             that.setData({
               readServicweId: that.data.services[1].uuid,
               readCharacteristicsId: res.characteristics[i].uuid,
             });

           }
         }
         console.log('device getBLEDeviceCharacteristics1:', res.characteristics);

         that.setData({
           msg1: JSON.stringify(res.characteristics),
         });
       },
       fail: function () {
         console.log("fail1");
       },
       complete: function () {
         console.log("complete1");
       }
     });  
   }
 

});