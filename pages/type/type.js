const app = getApp()
Page({
  data: {
    vtabs: [],
    activeTab: 0,
  },

  onLoad() {
    this.loadData()
  },
  loadData: function() {
    let items = app.globalData.new_list
    const vtabs = Array.from(new Set(items.map(e => e.type))).map( e => ({title: e}))
    this.setData({vtabs})
    this.setData({items})
  },
  detail: function(e){
    var item = e.currentTarget.dataset.item
    // this.saveItem(item)
    app.saveItem(item)
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  onTabCLick(e) {
    const index = e.detail.index
    console.log('tabClick', index)
  },

  onChange(e) {
    const index = e.detail.index
    console.log('change', index)
  }

})
