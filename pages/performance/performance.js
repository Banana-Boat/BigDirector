const app = getApp()
Page({
    data: {
        cardCur: 0,
        swiperList: [{
            id: 0,
            url: '/static/img/poster1.jpg'
          }, {
            id: 1,
            url: '/static/img/poster2.jpg',
          }, {
            id: 2,
            url: '/static/img/poster1.jpg'
          }, {
            id: 3,
            url: '/static/img/poster1.jpg'
          }, {
            id: 4,
            url: '/static/img/poster1.jpg'
          }, {
            id: 5,
            url: '/static/img/poster1.jpg'
          }],
    },
    onLoad: function (options) {

    },
    cardSwiper(e) {
        this.setData({
          cardCur: e.detail.current
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

    }
})