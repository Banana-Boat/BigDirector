//app.js
import {
  GetOpenId,
  GetUserInfo
} from './apis/userApi'


App({
  onLaunch: function () {
    var that = this

    /**
     * 
     * 获取系统信息
     */
    wx.getSystemInfo({
      success: e => {
        // windowHeight不包括标题栏的高度！！
        that.globalData.windowHeight = e.windowHeight
        that.globalData.windowWidth = e.windowWidth
        that.globalData.screenHeight = e.screenHeight
        console.log(e.screenHeight)
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


    /**
     * mengxun
     * 将openId存到globalData中
     */

    GetOpenId().then((res) => {
      if (res.data.error === 0) {
        const openId = res.data.data.openid
        that.globalData.openId = openId
        if (openId != null) {
            GetUserInfo(openId).then((res) => {
            if (res.data.error === 0) {
              //用户存在
              that.globalData.isUserLogin = true
              that.globalData.userInfo = res.data.data;
            }
          }, (err) => {
            console.log(err)
          })
        }

      }
    }, (err) => {
      console.log(err)
    })

  },


  globalData: {
    screenHeight: 0,
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
    openId: null,
    //查看用户是否登录(用户存在就登录，用户不存在就判定为没登录)
    isUserLogin: false,
    //用户信息
    userInfo: null,

  }
})