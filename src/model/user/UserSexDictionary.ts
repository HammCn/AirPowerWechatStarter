import { AirDictionaryArray } from '../../airpower/model/extend/AirDictionaryArray'
import { UserSex } from './UserSex'

/**
 * 用户性别字典
 */
export const UserSexDictionary = AirDictionaryArray.create([
  {
    key: UserSex.FEMALE,
    label: '女',
  },
  {
    key: UserSex.MALE,
    label: '男',
  },
])
