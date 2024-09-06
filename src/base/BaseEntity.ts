import { AirEntity } from '../airpower/base/AirEntity'

export class BaseEntity extends AirEntity {
  /**
   * 创建时间
   */
  createTime!: number

  /**
   * 修改时间
   */
  updateTime!: number
}
