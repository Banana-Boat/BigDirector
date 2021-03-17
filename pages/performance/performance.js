import {PxToRpx, RpxToPx} from '../../utils/util'
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min')
const qqmapsdk= new QQMapWX({
    key: 'RGRBZ-PO63J-DDSFV-FOZRH-QF7IF-XXBPZ'
})
const app = getApp()

Page({
    data: {
      isShowLoading: false,
      scroll: {
        refresh: {
          type: 'default',
          style: 'black',
          background: {
            color: "#f2f2f2"
          },
          shake:true
        }
      },
      swiperLeft: app.globalData.windowWidth / 2 - RpxToPx(103 + 10, app.globalData.windowWidth),
      location: '',
      university: '',
      universityList: [],
      isShowPicker: false,
      isShowLocationModal: false,
      perfIndex: 0,
      perfList: [{
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
    },
    onLoad: function (options) {
      let that = this
      that.setData({isShowLoading: true})
      // 通过页面伪类确定scroll-view高度
      that.GetTarbarHeight().then(res => {
        app.globalData.tarbarHeight = res
        that.setData({
          scrollViewHeight: PxToRpx(app.globalData.screenHeight - app.globalData.customBar - res) - 70
        })
      })
      // 通过大学名称请求列表
      that.GetLocation().then(() => {
        that.setData({isShowLoading: false})
      })
    },
    onReady: function () {
    },
    /* 下拉刷新事件 */
    Refresh: function () {
      let that = this
      let scroll = that.data.scroll
      setTimeout(() => {
      that.setData({
          scroll: scroll
      });
      that.selectComponent("#bd-scroll").loadEnd()
      }, 300);
    },
    /* 获取用户定位并获取城市、周围大学列表 */
    GetLocation() {
      let that = this
      that.setData({
        location: '正在确定位置信息..'
      })
      return new Promise((resolve, reject) => {
        wx.getSetting({
          withSubscriptions: true,
          success(res) {
            app.globalData.authSetting = res.authSetting
            if (!res.authSetting["scope.userLocation"]) {
              wx.authorize({
                scope: 'scope.userLocation',
                success() {
                  wx.getLocation({
                    type: 'wgs84',
                    isHighAccuracy: true,
                    highAccuracyExpireTime: 5000,
                    success(res) {
                      let location = {
                        latitude: res.latitude,
                        longitude: res.longitude
                      }
                      app.globalData.userLocation = location
                      that.GetUniversity(location).then(() => {
                        resolve()
                      })
                      that.GetLocationInfo(location)
                    },
                    fail() {
                      reject()
                      that.setData({
                        location: '无法获取定位信息'
                      })
                    }
                  })
                },
                fail() {
                  reject()
                  that.setData({
                    location: '无法获取定位信息',
                    isShowLocationModal: true
                  })
                  console.log('请在设置中手动开启定位')
                }
              })
            } else {
              wx.getLocation({
                type: 'wgs84',
                isHighAccuracy: true,
                highAccuracyExpireTime: 5000,
                success(res) {
                  let location = {
                    latitude: res.latitude,
                    longitude: res.longitude
                  }
                  app.globalData.userLocation = location
                  that.GetUniversity(location).then(() => {
                    resolve()
                  })
                  that.GetLocationInfo(location)
                },
                fail() {
                  reject()
                  that.setData({
                    location: '无法获取定位信息'
                  })
                }
              })
            }
          },
          fail() {
            reject()
            that.setData({
              location: '无法获取定位信息'
            })
          }
        })
      })
    },
    /* 根据定位获取大学 */
    GetUniversity(location) {
      let that = this
      return new Promise((resolve, reject) => {
        qqmapsdk.search({
          keyword: '大学',
          location: location,
          page_size: 20,
          success(res) {
            let universityList = []
            res.data.forEach(item => {
              universityList.push(item.title)
            })
            that.setData({
              university: res.data[0].title,
              universityList: [universityList]
            })
            resolve()
          },
        })
      })
    },
    /* 根据定位获取城市信息 */
    GetLocationInfo(location) {
      let that = this
      qqmapsdk.reverseGeocoder({
        location: location,
        success(res) {
          that.setData({
            location: res.result.address_component.city
          })
        },
        fail() {
          that.setData({
            location: '无法获取定位信息'
          })
        }
      })
    },
    /* 位置栏点击事件 */
    TapLocationBar() {
      if (this.data.location == '无法获取定位信息') {
        this.GetLocation()
      } else {
        this.setData({isShowPicker: true}) 
      }
    },
    /* 选择大学Picker回调 */
    PickerSure(res) {
      console.log(res)
      this.setData({
        isShowPicker: false,
        university: res.detail.choosedData[0]
      })
    },
    /* 选择大学Picker回调 */
    PickerCancel() {
      this.setData({isShowPicker: false})
    },
    /* 海报切换事件 */
    SwiperItemChange(e) {
      this.setData({
        perfIndex: e.detail.current
      })
    },
    /* 海报图点击事件 */
    SwiperItemTap(e) {
      this.setData({
        perfIndex: e.currentTarget.dataset.index
      })
    },
    /* 抢票页面跳转 */
    GrabTicket() {
      wx.navigateTo({
        url: '/pages/mine/userProject/projectDetail/controlPanel/staffManage/staffManage',
      })
    },
    /* 通过页面伪类提前确定自定义tarbar的高度 */
    GetTarbarHeight() {
      return new Promise(function(resolve,reject){
        var query = wx.createSelectorQuery()
        query.select('#_tarbar').boundingClientRect(res => {
          resolve(res.height)
        }).exec()
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