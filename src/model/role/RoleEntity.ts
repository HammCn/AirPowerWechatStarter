import { Field } from '../../airpower/decorator/Field'
import { Model } from '../../airpower/decorator/Model'
import { BaseEntity } from '../../base/BaseEntity'

@Model({
  fieldPrefix: 'role_',
})
export class RoleEntity extends BaseEntity {
  @Field({
    label: 'name',
  }) roleName!: string
}
