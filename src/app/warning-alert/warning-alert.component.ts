import { Component } from '@angular/core';

@Component({
        selector: 'app-warning-alert',
        template:'<p>This is warning, you are in danger!</p>',
        styles:[
            `p{
                background-color: mistyrose;
                padding: 20px;
                border: 1px solid red;
            }
            
            `
        ]
    })

export class WarningAlertComponent{

}