import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';
import { NgChartsModule } from 'ng2-charts';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { BarrasComponent } from './graficas/barras/barras.component';

@NgModule({
  declarations: [
    UserComponent,
    HomeComponent,
    MainComponent,
    BarrasComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FontAwesomeModule,
    FormsModule,
    PaginationModule,
    ModalModule,
    NgChartsModule
  ]
})
export class PagesModule { }
