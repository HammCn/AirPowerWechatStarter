// const app = getApp<IAppOption>()

import { AirConfig } from '../../../airpower/config/AirConfig'
import { AirRouter } from '../../../airpower/helper/AirRouter'
import { UserEntity } from '../../../model/role/UserEntity'
import { UserService } from '../../../model/user/UserService'

Page({
  data: {
    account: '',
    password: '',
  },
  onShow() {
    wx.hideHomeButton()
  },

  async onLogin() {
    const user = UserEntity.newInstance(this.data)
    const accessToken = await UserService.create('登录中').login(user)
    AirConfig.saveAccessToken(accessToken)
    AirRouter.back()
  },
})
