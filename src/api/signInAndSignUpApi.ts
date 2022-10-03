import { BASE_URL } from 'config';
import { UserDataType } from 'types/db/user';
import axiosInstance from './axiosInstance';

class signInAndSignUpApi extends axiosInstance {
    public async postSignInUser(user: UserDataType) {
        const { data } = await this.axios.post('auth/signin', user);
        return data;
    }
    public async postSignUpUser(user: UserDataType) {
        const { data } = await this.axios.post('auth/signup', user);
        return data;
    }
}

export default new signInAndSignUpApi(BASE_URL);
