
wx.config({
  debug: false,
  appId: 'wxd8c042e1754c001b',
  timestamp: 'TODO',
  nonceStr: 'TODO',
  signature: 'TODO',
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
