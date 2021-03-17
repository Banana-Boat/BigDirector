const app = getApp()
import {PxToRpx, RpxToPx} from '../../../../../utils/util'

Component({
    options: {
        styleIsolation: 'apply-shared'
    },
    properties: {

    },
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
        isShowInviteModal: false,
        leaderList: [
            {
                name: '香蕉船',
                group: '导演组',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                phone: '19975269369'
            },{
                name: '香蕉船',
                group: '音控组',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                phone: '19975269369'
            },{
                name: '香蕉船',
                group: '音控组',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                phone: '19975269369'
            },{
                name: '香蕉船',
                group: '音控组',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                phone: '19975269369'
            },{
                name: '香蕉船',
                group: '音控组',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                phone: '19975269369'
            },{
                name: '香蕉船',
                group: '音控组',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                phone: '19975269369'
            },{
                name: '香蕉船',
                group: '灯光组',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                phone: '19975269369'
            },{
                name: '香蕉船',
                group: '道具组',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                phone: '19975269369'
            }
        ],
        projInfo: {
            url: '/static/img/poster1.jpg',
            shortName: '20不惑',
            name: '通信·经济学院主题迎新晚会',
            directorNum: 3,
            memberNum: 20,
            directorAvatarList: [
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
            ],
            memberAvatarList: [
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg',
                'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
            ]
        }
    },
    lifetimes:{
        created() {
            
        },
        ready() {
            this.setData({
                scrollViewHeight: app.globalData.screenHeight - app.globalData.tarbarHeight - app.globalData.customBar - 50,
                modalScrollViewHeight: PxToRpx(app.globalData.screenHeight) * 0.6
            })
        }   
    },
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
        ShowMemberList() {
            wx.navigateTo({
                url: '/pages/mine/userProject/projectDetail/controlPanel/staffOverview/staffOverview',
            })
        },
        AddBtnTap() {
            this.setData({
                isShowInviteModal: true
            })
        },
        StaffBtnTap() {
            wx.navigateTo({
              url: '/pages/mine/userProject/projectDetail/controlPanel/staffManage/staffManage',
            })
        }
    }
})
