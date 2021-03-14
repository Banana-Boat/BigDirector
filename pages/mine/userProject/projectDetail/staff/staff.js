const app = getApp()
import { PxToRpx } from '../../../../../utils/util'

Component({
    options: {
        styleIsolation: 'apply-shared'
    },
    properties: {
    },
    data: {
        projInfo: {
            agentNum: 5,
            memberNum: 20
        },     
        TabCur: 0,
        MainCur: 0,
        VerticalNavTop: 0,
        list: []
    },
    lifetimes: {
        created() {
        },
        ready() {
            this.setData({
                scrollViewHeight: PxToRpx(app.globalData.windowHeight - app.globalData.tarbarHeight) - 140
            })
            let list = [{}]
            for (let i = 0; i < 26; i++) {
                list[i] = {}
                list[i].name = String.fromCharCode(65 + i)
                list[i].id = i
            }
            this.setData({
                list: list,
                listCur: list[0]
            })
        }
    },
    observers:{
        '**':function(data){
            this.data = data
        }
    },

    methods: {
        tabSelect(e) {
            this.setData({
                TabCur: e.currentTarget.dataset.id,
                MainCur: e.currentTarget.dataset.id,
                VerticalNavTop: (e.currentTarget.dataset.id - 1) * 50
            })
        },
        VerticalMain(e) {
            let that = this
            let list = this.data.list
            let tabHeight = 0;
            for (let i = 0; i < list.length; i++) {
                let view = wx.createSelectorQuery().in(this).select("#main-" + list[i].id)
                view.fields({
                    size: true
                }, data => {
                    list[i].top = tabHeight;
                    tabHeight = tabHeight + data.height;
                    list[i].bottom = tabHeight;     
                }).exec();
            }
            that.setData({
                list: list
            })
            let scrollTop = e.detail.scrollTop + 20
            for (let i = 0; i < list.length; i++) {
                if (scrollTop > list[i].top && scrollTop < list[i].bottom) {
                    that.setData({
                        VerticalNavTop: (list[i].id - 1) * 50,
                        TabCur: list[i].id
                    })
                    return false
                }
            }
        }
    }
})
