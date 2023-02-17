import { Component, Input, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { IItem, IUser } from '../../../interfaces/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styleUrls: ['./barras.component.scss']
})
export class BarrasComponent {
  constructor(private usersService: UsersService) {

  }
  @Input() items:IItem[]= [];
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  loader :boolean  = false;
  user:IUser|any={};
  totalFollowers:number[]=[];
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {}
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartData<'bar'> ={
    labels: [],
    datasets: []
  }

  chartHovered(event: any) {
    //console.log(event);
  }
  chartClicked(event: any) {
    //console.log(event);
  }
  async getFollwers(usernames:string[]){
    await  this.usersService.getFollowers(usernames)
    .subscribe((res:IUser[])=>{
      console.log(res);
      this.totalFollowers = res.map((item:IUser)=>item.followers);
      this.barChartData.datasets = [
        { data: this.totalFollowers, label: 'Followres' }
      ];
      this.chart?.update();
      this.loader = false;
    })
  }
  //si cambia el valor de items se ejecuta esta funcion
  async ngOnChanges() {
    this.loader = true;
    const labels = this.items.map(item => item.login);
    this.barChartData.labels = labels;
    await this.getFollwers(labels);

  }
}
