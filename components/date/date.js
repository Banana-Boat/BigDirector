// pages/date/date.js
const app = getApp()


Component({
  options: {
    styleIsolation: 'apply-shared'
  },
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定

    year: {
      type: Number,
      value: new Date().getFullYear(),
    },
    start_month: {
      type: Number,
      value: new Date().getMonth() + 1,
    },
    end_month: {
      type: Number,
      value: new Date().getMonth() + 1
    },
    rest: {
      type: String,
      value: ""
    },
    vacation: {
      type: String,
      value: ""
    },
    isClick: {
      type: String,
      value: 'true'
    },
    current: {
      type: String,
      value: String(new Date().getMonth() + 1 + '-' + new Date().getDate())
    }
  },
  data: {
    // 这里是一些组件内部数据
    weekL: ['日', '一', '二', '三', '四', '五', '六'],
    currentMonth: [],
    current: [],
    currentDate: [],

    showLeftBtn:false,
    showRightBtn:true

  },
  ready() {
    this.getMonthAround();
    this.setData({
      currentDate: this.data.current.split('-'),
      shhowLeftBtn:false,
      showRightBtn:true
    })
  },

  observers: {
    '**': function (data) {
      this.data = data
    },
    'start_month,end_month': function () {
      this.getMonthAround()
    }
  },
  methods: {
    // 这里是一个自定义方法
    getMonthAround: function () {
      let time = new Date();
      let currentMonth = [];
      time.setFullYear(this.data.year)
      for (let i = this.data.start_month; i <= this.data.end_month; i++) {
        time.setMonth(i);
        let dateL = [];
        let month = time.getMonth() == 0 ? 12 : time.getMonth();
        let date = month < 10 ? this.getDateLength(this.data.year + '-0' + month) : this.getDateLength(this.data.year + '-' + month);
        let blank = month < 10 ? this.getDay(this.data.year + '-0' + month) : this.getDay(this.data.year + '-' + month);

        let rest = this.data.rest ? this.data.rest.split(',') : [];
        for (let n = 0; n < rest.length; n++) {
          rest[n] = rest[n].split('-')
        }
        let vacation = this.data.vacation ? this.data.vacation.split(',') : [];
        for (let n = 0; n < vacation.length; n++) {
          vacation[n] = vacation[n].split('-')
        }
        for (let n = 0; n < date; n++) {
          let isStatus = true;
          for (let m = 0; m < rest.length; m++) {
            if (rest[m][0] == i && rest[m][1] == n + 1) {
              dateL.push({
                value: n + 1,
                day: month < 10 ? this.getDay(this.data.year + '-0' + month, n + 1) : this.getDay(this.data.year + '-' + month, n + 1),
                status: 1
              })
              isStatus = false;
            }

          }
          for (let m = 0; m < vacation.length; m++) {
            if (vacation[m][0] == i && vacation[m][1] == n + 1) {
              dateL.push({
                value: n + 1,
                day: month < 10 ? this.getDay(this.data.year + '-0' + month, n + 1) : this.getDay(this.data.year + '-' + month, n + 1),
                status: 2
              })
              isStatus = false;
            }
          }
          if (isStatus) {
            dateL.push({
              value: n + 1,
              day: month < 10 ? this.getDay(this.data.year + '-0' + month, n + 1) : this.getDay(this.data.year + '-' + month, n + 1),
              status: 0
            })
          }

        }
        currentMonth.push({
          month: month,
          date: dateL,
          blank: blank,
          year: this.data.year
        })

      };
      this.setData({
        currentMonth: currentMonth
      })
    },
    getDateLength: function (date) {
      let d = new Date(date)
      // 将日期设置为下月一号
      d.setMonth(d.getMonth() + 1)
      d.setDate('1')
      // 获取本月最后一天
      d.setDate(d.getDate() - 1)
      return d.getDate()
    },
    getDay: function (date, day) {
      let d = new Date(date)
      d.setMonth(d.getMonth())
      d.setDate(day || '1')

      return d.getDay()
    },
    onClick: function (e) {
      let item = e.currentTarget.dataset.item;
      let index = e.currentTarget.dataset.date;
      // console.log(this.data.isClick)
      if (this.data.isClick == 'true') {
        this.triggerEvent("ChooseShowDate", {
          date: item.year + '-' + item.month.toString().padStart(2, "0") + '-' + item.date[index].value.toString().padStart(2, "0")
        }, {
          bubbles: true
        })
      }
    },
    leftClick: function () {
      // console.log(this.data)
     var nowMonth = new Date().getMonth() + 1
      // nowMonth = 10
     var tmpStartMonth = this.data.start_month
    //  console.log(tmpStartMonth)
     if(tmpStartMonth>nowMonth){
       this.setData({
       start_month:tmpStartMonth - 1,
       end_month:tmpStartMonth - 1,
       showLeftBtn:tmpStartMonth  === nowMonth + 1 ?false:true,
       showRightBtn:true,
       year:tmpStartMonth===13?this.data.year - 1:this.data.year
     })
     }
     else{
       this.setData({
         showLeftBtn:false
       })
     }
     
    //  console.log(this.data.start_month,this.data.showLeftBtn,this.data.showRightBtn)

    },
    rightClick: function () {
      // console.log(this.data)
      var nowMonth = new Date().getMonth()+1
      // nowMonth = 10
      var tmpStartMonth = this.data.start_month

      if(tmpStartMonth<nowMonth+6){
        this.setData({
        start_month:tmpStartMonth+1,
        end_month:tmpStartMonth+1,
        showLeftBtn:true,
        showRightBtn:tmpStartMonth===nowMonth+5?false:true,
        year:tmpStartMonth==12?this.data.year+1:this.data.year
      })
    }
      else{
        this.setData({
          showRightBtn:false
        })
      }
      // console.log(this.data.start_month,this.data.showLeftBtn,this.data.showRightBtn)
    },
  }
})