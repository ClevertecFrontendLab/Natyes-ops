import { confirmEmailResponse } from '@types/api/confirm-email';
import { RouteSchema } from '@types/routes';

import { authCredentials } from '../api/auth';
import { checkEmailCredentials } from '../api/check-email';
import { registrationCredentials } from '../api/registration';
import { AppShema } from '../app-shema';

export interface StateSchema {
    app: AppShema;
    router: RouteSchema;
    auth: authCredentials;
    registration: registrationCredentials;
    checkEmail: checkEmailCredentials;
    confirmEmail: confirmEmailResponse;
    changePassword: changePasswordResponse;
}
