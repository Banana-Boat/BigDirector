import {baseURL,jsonHeaders} from '../config/config'

function GetOpenId(){

  return new Promise(function(resolve,reject){
    wx.login({
      success:function(res){
        const code = res.code
        wx.request({
          url: baseURL + 'user/openID?code='+code,
          header:jsonHeaders,
          success(res){
            if(res.data.error === 0){
              resolve(res.data.data.openid)
            }else{
              resolve(null)
            }
          },fail(err){
            console.log(err)
            resolve(null)
          }
        })
      }
    })
  })
}

module.exports = {
  GetOpenId
}