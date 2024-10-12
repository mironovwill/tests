import { UserRoles } from '../enums/UserRoles';

export interface UserInfo {
  firstName: string;
  lastName: string;
  middleName?: string;
  email: string;
  password: string;
  passwordConf: string;
  role: UserRoles;
  department?: string;
  function?: string;
  position?: string;
  location?: string;
  company?: string;
  manager?: string;
}
