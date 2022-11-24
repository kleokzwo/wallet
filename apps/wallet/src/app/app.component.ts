import { Component } from '@angular/core';

@Component({
  selector: 'wallet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = 'wallet';
  public code = `
  {
    logginKey: 'adf13nD&%34523413409dfgsf',
    privateKey: 'DSjgasdhG9134bd84blalsd61445hjvadf'
    publicKey: '0x8761349875346078410384760871324',
    2FaKey: 'ASDFLBJ086408'
  }
`
  public show_modal = false;
  public showModal() {
    if (this.show_modal) {
      //stop screen scrolling
      document.getElementsByTagName("html")[0].classList.remove('overflow-y-hidden');
      this.show_modal = false;
    } else {
      document.getElementsByTagName("html")[0].classList.add('overflow-y-hidden');
      this.show_modal = true;
    }
  }
}
