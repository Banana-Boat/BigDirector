//app.js

App({
  onLaunch: function () {
    let that = this
    wx.getSystemInfo({
      success: e => {
        // windowHeight不包括标题栏的高度！！
        that.globalData.windowHeight = e.windowHeight
        that.globalData.windowWidth = e.windowWidth
        that.globalData.statusBar = e.statusBarHeight
        let capsule = wx.getMenuButtonBoundingClientRect()
        if (capsule) {
          that.globalData.custom = capsule
          that.globalData.customBar = capsule.bottom + capsule.top - e.statusBarHeight
        } else {
          that.globalData.customBar = e.statusBarHeight + 50
        }
      }
    })
  },
  globalData: {
    windowHeight: 0,
    windowWidth: 0,
    statusBar: 0,
    customBar: 0,
    custom: null,
    authSetting: null,
    userLocation: null
  }
})