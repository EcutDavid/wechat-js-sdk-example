
wx.config({
  debug: false,
  appId: 'wx114e537b6f541f2f',
  timestamp: '1533195419523',
  nonceStr: '1b164f2b-b01e-482c-8d32-a4d67d993a1a',
  signature: '444043e54626c343c840020de99a697fd24e7aaf',
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
