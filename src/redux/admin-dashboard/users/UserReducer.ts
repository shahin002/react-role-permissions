import * as Types from "../../Types";

interface InitialState {
    userList: Array<string>,
    all_roles: Array<any>,
    all_permissions: Array<any>,
    isLoading: boolean,
    isFormSubmitting: boolean,

    userAddStatus: boolean,
    userAddMessage: string,

    userUpdateStatus: boolean,
    userUpdateMessage: string,

    userDeleteStatus: boolean,
    userDeleteMessage: string,

    userData: any,

}

// Initial state
const initialState: InitialState = {
    userList: [],
    all_roles: [],
    all_permissions: [],
    isLoading: false,
    isFormSubmitting: false,

    userAddStatus: false,
    userAddMessage: "",

    userUpdateStatus: false,
    userUpdateMessage: "",

    userDeleteStatus: false,
    userDeleteMessage: "",
    userData: {
        id: 0,
        name: '',
        email: '',
        password: '',
        roles: [],
        permissions: []
    }
};

const UserReducer = (state = initialState, action: any) => {
    const newState = { ...state };

    switch (action.type) {
        case Types.USER_LIST:
            return {
                ...state,
                userList: action.payload.data,
                isLoading: false
            };

        case Types.USER_CREATE:
            return {
                ...state,
                userAddStatus: action.payload.status,
                userAddMessage: action.payload.message,
                isLoading: action.payload.isLoading,
                isFormSubmitting: action.payload.isLoading,
            };

        case Types.USER_SHOW:
            return {
                ...state,
                userData: action.payload.data,
                isLoading: action.payload.isLoading
            };

        case Types.CHANGE_USER_INPUT:
            const userData = { ...state.userData };
            userData[action.payload.name] = action.payload.value;
            return {
                ...state,
                userData
            };

        case Types.EMPTY_USER_INFO:
            return {
                ...state,
                userData: {
                    id: 0,
                    name: '',
                    email: '',
                    password: '',
                    roles: [],
                    permissions: []
                },
                userAddMessage: null,
                userUpdateMessage: null,
                userDeleteMessage: null,
            };

        case Types.USER_DELETE:
            const deletedID = action.payload.data;
            const updatedUserList = state.userList.filter((x: any) => x.id !== deletedID);
            return {
                ...state,
                userList: updatedUserList,
                userDeleteStatus: action.payload.status,
                userDeleteMessage: action.payload.message,
            };

        case Types.USER_UPDATE:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                userData: action.payload.data,
                userUpdateStatus: action.payload.status,
                userUpdateMessage: action.payload.message,
            };

        case Types.GET_USER_ROLES:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                all_roles: action.payload.all_roles,
            };

        case Types.GET_USER_PERMISSIONS:
            return {
                ...state,
                isLoading: action.payload.isLoading,
                all_permissions: action.payload.all_permissions,
            };

        default:
            break;
    }
    return newState;
};

export default UserReducer;