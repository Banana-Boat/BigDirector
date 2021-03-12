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

module.exports = {
  formatTime: formatTime,
  RpxToPx: RpxToPx,
  PxToRpx: PxToRpx
}
