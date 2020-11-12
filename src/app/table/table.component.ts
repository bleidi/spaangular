import { Component } from '@angular/core'

@Component({
  selector: 'spa-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  {

  items: string[] = ['Teste 1', 'Teste 2', 'Teste 3']

}
