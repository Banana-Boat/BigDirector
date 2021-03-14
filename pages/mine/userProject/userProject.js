// pages/mine/userProject/userProject.js
const app = getApp()
import {PxToRpx}  from '../../../utils/util'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollViewHeight:0,
        projectList:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this
        _this.GetScrollViewHeight()
        _this.setData({
            projectList:[{
                id: 0,
                url: '/static/img/poster1.jpg',
                shortName: '20不惑',
                name: '通信·经济学院主题迎新晚会',
                during: '130分钟',
                type: '迎新晚会',
                date: '今天03月10日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
              }, {
                id: 1,
                url: '/static/img/poster2.jpg',
                shortName: '30而立',
                name: '外国语学院主题迎新晚会',
                during: '160分钟',
                type: '迎新晚会',
                date: '明天03月11日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }, {
                id: 2,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会21341247231647236147238612348217364',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }, {
                id: 3,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }, {
                id: 4,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              },
              {
                id: 0,
                url: '/static/img/poster1.jpg',
                shortName: '20不惑',
                name: '通信·经济学院主题迎新晚会',
                during: '130分钟',
                type: '迎新晚会',
                date: '今天03月10日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
              }, {
                id: 1,
                url: '/static/img/poster2.jpg',
                shortName: '30而立',
                name: '外国语学院主题迎新晚会',
                during: '160分钟',
                type: '迎新晚会',
                date: '明天03月11日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }, {
                id: 2,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }, {
                id: 3,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }, {
                id: 4,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              },
              {
                id: 0,
                url: '/static/img/poster1.jpg',
                shortName: '20不惑',
                name: '通信·经济学院主题迎新晚会',
                during: '130分钟',
                type: '迎新晚会',
                date: '今天03月10日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
              }, {
                id: 1,
                url: '/static/img/poster2.jpg',
                shortName: '30而立',
                name: '外国语学院主题迎新晚会',
                during: '160分钟',
                type: '迎新晚会',
                date: '明天03月11日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }, {
                id: 2,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }, {
                id: 3,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }, {
                id: 4,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              },
              {
                id: 0,
                url: '/static/img/poster1.jpg',
                shortName: '20不惑',
                name: '通信·经济学院主题迎新晚会',
                during: '130分钟',
                type: '迎新晚会',
                date: '今天03月10日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
              }, {
                id: 1,
                url: '/static/img/poster2.jpg',
                shortName: '30而立',
                name: '外国语学院主题迎新晚会',
                during: '160分钟',
                type: '迎新晚会',
                date: '明天03月11日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }, {
                id: 2,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }, {
                id: 3,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }, {
                id: 4,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
              }]
        })
    },
    EnterProject() {
      wx.navigateTo({
        url: '/pages/mine/userProject/projectDetail/projectDetail',
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
    *  获取scroll-view高度
    *  */
   GetScrollViewHeight:function(){
       let _this = this
       //获取projectbtn的高度
      var query = wx.createSelectorQuery()
      query.select("#create-project-btn").boundingClientRect(function(res){
          _this.setData({
              scrollViewHeight:PxToRpx(app.globalData.windowHeight - app.globalData.customBar - res.height)
          })
      }).exec()
   }
})