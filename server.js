const https = require('https')
const express = require('express')
const app = express()

// Ref doc: https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1421141115&lang=en_US

// Nothing but return the parsed JSON object from a simple get request.
function httpsGet(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let body = ''
      res.on('data', chunk => body += chunk)

      res.on('end', function () {
        resolve(JSON.parse(body))
      })
    }).on('error', (e) => {
      reject(e)
    })
  })
}

const secret = process.env.wechat_secret;
const ACC_TOKEN_FETCH_URL = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wxd8c042e1754c001b&secret=${secret}`
const API_TICKET_FETCH_URL_BASE = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token='
let accToken = ''
let ticket = ''

function createNonceStr () {
  return Math.random().toString(36).substr(2, 15)
}

function createTimestamp () {
  return parseInt(new Date().getTime() / 1000) + ''
}

// Args to normalized string.
function raw (args) {
  let keys = Object.keys(args)
  keys = keys.sort()
  const newArgs = {}
  keys.forEach(function (key) {
    newArgs[key.toLowerCase()] = args[key]
  })

  let string = ''
  for (const k in newArgs) {
    string += '&' + k + '=' + newArgs[k]
  }
  string = string.substr(1)
  return string
}

function sign (jsapi_ticket, url) {
  const ret = {
    jsapi_ticket: jsapi_ticket,
    nonceStr: createNonceStr(),
    timestamp: createTimestamp(),
    url: url
  }
  const string = raw(ret)
  jsSHA = require('jssha')
  shaObj = new jsSHA(string, 'TEXT')
  ret.signature = shaObj.getHash('SHA-1', 'HEX')

  return ret
}

function fetchKeys() {
  httpsGet(ACC_TOKEN_FETCH_URL).then(d => {
    accToken = d.access_token
    console.log('new token fetched', accToken)
    httpsGet(`${API_TICKET_FETCH_URL_BASE}${accToken}`).then(d => {
      ticket = d.ticket
      console.log('new ticket fetched', ticket)
    })
  })
}

fetchKeys()
// Fetch new tokens every 10 mins, actually can be 120 mins(at most).
setInterval(fetchKeys, 1000 * 600)

app.use(function (req, res, next) {
  // YOLO version of CORS, sorry
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  next()
})
app.use(express.static('public'))
app.get('/key', function (req, res) {
  const requestURL = decodeURIComponent(req.headers.wechat)
  console.log('get new reques from', requestURL)
  res.setHeader('Content-Type', 'application/json')
  res.send(JSON.stringify(sign(ticket, requestURL)))
})

const port = 80
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
