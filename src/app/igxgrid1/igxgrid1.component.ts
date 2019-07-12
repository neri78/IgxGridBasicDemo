import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { employeesData } from './localData';


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

  ngOnDestory() {

  }
}
