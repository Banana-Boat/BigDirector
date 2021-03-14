//app.js

App({
  onLaunch: function () {
    let that = this

  /**
   * 
   * 获取系统信息
   */
    wx.getSystemInfo({
      success: e => {
        console.log(e)
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
    }),

    /**
     * mengxun
     * 获取用户信息
     * */
    wx.getSetting({
     success(res){
       //如果用户授权
       if(res.authSetting['scope.userInfo']){
         //获取用户信息
         wx.getUserInfo({
           success:function(res){
             console.log(res)
           }
         })
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
    userLocation: null,

    /**
     * mengxun
     */
    //用户是否给予授权头像和昵称信息
    isUserGrantAvatarAndNick:false,
    //查看用户是否登录
    isUserLogin:false
  }
})