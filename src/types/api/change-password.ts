export interface changePasswordSchema {
    password: string;
    confirmPassword: string;
}
export interface changePasswordResponse {
    success: boolean;
    isLoading: boolean;
    error?: string | null;
}
