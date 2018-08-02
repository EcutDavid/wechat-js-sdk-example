
wx.config({
  debug: false,
  appId: 'wxd8c042e1754c001b',
  timestamp: '1533194621743',
  nonceStr: 'ef6fe8a2-4410-4214-9d9b-74eb1e3f8a63',
  signature: '919422ea9e08b135bd7b0fcbee0f0f142539b99f',
  jsApiList: [
    'onMenuShareAppMessage',
    'onMenuShareTimeline',
  ]
})
wx.ready(() => {
  wx.onMenuShareAppMessage({
    title: 'Hello Canva',
    imgUrl: 'http://51.51blog.com/canva.png',
    link: location.href,
    desc: 'Design anything. publish anywhere.',
    success: function () {
      // TODO
    }
  })

  wx.onMenuShareTimeline({
    title: 'Hello Canva',
    imgUrl: 'http://51.51blog.com/canva.png',
    link: location.href,
    success: function () {
      // TODO
    }
  })
})
