Component({
  data: {
    selected: 0,
    color: "#666",
    selectedColor: "#48af6e",
    list: [{
      pagePath: "/view/tabbar/index",
      iconPath: "image/tabbar-home.png",
      selectedIconPath: "image/tabbar-home-active.png",
      text: "首页"
    }, {
      pagePath: "/view/tabbar/index2",
      iconPath: "image/tabbar-mine.png",
      selectedIconPath: "image/tabbar-mine-active.png",
      text: "我的"
    }]
  },
  attached() {
  },
  methods: {
    switchTab(e: any) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})