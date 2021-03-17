const app = getApp()
import {PxToRpx, RpxToPx} from '../../../../../../utils/util'

Page({
    data: {
        tabCur: 0,
        mainCur: 0,
        verticalNavTop: 0,
        isShowMemberModal: false,
        groupToAdd: '',
        memberSelectedNum: 0,
        memberList: [
            {
                name: '香蕉船1',
                checked: false,
                value: '香蕉船1',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '香蕉船2',
                value: '香蕉船2',
                checked: false,
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '香蕉船3',
                value: '香蕉船3',
                checked: false,
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '香蕉船4',
                value: '香蕉船4',
                checked: false,
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '香蕉船5',
                value: '香蕉船5',
                checked: false,
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            }
        ],
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
        let that = this
        this.setData({
            scrollViewHeight: app.globalData.screenHeight - app.globalData.customBar - 30,
            modalScrollViewHeight: PxToRpx(app.globalData.screenHeight) * 0.75
        })
        wx.createSelectorQuery().select("#selectBtnView").boundingClientRect(res => {
            that.setData({confirmBtnHeight: PxToRpx(res.height)})
        }).exec()
    },
    AddMemberBtnTap(e) {
        let memberList = this.data.memberList
        memberList.forEach(item => {
            item.checked = false
        })
        this.setData({
            memberList,
            isShowMemberModal: true,
            groupToAdd: e.currentTarget.dataset.group,
            memberSelectedNum: 0
        })
    },
    CheckboxChange(e) {
        let that = this
        let memberList = that.data.memberList
        let valueList = e.detail.value 
        
        for (let i = 0; i < memberList.length; i++) {
            const member = memberList[i]
            member.checked = false
            for (let j = 0; j < valueList.length; j++) {
                const value = valueList[j];
                if (member.value == value) {
                    member.checked = true
                    break
                }
            }
            
        }
        that.setData({
            memberList,
            memberSelectedNum: valueList.length
        })
        console.log(that.data.memberList)
    },
    AddGroupBtnTap() {

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