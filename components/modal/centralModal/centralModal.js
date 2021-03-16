// components/centralModal/centralModal.js
Component({
    options: {
        styleIsolation: 'apply-shared',
        multipleSlots: true
    },
    properties: {
        isShowModal: {
            type: Boolean,
            value: false
        },
        isShowHeader: {
            type: Boolean,
            value: true
        },
        isShowFooter: {
            type: Boolean,
            value: true
        },
        title: {
            type: String,
            value: ''
        },
        modalHeight: {
            type: String,
            value: ''
        },
        modalWidth: {
            type: String,
            value: ''
        },
        radius: {
            type: String,
            value: ''
        }
    },
    data: {

    },
    methods: {
        HideModal() {
            this.setData({
                isShowModal: false
            })
        }
    }
})
