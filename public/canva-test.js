
wx.config({
  debug: false,
  appId: 'wxd8c042e1754c001b',
  timestamp: '1533107564899',
  nonceStr: '8f5e0918-83f8-4017-8b76-b8e2731c0487',
  signature: '6836afa047d57ebd22946f81cd2dfdad044e94de',
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
