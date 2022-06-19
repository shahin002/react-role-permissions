// please bring all interfaces and type declaration here and export them

export interface LoginData {
    status: boolean;
    message?: string;
    isLoading?: boolean;
    access_token: string | null;
    userData: any | null;
}

// it might be wrong with the naming convention
export interface LogOutData {
    status: boolean;
    tokenData: null | string;
    userData: null | any;
}

