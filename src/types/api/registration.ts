export interface registrationSchema {
    email: string;
    password: string;
}

export interface registrationCredentials {
    data?: registrationSchema;
    success: boolean;
    isLoading: boolean;
    error?: string | null;
}
