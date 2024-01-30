Page({
  data: {
  },
  onPullDownRefresh() {
    wx.stopPullDownRefresh()
  },
  onShow() {
    this.getTabBar().setData({
      selected: 1
    })
  },
})
