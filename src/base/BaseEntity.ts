import { AirEntity } from '../airpower/base/AirEntity'
import { ToJson, ToModel } from '../airpower/decorator/Custom'
import { AirDateTime } from '../airpower/helper/AirDateTime'

export class BaseEntity extends AirEntity {
  /**
   * 创建时间
   */
  @ToModel((val: number) => AirDateTime.formatFromSecond(val))
  @ToJson(() => undefined) createTime!: number

  /**
   * 修改时间
   */
  @ToJson(() => undefined) updateTime!: number
}
