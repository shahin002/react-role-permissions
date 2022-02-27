import * as Types from '../../Types';
import axios from "axios";
import {toast} from "react-toastify";

export const getUsersAction = () => async (dispatch) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({type: Types.USER_LIST, payload: data});

    await axios
        .get(`http://laravel07-starter.herokuapp.com/api/v1/user-list`)
        .then(async (res) => {
            const response = res.data;
            data.data = res.data.response.users;
            data.message = res.data.response.message;
            if (response.meta.status === 200) {
                data.status = true;
            } else {
                data.status = false;
            }
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({type: Types.USER_LIST, payload: data});
};