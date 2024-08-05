import { AirConfig } from './airpower/config/AirConfig'
import { AirRouter } from './airpower/helper/AirRouter'

App<IAppOption>({
  globalData: {},
  async onLaunch() {
    AirConfig.appKey = 'wechat-app'
    AirConfig.apiUrl = 'https://api.hamm.cn/'
    AirConfig.staticUrl = AirConfig.apiUrl

    AirConfig.login = () => {
      AirRouter.replace('common/login/index')
    }
    
  },
})
