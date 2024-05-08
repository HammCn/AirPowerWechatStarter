import { AirApi } from "../../airpower/config/AirApi"
import { AirHttp } from "../../airpower/helper/AirHttp"
import { IJson } from "../../airpower/interface/IJson"
import { UserEntity } from "../../model/user/UserEntity"
import { UserService } from "../../model/user/UserService"

Page({
  data: {
    currentUserInfo: new UserEntity(),
    tabbarIndex: 0,
    tabbar: {
      color: "#666",
      selectedColor: "#48af6e",
      list: [{
        pagePath: "/view/tabbar/index",
        iconPath: "/assets/images/tabbar/tabbar-home.png",
        selectedIconPath: "/assets/images/tabbar/tabbar-home-active.png",
        text: "首页"
      }, {
        pagePath: "/view/tabbar/index2",
        iconPath: "/assets/images/tabbar/tabbar-mine.png",
        selectedIconPath: "/assets/images/tabbar/tabbar-mine-active.png",
        text: "我的"
      }]
    }
  },
  onPullDownRefresh() {
    AirApi.stopPullDownRefresh()
  },
  onGoToProfile() {
    AirApi.navigateTo('../common/profile/index')
  },
  changeTab(e: IJson) {
    console.log("tab index " + e.detail)
    this.setData({
      tabbarIndex: e.detail
    })
  },
  async onShow() {
    const user = new UserEntity(1)
    console.log(user);
    const json = await new AirHttp("user/getUserInfo").post(user)
    console.log(json);
    console.log("user", UserEntity.fromJson(json));


    setTimeout(async () => {
      try {
        const user = await UserService.create().getMyInfo(true)
        this.setData({
          currentUserInfo: user,
        })
      } catch (e) {
        const user = new UserEntity()
        user.nickName = '游客'
        this.setData({
          currentUserInfo: user,
        })
      }
    }, 10)
  },
  async onScanQrcode() {
    const res = await wx.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode'],
    })
    console.log(res.result)
    const dialog = await wx.showModal({
      title: '扫码结果',
      content: res.result,
      confirmText: '复制结果',
    })
    if (dialog.confirm) {
      AirApi.setClipboardData(res.result)
    }
  },
})
