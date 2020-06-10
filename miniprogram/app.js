//app.js
App({
  onLaunch: function () {
   //展示本地存储能力
   this.globalData.curLang = wx.getStorageSync('curLang') || this.globalData.langList[0]
  },
  globalData : {
    curLang:{},
    langList:[{
      'chs':'中文',
      "lang":'zh',
      "index":0
    },
    {
      'chs':'英语',
      "lang":'en',
      "index":1
    },
    {
      'chs':'日语',
      "lang":'jp',
      "index":2
    },
    {
      'chs':'韩语',
      "lang":'kor',
      "index":3
    },
    {
      'chs':'法语',
      "lang":'fra',
      "index":4
    },
    {
      'chs':'德语',
      "lang":'de',
      "index":5
    },
    {
      'chs':'俄语',
      "lang":'ru',
      "index":6
    },
    {
      'chs': '波兰语',
      "lang": 'pl',
      "index": 7
    }
  ]
  }
})
