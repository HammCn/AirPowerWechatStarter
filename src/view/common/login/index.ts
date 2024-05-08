// const app = getApp<IAppOption>()

import { AirApi } from '../../../airpower/config/AirApi'
import { AirConfig } from '../../../airpower/config/AirConfig'
import { AirRouter } from '../../../airpower/helper/AirRouter'
import { UserEntity } from '../../../model/user/UserEntity'
import { UserService } from '../../../model/user/UserService'

Page({
  data: {
    account: '',
    password: '',
  },
  onShow() {
    AirApi.hideHomeButton()
  },

  async onLogin() {
    const user = UserEntity.newInstance(this.data)
    const accessToken = await UserService.create('登录中').login(user)
    AirConfig.saveAccessToken(accessToken)
    AirRouter.back()
  },
})
