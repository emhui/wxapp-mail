// pages/detail/detail.js
//获取应用实例
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    tabs: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //var item = this.getItem()
    let item = app.getItem()
    console.log(item);
    this.initTabs();
    this.setData({
      item: item,
      carNum:0
    })
    wx.setNavigationBarTitle({
      title: item.name,
    })
  },
  getItem: function(){
    return wx.getStorageSync('item')
  },
  min:function() {
    let num = this.data.num - 1
    this.setData({
      num: num < 1 ? 1 : num
    })
  },
  add:function() {
    this.setData({
      num: this.data.num+1
    })
  },
  initTabs: function() {
    const titles = ['商品详情', '产品参数', '售后保障']
    const tabs = titles.map(item => ({title: item}))
    this.setData({tabs})
  },
  addToCart:function() {
    this.setData({
      carNum: this.data.carNum + this.data.num
    })
  },
  goToCartPage:function() {
    if (this.data.carNum) {
      app.saveToCart(this.data.item, this.data.carNum)
    }
    wx.switchTab({
      url:  "/pages/cart/cart"
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    if (this.data.carNum) {
      app.saveToCart(this.data.item, this.data.carNum)
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})