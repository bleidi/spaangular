import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'spa-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent  {

  onClick() : void {
    console.log('click')
  }

}
