//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    navbar: ['护肤', '彩妆', '香水', '个人护理'],
    currentTab: 0,
    imgUrls: [
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161219\/148211980641.png',
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161222\/148238831285.png',
      'http:\/\/mz.djmall.xmisp.cn\/files\/banner\/20161222\/14823895573.png'
    ],
    newgoods_head_url: "http://mz.djmall.xmisp.cn/files/banner/20161202/148066062976.jpg",
    indicatorDots: true, //是否显示面板指示点
    autoplay: true, //是否自动切换
    interval: 3000,//自动切换时间间隔,3s
    navItems: [
      {
        typeId: 0,
        name: '品牌馆',
        url: 'bill',
        imageurl: '',
      },
      {
        typeId: 1,
        name: '类目',
        url: 'bill',
        imageurl: '',
      },
      {
        typeId: 2,
        name: '特惠专场',
        url: 'bill',
        imageurl: ''
      },
      {
        typeId: 3,
        name: '推荐好友',
        url: 'bill',
        imageurl: ''
      }
    ],
    // 新品上架
    goodsItems: [
      {
        goodId: 0,
        name: '兰蔻小黑瓶',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057921620.jpg',
        newprice: "￥200.00",
        oldprice: "￥300.00",
      },
      {
        goodId: 1,
        name: '兰蔻清莹柔肤爽肤水',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
        newprice: "￥120.00",
        oldprice: "￥200.00",
      },
      {
        goodId: 2,
        name: '倩碧水嫩保湿精华面霜',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058228431.jpg',
        newprice: "￥320.00",
        oldprice: "￥400.00",
      },
      {
        goodId: 3,
        name: '特效润肤露',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      },
      {
        goodId: 4,
        name: '倩碧焕妍活力精华露',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058301941.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      }, {
        goodId: 5,
        name: '日本资生堂洗颜',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058328876.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      }
    ],
    recommends: [
      {
        goodId: 7,
        name: 'OLAY玉兰油精油沐浴露玫瑰滋养二合一450ml',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161213/148162245074.jpg',
        newprice: "￥36.60",
        oldprice: "￥40.00",
      },
      {
        goodId: 10,
        name: '兰蔻玫瑰清滢保湿柔肤水嫩肤水化妆水400ml补水保湿温和不刺激',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057937593.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      }, {
        goodId: 11,
        name: 'Lancome/兰蔻清莹柔肤爽肤水/粉水400ml补水保湿玫瑰水化妆水',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148057953326.jpg',
        newprice: "￥30.00",
        oldprice: "￥80.00",
      },
      {
        goodId: 12,
        name: '美国CLINIQUE倩碧黄油无油/特效润肤露125ml',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/14805828016.jpg',
        newprice: "￥239.00",
        oldprice: "￥320.00",
      },
      {
        goodId: 13,
        name: '法国LANCOME兰蔻柔皙轻透隔离防晒乳霜50ML2017年3月到期',
        url: 'bill',
        imageurl: 'http://mz.djmall.xmisp.cn/files/product/20161201/148058014894.jpg',
        newprice: "￥130.00",
        oldprice: "￥180.00",
      }
    ]
  },
  onLoad: function () {
  
  },
  navbarTap:function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    });
  }
})