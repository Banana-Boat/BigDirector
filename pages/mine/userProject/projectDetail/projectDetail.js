const app = getApp()

Page({
    data: {

        componentHeight: 0,
        perfName: '计算机迎新晚会',
        pageCur: '人员',
        tarbarList: [{
                icon: '/static/img/project.png',
                iconSelected: '/static/img/project_selected.png',
                tag: '台本'
            },{
                icon: '/static/img/project.png',
                iconSelected: '/static/img/project_selected.png',
                tag: '人员'
            },{
                icon: '/static/img/project.png',
                iconSelected: '/static/img/project_selected.png',
                tag: '票务'
            }
        ]
    },
    PageCurChange(e) {
        this.setData({
            pageCur: e.detail
        })
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