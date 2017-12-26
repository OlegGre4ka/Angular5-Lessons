import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Our Angular 5!';

  users = [
    {name : 'Card1'},
    {name : 'Card2'},
    {name : 'Card3'},
    {name : 'Card4'},   
  ]
}
