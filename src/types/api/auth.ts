export interface authSchema {
    email: string;
    password: string;
    remember?: boolean;
}

export interface authCredentials {
    accessToken: string;
    isLoading: boolean;
    error?: string | null;
}

export interface registrationCredentials {
    data?: object;
    isLoading: boolean;
    error?: string | null;
}
