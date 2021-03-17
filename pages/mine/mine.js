// pages/mine/mine.js\
const app = getApp()
import {
    UpdateUserInfo
} from '../../apis/userApi'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        isUserLogin: false,
        userInfo: null,
        alert: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            isUserLogin: app.globalData.isUserLogin,
            userInfo: app.globalData.userInfo,
            alert: {
                showModal: false,
                type: '',
                title: '',
                content: '',
                showCancelIcon: true
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
    UserLogin: function () {

        let _this = this
        wx.getUserProfile({
            desc: '我们将获取您的头像和昵称权限',
            success(res) {
                //注册用户，如果success,执行一下操作 1 ，否则执行 2
                let userInfo = {
                    avatar: res.userInfo.avatarUrl,
                    name: res.userInfo.nickName,
                    openID: app.globalData.openId
                }

                UpdateUserInfo(app.globalData.openId,userInfo).then((res) => {
                    if (res.data.error === 0) {
                        app.globalData.isUserLogin = true
                        app.globalData.userInfo = userInfo
                        _this.onLoad()
                    }
                    else{
                        _this.ShowRemindModal('登录服务出错,请重启小程序后重试')
                    }

                }, (err) => {
                    _this.ShowRemindModal(err)
                })
            },
            fail() {
                console.log(err)
            }
        })
    },

    /**
     * 跳转
     */
    SwitchToMyProject: function () {
        wx.navigateTo({
            url: '/pages/mine/userProject/userProject',
        })
    },

    /**
     * 显示提示框
     */
    ShowRemindModal:function(content){
        let _this = this
        _this.setData({
            alert: {
                showModal: true,
                type: 'remind',
                title: '提示',
                content: content,
                showCancelIcon: false
            }
        })
    }


})