//index.js
var app = getApp()

Page({
  data: {
    show:"",
  },
  
  onLoad: function () {
    // console.log(show)

  },
  
  onClick:function(){
    var that = this;
    var show;
    wx.scanCode({
      success:(res)=>{
       show = res.result;
        that.setData({
         show:show
        })
      //console.log(show)
      app.globalData.show =show
      //console.log(app.globalData.show)
        wx.showToast({
          title:"成功",
          icon:'success',
          duration:2000
        })
        wx.navigateTo({
          url: '../solution/solution',
        })
      },
      fail:(res)=>{
        wx.showToast({
          title: "失败",
          icon:'loading',
          duration: 2000
        })
      
      },
      complete:(res)=>{

      }
    })
  },

})
