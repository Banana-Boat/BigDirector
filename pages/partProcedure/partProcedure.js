// pages/partProcedure/partProcedure.js
const app = getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        procList: [
            {
                type: 0,
                name: '青花瓷',
                mic: 8,
                mic_small: 2,
                remark: '加鸡腿加鸡腿加鸡腿加鸡腿加鸡腿加鸡腿加鸡腿加鸡腿加鸡腿加鸡腿'
            },
            {
                type: 4,
                mic: 4,
                mic_small: 0,
                remark: 'XXXXX'
            },
            {
                type: 3,
                mic: 1,
                mic_small: 2,
                remark: 'XXXXX'
            },
            {
                type: 0,
                name: '菊花台满地伤你的笑容',
                mic: 3,
                mic_small: 2,
                remark: 'XXXXX'
            },
            {
                type: 0,
                name: '听妈妈的话',
                mic: 1,
                mic_small: 2,
                remark: 'XXXXX'
            },
            {
                type: 1,
                mic: 3,
                mic_small: 2,
                remark: 'XXXXX'
            },
            {
                type: 0,
                name: '稻香',
                mic: 1,
                mic_small: 2,
                remark: 'XXXXX'
            },
            {
                type: 0,
                name: '夜曲',
                mic: 3,
                mic_small: 2,
                remark: 'XXXXX'
            },
            {
                type: 2,
                mic: 1,
                mic_small: 2,
                remark: 'XXXXX'
            },
            {
                type: 5,
                mic: 4,
                mic_small: 0,
                remark: 'XXXXX'
            }
        ],
        projectName: '计算机学院迎新晚会',
        colorDict: [
            'orange',
            'cyan',
            'purple',
            'blue',
            'red',
            'red'
        ],
        procDict: [
            '节目',
            '互动',
            '颁奖',
            '致辞',
            '开场',
            '结束'
        ],
        windowHeight: app.globalData.windowHeight,      //设备屏幕高度
        customBarHeight: app.globalData.CustomBar,      //标题栏高度
        animationHasShow: false,        //列表项动画是否已展示
        isShowBox: false,               //当前是否展示演示页
        inputInit: '',                  //输入框初始值
        sliderInit: 0,
        selectedIndex: 0,               //当前选中的环节索引
        remainingProc: null,            //剩余环节数

    },

    onLoad: function (options) {
        var page = this;
        page.changeAnimationClass();
    },
    /* 列表项动画若已展示，需删去animation-slide-bottom类 */
    changeAnimationClass() {
        var page = this
        setTimeout(function () {
            page.setData({
                animationHasShow: true
            })
        }, page.data.procList.length * 0.2 * 1000)
    },
    /* 切换显示 */
    displayShowBox() {
        var page = this;
        var tempList = page.data.procList
        tempList[page.data.selectedIndex].selected = null           //将原来选中的环节selected置空
        tempList[0].selected = true         //将第一个环节设置被选中
        page.setData({
            isShowBox: true,
            itemName: null,     //关闭弹出的删除按钮
            selectedIndex: 0,       
            procList: tempList,
            remainingProc: page.data.procList.length
        })
    },
    displayOperBox(){
        this.setData({
            isShowBox: false,
            mainTouchStart: null    //点击演示的图标同时触发了mainTouchStart，应清除mainTouchStart的值，避免产生bug
        })
    },
    /* 长距离左移切换演示页面 */
    mainTouchStart(e){
        var page = this;
        if (e.touches[0].pageX > app.globalData.windowWidth * 0.80 && !page.data.isShowBo){
            page.setData({
                mainTouchStart: e.touches[0].pageX
            })
        }
    },
    mainTouchMove(e){       //防止不连续的接触触发切换
        var page = this;
        if (!page.data.isShowBox){
            page.setData({
                isMainTouchLegal: page.data.mainTouchStart - e.changedTouches[0].pageX > 50 ? true : false
            })
        }
    },
    mainTouchEnd(e){
        var page = this;
        if (page.data.isMainTouchLegal && !page.data.isShowBox) {
            var tempList = page.data.procList
            tempList[page.data.selectedIndex].selected = null           //将原来选中的环节selected置空
            tempList[0].selected = true         //将第一个环节设置被选中
            page.setData({
                isShowBox: true,
                itemName: null,     //关闭弹出的删除按钮
                selectedIndex: 0,
                procList: tempList,
                remainingProc: page.data.procList.length
            })
        }
    },
    /* 左移列表项弹出删除按钮 */
    listTouchStart(e) {
        var page = this;
        if (e.touches[0].pageX < app.globalData.windowWidth * 0.75 && !page.data.isShowBox){
            page.setData({
                listTouchStart: e.touches[0].pageX
            })
        }
    },
    listTouchEnd(e) {
        var page = this;
        if (!page.data.isShowBox) {   //需向左滑动超过50px，才显示删除按钮
            if (page.data.listTouchStart - e.changedTouches[0].pageX > 50) {
                page.setData({
                    itemName: e.currentTarget.dataset.target
                })
            } else {
                page.setData({
                    itemName: null
                })
            }
            page.setData({
                listTouchDirection: null
            })
        }
    },
    /* 弹出添加环节模态窗 */
    showAddModal(e) {
        this.setData({
            isShowAddModal: true,
            addProcType: e.currentTarget.dataset.target,     //增加环节的类型
        })
    },
    hideAddModal(e) {
        var page = this;
        page.setData({
            isShowAddModal: null,
            mainTouchStart: null,        //清除点击按钮时设置的mainTouchStart
            inputInit: '',               //清空输入框
            sliderInit: 0,
        })
        setTimeout(function(){      //防止标题过早出现null
            page.setData({
                addProcType: null
            })
        }, 500)
    },
    noneSenseEvent() {
        //修复模态窗bug，无实际意义
    },
    /* 弹出修改环节模态窗 */
    showEditModal(e) {
        var page = this;
        var tempItem = page.data.procList[e.currentTarget.dataset.target]
        page.setData({
            isShowEditModal: true,
            editIndex: e.currentTarget.dataset.target,      //待修改列表项在数组中的索引
            editProcType: tempItem.type,
            editProgramName: tempItem.name ? tempItem.name : null,
            editMic: tempItem.mic,
            editMicSmall: tempItem.mic_small,
            editRemark: tempItem.remark
        })
    },
    hideEditModal(e) {
        var page = this;
        page.setData({
            isShowEditModal: null,
            mainTouchStart: null,        //清除点击按钮时设置的mainTouchStart
            editIndex: null,
            editProgramName: null,
            editMic: null,
            editMicSmall: null,
            editRemark: null
        })
        setTimeout(function () {      //防止标题过早出现null
            page.setData({
                editProcType: null
            })
        }, 500)
    },
    /* 添加环节 */
    addProc(e){
        var page = this;
        var tempList = page.data.procList
        if (page.data.addProcType == 0){       //添加类型为节目
            if (e.detail.value.programName != '') {
                tempList.push({
                    type: 0,
                    name: e.detail.value.programName,
                    mic: e.detail.value.mic == '' ? 0 : e.detail.value.mic,
                    mic_small: e.detail.value.mic_small == '' ? 0 : e.detail.value.mic_small,
                    remark: e.detail.value.remark
                })

                page.setData({
                    procList: tempList,
                })
                page.hideAddModal()
            }
        }else{      //添加其余类型
            if ((page.data.addProcType == 4 && tempList.findIndex(item => { return item.type == 4 }) != -1) ||
                (page.data.addProcType == 5 && tempList.findIndex(item => { return item.type == 5 }) != -1)) {

                wx.showToast({
                    title: '开场或结束不能重复添加',
                    icon: 'none'
                })

            } else {
                tempList.push({
                    type: page.data.addProcType,
                    mic: e.detail.value.mic == '' ? 0 : e.detail.value.mic,
                    mic_small: e.detail.value.mic_small == '' ? 0 : e.detail.value.mic_small,
                    remark: e.detail.value.remark
                })
                page.setData({
                    procList: tempList,
                })
                page.hideAddModal()
            }
        }
    },
    /* 删除环节 */
    delProc(e) {
        var page = this;
        var tempList = page.data.procList
        tempList.splice(e.currentTarget.dataset.target, 1)
        page.setData({
            procList: tempList,
        })
    },
    /* 修改环节 */
    editProc(e){
        var page = this;
        var tempList = page.data.procList
        if (page.data.editProcType == 0) {       //添加类型为节目
            if (e.detail.value.programName != '') {
                tempList[page.data.editIndex] = {
                    type: 0,
                    name: e.detail.value.programName,
                    mic: e.detail.value.mic == '' ? 0 : e.detail.value.mic,
                    mic_small: e.detail.value.mic_small == '' ? 0 : e.detail.value.mic_small,
                    remark: e.detail.value.remark
                }
                page.setData({
                    procList: tempList,
                })
                page.hideEditModal()
            }
        } else {      //修改其余类型
            tempList[page.data.editIndex] = {
                type: page.data.editProcType,
                mic: e.detail.value.mic == '' ? 0 : e.detail.value.mic,
                mic_small: e.detail.value.mic_small == '' ? 0 : e.detail.value.mic_small,
                remark: e.detail.value.remark
            }
            page.setData({
                procList: tempList,
            })
            page.hideEditModal()
        }
    },
    /* 通过点击列表项选中 */
    changeProcByItem(e){
        var page = this;
        if(page.data.isShowBox){        //若为演示状态
            var tempList = page.data.procList
            tempList[page.data.selectedIndex].selected = null           //将原来选中的环节selected置空
            tempList[e.currentTarget.dataset.target].selected = true    //现在选中的selected置为true
            page.setData({
                selectedIndex: e.currentTarget.dataset.target,
                procList: tempList,
                remainingProc: tempList.length - e.currentTarget.dataset.target - 1
            })
        }
    },
    /* 通过切换轮播图选中 */
    changeProcBySwiper(e) {
        var page = this;
        var tempList = page.data.procList
        tempList[page.data.selectedIndex].selected = null           //将原来选中的环节selected置空
        tempList[e.detail.current].selected = true    //现在选中的selected置为true
        page.setData({
            selectedIndex: e.detail.current,
            procList: tempList,
            remainingProc: tempList.length - e.detail.current - 1
        })
    },
})
