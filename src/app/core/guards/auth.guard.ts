import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';

export const authGuard: CanActivateFn = (route, state) => {
    return inject(AuthenticatorService).authStatus == "authenticated"
};
