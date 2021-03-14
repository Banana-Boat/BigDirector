// pages/mine/mine.js\
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isUserLogin: false,
        userInfo: null,
        alert:{
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            isUserLogin: app.globalData.isUserLogin,
            userInfo : app.globalData.userInfo,
            alert:{
                showModal:false,
                type:'',
                title:'',
                content:'',
                showCancelIcon:true
            }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },


    /**
     * 用户登录
     */
    UserLogin:function(){
       
        let _this = this
        wx.getUserProfile({
          desc: '我们将获取您的头像和昵称权限',
          success:function(res){
            //注册用户，如果success,执行一下操作 1 ，否则执行 2

            // 1 将数据存到globalData
            app.globalData.isUserLogin = true
            app.globalData.userInfo = res.userInfo
            _this.onLoad()
            
            // 2 弹窗提示错误信息
            _this.setData({
               alert:{
                showModal:true,
                type:'remind',
                title:'提示',
                content:'--后端交互问题--',
                showCancelIcon:false
               }
            })
          },fail:function(err){
              console.log(err)
          }
        })
    }


})