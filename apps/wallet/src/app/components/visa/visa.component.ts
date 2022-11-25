import { Component, Input } from "@angular/core";

@Component({
    selector: 'wallet-visa',
    templateUrl: './visa.component.html'
})

export class VisaComponent {
    @Input() public address: string = '';
    @Input() public balance: string = '';

}