import { UserEntity } from '../role/UserEntity'

export class RegisterDto extends UserEntity {
  code!: string
}
