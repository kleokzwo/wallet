import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'wallet-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  public title = 'wallet';

  public constructor(private readonly route: ActivatedRoute){}

  public async ngOnInit(): Promise<void> {

  }

}
