// pages/solution/solution.js
Page({
  data: {

    show: ''
  },
  onLoad: function (options) {
    //var that=this
    this.setData({
      show: getApp().globalData.show
    })
  },

})