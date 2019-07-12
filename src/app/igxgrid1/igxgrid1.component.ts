import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { employeesData } from './localData';
import { IgxColumnComponent } from 'igniteui-angular';

@Component({
  selector: 'app-igxgrid1',
  templateUrl: './igxgrid1.component.html',
  styleUrls: ['./igxgrid1.component.scss']
})
export class IgxGrid1Component implements OnInit {
  public localData: any[];
  title = 'igxGrid1';
  constructor() { }

  ngOnInit() {
    this.localData = employeesData;
  }

  public onColumnInit(column: IgxColumnComponent) {
    if (column.field === 'RegistererDate') {
      column.formatter = (date => date.toLocaleDateString());
    }
  }
}
