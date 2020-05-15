// pages/partProcedure/partProcedure.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        procList: [
            {
                name: '主持人报幕',
                type: 'person',
                action: 'up',
                list: [
                    '主持人'
                ]
            },
            {
                name: "道具上",
                type: "prop",
            },
            {
                name: "演员上",
                type: "person",
            },
            {
                name: "舞台元素改变",
                type: "stage",
            },
            {
                name: "演员下",
                type: "person",
            },
            {
                name: "道具下",
                type: "prop",
            },
            {
                name: "舞台元素改变",
                type: "stage",
            },
            {
                name: "演员上",
                type: "person",
            },
            {
                name: "舞台元素改变",
                type: "stage",
            },
            {
                name: "演员下",
                type: "person",
            },
            {
                name: "道具下",
                type: "prop",
            },
            {
                name: "舞台元素改变",
                type: "stage",
            },
            {
                name: "演员下",
                type: "person",
            },
            {
                name: "道具下",
                type: "prop",
            },
            {
                name: "舞台元素改变",
                type: "stage",
            }
        ],
        partName: '节目1',
        windowHeight: app.globalData.windowHeight,      //设备屏幕高度
        customBarHeight: app.globalData.CustomBar,      //标题栏高度
        animationHasShow: false,        //列表项动画是否已展示
        isShowBox: false,
    },

    onLoad: function (options) {
        var page = this;
        page.changeAnimationClass();
    },
    /* 切换显示 */
    displayShowBox() {
        this.setData({
            isShowBox: true
        })
    },
    backToOperBox(){
        this.setData({
            isShowBox: false
        })
    },
    /* 列表项动画若已展示，需删去animation-slide-bottom类 */
    changeAnimationClass() {
        var page = this
        setTimeout(function () {
            page.setData({
                animationHasShow: true
            })
        }, page.data.procList.length * 0.15 * 1000)
    },
    /* 左移列表项弹出删除按钮 */
    ListTouchStart(e) {
        this.setData({
            ListTouchStart: e.touches[0].pageX
        })
    },
    ListTouchMove(e) {
        this.setData({
            ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > -50 ? 'right' : 'left'
        })
    },
    ListTouchEnd(e) {
        if (this.data.ListTouchDirection == 'left') {
            console.log(e.currentTarget.dataset.target)
            this.setData({
                modalName: e.currentTarget.dataset.target
            })
        } else {
            this.setData({
                modalName: null
            })
        }
        this.setData({
            ListTouchDirection: null
        })
    },
})