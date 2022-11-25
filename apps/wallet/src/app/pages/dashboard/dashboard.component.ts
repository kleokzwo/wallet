import { Component } from "@angular/core";

@Component({
    selector: 'wallet-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
    public public_address: string = '1AJbsFZ64EpEfS5UAjAfcUG8pH8Jn3rn1F';
    public current_balance: string = '19.987.00';
}