// components/alert/remind/remind.js
Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    /*
    弹窗的类型
    可选值：remind confirm
    */
    type: {
      type: String,
      value: 'remind'
    },
    /*
    弹窗的显示与否
    可选值：true false
    */
    showModal: {
      type: Boolean,
      value: false
    },
    /*
    弹窗的设置，可以选自己想要的参数设置，没选就是默认
    */

    //标题字体的颜色
    titleColor: {
      type: String,
      value: "black"
    },
    //标题背景的颜色
    titleBgColor: {
      type:String,
      value:'white'
    },
    //是否显示取消图标
    showCancelIcon: {
      type:Boolean,
      value:true
    },
    //取消图标的颜色
    cancelIconColor: {
      type:String,
      value:'orange'
    },
    //内容的背景颜色
    contentBgColor: {
      type:String,
      value:''
    },
    //弹窗自动关闭的时间
    hideModalTime: {
      type:Number,
      value:1500
    },
    //confirm框确认部位背景颜色
    confirmBtnBgColor: {
      type:String,
      value:'white'
    },
    //confirm框确认按钮的颜色
    confirmBtnColor: {
      type:String,
      value:'orange'
    },
    //confirm框确认按钮字
    confirmBtnText:{
      type:String,
      value:'确认'
    },
    /*
    confirm框确认按钮位置
    可选值：left center end
    */
    confirmBtnPositon: {
      type:String,
      value:'end'
    },
    //按钮是否有自定义事件，没有默认确认后关闭弹窗
    confirmBtnCustomEvent: {
      type:Boolean,
      value:false
    },
    // 存在异步，父组件执行自定义confirm函数后是否直接关闭弹窗
    hideConfirmModalAfterCustomEvent: {
      type:Boolean,
      value:true
    },
    //弹窗的标题
    title: {
      type: String,
      value: "Alert"
    },
    //弹窗的内容
    content: {
      type: String,
      value: "Alert Content"
    }
  },

  /*
  数据监听器
  */

  observers:{
    '**':function(data){
      this.data = data
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showModal: false
  },

  //生命周期函数

  lifetimes: {
    ready: function (param) {
      let _this = this
      const hideModalTime = _this.properties.hideModalTime
      const modalType = _this.properties.type;
      //如果是提醒框,自动关闭
      if (modalType === 'remind') {
        setTimeout(function () {
          _this.HideModal()
        }, hideModalTime)
      }

    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //显示弹窗
    ShowModal: function (param) {
      let _this = this
      _this.setData({
        showModal: true
      })
    },

    //隐藏弹窗
    HideModal: function () {
      let _this = this
      _this.setData({
        showModal: false
      })
    },

    /*
    confirm框按钮绑定的自定义事件,
    */
    ConfirmCustomEvent: function () {
      const hideConfirmModalAfterCustomEvent = this.properties.alertSetting.hideConfirmModalAfterCustomEvent
      this.triggerEvent('ConfirmCustomEvent')
      if (hideConfirmModalAfterCustomEvent) {
        this.HideModal()
      }
    }
  }
})