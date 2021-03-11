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
          ],
          modalSetting:{
            showModal:false
          },
          alertType:'confirm',
          alertSetting:{
            showCancelIcon:false,
          },
          titleBgColor:'white'
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

    },

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