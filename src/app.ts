import { AirConfig } from './airpower/config/AirConfig'
import { UserEntity } from './model/entity/UserEntity'
import { AirDateTimeFormatter } from './airpower/enum/AirDateTimeFormatter'
import { AirRouter } from './airpower/helper/AirRouter'

App<IAppOption>({
  globalData: {},
  async onLaunch() {
    AirConfig.appKey = 'wechat-app'
    AirConfig.apiUrl = 'https://api.hamm.cn/'
    AirConfig.staticUrl = AirConfig.apiUrl
    AirConfig.defaultDateTimeFormatter = AirDateTimeFormatter.YYYY_MM_DD_HH_mm_ss

    AirConfig.login = () => {
      AirRouter.replace('common/login/index')
    }

    const json = {
      user_id: 1,
      user_account: 'Hamm',
      user_createTime: 123456789,
      user_role: {
        role_id: '1',
        role_name: '管理员',
      },
    }
    const user = UserEntity.fromJson(json)
    console.error(user)
    console.error(user.toJson())
  },
})
