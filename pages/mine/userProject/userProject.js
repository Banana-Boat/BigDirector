// pages/mine/userProject/userProject.js
const app = getApp()
import {
    PxToRpx
} from '../../../utils/util'

Page({

    /**
     * 页面的初始数据
     */
    data: {
        scrollViewHeight: 0,
        scroll: {   // 
            refresh: {
              type: 'default',
              style: 'black',
              background: {
                color: "#f2f2f2"
              },
              shake:true
            }
          },
        projectConfirmBtnHeight: 0,
        projectList: [],
        datePicker: [],
        showCreateProjectModal: false,
        duration: {
            hour: 2,
            minute: 30
        },
        posterImageSize: '0B',
        listImageSize:'0B',
        listImageSize: 0,
        projectForm: {
            proName: '',
            showName: '',
            showPlace: '',
            showDate: '',
            startTime: '',
            showDuration: '',
            sponsor: '',
            introduce: '',
            posterImageUrl: null,
            listImageUrl: null
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this
        _this.GetScrollViewHeight()
        _this.GetNowDate()
        _this.GetNowTime()
        _this.setData({
            projectList: [{
                id: 0,
                url: '/static/img/poster1.jpg',
                shortName: '20不惑',
                name: '通信·经济学院主题迎新晚会',
                during: '130分钟',
                type: '迎新晚会',
                date: '今天03月10日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss'
            }, {
                id: 1,
                url: '/static/img/poster2.jpg',
                shortName: '30而立',
                name: '外国语学院主题迎新晚会',
                during: '160分钟',
                type: '迎新晚会',
                date: '明天03月11日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 2,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 3,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 4,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 1,
                url: '/static/img/poster2.jpg',
                shortName: '30而立',
                name: '外国语学院主题迎新晚会',
                during: '160分钟',
                type: '迎新晚会',
                date: '明天03月11日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 2,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 3,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 4,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 1,
                url: '/static/img/poster2.jpg',
                shortName: '30而立',
                name: '外国语学院主题迎新晚会',
                during: '160分钟',
                type: '迎新晚会',
                date: '明天03月11日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 2,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 3,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 4,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 1,
                url: '/static/img/poster2.jpg',
                shortName: '30而立',
                name: '外国语学院主题迎新晚会',
                during: '160分钟',
                type: '迎新晚会',
                date: '明天03月11日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 2,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 3,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 4,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 1,
                url: '/static/img/poster2.jpg',
                shortName: '30而立',
                name: '外国语学院主题迎新晚会',
                during: '160分钟',
                type: '迎新晚会',
                date: '明天03月11日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 2,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 3,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }, {
                id: 4,
                url: '/static/img/poster1.jpg',
                shortName: '50知天命',
                name: '计算机学院主题迎新晚会',
                during: '120分钟',
                type: '迎新晚会',
                date: '周五03月18日',
                start: '18:00',
                end: '20:40',
                place: '学生活动中心剧院',
                info: 'ssss'
            }]
        })

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

     /* 下拉刷新事件 */
     refresh: function () {
        let that = this
        let scroll = that.data.scroll
        setTimeout(() => {
        that.setData({
            scroll: scroll
        });
        that.selectComponent("#bd-scroll").loadEnd()
        }, 300);
      },



    /**
     *  获取scroll-view高度
     *  */
    GetScrollViewHeight: function () {
        let _this = this
        //获取projectbtn的高度
        new Promise(function (resolve, reject) {
            wx.createSelectorQuery().select("#create-project-btn").boundingClientRect(function (res) {
               resolve(res)
            }).exec()
        }).then((res,err)=>{
            _this.setData({
                scrollViewHeight: PxToRpx(app.globalData.windowHeight - res.height)
            })
        })
        new Promise(function (resolve, reject) {
            wx.createSelectorQuery().select("#create-project-btn-confirm").boundingClientRect(function (res) {
               resolve(res)
            }).exec()
        }).then((res,err)=>{
            _this.setData({
                projectConfirmBtnHeight: PxToRpx(res.height)
            })
        })
    },

    /**
     * 跳转到项目详情页
     */
    SwitchToProjectDetail: function (e) {
        wx.navigateTo({
            url: './projectDetail/projectDetail?id=' + e.currentTarget.dataset.id,
        })
    },

    /**
     * 显示新建项目弹窗
     */
    ShowCreateProjectModal: function () {
        this.setData({
            showCreateProjectModal: true
        })
    },

    /**
     * 关闭新建项目弹窗
     */
    HideCreateProjectModal: function () {
        this.setData({
            showCreateProjectModal: false
        })
    },

    /**
     * dataPicker组件的起始日期
     */

    IsRunYear(year) {
        if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
            return true
        } else {
            return false
        }
    },

    /**
     * datePicker初始数据
     */

    GetNowDate: function () {
        let _this = this
        var nowDate = new Date();
        var year = nowDate.getFullYear();
        var month = nowDate.getMonth() + 1;
        var day = nowDate.getDate();
        var start = year.toString() + '-' + month.toString().padStart(2, "0") + '-' + day.toString().padStart(2, "0")
        var end = (year + 1).toString() + '-' + month.toString().padStart(2, "0") + '-' + day.toString().padStart(2, "0")
        if (_this.IsRunYear(year)) {
            if (month == 2 && day == 29) {
                end = (year + 1).toString() + '-' + month.toString().padStart(2, "0") + '-' + (day - 1).toString().padStart(2, "0")
            }
        }
        _this.setData({
            datePicker: [start, end],
            "projectForm.showDate": start
        })
    },



    /**
     * datePicker数据变化
     */
    DateChange: function (e) {
        this.setData({
            "projectForm.showDate": e.detail.value
        })
    },

    /**
     * startTime初始数据
     */
    GetNowTime: function () {
        let _this = this
        var nowTime = new Date();
        var hour = nowTime.getHours()
        var minute = nowTime.getMinutes()
        var startTime = hour.toString().padStart(2, "0") + ":" + minute.toString().padStart(2, "0")
        _this.setData({
            "projectForm.startTime": startTime
        })
    },

    /**
     * 演出时长展示
     */
    ShowDuration: function (str) {
        let timeArr = str.split(":")
        this.setData({
            duration: {
                hour: Number.parseInt(timeArr[0]),
                minute: Number.parseInt(timeArr[1])
            }
        })
    },



    /**
     * 演出开始时间数据变化
     */
    TimeChange: function (e) {
        this.setData({
            "projectForm.startTime": e.detail.value
        })
    },

    /**
     * 
     */

    /**
     * 演出预计时长数据变化
     */
    DurationChange: function (e) {
        this.setData({
            "projectForm.showDuration": e.detail.value
        })
        this.ShowDuration(e.detail.value)
    },


    /**
     * 输入框数据变化
     */
    InputProNameValue: function (e) {
        this.setData({
            "projectForm.proName": e.detail.value
        })
    },
    InputShowNameValue: function (e) {
        this.setData({
            "projectForm.showName": e.detail.value
        })
    },
    InputShowPlaceValue: function (e) {
        this.setData({
            "projectForm.showPlace": e.detail.value
        })
    },
    InputSponsorValue: function (e) {
        this.setData({
            "projectForm.sponsor": e.detail.value
        })
    },
    InputIntroduceValue: function (e) {
        this.setData({
            "projectForm.introduce": e.detail.value
        })
    },

    /**
     * 上传图片操作
     */

    // wx.getFileSystemManager().readFile({
    //     filePath:chosedRes.tempFilePaths[0],
    //     encoding:'base64',
    //     success(res){
    //         console.log(res)
    //         _this.setData({
    //             posterImageSize: parseInt(chosedRes.tempFiles[0].size/1024),
    //             "projectForm.posterImageUrl": res.data
    //         })
    //     }
    // }) 

    /**
     * 计算文件大小
     */
     CalcFileSize:function(size){
         //b
         if(size<1024){
             return size.toString() + 'B'
         }
         //k
         else if(size >= 1024 && size < 1024*1024){
             return parseInt(size/1024).toString() + 'K'
         }
         //M
         else if(size >= 1024*1024 &&size < 1024*1024*1024){
             return (size/1024/1024).toFixed(2).toString() + 'M'
         }
         else{
             return 'BigFile'
         }
     },


    ChoosePosterImage: function () {
        let _this = this

        wx.chooseImage({
            count: 1,
            success(res) {
                _this.setData({
                    posterImageSize: _this.CalcFileSize(res.tempFiles[0].size),
                    "projectForm.posterImageUrl": res.tempFiles[0].path
                })
            }
        })
    },

    PosterImageView: function () {
        let _this = this
        wx.previewImage({
            urls: [_this.data.projectForm.posterImageUrl],
        })
    },
    RemovePosterImage: function () {
        let _this = this
        _this.setData({
            posterImageSize: 0,
            "projectForm.posterImageUrl": null
        })
    },

    ChooseListImage: function () {
        let _this = this

        wx.chooseImage({
            count: 1,
            success(res) {
                _this.setData({
                    listImageSize: _this.CalcFileSize(res.tempFiles[0].size),
                    "projectForm.listImageUrl": res.tempFiles[0].path
                })
            }
        })
    },

    ListImageView: function () {
        let _this = this
        wx.previewImage({
            urls: [_this.data.projectForm.listImageUrl],
        })
    },
    RemoveListImage: function () {
        let _this = this
        _this.setData({
            listImageSize: 0,
            "projectForm.listImageUrl": null
        })
    }
})