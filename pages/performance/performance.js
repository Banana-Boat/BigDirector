const app = getApp()
Page({
    data: {
// <<<<<<< HEAD
//         tarbarSetting: {
//             textColor:'black',
//             tarbarColor:'white'
//           },
//           tarbarList: [{
//               icon: '/static/img/project.png',
//               iconSelected:'/static/img/project_selected.png',
//               router: '/pages/mine/mine',
//               tag: 'tarbar1'
//             },
//             {
//               icon: '/static/img/project.png',
//               iconSelected:'/static/img/project_selected.png',
//               router: '/pages/mine/project/project',
//               tag: 'tarbar2'
//             },
//             {
//               icon: '/static/img/project.png',
//               iconSelected:'/static/img/project_selected.png',
//               router: '/pages/mine/userInfoEdit/userInfoEdit',
//               tag: 'tarbar3'
//             },
//             {
//               icon: '/static/img/project.png',
//               iconSelected:'/static/img/project_selected.png',
//               router: '/pages/mine/userTicket/userTicket',
//               tag: 'tarbar4'
//             }
//           ],
//           modalSetting:{
//             showModal:false
//           },
//           alertType:'confirm',
//           alertSetting:{
//             showCancelIcon:false,
//           },
//           titleBgColor:'white',
//           loading:{
//             showLoading:true,
//             imgPath:'/static/img/head.png',
//             loadingText:'加载中...'
//           }
// =======
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
// >>>>>>> fd82bd9d913837a1cf9ea14dc454664332fa10e1
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