import { UserEntity } from "./UserEntity";


export class RegisterDto extends UserEntity {
  code!: string
}
