import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.scss'] // for urls
  styles: [`
  h3{
    color: dodgerblue;
  }
 ` ]
})
export class AppComponent {
  name = 'my app';
}
