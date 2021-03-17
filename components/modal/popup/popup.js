// components/modal/popup/popup.js
import {PxToRpx} from '../../../utils/util'
Component({
  options:{
    multipleSlots:true,
    styleIsolation:'apply-shared'
  },


  /**
   * 组件的属性列表
   */
  properties: {


    /**
     * 是否显示弹窗
     */
    showPopupModal:{
      type:Boolean,
      value:false
    },
    /**
     * 弹窗z-index 默认1110
     */
    zIndex:{
      type:Number,
      value:1110
    },

    /**
     * 弹窗的高度
     * 单位 rpx 
     * 类型 Number
     */
    popupModalHeight:{
      type:Number,
      value:0
    },
    /**
     * 弹窗的标题
     */
    popupTitleText:{
      type:String,
      value:'Title'
    },
    /**
     * 弹窗标题的颜色
     * 默认为black
     */
    popupTitleColor:{
      type:String,
      value:'black'
    },
    /**
     * 弹窗标题的位置
     * start center end,默认居中
     */
    popupTitlePos:{
      type:String,
      value:'center'
    },

    /**
     * 自定义数值
     * 想要自定义数据传进来，这种数据为0的时候对组件没影响
     * 默认为0
     */
    confirmBtnHeight:{
      type:Number,
      value:0
    }

  },

  lifetimes:{
    ready(){
      new Promise((resolve,reject)=>{
        wx.createSelectorQuery().in(this).select("#cu-bar-title").boundingClientRect(function(res){
          resolve(res.height)
        }).exec()
      }).then((res,err)=>{
        this.setData({
          curBarTitleHeight:PxToRpx(res)
        })
      })
    }
  },


  /**
   * 组件的初始数据
   */
  data: {
    curBarTitleHeight:0
  },

  /**
   * 数据监听器
   */
  observers:{
    '**':function(data){
      this.data = data
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     *打开弹窗
     */
    ShowModal:function(){
      this.setData({
        showPopupModal:true
      })
    },
    /**
     * 关闭弹窗
     */
    HideModal:function(){
      this.setData({
        showPopupModal:false
      })
    }
  }
})
