import { AbstractBaseService } from '../../base/AbstractBaseService'
import { RegisterDto } from './RegisterDto'
import { ResetPasswordDto } from './ResetPasswordDto'
import { UserEntity } from './UserEntity'

/**
 * 用户相关接口
 */
export class UserService extends AbstractBaseService<UserEntity> {
  baseUrl = 'user'

  entityClass = UserEntity

  /**
   * 账号密码登录
   * @param user 用户
   */
  async login(user: UserEntity): Promise<string> {
    const json = await this.api('login').post(user)
    return json as unknown as string
  }

  /**
   * 修改我的个人信息
   * @param user 用户信息
   */
  async updateMyInfo(user: UserEntity): Promise<void> {
    await this.api('updateMyInfo').post(user)
  }

  /**
   * 注册账号
   * @param dto 用户信息
   */
  async register(dto: RegisterDto): Promise<void> {
    await this.api('reg').post(dto)
  }

  /**
   * 重置密码
   * @param dto 用户信息
   */
  async resetPassword(dto: ResetPasswordDto): Promise<void> {
    await this.api('resetPassword').post(dto)
  }

  /**
   * 获取我的个人信息
   * @param errorCallback 是否回调错误
   */
  async getMyInfo(errorCallback = false): Promise<UserEntity> {
    const http = this.api('getMyInfo')
    if (errorCallback) {
      http.callbackError()
    }
    const json = await http.post()
    return UserEntity.fromJson(json)
  }
}
