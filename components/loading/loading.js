// components/loading/loading.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

    /*
    是否显示加载框
    可选值：true false
    */
    showLoading: {
      type: Boolean,
      value: true
    },


    /**
     *是否显示加载框中的文字
     默认不显示
     */
    showLoadingText:{
      type:Boolean,
      value:false
    },
    /*
    加載框中的文字
    */
    loadingText: {
      type: String,
      value: 'loading...'
    },

    /**
     * 加载文字的颜色
     * 默认为黑
     */
    loadingTextColor:{
      type:String,
      value:'black'
    },

    /*
    加载框的图标的文件路径,最好是绝对路径，如果是相对路径，填写相对于组件的路径
    默认是logo.png
    */
    imgPath: {
      type: String,
      value: '/static/img/logo.png'
    },

    /*
    加载框的默认关闭时间
    默认是10s，10s后自动关闭
    */
   hideDefaultTime: {
    type: Number,
    value: 10000
  }


  },

  /**
   * 数据监听器
   */

  observers: {
    '**': function (data) {
      this.data = data
    }
  },

  /**
   *生命周期函数
   */
  lifetimes: {
    ready: function () {
      let _this = this
      const hideDefalultTime = _this.properties.hideDefaultTime
      setTimeout(function () {
        _this.hideLoading();
      },hideDefalultTime)
    }
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {
    showLoading: function () {
      this.setData({
        showLoading: true
      })
    },
    hideLoading: function () {
      this.setData({
        showLoading: false
      })
    }
  }
})