import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


@Injectable({providedIn: 'root'})
export class LoginService {
    public constructor(private client: HttpClient) {}

    /**
     * @Dev
     * Suggestion before user can accest their Dashboard wallet
     * should past the 2FA authentication.
     * therefor needs to implement the 2FA.
     */

}