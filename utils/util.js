function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()
  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}
function isLabel(){
  console.log("nihao")
}
// 去前后空格  
function trim(str) {
  return str.replace(/(^\s*)|(\s*$)/g, "");
}

// 提示错误信息  
function isError(msg, that) {
  that.setData({
    showView: true,
    views: msg
  })
  setTimeout(function () {
    that.setData({ showView: false })
  }.bind(that), 1000)
}
// 清空错误信息  
function clearError(that) {
  that.setData({
    showView: false,
    views: ""
  })
  setTimeout(function () {
    that.setData({ showView: false })
  }.bind(that), 1000)
} 
//手机号验证
function isPhone(str){
  var reg = /^1[3|4|5|7|8]\d{9}$/;
  return reg.test(str);
}
//密码验证
function isPwd(pwds){
  var pwd = /^[a-zA-Z0-9]{6,12}$/; 
  return pwd.test(pwds);
}
//显示遮罩层
function showMask(that) {
  setTimeout(function () {
    that.setData({ hideView: true });
    that.update();
  }.bind(that), 1000)  
}
//隐藏遮罩层
function hideMask(that) {
  setTimeout(function () {
    that.setData({ hideView: true })
  }.bind(that), 1000)
}
var API_URL = "http://localhost/project2/pages/data/json.json";
var requestHandler = {
  params: {},
  success: function (res) {
    // console.log(res);
  },
  fail: function () {
    //fail
  }
}
//Get请求
function GET(requestHandler){
  request("GET", requestHandler);
}
//POST请求
function POST(requestHandler) {
  request("POST", requestHandler);
}
function request(method,requestHandler){
  var params=requestHandler.params;
  wx.request({
    url:API_URL,
    data:params,
    method:method,
    success:function(res){
      requestHandler.success(res);
    },
    fail:function(){
      requestHandler.fail();
    },
    complete:function(){
      //complete
    }
  })
}
// 提示错误信息  
function isError_bug(msg, that) {
  that.setData({
    showView: true,
    views: msg
  })
  setTimeout(function () {
    that.setData({ showView: false })
  }.bind(that), 3000)
}


module.exports = {
  formatTime: formatTime,
  formatNumber: formatNumber,
  isLabel: isLabel,
  trim: trim,
  isError: isError,
  clearError: clearError,
  isPhone:isPhone,
  isPwd:isPwd,
  showMask:showMask,
  hideMask: hideMask,
  GET:GET,
  POST:POST,
  isError_bug:isError_bug
}
