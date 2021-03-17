const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 像素单位px与rpx转换
const RpxToPx = (rpx) => {
  return Number.parseFloat(rpx / 750 * getApp().globalData.windowWidth)
}

const PxToRpx = (px) => {
  return Number.parseFloat(px * 750 / getApp().globalData.windowWidth)
}


/**
 * 日期和时间戳的转换
 */
const DateTimeToTimeStamp = (date)=>{
  return Date.parse(new Date(date)).toString()
}

const TimeStampToDateTime=(timeStamp)=>{
  let dateTime = new Date(Number(timeStamp))
  return {
    dateTimeYear:dateTime.getFullYear(),
    dateTimeMonth:dateTime.getMonth()+1,
    dateTimeDay:dateTime.getDate(),
    dateHour:dateTime.getHours(),
    dateMinute:dateTime.getMinutes(),
    date:dateTime.getFullYear().toString() + '-' + (dateTime.getMonth() + 1).toString().padStart(2,"0") + '-' + dateTime.getDate().toString().padStart(2,"0"),
    time:dateTime.getHours().toString().padStart(2,"0")+":"+dateTime.getMinutes().toString().padStart(2,"0")
  }
}

/*
mengxun
数组按照属性排序
升序为true
默认降序
*/
const ArraySortByProperty = (property,isUp = false) =>{
  return function(obj1,obj2){
      var value1 = obj1[property];
      var value2 = obj2[property];
      return isUp?value1 - value2:value2 - value1;    
  }
}


module.exports = {
  formatTime: formatTime,
  RpxToPx: RpxToPx,
  PxToRpx: PxToRpx,
  DateTimeToTimeStamp,
  TimeStampToDateTime,
  ArraySortByProperty
}
