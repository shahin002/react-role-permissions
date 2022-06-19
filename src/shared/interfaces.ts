// please bring all interfaces and type declaration here and export them

export interface LoginData {
    status: boolean;
    message?: string;
    isLoading?: boolean;
    access_token: string | null;
    userData: any | null;
}

