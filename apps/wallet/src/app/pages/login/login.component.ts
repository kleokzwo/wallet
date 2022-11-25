import { Component } from "@angular/core";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import Swal from 'sweetalert2';
import { LoginComponentConfig } from "./login.component.config";
import exportFromJSON from 'export-from-json'

@Component({
    selector: 'wallet-login',
    templateUrl: './login.component.html',
    providers: [LoginComponentConfig]
})
export class LoginComponent {
    public downloadFile: SafeUrl | undefined;
    public constructor(
        private loginConfig: LoginComponentConfig
        ) {}

    public alertConfirmation() {
        const text = this.loginConfig.newWallet();
        Swal.fire({
            title: 'Wallet has been created!',
            html: text,
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Download file',
        }).then((result) => {
            if(result.isConfirmed) {
                const data = [this.loginConfig.dummyNewWallet()]
                const fileName = 'btc2_save_me_in_the_savety_place'
                const exportType = 'json'
                exportFromJSON({ data, fileName, exportType })
            }
        });
    }

}