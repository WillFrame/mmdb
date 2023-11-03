import {userApi} from '../../lib/api';
import {IUserDto} from '../../lib/types/dto/user';
import {FormValues} from './types';

const findUser = (users: IUserDto[], user: FormValues) => (
    users.find(({login, password}) => (
        login === user.login && password === user.password
    ))
);

export const authUser = async (values: FormValues) => {
    const users = await userApi.request();

    return findUser(users.data, values);
};
