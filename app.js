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
     * 获取openid
     * */
    function getOpenId(){
      return '124'
    }
  
    /**
     * mengxun
     * 调用checkUserExist判断用户是否存在
     * 如果存在，调用getDataBaseUserInfo(openId)函数，
     * 反之，置为false ,isUserLogin = false 
     */
    function checkUserExist(openId){
      return false
    }

    /**
     * mengxun
     * 获取数据库用户信息，将结果存在globalData的userInfo中,
     * isUserLogin = true
     */
    function getDataBaseUserInfo(openId){
      
    }


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
    //用户id
    openId:null,
    //查看用户是否登录(用户存在就登录，用户不存在就判定为没登录)
    isUserLogin:false,
    //用户信息
    userInfo:null
  }
})