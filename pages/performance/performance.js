import {PxToRpx, RpxToPx} from '../../utils/util'
const QQMapWX = require('../../utils/qqmap-wx-jssdk.min')
const qqmapsdk= new QQMapWX({
    key: 'RGRBZ-PO63J-DDSFV-FOZRH-QF7IF-XXBPZ'
})
const app = getApp()

Page({
    data: {
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
      that.GetTarbarHeight()
      that.GetLocation()
    },
    onReady: function () {
      
    },
    /* 提前确定自定义tarbar的高度 */
    GetTarbarHeight() {
      var query = wx.createSelectorQuery()
      query.select('#_tarbar').boundingClientRect(function (res) {
        app.globalData.tarbarHeight = res.height
      }).exec()
    },
    /* 根据定位获取大学 */
    GetUniversity(location) {
      let that = this
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
        },
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
    /* 获取用户定位 */
    GetLocation() {
      let that = this
      that.setData({
        location: '正在确定位置信息..'
      })
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
                    that.GetUniversity(location)
                    that.GetLocationInfo(location)
                  },
                  fail() {
                    that.setData({
                      location: '无法获取定位信息'
                    })
                  }
                })
              },
              fail() {
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
                that.GetUniversity(location)
                that.GetLocationInfo(location)
              },
              fail() {
                that.setData({
                  location: '无法获取定位信息'
                })
              }
            })
          }
        },
        fail() {
          that.setData({
            location: '无法获取定位信息'
          })
        }
      })
    },
    /* 点击位置栏事件 */
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
    SwiperItemChange(e) {
      this.setData({
        perfIndex: e.detail.current
      })
    },
    SwiperItemTap(e) {
      this.setData({
        perfIndex: e.currentTarget.dataset.index
      })
    },
    GrabTicket() {
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

    /*
    改变组件有两种方式，
    一种是向现在这样，
    利用组件中的observers数据监听器来改变数据;
    还有一种就是你为这个组件设置一个id
    通过seleceComponent函数获取组件
    通过对象调用组件中的数据和方法
    
    ！！！这里推荐第一种，偏向于VUE的方式调用组件，
    利用双向绑定数据实时控制组件的显示和数据改变
    */

    modalSetting:function (param) {  
      this.setData({
        'modalSetting.showModal':true,
        alertType:'confirm',
        titleBgColor:'green'
      })
    },


    ConfirmCustomEvent:function(){
      console.log('父组件执行了confirm后的自定义事件')
      setTimeout(function (param) {  
        console.log("测试同步异步")
      },10000)
      /*测试结果：异步，
      即父组件还未调用完成，子组件进行下一步操作，关闭了弹窗，
      故设置属性，alertSetting.hideConfirmModalAfterCustomEvent ，
      及调用自定义confirm事件后，是否等父组件完成函数调用再关闭modal框，
      默认true:父组件还没有执行完直接关闭,
      如果要手动关闭，就需手动HideModal函数关闭
       */
    }
})