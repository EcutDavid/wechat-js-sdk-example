function wxStuff(queryRes) {
  wx.config({
    debug: false,
    appId: 'wxd8c042e1754c001b',
    timestamp: queryRes.timestamp,
    nonceStr: queryRes.nonceStr,
    signature: queryRes.signature,
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
}

fetch(location.origin + '/key', {
  // TODO: get rid of this hacky
  headers: {
   "wechat": encodeURIComponent(location.href.split('#')[0]),
  }
}).then(d => d.json().then(j => {
  console.log('stuff fetched', j)
  wxStuff(j)
}))
