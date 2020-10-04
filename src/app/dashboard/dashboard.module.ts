//import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing/dashboard-routing.module';
import { BarChartComponent } from '../shared/bar-chart/bar-chart.component';
import { LineChartComponent } from '../shared/line-chart/line-chart.component';
import {ChartsModule} from 'ng2-charts';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MatProgressBarModule} from '@angular/material/progress-bar';


@NgModule({
  imports: [
    DashboardRoutingModule, ChartsModule, MatProgressBarModule
  ],
  declarations: [ DashboardComponent, BarChartComponent, LineChartComponent  ],
  providers: [
      BarChartComponent, LineChartComponent
  ],
  schemas: [ 
    CUSTOM_ELEMENTS_SCHEMA
  ]
})

// @NgModule({
//   imports: [
//     MatProgressBarModule
//   ],
//   schemas: [ 
//     CUSTOM_ELEMENTS_SCHEMA
//   ]
// })
export class DashboardModule { }
