import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgxGrid1Component } from './igxgrid1.component';
import { IgxGridModule } from 'igniteui-angular';

describe('IgxGrid1Component', () => {
  let component: IgxGrid1Component;
  let fixture: ComponentFixture<IgxGrid1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgxGrid1Component ],
      imports: [ IgxGridModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgxGrid1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
