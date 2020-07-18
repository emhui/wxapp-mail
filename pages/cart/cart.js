// pages/cart/cart.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedAll : false,
    sumPrice : 0
  },

  select: function(e) {
    let item = e.currentTarget.dataset.item;
    let index = e.currentTarget.dataset.index
    let selected = !item.selected
    this.data.cart[index].selected = selected
    this.setData({
      cart: this.data.cart
    })
    app.saveToCart(item.item, item.num, selected)
    this.computeSumPrice()
  },
  selectAll: function() {
    this.setData({
      selectedAll: !this.data.selectedAll
    })
    let data
    if (this.data.selectedAll) {
      this.data.cart.forEach(element => {
        element.selected = true
      });
    } else {
      this.data.cart.forEach(element => {
        element.selected = false
      });
    }
    this.setData({
      cart: this.data.cart
    })
    wx.setStorageSync('cart', this.data.cart)
    this.computeSumPrice()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.loadDataFromStorage()
  },
  loadDataFromStorage:function() {
    this.setData({
      cart: app.getCart()
    })
  },
  computeSumPrice: function() {
    this.clearSum()
    this.data.cart.forEach( e => {
      if (e.selected) {    
        let sum = this.data.sumPrice + e.num * e.item.price
        this.setData({
          sumPrice: Math.floor(sum * 100) / 100
        })
      }
    })
  },
  clearSum: function(){
    this.setData({
      sumPrice: 0
    })
  },
  sub: function(e) {
    let item = e.currentTarget.dataset.item;
    let index = e.currentTarget.dataset.index
    let selected = item.selected
    let num = parseInt(item.num)
    this.data.cart[index].num = (num - 1) > 1 ? num - 1 : 1
    this.setData({
      cart: this.data.cart
    })
    app.saveToCart(item.item, item.num, selected)
    this.computeSumPrice()
  },
  add: function(e) {
    let item = e.currentTarget.dataset.item;
    let index = e.currentTarget.dataset.index
    let selected = item.selected
    let num = parseInt(item.num)
    this.data.cart[index].num = num + 1 
    this.setData({
      cart: this.data.cart
    })
    app.saveToCart(item.item, item.num, selected)
    this.computeSumPrice()
  },
  delete: function(e) {
    let item = e.currentTarget.dataset.item;
    let index = e.currentTarget.dataset.index
    this.data.cart.splice(index, 1)
    this.setData({
      cart: this.data.cart
    })
    wx.setStorageSync('cart', this.data.cart)
    this.computeSumPrice()
  },
  navToDetail: function(e){
    var item = e.currentTarget.dataset.item
    // this.saveItem(item)
    console.log(item);
    
    app.saveItem(item.item)
    wx.navigateTo({
      url: '/pages/detail/detail',
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
    this.loadDataFromStorage()
    this.computeSumPrice()
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