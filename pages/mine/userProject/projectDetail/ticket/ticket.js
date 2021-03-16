// pages/mine/userProject/project/ticket/ticket.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
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
    },

    /**
     * 组件的方法列表
     */
    methods: {
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
    }
})
