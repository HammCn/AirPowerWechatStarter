import { BaseEntity } from '../../base/BaseEntity'
import { UserSexDictionary } from './UserSexDictionary'
import { RoleEntity } from '../role/RoleEntity'
import { UserSex } from './UserSex'
import { Model } from '../../airpower/decorator/Model'
import { Field } from '../../airpower/decorator/Field'

@Model({
  label: '用户',
})
export class UserEntity extends BaseEntity {
  /**
   * 账号
   */
  account!: string

  /**
   * 密码
   */
  password!: string

  /**
   * 昵称
   */
  nickName!: string

  /**
   * 签名
   */
  bio!: string

  /**
   * 头像
   */
  head!: string

  /**
   * 性别
   */
  @Field({
    dictionary: UserSexDictionary,
  }) sex!: UserSex

  /**
   * 角色信息
   */
  @Field({
    type: RoleEntity,
  }) role!: RoleEntity

  @Field({
    default: 2222,
  }) test!: number
}
