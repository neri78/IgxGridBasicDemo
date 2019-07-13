import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { employeesData } from './localData';
import { ApiServerService, Customer } from '../service/api-server.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-igxgrid1',
  templateUrl: './igxgrid1.component.html',
  styleUrls: ['./igxgrid1.component.scss']
})
export class IgxGrid1Component implements OnInit {
  public localData: any[];
  title = 'igxGrid1';
  subscription: Subscription;

  constructor(private apiServerService: ApiServerService) { }

  ngOnInit() {
    // コメントアウト
    // this.localData = employeesData;
    // APIServerを呼び出し、顧客データを取得
    this.subscription = this.apiServerService.getCustomers()
    .subscribe( (data: Customer[]) => {
      this.localData = data;
    });
  }

  ngOnDestory() {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
