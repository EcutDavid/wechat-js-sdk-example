
wx.config({
  debug: false,
  appId: 'wx994773dc132fcf88',
  timestamp: '1533195180124',
  nonceStr: 'a34df6a7-5358-4b67-9182-42b6bc2b6aa3',
  signature: '4a79bd4c9bdbbe4521611f742ae9f250903646ac',
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
