//app.js
import {
  GetOpenId
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

     this.SaveUserOpenId(that)

     const openId = that.globalData.openId

     /*如果openid不是null
     就通过openid获取userInfo
     */

     if(openId!=null){
       
     }


    
  },


  /**
   * mengxun
   * 获取openid
   * */

  // that.globalData.openId = that.$methods.getUserOpenId()

  /**
   * mengxun
   * 获取openid
   */
  SaveUserOpenId(that) {
     GetOpenId().then(function(openId){
       that.globalData.openId = openId
     });
  },

  /**
   * mengxun
   * 调用checkUserExist判断用户是否存在
   * 如果存在，调用getDataBaseUserInfo(openId)函数，
   * 反之，置为false ,isUserLogin = false 
   */
  CheckUserExist(openId) {
    return false
  },

  /**
   * mengxun
   * 获取数据库用户信息，将结果存在globalData的userInfo中,
   * isUserLogin = true
   */
  GetDataBaseUserInfo(openId) {

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
    openId: null,
    //查看用户是否登录(用户存在就登录，用户不存在就判定为没登录)
    isUserLogin: false,
    //用户信息
    userInfo: null
  }
})