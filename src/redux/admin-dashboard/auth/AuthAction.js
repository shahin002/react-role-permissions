import * as Types from '../../Types';
import axios from "axios";
import {toast} from "react-toastify";

export const loginSubmitAction = (postData) => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        access_token: null,
        userData: null
    };
    dispatch({type: Types.AUTH_LOGIN_CHECK, payload: data});

    await axios.post(`http://laravel07-starter.herokuapp.com/api/v1/sign-in`, postData)
        .then(async (res) => {
            const response = res.data;
            data.message = response.response.message;
            if (response.meta.status === 200) {
                data.status = true;
                data.access_token = response.response.token;

                // Store it to local storage
                localStorage.setItem('access_token', response.response.token);
                localStorage.setItem('refresh_token', response.response.refresh_token);

                // Fetch and get the user information and set to localstorage
                data.userData = await getProfileInformation(response.response.token);
                localStorage.setItem('userData', JSON.stringify(data.userData));
            } else {
                data.status = false;
            }
        })
        .catch((err) => {
            data.message = err.data;
        });
    if (data.status) {
        toast.success(data.message);
    } else {
        toast.error(data.message);
    }
    data.isLoading = false;
    dispatch({type: Types.AUTH_LOGIN_CHECK, payload: data});
};

async function getProfileInformation(token) {
    let userInfo = {};
    console.log(token)

    await axios.get(`http://laravel07-starter.herokuapp.com/api/v1/user-info`)
        .then((res) => {
            const response = res.data;
            if(response.meta.status === 200){
                userInfo = response.response.user;
            }
        })
        .catch((err) => {
            console.log('profile fetch err', err);
        });
    return userInfo;
}