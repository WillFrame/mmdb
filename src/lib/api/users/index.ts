import {apiConfigs} from '../../consts/api-routes';
import {IUserDto} from '../../types/dto/user';

class Users {
    request = () => apiConfigs.users.get<IUserDto[]>('');
}

export const apiInstance = new Users;
