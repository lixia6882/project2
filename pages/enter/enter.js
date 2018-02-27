//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    Industry:[],
    open:false,
    id:"",
    isShow:false,
    text:[],
    postid:"",
    Industry: {
      "list0": {
        "merid": "姓名1",
        "id": "post1",
        "list": [
          {
            "phone": "1231232131"
          },
          {
            "phone": "2131212332423423"
          },
          {
            "phone": "432432423423"
          },
          {
            "phone": "1231232131"
          },
          {
            "phone": "2131212332423423"
          },
          {
            "phone": "432432423423"
          },
          {
            "phone": "1231232131"
          },
          {
            "phone": "2131212332423423"
          },
          {
            "phone": "432432423423"
          },
          {
            "phone": "1231232131"
          },
          {
            "phone": "2131212332423423"
          },
          {
            "phone": "432432423423"
          }
        ]
      },
      "list1": {
        "merid": "姓名2",
        "id": "post2",
        "list": [
          {
            "phone": "1231232131"
          },
          {
            "phone": "432gdg23423"
          },
          {
            "phone": "432432423423"
          },
          {
            "phone": "432432423423"
          }
        ]
      },
      "list2": {
        "merid": "姓名3",
        "id": "post3",
        "list": [
          {
            "phone": "1231232131"
          },
          {
            "phone": "43243werwerw3423"
          },
          {
            "phone": "432432423423"
          }
        ]
      },
      "list3": {
        "merid": "姓名4",
        "id": "post4",
        "list": [
          {
            "phone": "1231232131"
          },
          {
            "phone": "43werwew3423"
          },
          {
            "phone": "432432423423"
          }
        ]
      },
      "list4": {
        "merid": "姓名5",
        "id": "post5",
        "list": [
          {
            "phone": "1231232131"
          },
          {
            "phone": "43243wer3423"
          },
          {
            "phone": "432432423423"
          }
        ]
      },
      "list5": {
        "merid": "姓名6",
        "id": "post6",
        "list": [
          {
            "phone": "1231232131"
          },
          {
            "phone": "432432423423"
          },
          {
            "phone": "432432423423"
          }
        ]
      },
      "list6": {
        "merid": "姓名7",
        "id": "post7",
        "list": [
          {
            "phone": "1231232131"
          },
          {
            "phone": "432432423423"
          },
          {
            "phone": "432432423423"
          }
        ]
      },
      "list7": {
        "merid": "姓名8",
        "id": "post8",
        "list": [
          {
            "phone": "1231232131"
          },
          {
            "phone": "432432423423"
          },
          {
            "phone": "432432423423"
          }
        ]
      }
    }
  },
  onLoad: function () {
    var phone = wx.getStorageSync('phone');
    var pwd = wx.getStorageSync("pwd");
    var that=this;
    //请求数据
   /* wx.request({
      url: "http://localhost/project2/pages/data/data.json",
      header: {
        "content-type": "application/json"
      },
      success: function (res) {
        var obj = res.data;
        that.setData({
          Industry: res.data.a
        })
      },
      fail: function () {
        console.log("请求失败");
      }
    })*/
  },
  widgetsToggle:function(e){
    var that=this;
    var list=this.data.Industry;
    var id = e.currentTarget.id; 
    var postid=e.currentTarget.dataset.postid;//商务名
    that.setData({
      openId:id,
      isShow:!this.data.isShow,
      postid: postid
    })
    
  },
  changpage:function(e){
    var name = this.data.postid;//商务名
    var name_id = e.currentTarget.dataset.text;//终端号
     console.log(name,name_id);
     wx.setStorage({
       key: 'name',
       data: name
     });
     wx.setStorage({
       key: 'name_id',
       data: name_id
     });
     wx.navigateTo({
       url: '../do_query/do_query'
     });
  }
})
