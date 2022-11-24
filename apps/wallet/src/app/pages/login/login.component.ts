import { Component } from "@angular/core";
import Swal from 'sweetalert2';

@Component({
    selector: 'wallet-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public constructor() {}

    public alertConfirmation() {
        const text: string = `
        <table class="min-w-full text-sm">
            <tr>
                <td class="w-1/5 text-left bg-slate-200 p-2">logginKey: </td>
                <td class="w-1/1 text-left bg-slate-200 p-2">adf13nD&%34523413409dfgsf</td>
            </tr>
            <tr>
                <td class="w-1/5 text-left p-2">privateKey:</td>
                <td class="w-1/1 text-left p-2">DSjgasdhG9134bd84blalsd61445hjvadf</td>
            </tr>
            <tr>
                <td class="w-1/5 text-left bg-slate-200 p-2">publicKey </td>
                <td class="w-1/1 text-left bg-slate-200 p-2">0x8761349875346078410384760871324</td>
            </tr>
            <tr>
                <td class="w-1/5 text-left p-2">2FaKey: </td>
                <td class="w-1/1 text-left p-2">ASDFLBJ086408</td>
            </tr>
          </table>`;

        Swal.fire({
            title: 'Wallet has been created!',
            html: text,
            icon: 'success',
            showCancelButton: false,
            confirmButtonText: 'Download file',
        });
    }

}