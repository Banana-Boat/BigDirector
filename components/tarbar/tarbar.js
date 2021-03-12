const app = getApp()
Component({
  options: {
      styleIsolation: 'apply-shared'
  },
  /*
    //调用组件时候的游标，决定哪个图标亮,选择当前的tag
    cursor:String 

    //textColor->文字的颜色
    textColor:'black',
    
    //图标选中时文字的颜色
    textColorSelected:'black',

    //tarbarColor->tarbar的背景颜色
    tarbarColor:'white'

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
    cursor:{
      type:String,
      value:''
    },
    
    textColor:{
      type:String,
      value:'gray'
    },

    textColorSelected:{
      type:String,
      value:'black'
    },
    tarbarColor:{
      type:String,
      value:'white'
    },
    tarbarList:{
      type:Array,
      value:[]
    }
  },
  observers:{
    '**':function(data){
      this.data = data
    }
  },
  data: {

  },
  lifetimes:{
    ready() {
    }
  },
  methods: {
    TarbarItemTap(e) {
      let cursor = e.currentTarget.dataset.tag
      this.setData({
        cursor: cursor
      })
      this.triggerEvent('cursor', cursor)
    }
  }
})