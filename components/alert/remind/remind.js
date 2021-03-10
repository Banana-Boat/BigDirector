// components/alert/remind/remind.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show:Boolean,
    title:String,
    content:String,
    bgColor:String,
    cancelIconColor:String,
    
  },

  /**
   * 组件的初始数据
   */
  data: {
    showRemindModal : false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    lifetimes:{
      created:function (param) { 
        this.showRemindModal = this.properties.show
      }
    },
    HideModal:function(){
      this.showRemindModal = false
    }
  }
})
