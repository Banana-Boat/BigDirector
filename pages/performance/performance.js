// pages/performance/performance.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tarbarSetting: {
            textColor:'black',
            tarbarColor:'white'
          },
          tarbarList: [{
              icon: '/static/img/project.png',
              iconSelected:'/static/img/project_selected.png',
              router: '/pages/mine/mine',
              tag: 'tarbar1'
            },
            {
              icon: '/static/img/project.png',
              iconSelected:'/static/img/project_selected.png',
              router: '/pages/mine/project/project',
              tag: 'tarbar2'
            },
            {
              icon: '/static/img/project.png',
              iconSelected:'/static/img/project_selected.png',
              router: '/pages/mine/userInfoEdit/userInfoEdit',
              tag: 'tarbar3'
            },
            {
              icon: '/static/img/project.png',
              iconSelected:'/static/img/project_selected.png',
              router: '/pages/mine/userTicket/userTicket',
              tag: 'tarbar4'
            }
          ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
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

    }
})