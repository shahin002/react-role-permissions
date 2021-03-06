import * as Types from '../../Types';
import axios from "axios";
import { toast } from "react-toastify";
import { formatMultipleOptionsData } from "../../../services/DataFormatter";



interface InsideData {
    name: string,
    email: string,
    old_roles: Array<any>,
    roles: any[] | never[],
    permissions: Array<string>[]
}

interface Data {
    status: boolean;
    message: string;
    isLoading: boolean,
    data: InsideData;
}


export const getUsersAction = () => async (dispatch: any) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
        data: [],
    };

    dispatch({ type: Types.USER_LIST, payload: data });

    await axios
        .get(`http://laravel07-starter.herokuapp.com/api/v1/user-list`)
        .then(async (res) => {
            const response = res.data;
            data.data = res.data.response.users;
            data.message = res.data.response.message;
            data.status = response.meta.status === 200;
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({ type: Types.USER_LIST, payload: data });
};

export const getUserDetailAction = (id: any) => async (dispatch: any) => {
    let data: Data = {
        status: false,
        message: "",
        isLoading: true,
        data: {
            name: '',
            email: '',
            old_roles: [],
            roles: [],
            permissions: []
        }
    };

    dispatch({ type: Types.USER_SHOW, payload: data });

    await axios
        .get(`http://laravel07-starter.herokuapp.com/api/v1/user-info/${id}`)
        .then((res) => {
            const { response, meta: { status } } = res.data;
            data.data = response.user;
            data.data.old_roles = response.user.roles;
            data.data.roles = formatMultipleOptionsData(response.user.roles);
            data.data.permissions = response.user.extra_permissions;
            data.message = response.message;
            data.status = status === 200;
        })
        .catch((err) => {
            data.message = err.data;
        });

    data.isLoading = false;
    dispatch({ type: Types.USER_SHOW, payload: data });
};

export const handleChangeUserInput = (name: string, value:any) => (dispatch:any) => {
    let data = {
        name: name,
        value: value,
    }
    dispatch({ type: Types.CHANGE_USER_INPUT, payload: data });
};

export const storeUserAction = (userData: any) => async (dispatch: any) => {
    let data = {
        status: false,
        message: "",
        isLoading: true,
    };

    dispatch({ type: Types.USER_CREATE, payload: data });

    await axios
        .post(
            `http://laravel07-starter.herokuapp.com/api/v1/administrator/users/create`,
            userData
        )
        .then(async (res) => {
            const { response, meta } = res.data;
            data.message = response.message;
            if (meta.status === 200) {
                data.status = true;
                toast.success(data.message);
            } else {
                data.status = false;
                toast.error(data.message);
            }
        })
        .catch((err) => {
            data.message = err.data;
            toast.error(data.message);
        });

    data.isLoading = false;
    dispatch({ type: Types.USER_CREATE, payload: data });
};

export const getRolesAction = () => async (dispatch: any) => {
    let data = {
        isLoading: true,
        all_roles: []
    };
    dispatch({ type: Types.GET_USER_ROLES, payload: data });
    await axios
        .get(`http://laravel07-starter.herokuapp.com/api/v1/roles-list`)
        .then(async (res) => {
            const response = res.data;
            data.all_roles = response.response.roles;
        })
        .catch((err) => {
            console.log(err.data);
        });
    data.isLoading = false;
    dispatch({ type: Types.GET_USER_ROLES, payload: data });
};

export const getPermissionsAction = () => async (dispatch: any) => {
    let data = {
        isLoading: true,
        all_permissions: []
    };
    dispatch({ type: Types.GET_USER_PERMISSIONS, payload: data });
    await axios
        .get(`http://laravel07-starter.herokuapp.com/api/v1/permissions-list`)
        .then(async (res) => {
            const response = res.data;
            data.all_permissions = response.response.permissions;
        })
        .catch((err) => {
            console.log(err.data);
        });
    data.isLoading = false;
    dispatch({ type: Types.GET_USER_PERMISSIONS, payload: data });
};

export const emptyUserInfo = () => (dispatch: any) => {
    dispatch({ type: Types.EMPTY_USER_INFO, payload: null });
};

