wx.config({
  debug: false,
  appId: 'wx114e537b6f541f2f',
  timestamp: '1534478454311',
  nonceStr: 'ca589250-0caf-4080-8fab-bdc989a98d7d',
  signature: 'f18062164620c9e925834e34c55c307cec9694c7',
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
