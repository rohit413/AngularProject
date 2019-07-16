import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-servers',
 //selector: '[app-servers]', for <div app-server></div>
 //selector: '.app-servers', // for <div class='app-server'></div>
 //template: '<app-server></app-server><app-server></app-server>', // for inline code
  templateUrl: './servers.component.html', // for file url
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
    }

  ngOnInit() {
  }

}
