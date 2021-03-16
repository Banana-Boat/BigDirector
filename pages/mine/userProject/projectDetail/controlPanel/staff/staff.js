const app = getApp()
Page({
    data: {
        tabCur: 0,
        mainCur: 0,
        verticalNavTop: 0,
        groupList: [
            {
                id: 0,
                name: '导演组',
                memberList: [
                    {
                        name: '香蕉船',
                        isLeader: true,
                        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
                    },{
                        name: '香蕉船',
                        isLeader: false,
                        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
                    },{
                        name: '香蕉船',
                        isLeader: false,
                        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
                    }
                ]
            },{
                id: 1,
                name: '灯光组',
                memberList: [
                    {
                        name: '香蕉船',
                        isLeader: true,
                        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
                    },{
                        name: '香蕉船',
                        isLeader: false,
                        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
                    },{
                        name: '香蕉船',
                        isLeader: false,
                        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
                    }
                ]
            },{
                id: 2,
                name: '道具组',
                memberList: [
                    {
                        name: '香蕉船',
                        isLeader: true,
                        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
                    },{
                        name: '香蕉船',
                        isLeader: false,
                        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
                    },{
                        name: '香蕉船',
                        isLeader: false,
                        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
                    }
                ]
            },{
                id: 3,
                name: '音控组',
                memberList: [
                    {
                        name: '香蕉船',
                        isLeader: true,
                        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
                    },{
                        name: '香蕉船',
                        isLeader: false,
                        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
                    },{
                        name: '香蕉船',
                        isLeader: false,
                        avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
                    }
                ]
            }
        ]
    },
    onLoad() {
        let that = this
        this.setData({
            groupListCur: that.data.groupList[0]
        })
    },
    onReady() {
        this.setData({
            scrollViewHeight: app.globalData.screenHeight - app.globalData.customBar - 30
        })
    },
    TabSelect(e) {
        this.setData({
            tabCur: e.currentTarget.dataset.id,
            mainCur: e.currentTarget.dataset.id,
            verticalNavTop: (e.currentTarget.dataset.id - 1) * 50
        })
    },
    VerticalMain(e) {
        let that = this;
        let groupList = this.data.groupList;
        let tabHeight = 0;
        for (let i = 0; i < groupList.length; i++) {
            let view = wx.createSelectorQuery().select("#main-" + groupList[i].id);
            view.fields({
                size: true
            }, data => {
                groupList[i].top = tabHeight;
                tabHeight = tabHeight + data.height;
                groupList[i].bottom = tabHeight;
            }).exec();
        }
        that.setData({
            groupList: groupList
        })
        let scrollTop = e.detail.scrollTop + 20;
        for (let i = 0; i < groupList.length; i++) {
            if (scrollTop > groupList[i].top && scrollTop < groupList[i].bottom) {
                that.setData({
                    verticalNavTop: (groupList[i].id - 1) * 50,
                    tabCur: groupList[i].id
                })
                return false
            }
        }
    }
})