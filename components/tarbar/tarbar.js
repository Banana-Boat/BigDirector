// components/tarbar/tarbar.js
Component({
  /**
   * 组件的属性列表
   */

  /*

  //调用组件时候的游标，决定哪个图标亮,选择当前的tag
  cursor:String 


  tarbarSetting: 
    {
      //textColor->文字的颜色
      textColor:'black',
      //tarbarColor->tarbar的背景颜色
      tarbarColor:'white'
    }

  tarbarList中的item:
    {
      //icon->图标，image文件
      icon: '', 
      //iconSelected->点击后的图标，image文件
      iconSelected:'',
      //router->路由，写绝对路径，或者相对于组件位置的路径
      router: '/pages/mine/mine',
      //tag->图标下面的文字
      tag: 'tarbar1'
    }
  */
  properties: {
    cursor:String,
    tarbarSetting: Object,
    tarbarList: Array
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    RouterSwitch: (event) => {
      const router = event.currentTarget.dataset.router;
      console.log()
      wx.redirectTo({
        url: router,
      });
    }

  }
})