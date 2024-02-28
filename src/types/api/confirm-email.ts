export interface confirmEmailSchema {
    email: string;
    code: string;
}
export interface confirmEmailResponse {
    data?: confirmEmailSchema | null;
    success: boolean;
    isLoading: boolean;
    error?: string | null;
}
