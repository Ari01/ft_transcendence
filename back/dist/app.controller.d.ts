import { AuthService } from './auth/auth.service';
export declare class AppController {
    private authService;
    constructor(authService: AuthService);
    login(): void;
    redirect(res: any): void;
    getProfile(req: any): any;
}
