import { Component, OnInit } from '@angular/core';

@Component({
 // selector: 'app-servers',
 selector: '.app-servers',
 templateUrl: './servers.component.html', // for file url
  //template: '<app-server></app-server><app-server></app-server>', // for inline code
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
