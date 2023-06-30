import { Alias, FieldPrefix } from '../../airpower/decorator/Custom'
import { BaseEntity } from '../../base/BaseEntity'

@FieldPrefix('role_')
export class RoleEntity extends BaseEntity {
  @Alias('name') roleName!: string
}
