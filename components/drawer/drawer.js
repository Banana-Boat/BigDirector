// components/drawer/dawer.js
Component({
    options: {
        styleIsolation: 'apply-shared',
        multipleSlots: true
    },
    properties: {
        isShowDrawer: {
            type: Boolean,
            value: false
        },
    },
    data: {

    },
    methods: {
        HideDrawer() {
            this.setData({
                isShowDrawer: false
            })
        }
    }
})
