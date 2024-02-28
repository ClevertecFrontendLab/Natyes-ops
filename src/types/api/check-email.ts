export interface checkEmailSchema {
    email: string;
}
export interface checkEmailCredentials {
    email: string;
    success: boolean;
    isLoading: boolean;
    error?: string | null;
}
