import {pinyinUtil} from '../../../../../../utils/pinyinUtil.js'
const app = getApp();

Page({
    data: {
        customBar: app.globalData.customBar,
        hidden: true,
        isSearching: false,
        searchResList: [
            {
                name: '吴寅鹏',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '王紫麟',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '王武俊',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            }
        ],
        staffList: [
            {
                name: '向天歌',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '吴寅鹏',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '王紫麟',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '王武俊',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '特朗普',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '徐工谊',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '法拉第',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '钢铁侠',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '习大大',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '郭德纲',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '李强',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '&*',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: '223is',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            },{
                name: 'ssiw',
                phone: '19975269369',
                avatar: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big81007.jpg'
            }
        ],
        staffMap: {},
        letterList: []
    },
    onLoad() {
        let that = this
        let staffMap = that.Classify(that.data.staffList)
        let letterList = Object.keys(staffMap).sort((a, b) => {
            if (a == '0') {
                return 1
            } else if (b == '0') {
                return -1
            } else {
                return a.localeCompare(b)
            }
        })
        that.setData({
            staffMap: staffMap,
            letterList: letterList,
            listCur: letterList[0]
        })
    },
    onReady() {
        let that = this;
        wx.createSelectorQuery().select('.indexBar-box').boundingClientRect(function (res) {
            that.setData({
                boxTop: res.top
            })
        }).exec();
        wx.createSelectorQuery().select('.indexes').boundingClientRect(function (res) {
            that.setData({
                barTop: res.top
            })
        }).exec()
    },
    Classify(list) {
        let staffMap = this.data.staffMap
        for (let i = 0; i < list.length; i++) {
            const item = list[i]
            let firstLetter = pinyinUtil.getFirstLetter(item.name)[0]
            let ascii = firstLetter.charCodeAt(0)

            if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
                if (staffMap.hasOwnProperty(firstLetter.toUpperCase())) {
                    staffMap[firstLetter.toUpperCase()].push(item)
                } else {
                    staffMap[firstLetter.toUpperCase()] = [item]
                }
            } else {
                console.log(ascii, firstLetter)
                if (staffMap.hasOwnProperty('0')) {
                    staffMap['0'].push(item)
                } else {
                    staffMap['0'] = [item]
                }
            }
        }
        return staffMap
    },
    SearchBarInput(e) {
        if (e.detail.value != '') {
            let resList = this.data.staffList.filter(item => {
                return (item.name).indexOf(e.detail.value) != -1
            })
            this.setData({
                searchResList: resList,
                isSearching: true
            })
        } else {
            this.setData({isSearching: false})
        }
    },
    CallBtnTap(e) {

    },
    //获取文字信息
    GetCur(e) {
        this.setData({
            hidden: false,
            listCur: this.data.letterList[e.target.id],
        })
    },
    SetCur(e) {
        this.setData({
            hidden: true,
            listCur: this.data.listCur
        })
    },
    //滑动选择Item
    TMove(e) {
        let y = e.touches[0].clientY,
            offsettop = this.data.boxTop,
            that = this;
        //判断选择区域,只有在选择区才会生效
        if (y > offsettop) {
            let num = parseInt((y - offsettop) / 20);
            this.setData({
                listCur: that.data.letterList[num]
            })
        };
    },

    //触发全部开始选择
    TStart() {
        this.setData({
            hidden: false
        })
    },

    //触发结束选择
    TEnd() {
        this.setData({
            hidden: true,
            listCurID: this.data.listCur
        })
    },
    IndexSelect(e) {
        let that = this;
        let barHeight = this.data.barHeight
        let letterList = this.data.letterList
        let scrollY = Math.ceil(letterList.length * e.detail.y / barHeight)
        for (let i = 0; i < letterList.length; i++) {
            if (scrollY < i + 1) {
                that.setData({
                    listCur: letterList[i],
                    movableY: i * 20
                })
                return false
            }
        }
    }
});