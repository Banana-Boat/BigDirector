const baseURL = 'http://api.zerokirin.online/BigDirector'

const jsonHeaders = {
  'Content-Type':'application/json',
  'sign':'spppk'
}

const jsonAuthorizationHeaders = (openId) =>{
  return {
    'Content-Type':'application/json',
    'sign':'spppk',
    'Authorization':"token "+openId
  }
}

module.exports = {
  baseURL,
  jsonHeaders,
  jsonAuthorizationHeaders
}